import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGallery, UnifiedGalleryImage } from '@/contexts/GalleryContext';
import FlipCard from './Home/FlipCard';

const GalleryPreview = () => {
  const { getImagesByGroup, loading, allImages } = useGallery();
  const [previewImages, setPreviewImages] = useState<UnifiedGalleryImage[]>([]);
  const hasInitialized = useRef(false);

  // Get stable preview images - first 1-2 from each group, max 6 total
  const stablePreviewImages = useMemo(() => {
    const groupedImages = getImagesByGroup();
    const preview: UnifiedGalleryImage[] = [];
    const groupKeys = Object.keys(groupedImages);
    
    // Sort groups for consistent ordering
    groupKeys.sort();
    
    // Take first image from each group until we have 6
    for (const group of groupKeys) {
      if (preview.length >= 6) break;
      const groupImages = groupedImages[group];
      if (groupImages.length > 0) {
        preview.push(groupImages[0]);
      }
    }
    
    // If we still need more, take second images from groups
    if (preview.length < 6) {
      for (const group of groupKeys) {
        if (preview.length >= 6) break;
        const groupImages = groupedImages[group];
        if (groupImages.length > 1) {
          preview.push(groupImages[1]);
        }
      }
    }
    
    return preview;
  }, [getImagesByGroup]);

  // Initialize once when data is ready
  useEffect(() => {
    if (!loading && !hasInitialized.current && stablePreviewImages.length > 0) {
      setPreviewImages(stablePreviewImages);
      hasInitialized.current = true;
    }
  }, [loading, stablePreviewImages]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-4 mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects across various industrial sectors
          </p>
        </div>

        {/* Gallery Grid - 3 cols desktop, 2 tablet, 1 mobile */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : previewImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {previewImages.map((item) => (
              <FlipCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No gallery images available yet.
          </div>
        )}

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;