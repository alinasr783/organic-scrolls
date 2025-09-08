import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Nature-inspired abstract background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-accent/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-3/4 right-1/6 w-32 h-32 bg-primary/5 rounded-full animate-sway blur-md"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-accent/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-grow">
          <h1 className="font-display font-bold text-hero md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight">
            <span className="bg-gradient-nature bg-clip-text text-transparent">Alex</span>
            <br />
            <span className="text-foreground">Thompson</span>
          </h1>
          
          <div className="relative mb-8">
            <h2 className="font-nature text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
              Creative Developer & Nature Enthusiast
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-nature rounded-full"></div>
          </div>

          <p className="font-nature text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Designing with Nature, Building with Code
            <br />
            <span className="text-primary font-medium">Creating digital experiences that feel alive</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="organic-btn bg-gradient-nature hover:bg-gradient-forest text-white font-medium px-8 py-4 text-lg shadow-nature group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="organic-btn border-2 border-primary/30 text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 text-lg shadow-soft group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-ripple" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center animate-bounce hover:animate-pulse transition-all duration-300 group"
        >
          <span className="text-sm text-muted-foreground mb-2 font-nature">Scroll Down</span>
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
            <ChevronDown className="w-5 h-5 text-primary group-hover:animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};