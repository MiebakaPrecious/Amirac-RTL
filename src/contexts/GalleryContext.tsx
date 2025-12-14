import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface GalleryItem {
  id: string;
  url: string;
  filename: string;
  service_group: string;
  description: string | null;
}

interface GalleryContextType {
  items: GalleryItem[];
  loading: boolean;
  error: string | null;
  getRandomImages: (count: number) => GalleryItem[];
  refetch: () => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// No placeholder images - will fetch from Supabase

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
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
        // Keep placeholder images on error
        return;
      }

      if (data && data.length > 0) {
        setItems(data);
      }
      // If no data, keep placeholders
    } catch (err) {
      console.error('Gallery fetch error:', err);
      setError('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const getRandomImages = (count: number): GalleryItem[] => {
    // Filter out hero images from gallery display
    const galleryItems = items.filter(item => item.service_group !== 'hero');
    const shuffled = [...galleryItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  return (
    <GalleryContext.Provider value={{ items, loading, error, getRandomImages, refetch: fetchGallery }}>
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
