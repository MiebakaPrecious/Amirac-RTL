import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
      const { data, error: fetchError } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Error fetching gallery:', fetchError);
        // Use only static images on error
        setAllImages(convertStaticToUnified(staticGalleryImages));
        return;
      }

      setItems(data || []);

      // Merge Supabase images with static images
      const supabaseImages = convertSupabaseToUnified(data || []);
      const staticImages = convertStaticToUnified(staticGalleryImages);
      
      // Combine both sources, avoiding duplicates by checking src
      const supabaseSrcs = new Set(supabaseImages.map(img => img.src));
      const uniqueStaticImages = staticImages.filter(img => !supabaseSrcs.has(img.src));
      
      setAllImages([...supabaseImages, ...uniqueStaticImages]);
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

  const getRandomImages = (count: number): UnifiedGalleryImage[] => {
    // Filter out hero images
    const galleryItems = allImages.filter(item => item.group !== 'hero');
    const shuffled = [...galleryItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  const getImagesByGroup = (): Record<string, UnifiedGalleryImage[]> => {
    // Filter out hero images
    const galleryItems = allImages.filter(item => item.group !== 'hero');
    return galleryItems.reduce((acc, image) => {
      if (!acc[image.group]) {
        acc[image.group] = [];
      }
      acc[image.group].push(image);
      return acc;
    }, {} as Record<string, UnifiedGalleryImage[]>);
  };

  return (
    <GalleryContext.Provider value={{ items, allImages, loading, error, getRandomImages, getImagesByGroup, refetch: fetchGallery }}>
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
