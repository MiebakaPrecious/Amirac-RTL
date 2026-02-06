import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { staticGalleryImages, GalleryImage as StaticGalleryImage, serviceGroups, detectServiceGroup } from '@/utils/galleryData';

export interface GalleryItem {
  id: string;
  url: string;
  filename: string;
  service_group: string;
  description: string | null;
}

// Unified gallery image type for components
export interface UnifiedGalleryImage {
  id: string;
  src: string;
  group: string;
  title: string;
  description: string;
}

interface GalleryContextType {
  items: GalleryItem[];
  allImages: UnifiedGalleryImage[];
  loading: boolean;
  error: string | null;
  getRandomImages: (count: number) => UnifiedGalleryImage[];
  getImagesByGroup: () => Record<string, UnifiedGalleryImage[]>;
  refetch: () => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// Helper to add Supabase image transformation params for optimization
const optimizeSupabaseImageUrl = (url: string, width: number = 800): string => {
  // Only transform Supabase storage URLs
  if (!url.includes('supabase.co/storage/v1/object/public/')) {
    return url;
  }
  
  // Convert public URL to render/image URL for transformations
  // From: .../storage/v1/object/public/bucket/file
  // To: .../storage/v1/render/image/public/bucket/file?width=X&quality=80
  const transformedUrl = url.replace(
    '/storage/v1/object/public/',
    '/storage/v1/render/image/public/'
  );
  
  return `${transformedUrl}?width=${width}&quality=80`;
};

// Convert Supabase items to unified format with optimized URLs
const convertSupabaseToUnified = (items: GalleryItem[]): UnifiedGalleryImage[] => {
  return items.map(item => ({
    id: `supabase-${item.id}`,
    src: optimizeSupabaseImageUrl(item.url, 800),
    group: item.service_group,
    title: formatGroupTitle(item.service_group),
    description: item.description || `Professional ${formatGroupTitle(item.service_group).toLowerCase()} services.`,
  }));
};

// Convert static images to unified format
const convertStaticToUnified = (images: StaticGalleryImage[]): UnifiedGalleryImage[] => {
  return images.map(img => ({
    id: img.id,
    src: img.src,
    group: img.group,
    title: img.title,
    description: img.description,
  }));
};

// Format group slug to title using serviceGroups
const formatGroupTitle = (slug: string): string => {
  const group = serviceGroups.find(g => g.slug === slug);
  return group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [allImages, setAllImages] = useState<UnifiedGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      
      // First try to get images from the gallery table
      const { data: tableData, error: tableError } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (tableError) {
        console.error('Error fetching gallery table:', tableError);
      }

      // Also fetch directly from storage bucket
      const { data: storageFiles, error: storageError } = await supabase
        .storage
        .from('gallery')
        .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });

      if (storageError) {
        console.error('Error fetching storage files:', storageError);
      }

      // Convert storage files to gallery items (if not already in table)
      const storageImages: GalleryItem[] = [];
      const tableUrls = new Set((tableData || []).map(item => item.url));
      
      if (storageFiles && storageFiles.length > 0) {
        for (const file of storageFiles) {
          if (file.name && !file.name.startsWith('.')) {
            const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(file.name);
            
            // Only add if not already in table
            if (!tableUrls.has(urlData.publicUrl)) {
              const serviceGroup = detectServiceGroup(file.name);
              storageImages.push({
                id: `storage-${file.id || file.name}`,
                url: urlData.publicUrl, // Keep original URL, optimization happens in convertSupabaseToUnified
                filename: file.name,
                service_group: serviceGroup,
                description: null,
              });
            }
          }
        }
      }

      // Combine table data and storage files
      const allSupabaseItems = [...(tableData || []), ...storageImages];
      setItems(allSupabaseItems);

      // Merge with static images
      const supabaseImages = convertSupabaseToUnified(allSupabaseItems);
      const staticImages = convertStaticToUnified(staticGalleryImages);
      
      // Combine all images - supabase first, then static
      setAllImages([...supabaseImages, ...staticImages]);
    } catch (err) {
      console.error('Gallery fetch error:', err);
      setError('Failed to load gallery');
      // Fallback to static images
      setAllImages(convertStaticToUnified(staticGalleryImages));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const getRandomImages = useCallback((count: number): UnifiedGalleryImage[] => {
    // Filter out hero images
    const galleryItems = allImages.filter(item => item.group !== 'hero');
    const shuffled = [...galleryItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }, [allImages]);

  const getImagesByGroup = useCallback((): Record<string, UnifiedGalleryImage[]> => {
    // Filter out hero images
    const galleryItems = allImages.filter(item => item.group !== 'hero');
    return galleryItems.reduce((acc, image) => {
      if (!acc[image.group]) {
        acc[image.group] = [];
      }
      acc[image.group].push(image);
      return acc;
    }, {} as Record<string, UnifiedGalleryImage[]>);
  }, [allImages]);

  const contextValue = useMemo(() => ({
    items,
    allImages,
    loading,
    error,
    getRandomImages,
    getImagesByGroup,
    refetch: fetchGallery
  }), [items, allImages, loading, error, getRandomImages, getImagesByGroup]);

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
