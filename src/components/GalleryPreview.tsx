import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGallery, GalleryItem } from '@/contexts/GalleryContext';
import FlipCard from './Home/FlipCard';

const GalleryPreview = () => {
  const { getRandomImages, loading } = useGallery();
  const [randomImages, setRandomImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // Get 6 random images on mount and refresh
    setRandomImages(getRandomImages(6));
  }, [loading]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {randomImages.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
