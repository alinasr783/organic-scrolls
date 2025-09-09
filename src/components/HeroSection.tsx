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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="home" className="mouse-light" onMouseMove={handleMouseMove}>
      {/* Compact Cover Photo */}
      <div className="relative h-48 bg-gradient-to-r from-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4 text-white/70 text-sm">
          Creative Developer Portfolio
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-8 -mt-16">
          
          {/* Left: Profile Picture */}
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <img 
                  src="/lovable-uploads/f0a52136-1a00-43a6-b176-18a4a0208ef4.png"
                  alt="Ali Nasr - Creative Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            
            {/* Quick Stats */}
            <div className="w-full bg-card rounded-lg border border-border p-4 mt-4">
              <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">Quick Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Projects</span>
                  <span className="font-semibold text-primary">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="font-semibold text-primary">6 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Clients</span>
                  <span className="font-semibold text-primary">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Main Information */}
          <div className="lg:w-3/4 pt-4">
            
            {/* Header Info */}
            <div className="mb-6">
              <h1 className="font-display font-bold text-3xl text-foreground mb-2">
                Ali Nasr
              </h1>
              <p className="text-lg text-primary font-semibold mb-2">
                Senior Frontend Developer & UI/UX Designer
              </p>
              <p className="text-muted-foreground text-sm">
                Cairo, Egypt • Available for freelance projects
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <Button 
                onClick={handlePhysicsButton}
                className="physics-btn bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handlePhysicsButton}
                className="physics-btn border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Information Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* About */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  About
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate frontend developer with 6 years of experience creating modern, 
                  responsive web applications using React, TypeScript, and cutting-edge technologies.
                </p>
              </div>

              {/* Current Status */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Current Status
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-muted-foreground">Available for new projects</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Working on: E-commerce Platform
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Top Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>📧 ali.nasr@email.com</div>
                  <div>📱 +20 123 456 7890</div>
                  <div>🌐 LinkedIn • GitHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};