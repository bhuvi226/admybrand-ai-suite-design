import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize, Calendar, MessageSquare, BarChart3 } from "lucide-react";

const DemoVideo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoVideos = [
    {
      id: 0,
      title: "AI Campaign Generation",
      description: "Watch how our AI creates complete marketing campaigns in seconds",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      icon: BarChart3,
    },
    {
      id: 1,
      title: "Social Media Automation",
      description: "See automated posting and engagement across all platforms",
      duration: "1:45",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Explore real-time insights and performance tracking",
      duration: "3:15",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: Calendar,
    },
  ];

  const currentDemo = demoVideos[activeDemo];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background scroll-animate">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Play className="w-4 h-4" />
            Product Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            See ADmyBRAND in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI-driven marketing automation through our interactive demos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Demo Selection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-4"
            >
              <h3 className="text-2xl font-bold mb-6">Choose Your Demo</h3>
              {demoVideos.map((demo, index) => {
                const Icon = demo.icon;
                return (
                  <motion.div
                    key={demo.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveDemo(index)}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeDemo === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Card className={`glass border-primary/20 ${
                      activeDemo === index ? 'border-primary' : ''
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            activeDemo === index ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{demo.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {demo.description}
                            </p>
                            <span className="text-xs bg-secondary px-2 py-1 rounded">
                              {demo.duration}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="glass border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentDemo.id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        src={currentDemo.thumbnail}
                        alt={currentDemo.title}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-primary ml-1" />
                        ) : (
                          <Play className="w-8 h-8 text-primary ml-1" />
                        )}
                      </motion.button>
                    </div>

                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <motion.h4
                        key={currentDemo.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-xl font-bold mb-2"
                      >
                        {currentDemo.title}
                      </motion.h4>
                      <motion.p
                        key={currentDemo.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-sm"
                      >
                        {currentDemo.description}
                      </motion.p>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <Volume2 className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <Maximize className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Marketing?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-lg">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo Call
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;