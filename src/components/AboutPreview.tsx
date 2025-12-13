import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Expert Engineering Solutions',
  'Certified Technical Training',
  'Marine & Industrial Specialists',
  '24/7 Emergency Support',
];

const AboutPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=800&h=600&fit=crop"
              alt="Amirac engineering team at work"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">About Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-4 mb-6">
              Your Trusted Engineering Partner
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Amirac Resources & Technologies Ltd is a premier engineering company specializing in 
              marine and industrial equipment maintenance, technical training, and comprehensive 
              engineering solutions. Based in Port Harcourt, Nigeria, we deliver excellence across 
              the oil & gas, maritime, and industrial sectors.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals brings decades of combined experience to every 
              project, ensuring top-tier quality and safety standards in all our operations.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Learn More →
              </Link>
              <Link
                to="/services"
                className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
