import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content: "John's design work transformed our product completely. His attention to detail and user-centered approach resulted in a 40% increase in user engagement.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen", 
      role: "Product Manager",
      content: "Working with John was a game-changer. His ability to translate complex requirements into intuitive designs is remarkable.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director",
      content: "John doesn't just design - he solves problems. His strategic thinking and design skills helped us achieve our business goals.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handlePhysicsButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.classList.add('animate-btn-drop');
    
    setTimeout(() => {
      button.classList.remove('animate-btn-drop');
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-display font-bold text-accent mb-6 animate-slide-up">
            testimonials.
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="clean-card p-8 md:p-12 text-center animate-slide-up">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <h4 className="font-semibold text-foreground text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button 
              onClick={(e) => { handlePhysicsButton(e); prevTestimonial(); }}
              size="sm"
              variant="outline"
              className="physics-btn w-10 h-10 rounded-full border-border"
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
                      ? 'bg-primary w-6' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={(e) => { handlePhysicsButton(e); nextTestimonial(); }}
              size="sm"
              variant="outline"
              className="physics-btn w-10 h-10 rounded-full border-border"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};