import { Link } from 'react-router-dom';
import HeroCarousel from './Home/HeroCarousel';

const HeroNew = () => {
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
                  Explore Our Services →
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
              <HeroCarousel />
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
                <span className="text-xs text-primary-foreground/80 block">Engineering Excellence Delivered</span>
                <span className="text-sm font-semibold">Training and Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroNew;
