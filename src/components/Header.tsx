import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrollY: number;
}

export const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-bold text-xl text-foreground tracking-tight">
            Ali Nasr
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};