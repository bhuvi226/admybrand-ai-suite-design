import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite integrate with my existing tools?",
    answer: "ADmyBRAND AI Suite offers seamless integration with over 200+ popular marketing tools including Salesforce, HubSpot, Mailchimp, Google Analytics, and more. Our API-first approach ensures smooth data flow and our dedicated integration team provides white-glove setup support."
  },
  {
    question: "What kind of AI models power the analytics?",
    answer: "We use state-of-the-art machine learning models including natural language processing, predictive analytics, and computer vision. Our AI is trained on billions of marketing data points and continuously learns from your specific business patterns to provide increasingly accurate insights."
  },
  {
    question: "Is my data secure and compliant?",
    answer: "Absolutely. We maintain SOC 2 Type II certification, GDPR compliance, and bank-level encryption. Your data is processed in secure, geographically distributed data centers with end-to-end encryption, regular security audits, and granular access controls."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see initial insights within 24 hours of setup and measurable improvements within the first 30 days. However, the AI becomes more effective as it learns from your data, with substantial ROI improvements typically seen within 90 days."
  },
  {
    question: "Do I need technical expertise to use the platform?",
    answer: "Not at all! ADmyBRAND AI Suite is designed for marketers, not engineers. Our intuitive interface, guided setup process, and extensive documentation make it easy for anyone to start. Plus, our customer success team provides personalized onboarding and training."
  },
  {
    question: "What's included in the free trial?",
    answer: "Your 14-day free trial includes full access to all Professional plan features: unlimited campaigns, advanced AI insights, priority support, and all integrations. No credit card required, and you can cancel anytime with no commitments."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you have complete flexibility to change your plan at any time. Upgrades take effect immediately, while downgrades are processed at your next billing cycle. Our team can help you choose the right plan as your needs evolve."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 support through multiple channels: live chat, email, phone, and video calls. Professional and Enterprise customers get priority support with dedicated success managers and technical specialists."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-20 scroll-animate">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked</span>
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-glass-border/50 overflow-hidden transition-smooth hover:border-primary/30 scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-glass-bg/30 transition-smooth"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index 
                    ? "max-h-[400px] opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="p-8 glass rounded-3xl border border-glass-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you succeed. Get in touch with us for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-glow hover:shadow-accent transition-smooth">
                Contact Support
              </button>
              <button className="px-6 py-3 glass border border-glass-border/50 text-foreground rounded-xl font-semibold hover:bg-glass-bg/80 transition-smooth">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;