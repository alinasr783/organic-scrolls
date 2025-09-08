import { Code2, Palette, Smartphone, Globe, Figma, Zap } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 95,
      description: "User-centered design principles"
    },
    {
      name: "Prototyping",
      icon: Figma,
      level: 90,
      description: "Interactive prototypes & wireframes"
    },
    {
      name: "Frontend Development",
      icon: Code2,
      level: 85,
      description: "HTML, CSS, JavaScript, React"
    },
    {
      name: "Mobile Design",
      icon: Smartphone,
      level: 88,
      description: "iOS & Android app design"
    },
    {
      name: "Web Design",
      icon: Globe,
      level: 92,
      description: "Responsive web interfaces"
    },
    {
      name: "Design Systems",
      icon: Zap,
      level: 87,
      description: "Scalable design frameworks"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-display font-bold text-accent mb-6 animate-slide-up text-center">
            skills.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="clean-card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Proficiency</span>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
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
      </div>
    </section>
  );
};