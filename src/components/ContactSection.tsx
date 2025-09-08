import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePhysicsButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.classList.add('animate-btn-drop');
    
    setTimeout(() => {
      button.classList.remove('animate-btn-drop');
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
                tristique quam felis. Id phaseolus dui orci vulputate consequat nulla proin. 
                Id sit scelerisque neque, proin bibendum diam.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">fawdsayed209@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-foreground">instagram.com/fawdulux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-foreground">behance.com/fawdulux</span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-48 h-48 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Contact" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-lg border-border focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit" 
                onClick={handlePhysicsButton}
                disabled={isSubmitting}
                className="physics-btn minimal-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};