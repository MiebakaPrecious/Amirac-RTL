import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModalVideo from './ModalVideo';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
    type: 'video',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200&h=800&fit=crop',
    type: 'about',
  },
];

const HeroNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background with diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <div 
          className="absolute top-0 right-0 w-[60%] h-full bg-primary/10 hidden lg:block" 
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }} 
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-heading font-bold leading-none mb-6">
                <span className="block text-5xl md:text-6xl lg:text-7xl text-primary">ENGINEERING</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-primary">EXCELLENCE</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-accent">DELIVERED</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional marine and industrial engineering solutions. Trust our expertise for your most critical projects.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Explore Our Services
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-lg"
                >
                  Contact Us Now →
                </Link>
              </div>
            </div>
            
            {/* Right Content - Slideshow */}
            <div className="hidden lg:block relative">
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
                            onClick={() => setIsVideoOpen(true)}
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
                        <div className="text-center px-8 max-w-md">
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
            </div>
          </div>
        </div>
        
        {/* Tagline Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 text-primary-foreground">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-background/20 rounded-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-primary-foreground/80 block">Excellence in Engineering</span>
                <span className="text-sm font-semibold">Committed to superior quality and results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default HeroNew;
