import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header scrollY={scrollY} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Floating natural elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/20 rounded-full animate-float" 
             style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-primary/15 rounded-full animate-sway" 
             style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-accent/25 rounded-full animate-float" 
             style={{ animationDelay: '4s', animationDuration: '12s' }} />
      </div>
    </div>
  );
};

export default Index;