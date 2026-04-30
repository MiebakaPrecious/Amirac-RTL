import { Link } from 'react-router-dom';
import HeroCarousel from './Home/HeroCarousel';

const HeroNew = () => {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center overflow-hidden pt-20 pb-24 lg:pb-32">
        {/* Background with diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <div
          className="absolute top-0 right-0 w-[60%] h-full bg-primary/10 hidden lg:block"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
        {/* Mobile subtle top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary lg:hidden" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[80vh]">
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="font-heading font-bold leading-[0.95] mb-5 sm:mb-6 tracking-tight">
                <span className="block text-[2.75rem] sm:text-6xl md:text-6xl lg:text-7xl text-primary">ENGINEERING</span>
                <span className="block text-[2.75rem] sm:text-6xl md:text-6xl lg:text-7xl text-primary">EXCELLENCE</span>
                <span className="block text-[2.75rem] sm:text-6xl md:text-6xl lg:text-7xl text-accent">DELIVERED</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Professional marine and industrial engineering solutions. Trust our expertise for your most critical projects.
              </p>

              {/* Mobile carousel between text and CTAs */}
              <div className="lg:hidden mb-7">
                <HeroCarousel />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-6 py-3.5 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-center text-base"
                >
                  Explore Our Services →
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-center text-base sm:text-lg"
                >
                  Contact Us Now →
                </Link>
              </div>
            </div>

            {/* Right Content - Slideshow (desktop only) */}
            <div className="hidden lg:block relative">
              <HeroCarousel />
            </div>
          </div>
        </div>

        {/* Tagline Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 sm:py-4 text-primary-foreground">
          <div className="container mx-auto px-4 flex items-center justify-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-background/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs text-primary-foreground/80 block leading-tight">Maintenance Services & Training Academy</span>
                <span className="text-xs sm:text-sm font-semibold leading-tight block truncate">Certificate courses available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroNew;
