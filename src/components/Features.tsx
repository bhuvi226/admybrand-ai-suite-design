import { Brain, BarChart3, Target, Zap, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your data to uncover hidden insights and predict market trends."
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision audience segmentation using behavioral data and predictive modeling for maximum campaign effectiveness."
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Streamline your workflows with intelligent automation that adapts to customer behavior and optimizes in real-time."
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Dynamic dashboards with live data visualization and customizable KPI tracking across all channels."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with role-based permissions and integrated communication features."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, GDPR compliance, and comprehensive audit trails."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-foreground">Built for Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to scale your marketing efforts with cutting-edge AI technology
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 glass rounded-3xl border border-glass-border/50 hover:border-primary/30 transition-smooth scroll-animate hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mr-4 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Features;