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
              alt="Industrial valves, pumps and compressor maintenance"
              className="w-full h-[500px] object-cover rounded-sm shadow-xl"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 -z-10" />
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
              Slogan creation for your construction company is crucial for the overall branding. 
              And branding in today's world can't be ignored, We hope that the above Construction 
              Slogans. Don't forget to share it on social media and related building communities.
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
