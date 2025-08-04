import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { CheckIcon, Calculator, Zap, Users, TrendingUp } from "lucide-react";

const PricingCalculator = () => {
  const [users, setUsers] = useState([50]);
  const [isAnnual, setIsAnnual] = useState(false);
  const [features, setFeatures] = useState({
    analytics: false,
    priority: false,
    whiteLabel: false,
  });

  const basePrice = 29;
  const userPrice = 2;
  const annualDiscount = 0.2;

  const calculatePrice = () => {
    let price = basePrice + (users[0] * userPrice);
    
    if (features.analytics) price += 50;
    if (features.priority) price += 30;
    if (features.whiteLabel) price += 100;
    
    if (isAnnual) price *= (1 - annualDiscount);
    
    return Math.round(price);
  };

  const features_list = [
    { id: 'analytics', name: 'Advanced Analytics', price: 50, icon: TrendingUp },
    { id: 'priority', name: 'Priority Support', price: 30, icon: Zap },
    { id: 'whiteLabel', name: 'White Label', price: 100, icon: Users },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/20 scroll-animate">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Calculate Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Customize your pricing based on your team size and feature requirements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Customize Your Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Number of Users: {users[0]}
                  </label>
                  <Slider
                    value={users}
                    onValueChange={setUsers}
                    max={1000}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1</span>
                    <span>1000+</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Annual Billing</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Monthly</span>
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={setIsAnnual}
                    />
                    <span className="text-xs text-muted-foreground">Annual</span>
                  </div>
                </div>
                {isAnnual && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-green-600 font-medium"
                  >
                    💰 Save 20% with annual billing!
                  </motion.div>
                )}

                <div className="space-y-4">
                  <h4 className="font-medium">Add-on Features</h4>
                  {features_list.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.id}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="font-medium">{feature.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">
                            +${feature.price}/mo
                          </span>
                          <Switch
                            checked={features[feature.id as keyof typeof features]}
                            onCheckedChange={(checked) =>
                              setFeatures(prev => ({ ...prev, [feature.id]: checked }))
                            }
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Your Custom Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  key={calculatePrice()}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mb-6"
                >
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${calculatePrice()}
                  </div>
                  <div className="text-muted-foreground">
                    per {isAnnual ? 'month (billed annually)' : 'month'}
                  </div>
                </motion.div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{users[0]} users included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Core AI features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm">24/7 support</span>
                  </div>
                  {Object.entries(features).map(([key, enabled]) => {
                    if (!enabled) return null;
                    const feature = features_list.find(f => f.id === key);
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckIcon className="w-5 h-5 text-green-500" />
                        <span className="text-sm">{feature?.name}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <Button className="w-full" size="lg">
                  Start Free Trial
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  14-day free trial • No credit card required
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;