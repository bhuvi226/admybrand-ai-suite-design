import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto scroll-animate">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-glass-border/50 animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Marketing Revolution
            </span>
            <Zap className="w-4 h-4 text-primary" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">ADmyBRAND</span>
            <br />
            <span className="text-foreground">AI Suite</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing strategy with AI-powered insights, 
            automated campaigns, and data-driven decisions that drive 
            <span className="gradient-text font-semibold"> extraordinary results</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-4">Trusted by 10,000+ marketing teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="font-semibold">Microsoft</span>
              <span className="font-semibold">Shopify</span>
              <span className="font-semibold">Stripe</span>
              <span className="font-semibold">HubSpot</span>
              <span className="font-semibold">Slack</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-12 h-12 glass rounded-2xl flex items-center justify-center animate-float">
        <Sparkles className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-32 left-10 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
        <Zap className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;