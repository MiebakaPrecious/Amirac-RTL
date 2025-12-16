import { Link } from 'react-router-dom';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '@/assets/gallery/Industrial-valves-Pumps-compressor-service-2.jpeg';

const coreValues = [
  { icon: Target, title: 'Excellence', description: 'Delivering the highest quality in every project and service.' },
  { icon: Heart, title: 'Integrity', description: 'Operating with honesty, transparency, and ethical standards.' },
  { icon: Eye, title: 'Innovation', description: 'Embracing new technologies and methodologies for better solutions.' },
  { icon: CheckCircle, title: 'Safety', description: 'Prioritizing safety in all operations and training programs.' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-4 mb-6">
              Amirac Resources & Technologies Ltd
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your trusted partner in marine and industrial engineering excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Who We Are - With Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Industrial equipment maintenance services"
                loading="lazy"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Amirac Resources & Technologies Ltd is a premier engineering company based in Port Harcourt, 
                Rivers State, Nigeria. We specialize in providing comprehensive marine and industrial 
                engineering solutions, including equipment maintenance, technical training, and specialized 
                engineering services.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 15 years of combined experience, our team of certified professionals delivers 
                top-tier services to clients across the oil & gas, maritime, manufacturing, and industrial 
                sectors. We pride ourselves on our commitment to quality, safety, and customer satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art training facility and experienced instructors provide industry-recognized 
                certifications and hands-on training programs that prepare professionals for success in their 
                respective fields.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-primary p-8 rounded-lg text-primary-foreground">
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed opacity-90">
                To provide world-class engineering solutions and technical training that empower 
                industries and individuals to achieve operational excellence, safety, and sustainable 
                growth. We are committed to delivering reliable, innovative, and cost-effective 
                services that exceed our clients' expectations.
              </p>
            </div>
            <div className="bg-accent p-8 rounded-lg text-accent-foreground">
              <Eye className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed opacity-90">
                To be the leading engineering and technical training company in Nigeria and West Africa, 
                recognized for our excellence, innovation, and commitment to developing skilled 
                professionals who drive industrial progress and economic development in the region.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border text-center hover:border-primary transition-colors">
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-heading font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Learn More → Services
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-lg"
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

export default About;
