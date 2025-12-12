import { Link } from 'react-router-dom';
import { Wrench, Anchor, Zap, Settings, GraduationCap, Gauge, Cog, Ship, Flame, Truck, PenTool, Wind } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    icon: Wrench,
    title: 'Rotating & Static Equipment Maintenance',
    description: 'Comprehensive maintenance services for all types of rotating and static industrial equipment, ensuring optimal performance and longevity.',
  },
  {
    icon: Cog,
    title: 'Heavy-Duty Machinery Maintenance',
    description: 'Expert maintenance and repair services for heavy-duty industrial machinery, including diagnostics, overhaul, and performance optimization.',
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Control',
    description: 'Installation, calibration, and maintenance of instrumentation and control systems for industrial applications.',
  },
  {
    icon: Settings,
    title: 'Industrial Valves / Pumps / Compressors',
    description: 'Specialized services for industrial valves, pumps, and compressors including repair, refurbishment, and testing.',
  },
  {
    icon: Anchor,
    title: 'Marine Machinery Maintenance',
    description: 'Complete marine machinery maintenance services for vessels, offshore platforms, and maritime installations.',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment & Machine Maintenance',
    description: 'General industrial equipment maintenance covering all aspects of machine upkeep and repair.',
  },
  {
    icon: Gauge,
    title: 'Components Refurbishing & Pressure Testing',
    description: 'Professional refurbishment of industrial components with comprehensive pressure testing and quality assurance.',
  },
  {
    icon: Zap,
    title: 'Electrical Installation Practice',
    description: 'Complete electrical installation services for industrial and marine applications, following international standards.',
  },
  {
    icon: Ship,
    title: 'Engine Room Watchkeeping',
    description: 'Professional engine room watchkeeping services ensuring safe and efficient vessel operations.',
  },
  {
    icon: Anchor,
    title: 'Onboard Ship Machinery Maintenance',
    description: 'Comprehensive onboard maintenance services for all ship machinery and systems.',
  },
  {
    icon: PenTool,
    title: 'Mechanical Technician Practice',
    description: 'Skilled mechanical technician services for industrial and marine mechanical systems.',
  },
  {
    icon: Wind,
    title: 'Pneumatic System Services',
    description: 'Installation, maintenance, and repair of pneumatic systems for industrial applications.',
  },
  {
    icon: GraduationCap,
    title: 'Basic Technical Skills Training',
    description: 'Foundational technical training programs for entry-level technicians and operators.',
  },
  {
    icon: Ship,
    title: 'Marine & Industrial Machine Operator Training',
    description: 'Comprehensive operator training for marine and industrial machinery operations.',
  },
  {
    icon: Flame,
    title: 'Welding Training (Pipe, Fabrication, Argon)',
    description: 'Professional welding certification programs covering pipe welding, fabrication, and argon welding techniques.',
  },
  {
    icon: Truck,
    title: 'Forklift Operator Training & Maintenance',
    description: 'Forklift operator certification training and forklift maintenance services.',
  },
  {
    icon: Zap,
    title: 'Industrial Electrical Services',
    description: 'Complete industrial electrical services including installation, maintenance, and troubleshooting.',
  },
];

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
