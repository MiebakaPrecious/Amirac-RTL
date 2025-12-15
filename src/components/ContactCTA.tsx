import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/utils/contactInfo';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation. Our team of experts is ready to help you 
          with all your engineering and training needs.
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Phone className="w-5 h-5" />
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {contactInfo.phoneNumbers.map((phone, index) => (
                <a key={index} href={`tel:${phone}`} className="hover:text-accent transition-colors">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Mail className="w-5 h-5" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        {/* Big CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-accent text-accent-foreground font-bold text-xl rounded-xl shadow-xl hover:bg-accent/90 transition-all hover:scale-105"
        >
          Contact Us Now →
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
