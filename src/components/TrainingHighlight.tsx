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
    <section className="py-14 sm:py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-accent rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-primary/50 rounded-full" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 rounded-full mb-5 sm:mb-6">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
                Training Programs
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-5 sm:mb-6 leading-tight">
              Professional Technical Training Programs
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 sm:mb-8">
              Advance your career with our comprehensive hands-on training programs.
              Designed for marine and industrial professionals, our courses combine
              practical skills development with industry-recognized certifications.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-accent-foreground font-bold text-base sm:text-lg rounded-lg shadow-xl hover:bg-accent/90 transition-all hover:scale-[1.02]"
              >
                <GraduationCap className="w-5 h-5" />
                Enroll for Training
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-primary text-primary font-bold text-base sm:text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View All Courses
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-primary rounded-2xl p-5 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground mb-5 sm:mb-6 pr-20">
                Popular Training Courses
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Rotating & Static Equipment Training',
                  'Motorman (Marine & Industrial)',
                  'Mechanical Technician Training',
                  'Forklift Operator Certification',
                  'Basic Technical Skills Formation',
                ].map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-3 sm:p-4"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-bold text-xs sm:text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-primary-foreground font-medium text-sm sm:text-base leading-snug">{course}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/80 text-xs sm:text-sm">
                  + 10 more courses available
                </p>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg">
              15+ Courses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlight;
