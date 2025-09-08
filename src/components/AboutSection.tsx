import { Leaf, Heart, Code, Palette } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Crafting seamless experiences from front to back"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing interfaces that feel natural and intuitive"
    },
    {
      icon: Heart,
      title: "Nature-Inspired",
      description: "Drawing inspiration from the organic world around us"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-grow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full mb-6 shadow-soft">
              <Leaf className="w-8 h-8 text-white animate-sway" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-nature rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative z-10">
                {/* Organic frame */}
                <div className="absolute inset-0 bg-gradient-nature rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-muted via-secondary to-accent rounded-full shadow-floating flex items-center justify-center">
                    <div className="w-72 h-72 bg-muted rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                      AT
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/15 rounded-full animate-sway blur-sm"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="animate-grow">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Hello! I'm Alex, a passionate creative developer who believes that the best digital experiences 
                  draw inspiration from the natural world. With over 5 years of experience in web development 
                  and design, I specialize in creating organic, intuitive interfaces that feel as natural as 
                  breathing.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  My approach combines modern technology with timeless design principles found in nature – 
                  from the golden ratio in sunflower spirals to the efficient branching patterns of trees. 
                  Every project is an opportunity to create something that's not just functional, but alive.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-card/50 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-leaf rounded-full flex items-center justify-center shadow-soft group-hover:shadow-nature transition-all duration-300">
                      <item.icon className="w-6 h-6 text-white group-hover:animate-ripple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};