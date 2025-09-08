import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder, EcoTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b734?w=100&h=100&fit=crop&crop=face",
      content: "Alex's nature-inspired approach to web development transformed our vision into a beautiful, functional reality. The organic design elements perfectly captured our brand's essence.",
      rating: 5,
      project: "Sustainable Tech Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director, Forest Studios",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Working with Alex was like watching a garden bloom. Every detail was carefully considered, from the flowing animations to the intuitive user experience. Outstanding work!",
      rating: 5,
      project: "Creative Agency Website"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO, Green Marketplace",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The attention to detail and organic design philosophy Alex brings is unmatched. Our e-commerce platform feels alive and has significantly improved user engagement.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Product Manager, Nature App Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Alex doesn't just code - they craft experiences. The mobile app they developed for us has been praised by users for its intuitive, nature-inspired interface.",
      rating: 5,
      project: "Mobile Application"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Marketing Director, Organic Brands",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "The website Alex created for us perfectly balances aesthetics with functionality. The organic animations and smooth transitions make every interaction delightful.",
      rating: 5,
      project: "Brand Website Redesign"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-grow">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seeds of trust planted, relationships that flourish
            </p>
            <div className="w-24 h-1 bg-gradient-nature rounded-full mx-auto mt-6"></div>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="nature-card p-8 md:p-12 bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center opacity-20">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-accent fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-soft">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-primary text-xs font-medium mt-1">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button 
                  onClick={prevTestimonial}
                  size="sm"
                  variant="outline"
                  className="organic-btn w-10 h-10 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-muted hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  onClick={nextTestimonial}
                  size="sm"
                  variant="outline"
                  className="organic-btn w-10 h-10 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/10 rounded-full animate-float blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/15 rounded-full animate-sway blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};