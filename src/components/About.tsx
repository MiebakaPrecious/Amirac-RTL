import { Check } from "lucide-react";
import aboutImage from '@/assets/gallery/Industrial-valves-Pumps-compressor-service-2.jpeg';

const highlights = [
  "Excellent engineering",
  "Modern & up to date",
  "Grade #1 materials",
  "Structures with long life",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Industrial equipment maintenance services"
              loading="lazy"
              className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <span className="section-label mb-4 block">About</span>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              About Our Company
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Always dedicated and devoted
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Amirac Resources & Technologies Ltd is a premier engineering company based in Port Harcourt, 
              Rivers State, Nigeria. We specialize in providing comprehensive marine and industrial 
              engineering solutions, including equipment maintenance, technical training, and specialized 
              engineering services.
            </p>
            
            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
