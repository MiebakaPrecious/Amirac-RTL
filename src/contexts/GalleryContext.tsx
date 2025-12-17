import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { staticGalleryImages, GalleryImage as StaticGalleryImage } from '@/utils/galleryData';

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

// Convert Supabase items to unified format
const convertSupabaseToUnified = (items: GalleryItem[]): UnifiedGalleryImage[] => {
  return items.map(item => ({
    id: `supabase-${item.id}`,
    src: item.url,
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

// Format group slug to title
const formatGroupTitle = (slug: string): string => {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
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
              const serviceGroup = detectServiceGroupFromFilename(file.name);
              storageImages.push({
                id: `storage-${file.id || file.name}`,
                url: urlData.publicUrl,
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

  // Detect service group from filename
  const detectServiceGroupFromFilename = (filename: string): string => {
    const lower = filename.toLowerCase();
    if (lower.includes('valve') || lower.includes('pump') || lower.includes('compressor')) {
      return 'industrial-valves-pumps-compressors';
    }
    if (lower.includes('rotating') || lower.includes('static')) {
      return 'rotating-static-equipment';
    }
    if (lower.includes('heavy') || lower.includes('machinery')) {
      return 'heavy-duty-machinery';
    }
    if (lower.includes('marine') || lower.includes('ship')) {
      return 'marine-machinery';
    }
    if (lower.includes('weld')) {
      return 'welding-training';
    }
    if (lower.includes('forklift')) {
      return 'forklift-training';
    }
    if (lower.includes('electric')) {
      return 'electrical-services';
    }
    if (lower.includes('hero')) {
      return 'hero';
    }
    return 'general';
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
