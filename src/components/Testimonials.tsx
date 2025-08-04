import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite completely transformed our marketing strategy. We saw a 340% increase in qualified leads within the first quarter.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CMO",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The AI-powered insights helped us identify customer segments we never knew existed. Our conversion rates improved by 250%.",
    rating: 5
  },
  {
    name: "Emily Foster",
    role: "Head of Digital",
    company: "InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "What used to take our team weeks now happens automatically. The time savings alone justified the investment.",
    rating: 5
  },
  {
    name: "David Park",
    role: "VP Marketing",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The predictive analytics feature is game-changing. We can now anticipate market trends and adjust our strategy proactively.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">What Our</span>
            <br />
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of marketing teams who've transformed their results with ADmyBRAND AI Suite
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-12 glass border border-glass-border/50"
                  >
                    <div className="text-center">
                      {/* Quote icon */}
                      <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      {/* Rating stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author info */}
                      <div className="flex flex-col items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mb-4 border-2 border-primary/30"
                        />
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="glass"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="glass"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? "bg-primary shadow-glow"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 scroll-animate">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">250%</div>
            <div className="text-muted-foreground">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;