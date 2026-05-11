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
    <section className="py-14 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-5 sm:px-6 lg:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Experience Badge */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <span className="section-label">About Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mt-3 sm:mt-4 leading-tight">
                Your Trusted Engineering Partner
              </h2>
            </div>
            <div className="bg-primary text-primary-foreground px-5 py-4 sm:p-6 rounded-lg shadow-lg flex-shrink-0 text-center md:text-left self-start">
              <div className="text-3xl sm:text-4xl font-heading font-bold">15+</div>
              <div className="text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Amirac Resources & Technologies Ltd is a premier engineering company specializing in
              marine and industrial equipment maintenance, technical training, and comprehensive
              engineering solutions. Based in Port Harcourt, Nigeria, we deliver excellence across
              the oil & gas, maritime, and industrial sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Our team of certified professionals brings decades of combined experience to every
              project, ensuring top-tier quality and safety standards in all our operations.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-background p-3 sm:p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4">
            <Link
              to="/about"
              className="w-full sm:w-auto px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-center"
            >
              Learn More →
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-center"
            >
              View Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
