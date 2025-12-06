import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Quote = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <span className="section-label mb-4 block">Quote</span>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 mt-4">
              Interested in Construction?
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Request a free and fair quote
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Slogan creation for your construction company is crucial for the overall branding. 
              And branding in today's world can't be ignored, We hope that the above Construction 
              Slogans. Don't forget to share it on social media.
            </p>
          </div>
          
          {/* Form */}
          <div className="bg-card p-8 rounded-sm shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Name (required)
                  </label>
                  <Input 
                    type="text" 
                    className="bg-secondary border-0 focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Email (required)
                  </label>
                  <Input 
                    type="email" 
                    className="bg-secondary border-0 focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    type="text" 
                    className="bg-secondary border-0 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Department
                  </label>
                  <Select>
                    <SelectTrigger className="bg-secondary border-0 focus:ring-2 focus:ring-accent">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business Department</SelectItem>
                      <SelectItem value="personal">Personal Department</SelectItem>
                      <SelectItem value="support">Support Department</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea 
                  className="bg-secondary border-0 focus:ring-2 focus:ring-accent min-h-[150px]"
                  rows={5}
                />
              </div>
              
              <Button className="btn-primary w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
