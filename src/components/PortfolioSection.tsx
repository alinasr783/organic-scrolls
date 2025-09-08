import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

export const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform with nature-inspired design, featuring organic product discovery and eco-friendly shipping options.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Forest Meditation App",
      description: "A mindfulness app that brings users closer to nature through immersive forest sounds and guided meditation experiences.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      tags: ["React Native", "Firebase", "Audio API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Organic Farm Dashboard",
      description: "A comprehensive dashboard for organic farmers to track crop growth, weather patterns, and harvest schedules with beautiful data visualization.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop",
      tags: ["Vue.js", "D3.js", "Python", "IoT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Green Energy Monitor",
      description: "Real-time monitoring system for renewable energy sources with interactive charts and environmental impact calculations.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
      tags: ["Angular", "TypeScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Nature Photography Portfolio",
      description: "A stunning portfolio website for a nature photographer featuring dynamic galleries and immersive viewing experiences.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      tags: ["Next.js", "Framer Motion", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Plant Care Companion",
      description: "An AI-powered plant care assistant that helps users identify plants, track watering schedules, and diagnose plant health issues.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      tags: ["Flutter", "TensorFlow", "Firebase ML"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-grow">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Projects that grow from inspiration, nurtured with code
            </p>
            <div className="w-24 h-1 bg-gradient-nature rounded-full mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="nature-card overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      size="sm" 
                      className="organic-btn bg-white/90 text-primary hover:bg-white hover:scale-105"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="organic-btn border-white/50 text-white hover:bg-white/20 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="organic-btn bg-gradient-leaf text-white flex-1 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="organic-btn border-primary/30 text-primary hover:bg-primary hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="organic-btn border-2 border-primary/30 text-primary hover:bg-primary hover:text-white px-8 py-4"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};