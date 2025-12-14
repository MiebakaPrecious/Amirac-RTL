import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useGallery, GalleryItem } from '@/contexts/GalleryContext';

const Gallery = () => {
  const { items, loading } = useGallery();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Group images by service_group, excluding hero images
  const groupedImages = items
    .filter(item => item.service_group !== 'hero')
    .reduce((acc, item) => {
      if (!acc[item.service_group]) {
        acc[item.service_group] = [];
      }
      acc[item.service_group].push(item);
      return acc;
    }, {} as Record<string, GalleryItem[]>);

  // Format service group names for display
  const formatGroupName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-4 mb-6">
              Project Gallery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of completed projects and services
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading gallery...</p>
            </div>
          ) : (
            Object.entries(groupedImages).map(([group, groupItems]) => (
              <div key={group} className="mb-16">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-primary pl-4">
                  {formatGroupName(group)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {groupItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img
                        src={item.url}
                        alt={item.filename}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{item.filename}</p>
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
              src={selectedImage.url}
              alt={selectedImage.filename}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {selectedImage.filename}
              </h3>
              <p className="text-sm text-primary font-semibold mb-2">
                {selectedImage.service_group}
              </p>
              <p className="text-muted-foreground">
                {selectedImage.description || 'Professional engineering services delivered with excellence.'}
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
