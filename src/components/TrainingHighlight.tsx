import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const TrainingHighlight = () => {
  const highlights = [
    'Hands-on practical training',
    'Marine & industrial focus',
    'Career advancement programs',
    'Certified instructors',
    'Industry-recognized certifications',
    'Flexible scheduling options',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-primary/50 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Training Programs
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Professional Technical Training Programs
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Advance your career with our comprehensive hands-on training programs. 
              Designed for marine and industrial professionals, our courses combine 
              practical skills development with industry-recognized certifications 
              to prepare you for success in today's competitive job market.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg shadow-xl hover:bg-accent/90 transition-all hover:scale-105"
              >
                <GraduationCap className="w-5 h-5" />
                Enroll for Training
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View All Courses
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                Popular Training Courses
              </h3>
              <div className="space-y-4">
                {[
                  'Rotating & Static Equipment Training',
                  'Motorman (Marine & Industrial)',
                  'Mechanical Technician Training',
                  'Forklift Operator Certification',
                  'Basic Technical Skills Formation',
                ].map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4"
                  >
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-primary-foreground font-medium">{course}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/80 text-sm">
                  + 10 more courses available
                </p>
              </div>
            </div>
            
            {/* Decorative Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg">
              15+ Courses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlight;
