import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-4 mx-auto text-center"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-glass-border/50"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Marketing Revolution
            </span>
            <Zap className="w-4 h-4 text-primary" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="gradient-text">ADmyBRAND</span>
            <br />
            <span className="text-foreground">AI Suite</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your marketing strategy with AI-powered insights, 
            automated campaigns, and data-driven decisions that drive 
            <span className="gradient-text font-semibold"> extraordinary results</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-4">Trusted by 10,000+ marketing teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Microsoft", "Shopify", "Stripe", "HubSpot", "Slack"].map((company, index) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="font-semibold hover:text-foreground transition-colors cursor-pointer"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-12 h-12 glass rounded-2xl flex items-center justify-center"
      >
        <Sparkles className="w-6 h-6 text-accent" />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-10 w-16 h-16 glass rounded-2xl flex items-center justify-center"
      >
        <Zap className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;