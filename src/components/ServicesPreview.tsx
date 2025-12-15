import { Link } from 'react-router-dom';
import { services } from '@/utils/servicesData';

const ServicesPreview = () => {
  // Show first 6 services on home page
  const previewServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-4 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering solutions for marine and industrial sectors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {previewServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
