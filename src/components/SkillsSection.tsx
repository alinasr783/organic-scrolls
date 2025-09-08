import { Code2, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      level: 95,
      description: "React, TypeScript, Next.js"
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 90,
      description: "Figma, Adobe Creative Suite"
    },
    {
      name: "Backend Development",
      icon: Database,
      level: 85,
      description: "Node.js, Python, PostgreSQL"
    },
    {
      name: "Web Performance",
      icon: Zap,
      level: 88,
      description: "Optimization, SEO, Analytics"
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      level: 80,
      description: "React Native, Flutter"
    },
    {
      name: "Full-Stack Solutions",
      icon: Globe,
      level: 92,
      description: "End-to-end development"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-grow">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cultivated through years of practice, like rings in a tree
            </p>
            <div className="w-24 h-1 bg-gradient-nature rounded-full mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="nature-card p-6 group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-leaf rounded-full flex items-center justify-center mb-6 shadow-soft group-hover:shadow-nature transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-white group-hover:animate-ripple" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Progress</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-nature rounded-full transition-all duration-1000 ease-out shadow-inner"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float blur-sm"></div>
            <div className="absolute bottom-0 right-1/3 w-8 h-8 bg-primary/15 rounded-full animate-sway blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};