const steps = [
  {
    number: "01",
    title: "Agency / Bidding",
    description: "Ensure design documents are reviewed and permitted",
  },
  {
    number: "02",
    title: "Construction",
    description: "Helps to coordinate furnishings and move-in process",
  },
  {
    number: "03",
    title: "Project Execution",
    description: "Client directs move in of equipment, operations & staff",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="section-label mb-4 block">How?</span>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 mt-4">
              Process of Construction
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How it works <br />in construction?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Slogan creation for your construction company is<br />
              crucial for the overall branding.
            </p>
            
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="text-5xl font-heading font-bold text-accent/30 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=600&fit=crop"
              alt="Construction process"
              className="w-full h-[600px] object-cover rounded-sm shadow-xl"
            />
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
