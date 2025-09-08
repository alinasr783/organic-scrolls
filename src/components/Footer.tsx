import { Leaf, Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:alex@naturedev.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center shadow-soft">
                  <Leaf className="w-6 h-6 text-white animate-sway" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Nature<span className="text-primary">Dev</span>
                  </h3>
                  <p className="text-xs text-muted-foreground">Creative Developer</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Crafting digital experiences inspired by the organic patterns and flows of nature. 
                Where code meets creativity, and technology grows sustainably.
              </p>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and sustainable code</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Stay Connected</h4>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong><br />
                  alex@naturedev.com
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Location:</strong><br />
                  Portland, Oregon
                </p>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-soft group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 group-hover:animate-ripple" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider with Organic Shape */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-6">
                <div className="w-8 h-1 bg-gradient-nature rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} NatureDev. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors duration-300">
                Sustainability
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-4 left-1/4 w-3 h-3 bg-accent/20 rounded-full animate-float blur-sm pointer-events-none"></div>
          <div className="absolute bottom-8 right-1/3 w-4 h-4 bg-primary/15 rounded-full animate-sway blur-sm pointer-events-none"></div>
        </div>
      </div>
    </footer>
  );
};