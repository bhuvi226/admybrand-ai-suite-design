import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started with AI marketing",
    features: [
      "Up to 5,000 contacts",
      "Basic AI analytics",
      "3 campaign templates",
      "Email support",
      "Social media scheduling",
      "Basic reporting"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "glass" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Advanced features for growing marketing teams",
    features: [
      "Up to 50,000 contacts",
      "Advanced AI insights",
      "Unlimited campaigns",
      "Priority support",
      "Multi-channel automation",
      "Custom integrations",
      "A/B testing",
      "Advanced analytics"
    ],
    buttonText: "Get Started",
    buttonVariant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited contacts",
      "Custom AI models",
      "White-label solution",
      "Dedicated support",
      "Enterprise integrations",
      "Advanced security",
      "Custom reporting",
      "SSO & SAML"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Simple</span>
            <br />
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your team. Scale up as you grow.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 glass rounded-3xl border transition-smooth scroll-animate hover:shadow-glow ${
                plan.popular 
                  ? "border-primary/50 shadow-glow scale-105" 
                  : "border-glass-border/50 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold shadow-glow">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full group"
              >
                {plan.buttonText}
                {plan.popular && (
                  <Zap className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial • No credit card required
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              24/7 support
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Migration assistance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;