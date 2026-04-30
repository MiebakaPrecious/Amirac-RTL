import { Link } from 'react-router-dom';
import { GraduationCap, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { engineeringServices, trainingCourses } from '@/utils/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">What We Do</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-3 sm:mt-4 mb-5 sm:mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Comprehensive engineering solutions and professional training programs for marine and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Training Courses Section - PROMINENT */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 rounded-full mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                Professional Development
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">
              Training Courses Available
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Advance your career with our comprehensive hands-on training programs designed for marine and industrial professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {trainingCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-card p-5 sm:p-6 rounded-lg border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent transition-colors">
                  <course.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2 sm:mb-3 leading-snug">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>

          {/* Training CTA */}
          <div className="text-center bg-accent/10 p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-accent/30">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">
              Ready to Start Your Training?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8">
              Enroll today and take the first step towards advancing your career. Our expert instructors are ready to guide you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-accent text-accent-foreground font-bold text-base sm:text-xl rounded-lg shadow-xl hover:bg-accent/90 transition-all hover:scale-[1.02]"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              Enroll for Training →
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                Professional Solutions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">
              Engineering Services
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance, repair, and installation services for marine and industrial equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {engineeringServices.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2 sm:mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Engineering CTA */}
          <div className="text-center bg-primary/10 p-6 sm:p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4 leading-tight">
              Need Our Engineering Services?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Contact us today to discuss your project requirements. Our team is ready to provide
              customized solutions for your engineering needs.
            </p>
            <Link
              to="/contact"
              className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-bold text-base sm:text-xl rounded-lg shadow-xl hover:bg-primary/90 transition-all hover:scale-[1.02] text-center"
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
