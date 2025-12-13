import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  onPlayVideo: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
    type: 'video' as const,
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&h=800&fit=crop',
    type: 'about' as const,
  },
];

const HeroCarousel = ({ onPlayVideo }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {slide.type === 'video' ? (
              <div className="text-center">
                <button
                  onClick={onPlayVideo}
                  className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform shadow-lg"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </button>
                <div className="text-white">
                  <p className="text-sm opacity-80">Watch Video</p>
                  <p className="font-semibold text-lg">Why Choose Us?</p>
                </div>
              </div>
            ) : (
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
            )}
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
        {slides.map((_, index) => (
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
