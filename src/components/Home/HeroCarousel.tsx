import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  { url: '/assets/gallery/hero/hero-01.jpg' },
  { url: '/assets/gallery/hero/hero-02.jpg' },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative h-[280px] sm:h-[380px] lg:h-[500px] w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
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

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-md bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white mb-2 sm:mb-4">
                Amirac Resources & Technologies
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                A premier engineering company delivering top-tier maintenance,
                training, and technical solutions across marine and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex gap-2 sm:gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-6 sm:w-8' : 'bg-white/50 w-2 sm:w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
