import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DemoVideo from "@/components/DemoVideo";
import Pricing from "@/components/Pricing";
import PricingCalculator from "@/components/PricingCalculator";
import Testimonials from "@/components/Testimonials";
import BlogResources from "@/components/BlogResources";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <DemoVideo />
      <Pricing />
      <PricingCalculator />
      <Testimonials />
      <BlogResources />
      <FAQ />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
