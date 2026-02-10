import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Diagonal Yellow Background */}
      <div className="absolute top-0 right-0 w-[65%] h-full bg-accent hidden md:block" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }} />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="font-heading font-bold leading-none mb-6">
              <span className="block text-6xl md:text-7xl lg:text-8xl text-primary">BUILD</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl text-primary">YOUR</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl text-accent">FUTURE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional engineering solutions,<br />
              trust our solid reputation.
            </p>
            
            {/* Watch Video CTA */}
            <div className="flex items-center gap-6">
              <button className="play-button shadow-lg">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </button>
              <div>
                <span className="text-sm text-muted-foreground block">Watch video</span>
                <span className="font-semibold text-foreground">Why choose us?</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Worker Image */}
          <div className="hidden lg:flex justify-end items-end relative">
            <div className="relative z-10">
              <img
                src="/assets/gallery/hero/hero-01.jpg"
                alt="Construction worker giving thumbs up"
                className="h-[600px] w-auto object-cover object-top"
              />
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-20">
              <button className="w-12 h-12 border-2 border-primary/30 text-primary/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 border-2 border-primary/30 text-primary/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tagline Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 text-primary-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-primary-foreground/70 block">We'll get it done, like us there are none</span>
              <span className="text-sm font-semibold">Committed to superior quality and results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
