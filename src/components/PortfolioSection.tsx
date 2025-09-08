import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Some Case Study",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed elementum sollicitudin rhoncus orci. Tincidunt quam eget elit at justo, consectetur.",
      image: "https://images.unsplash.com/photo-1559028006-021c8df5dfb3?w=400&h=250&fit=crop",
      date: "December 24, 2020",
      tags: ["UI/UX", "Product Design"]
    },
    {
      id: 2, 
      title: "Some Case Study",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed elementum sollicitudin rhoncus orci. Tincidunt quam eget elit at justo, consectetur.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      date: "December 24, 2020",
      tags: ["Mobile App", "UX Research"]
    }
  ];

  const handlePhysicsButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.classList.add('animate-btn-drop');
    
    setTimeout(() => {
      button.classList.remove('animate-btn-drop');
    }, 600);
  };

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-display font-bold text-accent mb-6 animate-slide-up">
            work.
          </h2>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
              tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. 
              Id sit scelerisque neque, proin bibendum diam.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="clean-card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    onClick={handlePhysicsButton}
                    size="sm" 
                    className="physics-btn minimal-btn bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};