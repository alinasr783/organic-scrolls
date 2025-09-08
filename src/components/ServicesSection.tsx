import { Palette, Code, Smartphone, Globe, Search, Zap } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and user-centered designs that solve real problems and deliver exceptional experiences."
    },
    {
      icon: Code,
      title: "Frontend Development", 
      description: "Building responsive and performant web interfaces with modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Designing native and cross-platform mobile applications with focus on usability and performance."
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Crafting beautiful and functional websites that engage users and achieve business goals."
    },
    {
      icon: Search,
      title: "User Research",
      description: "Conducting research to understand user needs, behaviors, and pain points to inform design decisions."
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Creating interactive prototypes to test and validate design concepts before development begins."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-display font-bold text-accent mb-6 animate-slide-up text-center">
            services.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="clean-card p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};