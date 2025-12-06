import { Building2, Route, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building",
    description: "A building, or edifice, is a structure with a roof and walls standing.",
  },
  {
    icon: Route,
    title: "Road Construction",
    description: "Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "All are assigned responsibilities relate to the maintenance mode.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex items-center justify-center">
            Services
          </span>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 mt-4">
            What We Can Do For You
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Our construction services
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-card text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full" />
                <div className="absolute inset-2 bg-accent/20 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="text-accent font-semibold hover:text-gold-dark transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
