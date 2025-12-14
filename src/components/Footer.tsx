import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Amirac Resources and Technologies Ltd" className="h-12 w-auto bg-white rounded p-1" />
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
              {["About Us", "Our Services", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Building Construction", "Road Construction", "Renovation", "Maintenance", "Architecture"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {service}
                  </a>
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
                  <a href="tel:07030740932" className="text-primary-foreground/70 hover:text-accent transition-colors">07030740932</a>
                  <a href="tel:09160897892" className="text-primary-foreground/70 hover:text-accent transition-colors">09160897892</a>
                  <a href="tel:08072608820" className="text-primary-foreground/70 hover:text-accent transition-colors">08072608820</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <a href="mailto:amiractech.ng@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">amiractech.ng@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">Km2 AANL Building, Beside Fort Oil Filling Station, Adjacent Winners Chapel Church, along Odani-Akpajo Express Way, East-West Road, Port Harcourt, Rivers State, Nigeria.</span>
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
