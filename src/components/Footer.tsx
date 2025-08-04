import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border/30 bg-background-secondary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                ADmyBRAND AI Suite
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing marketing with AI-powered insights and automation. 
                Transform your strategy and drive extraordinary results.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass border border-glass-border/50 flex items-center justify-center hover:border-primary/50 transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass border border-glass-border/50 flex items-center justify-center hover:border-primary/50 transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass border border-glass-border/50 flex items-center justify-center hover:border-primary/50 transition-smooth group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass border border-glass-border/50 flex items-center justify-center hover:border-primary/50 transition-smooth group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  hello@admybrand.ai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ADmyBRAND AI Suite. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;