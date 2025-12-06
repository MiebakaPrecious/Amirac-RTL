import { Building2, Shield, Route } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Building Engineering",
    description: "A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety.",
  },
  {
    icon: Route,
    title: "Road Construction",
    description: "The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex items-center justify-center">
            Features at a Glance
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-4">
            We know what your needs are
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="service-card bg-card text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-box mx-auto">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-accent font-semibold hover:text-gold-dark transition-colors inline-flex items-center gap-2"
              >
                Learn More ...
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
