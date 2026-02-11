import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { staticGalleryImages, GalleryImage as StaticGalleryImage, serviceGroups } from '@/utils/galleryData';

// Unified gallery image type for components
export interface UnifiedGalleryImage {
  id: string;
  src: string;
  group: string;
  title: string;
  description: string;
}

interface GalleryContextType {
  allImages: UnifiedGalleryImage[];
  loading: boolean;
  error: string | null;
  getRandomImages: (count: number) => UnifiedGalleryImage[];
  getImagesByGroup: () => Record<string, UnifiedGalleryImage[]>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

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

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allImages] = useState<UnifiedGalleryImage[]>(() => convertStaticToUnified(staticGalleryImages));

  const getRandomImages = useCallback((count: number): UnifiedGalleryImage[] => {
    const galleryItems = allImages.filter(item => item.group !== 'hero');
    const shuffled = [...galleryItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }, [allImages]);

  const getImagesByGroup = useCallback((): Record<string, UnifiedGalleryImage[]> => {
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
    allImages,
    loading: false,
    error: null,
    getRandomImages,
    getImagesByGroup,
  }), [allImages, getRandomImages, getImagesByGroup]);

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
