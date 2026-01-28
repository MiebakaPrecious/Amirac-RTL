import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGallery } from '@/contexts/GalleryContext';

const HeroCarousel = () => {
  const { items } = useGallery();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get hero images from gallery
  const heroImages = items.filter(item => item.service_group === 'hero');
  
  // Fallback images if no hero images in database
  const fallbackSlides = [
    { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&h=800&fit=crop' },
  ];

  const slides = heroImages.length >= 2 
    ? [heroImages[0], heroImages[1]] 
    : fallbackSlides.map((s, i) => ({ ...s, id: `fallback-${i}`, filename: `hero-${i+1}`, service_group: 'hero', description: null }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 max-w-md bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Amirac Resources & Technologies
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                A premier engineering company delivering top-tier maintenance, 
                training, and technical solutions across marine and industrial sectors 
                in Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-6 flex gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
