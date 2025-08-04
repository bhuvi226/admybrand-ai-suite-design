import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Download, BookOpen, FileText, Video, ArrowRight, Calendar } from "lucide-react";

const BlogResources = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { id: "all", label: "All Resources", count: 24 },
    { id: "blog", label: "Blog Posts", count: 12 },
    { id: "case-study", label: "Case Studies", count: 6 },
    { id: "whitepaper", label: "Whitepapers", count: 4 },
    { id: "video", label: "Videos", count: 8 },
  ];

  const resources = [
    {
      id: 1,
      type: "blog",
      title: "10 AI Marketing Strategies That Increased ROI by 300%",
      excerpt: "Discover the proven AI marketing tactics that top brands use to dramatically boost their return on investment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Marketing Strategy",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      type: "case-study",
      title: "How TechCorp Automated 80% of Their Marketing",
      excerpt: "A detailed case study showing how automation transformed a B2B company's marketing operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Case Study",
      readTime: "12 min read",
      date: "2024-01-10",
      featured: false,
    },
    {
      id: 3,
      type: "whitepaper",
      title: "The Complete Guide to AI in Digital Marketing",
      excerpt: "A comprehensive 40-page guide covering everything you need to know about implementing AI in your marketing stack.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=250&fit=crop",
      category: "Guide",
      readTime: "40 min read",
      date: "2024-01-08",
      featured: false,
      downloadable: true,
    },
    {
      id: 4,
      type: "video",
      title: "Live Demo: Building Your First AI Campaign",
      excerpt: "Watch our product expert build a complete AI-powered marketing campaign from scratch in just 15 minutes.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      category: "Tutorial",
      readTime: "15 min watch",
      date: "2024-01-05",
      featured: false,
    },
    {
      id: 5,
      type: "blog",
      title: "The Future of Personalization in Marketing",
      excerpt: "Explore how AI-driven personalization is reshaping customer experiences and driving unprecedented engagement rates.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop",
      category: "Trends",
      readTime: "6 min read",
      date: "2024-01-03",
      featured: false,
    },
    {
      id: 6,
      type: "case-study",
      title: "E-commerce Success: 500% Revenue Growth Story",
      excerpt: "Learn how an online retailer used AI to optimize their entire customer journey and achieve remarkable growth.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "Success Story",
      readTime: "10 min read",
      date: "2024-01-01",
      featured: true,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === "all" || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "blog": return BookOpen;
      case "case-study": return FileText;
      case "whitepaper": return Download;
      case "video": return Video;
      default: return BookOpen;
    }
  };

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
            <BookOpen className="w-4 h-4" />
            Learn & Grow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resources & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with the latest marketing insights, case studies, and expert guides
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass border-primary/20"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {filter.label} ({filter.count})
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => {
            const ResourceIcon = getResourceIcon(resource.type);
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className={`glass border-primary/20 h-full overflow-hidden group cursor-pointer ${
                  resource.featured ? 'ring-2 ring-primary/50' : ''
                }`}>
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        <ResourceIcon className="w-3 h-3 mr-1" />
                        {resource.category}
                      </Badge>
                      {resource.featured && (
                        <Badge className="bg-primary/90">Featured</Badge>
                      )}
                    </div>
                    {resource.downloadable && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <Download className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {resource.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {resource.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(resource.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {resource.downloadable ? "Download" : "Read More"}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-muted-foreground mb-6">
                Get weekly marketing insights, case studies, and expert tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogResources;