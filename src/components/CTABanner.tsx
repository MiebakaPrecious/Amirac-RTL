import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="cta-banner py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-accent-foreground/10 rounded-sm flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-2">
                Building a dream shouldn't be a nightmare!
              </h3>
              <p className="text-accent-foreground/80">
                We have transforming the ideas and visions into winning projects.
              </p>
            </div>
          </div>
          
          <Button className="bg-primary text-primary-foreground font-semibold px-8 py-6 hover:bg-navy-light transition-colors whitespace-nowrap">
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
