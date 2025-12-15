import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/utils/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-4 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive engineering solutions for marine and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-primary/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Need Our Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project requirements. Our team is ready to provide 
              customized solutions for your engineering and training needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold text-xl rounded-lg shadow-xl hover:bg-primary/90 transition-all hover:scale-105"
            >
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
