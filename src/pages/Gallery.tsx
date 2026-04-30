import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useGallery, UnifiedGalleryImage } from '@/contexts/GalleryContext';
import { serviceGroups } from '@/utils/galleryData';

// Priority order for displaying service groups
const serviceDisplayOrder = [
  'industrial-valves-pumps-compressors',
  'rotating-static-equipment',
  'heavy-duty-machinery',
  'marine-machinery',
  'onboard-ship-machinery',
  'marine-engineering',
  'calibration-pressure-testing',
  'electrical-services',
  'welding-training',
  'pneumatic-hydraulic-systems',
  'forklift-training',
  'engine-room-watchkeeping',
  'workshop-practice',
  'basic-technical-training',
  'mechanical-technician-practice',
  'mechanical-instrumentation',
  'instrumentation-training',
  'trainees-sea-time',
  'training-ongoing',
  'general',
];

const Gallery = () => {
  const { getImagesByGroup, loading } = useGallery();
  const [selectedImage, setSelectedImage] = useState<UnifiedGalleryImage | null>(null);
  
  // Get grouped images with stable ordering
  const sortedGroups = useMemo(() => {
    const groupedImages = getImagesByGroup();
    const result: Array<{ slug: string; title: string; images: UnifiedGalleryImage[] }> = [];
    
    // Add groups in display order
    for (const slug of serviceDisplayOrder) {
      if (groupedImages[slug] && groupedImages[slug].length > 0) {
        const group = serviceGroups.find(g => g.slug === slug);
        result.push({
          slug,
          title: group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          images: groupedImages[slug],
        });
      }
    }
    
    // Add any remaining groups not in the display order
    Object.keys(groupedImages).forEach(slug => {
      if (!serviceDisplayOrder.includes(slug) && groupedImages[slug].length > 0) {
        const group = serviceGroups.find(g => g.slug === slug);
        result.push({
          slug,
          title: group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          images: groupedImages[slug],
        });
      }
    });
    
    return result;
  }, [getImagesByGroup]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Our Work</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-3 sm:mt-4 mb-5 sm:mb-6 leading-tight">
              Project Gallery
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of completed projects and services
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : sortedGroups.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No gallery images available yet.
            </div>
          ) : (
            sortedGroups.map(({ slug, title, images }) => (
              <div key={slug} className="mb-12 sm:mb-16 last:mb-0">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-5 sm:mb-6 border-l-4 border-primary pl-3 sm:pl-4 leading-tight">
                  {title}
                  <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-normal text-muted-foreground block sm:inline mt-1 sm:mt-0">
                    ({images.length} {images.length === 1 ? 'image' : 'images'})
                  </span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {images.map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs sm:text-sm font-medium leading-snug line-clamp-2">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-5xl w-full bg-card rounded-lg overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="eager"
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;