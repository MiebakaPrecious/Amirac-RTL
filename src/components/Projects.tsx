import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Riverview Green Building",
    categories: ["Building", "Road Construction"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop",
  },
  {
    title: "The Langham Hotel",
    categories: ["Building", "Construction"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=600&fit=crop",
  },
  {
    title: "Villa Rustica Renovation",
    categories: ["Construction", "Road Construction"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=600&fit=crop",
  },
  {
    title: "Land Rustica Renovation",
    categories: ["Building", "Maintenance"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex items-center justify-center">
            Services
          </span>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 mt-4">
            We Are Professional
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Our latest projects
          </h2>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-item group rounded-sm overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="portfolio-overlay">
                <h4 className="text-xl font-heading font-bold text-primary-foreground mb-2 text-center px-4">
                  {project.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {project.categories.join(", ")}
                </p>
                <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
