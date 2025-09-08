import { Code, Palette, Smartphone, Globe, Search, Zap } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive, performant websites that grow with your business needs, from simple landing pages to complex web applications.",
      features: ["Custom Development", "E-commerce Solutions", "CMS Integration", "API Development"],
      gradient: "bg-gradient-leaf"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences that feel as natural as breathing, with designs inspired by organic patterns and flows.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "bg-gradient-forest"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building native and cross-platform mobile apps that bring your digital ecosystem to users' fingertips.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      gradient: "bg-gradient-earth"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development services covering everything from database design to user interface implementation.",
      features: ["Architecture Planning", "Database Design", "Backend Development", "Frontend Integration"],
      gradient: "bg-gradient-sunset"
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Optimizing your digital presence to grow organically in search results and understand your audience better.",
      features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Monitoring"],
      gradient: "bg-gradient-sky"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Making your digital products lightning-fast and efficient, ensuring smooth user experiences across all devices.",
      features: ["Speed Optimization", "Code Splitting", "Image Optimization", "Caching Strategies"],
      gradient: "bg-gradient-nature"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/20 via-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-grow">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nurturing digital growth through thoughtful, sustainable solutions
            </p>
            <div className="w-24 h-1 bg-gradient-nature rounded-full mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="nature-card p-8 h-full relative z-10 bg-card/80 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.gradient} rounded-full flex items-center justify-center mb-6 shadow-soft group-hover:shadow-nature transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white group-hover:animate-ripple" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Background Element */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-float blur-sm group-hover:bg-accent/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="nature-card p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Ready to Grow Your Digital Presence?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's cultivate something amazing together. Every great project starts with a conversation.
              </p>
              <button className="organic-btn bg-gradient-nature text-white px-8 py-4 rounded-full font-medium shadow-nature hover:shadow-floating transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};