export const AboutSection = () => {
  const experiences = [
    {
      period: "2014-2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam."
    },
    {
      period: "2018-2020", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam."
    },
    {
      period: "2020 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* About Header */}
        <div className="mb-16">
          <h2 className="font-display text-display font-bold text-accent mb-6 animate-slide-up">
            about.
          </h2>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
              tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. 
              Id sit scelerisque neque, proin bibendum diam.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg mb-3">
                  {exp.period}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};