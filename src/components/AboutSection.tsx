export const AboutSection = () => {
  const achievements = [
    {
      title: "Senior Full-Stack Developer",
      period: "2021 - Present",
      description: "Leading development of scalable web applications using modern technologies. Specialized in React, Node.js, and cloud architecture.",
      highlight: "Built 15+ production applications"
    },
    {
      title: "Frontend Specialist",
      period: "2019 - 2021", 
      description: "Focused on creating exceptional user experiences with cutting-edge frontend frameworks and responsive design principles.",
      highlight: "Improved user engagement by 40%"
    },
    {
      title: "Creative Technologist",
      period: "2017 - 2019",
      description: "Combined creative vision with technical expertise to deliver innovative digital solutions for diverse clients and industries.",
      highlight: "Award-winning design portfolio"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-display font-bold text-primary mb-6 animate-slide-up">
            About Me
          </h2>
          <div className="animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate developer who bridges the gap between design and technology, 
              creating digital experiences that are both beautiful and functional.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Professional Journey</h3>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="physics-card p-8 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                    {achievement.period}
                  </div>
                  <div className="text-xs text-accent font-semibold uppercase tracking-wide">
                    {achievement.highlight}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="font-bold text-xl text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Preview */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Firebase', 'GraphQL'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium animate-slide-up"
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};