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
    <section id="home" className="min-h-screen">
      {/* Cover Photo */}
      <div className="relative h-96 bg-gradient-to-br from-primary via-primary/80 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Profile Picture */}
        <div className="relative -mt-24 mb-6 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-6 border-background shadow-xl animate-gravity-fall">
              <img 
                src="/lovable-uploads/f0a52136-1a00-43a6-b176-18a4a0208ef4.png"
                alt="Ali Nasr - Creative Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online Status */}
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="font-display font-bold text-4xl text-foreground mb-2">
            Ali Nasr
          </h1>
          <p className="text-xl text-primary font-semibold mb-3">
            Creative Developer & UI/UX Designer
          </p>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences that bridge the gap between 
            beautiful design and powerful functionality.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-lg text-primary">50+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-primary">5+</div>
              <div className="text-muted-foreground">Years Exp.</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-primary">20+</div>
              <div className="text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
            Get In Touch
          </Button>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="physics-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Quality Work</h3>
            <p className="text-sm text-muted-foreground">Delivering pixel-perfect designs and clean code</p>
          </div>

          <div className="physics-card p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Client Focused</h3>
            <p className="text-sm text-muted-foreground">Building lasting relationships through trust</p>
          </div>

          <div className="physics-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">Using cutting-edge technologies and trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};