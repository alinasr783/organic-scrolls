import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const HeroSection = () => {
  const handlePhysicsButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.classList.add('animate-btn-drop');
    
    setTimeout(() => {
      button.classList.remove('animate-btn-drop');
    }, 600);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className="text-lg text-muted-foreground mb-3 font-medium">Hello, I'm Ali Nasr</p>
              <h1 className="font-display font-bold text-hero text-foreground leading-tight mb-6">
                <span className="text-primary">Creative</span>
                <br />
                <span className="text-accent">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Crafting exceptional digital experiences<br />
                <span className="text-primary font-medium">with precision and passion.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handlePhysicsButton}
                className="physics-btn minimal-btn bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handlePhysicsButton}
                className="physics-btn minimal-btn border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative animate-gravity-fall">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/f0a52136-1a00-43a6-b176-18a4a0208ef4.png"
                  alt="John Smith - Product Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative lines */}
              <div className="absolute -bottom-4 -right-4 w-16 h-0.5 bg-foreground/20 rotate-45"></div>
              <div className="absolute -bottom-2 -right-6 w-12 h-0.5 bg-foreground/20 rotate-45"></div>
              <div className="absolute -bottom-6 -right-2 w-8 h-0.5 bg-foreground/20 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};