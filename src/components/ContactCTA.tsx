import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/utils/contactInfo';
import GoogleMap from './GoogleMap';

const ContactCTA = () => {
  return (
    <section className="py-14 sm:py-20 bg-primary">
      <div className="container mx-auto px-5 sm:px-6 lg:px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-5 sm:mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/90 text-base sm:text-lg max-w-2xl mx-auto mb-7 sm:mb-8">
            Contact us today for a free consultation. Our team of experts is ready to help you
            with all your engineering and training needs.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex items-start gap-2 text-primary-foreground">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-x-3 text-sm sm:text-base">
                {contactInfo.phoneNumbers.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`} className="hover:text-accent transition-colors">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors text-sm sm:text-base break-all">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Big CTA Button */}
          <Link
            to="/contact"
            className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-accent text-accent-foreground font-bold text-lg sm:text-xl rounded-xl shadow-xl hover:bg-accent/90 transition-all hover:scale-[1.02] text-center"
          >
            Contact Us Now →
          </Link>
        </div>

        {/* Google Map */}
        <div className="max-w-4xl mx-auto">
          <GoogleMap height="280px" className="shadow-lg sm:[&_iframe]:!h-[350px]" />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
