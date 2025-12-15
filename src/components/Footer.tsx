import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { contactInfo } from "@/utils/contactInfo";
import { services } from "@/utils/servicesData";

const Footer = () => {
  // Get first 5 services for footer
  const footerServices = services.slice(0, 5);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Amirac Resources and Technologies Ltd" 
                className="h-12 w-auto object-contain" 
                style={{ background: 'transparent' }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold tracking-wide">AMIRAC</span>
                <span className="text-[9px] font-semibold text-primary-foreground/70 tracking-wider leading-tight">RESOURCES &amp; TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              We are a professional engineering company dedicated to delivering quality projects on time and within budget.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service.title.length > 30 ? service.title.slice(0, 30) + '...' : service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  {contactInfo.phoneNumbers.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="text-primary-foreground/70 hover:text-accent transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Amirac Resources and Technologies Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
