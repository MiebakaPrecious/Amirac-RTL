import { useState } from 'react';
import { GraduationCap, Wrench, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';
import ContactInfoSection from '@/components/Contact/ContactInfoSection';
import TrainingRegistrationForm from '@/components/Contact/TrainingRegistrationForm';
import EngineeringServicesForm from '@/components/Contact/EngineeringServicesForm';

type FormType = 'none' | 'training' | 'engineering';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/8vyhKt7LMQd3km7i8';

const Contact = () => {
  const [activeForm, setActiveForm] = useState<FormType>('none');

  const renderFormSection = () => {
    switch (activeForm) {
      case 'training':
        return <TrainingRegistrationForm onBack={() => setActiveForm('none')} />;
      case 'engineering':
        return <EngineeringServicesForm onBack={() => setActiveForm('none')} />;
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              How Can We Help You?
            </h2>
            <p className="text-muted-foreground mb-6">
              Select an option below to get started with your inquiry.
            </p>
            
            {/* Training Registration Card */}
            <button
              onClick={() => setActiveForm('training')}
              className="w-full bg-accent/10 border-2 border-accent/30 rounded-xl p-6 text-left hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <GraduationCap className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1 flex items-center gap-2">
                    Register for Training
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Enroll in our professional training programs for skill development and certification.
                  </p>
                </div>
              </div>
            </button>

            {/* Engineering Services Card */}
            <button
              onClick={() => setActiveForm('engineering')}
              className="w-full bg-primary/10 border-2 border-primary/30 rounded-xl p-6 text-left hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Wrench className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1 flex items-center gap-2">
                    Book Engineering Services
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Request our engineering solutions for your industrial and commercial projects.
                  </p>
                </div>
              </div>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-3 sm:mt-4 mb-5 sm:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 sm:mb-8">
              Have a question or want to work with us? We'd love to hear from you.
            </p>

            {/* Quick Action Cards - Only show when no form is active */}
            {activeForm === 'none' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button
                  onClick={() => setActiveForm('training')}
                  className="bg-accent/10 border-2 border-accent/30 rounded-xl p-5 sm:p-6 text-center hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <GraduationCap className="w-9 h-9 sm:w-10 sm:h-10 text-accent mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Register for Training</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Enroll in our professional training programs</p>
                </button>
                <button
                  onClick={() => setActiveForm('engineering')}
                  className="bg-primary/10 border-2 border-primary/30 rounded-xl p-5 sm:p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Wrench className="w-9 h-9 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Book Engineering Services</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Request our engineering solutions</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <ContactInfoSection />

            {/* Form Section */}
            <div className="bg-card p-5 sm:p-8 rounded-lg border border-border">
              {renderFormSection()}
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-5 sm:mb-6">
              Our Location
            </h2>
            <GoogleMap height="320px" className="sm:[&_iframe]:!h-[450px]" />
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline"
              >
                View larger map & get directions →
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
