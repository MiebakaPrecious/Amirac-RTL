import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/utils/contactInfo';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/8vyhKt7LMQd3km7i8';

const ContactInfoSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-primary mb-8">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <div className="flex flex-col gap-1">
              {contactInfo.phoneNumbers.map((phone, index) => (
                <a 
                  key={index} 
                  href={`tel:${phone}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Address</h3>
            <a 
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.address}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              {contactInfo.businessHours.weekdays}<br />
              {contactInfo.businessHours.saturday}<br />
              {contactInfo.businessHours.sunday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
