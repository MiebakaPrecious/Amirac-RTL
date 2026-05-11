import { Link } from 'react-router-dom';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const aboutImage = "/assets/gallery/industrial-valves/industrial-valves-pumps-compressor-01.jpeg";
const directorPhoto = "/assets/management/uhegbu-amaechi-simon/director.jpg";
const technicalManagerPhoto = "/assets/management/engr-iyalla-ipalibo/technical-manager.jpg";
const hrManagerPhoto = "/assets/management/nte-jonathan/hr-manager.jpg";
const secretaryPhoto = "/assets/management/asuquo-deborah/secretary.jpg";

const coreValues = [
  { icon: Target, title: 'Excellence', description: 'Delivering the highest quality in every project and service.' },
  { icon: Heart, title: 'Integrity', description: 'Operating with honesty, transparency, and ethical standards.' },
  { icon: Eye, title: 'Innovation', description: 'Embracing new technologies and methodologies for better solutions.' },
  { icon: CheckCircle, title: 'Safety', description: 'Prioritizing safety in all operations and training programs.' },
];

const managementTeam = [
  {
    name: 'Uhegbu Amaechi Simon',
    position: 'Director',
    photo: directorPhoto,
  },
  {
    name: 'Engr. Iyalla Ipalibo',
    position: 'Technical Manager',
    photo: technicalManagerPhoto,
  },
  {
    name: 'Nte Jonathan',
    position: 'Human Resources Manager',
    photo: hrManagerPhoto,
  },
  {
    name: 'Asuquo Deborah',
    position: 'Secretary',
    photo: secretaryPhoto,
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-3 sm:mt-4 mb-5 sm:mb-6 leading-tight">
              Amirac Resources & Technologies Ltd
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Your trusted partner in marine and industrial engineering excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          {/* Who We Are - With Image */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-14 sm:mb-20">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Industrial equipment maintenance services"
                loading="lazy"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-lg -z-10" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-5 sm:mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                Amirac Resources & Technologies Ltd is a premier engineering company based in Port Harcourt,
                Rivers State, Nigeria. We specialize in providing comprehensive marine and industrial
                engineering solutions, including equipment maintenance, technical training, and specialized
                engineering services.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                With over 15 years of combined experience, our team of certified professionals delivers
                top-tier services to clients across the oil & gas, maritime, manufacturing, and industrial
                sectors. We pride ourselves on our commitment to quality, safety, and customer satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Our state-of-the-art training facility and experienced instructors provide industry-recognized
                certifications and hands-on training programs that prepare professionals for success in their
                respective fields.
              </p>
            </div>
          </div>

          {/* Management Team Section */}
          <div className="mb-14 sm:mb-20">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">
                Meet Our Management Team
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Our experienced leadership team drives excellence and innovation across all operations
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {managementTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h4 className="text-sm sm:text-lg font-heading font-bold text-foreground mb-1 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-medium">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
            <div className="bg-primary p-6 sm:p-8 rounded-lg text-primary-foreground">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="leading-relaxed opacity-90 text-sm sm:text-base">
                To provide world-class engineering solutions and technical training that empower
                industries and individuals to achieve operational excellence, safety, and sustainable
                growth. We are committed to delivering reliable, innovative, and cost-effective
                services that exceed our clients' expectations.
              </p>
            </div>
            <div className="bg-accent p-6 sm:p-8 rounded-lg text-accent-foreground">
              <Eye className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">Our Vision</h3>
              <p className="leading-relaxed opacity-90 text-sm sm:text-base">
                To be the leading engineering and technical training company in Nigeria and West Africa,
                recognized for our excellence, innovation, and commitment to developing skilled
                professionals who drive industrial progress and economic development in the region.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">Our Core Values</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-card p-4 sm:p-6 rounded-lg border border-border text-center hover:border-primary transition-colors">
                <value.icon className="w-9 h-9 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-heading font-bold text-foreground mb-1 sm:mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-center"
            >
              Learn More → Services
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-base sm:text-lg text-center"
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
