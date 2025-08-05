import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  HelpCircle,
  Zap
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI assistant. How can I help you with ADmyBRAND today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "How does ADmyBRAND work?",
    "What are your pricing plans?",
    "Can I get a demo?",
    "What features do you offer?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
      return "Our pricing starts at $29/month for the Starter plan. We also offer Professional ($99/month) and Enterprise (custom) plans. Each plan includes different features and usage limits. Would you like me to explain the differences?";
    }
    
    if (message.includes("demo") || message.includes("demonstration")) {
      return "I'd be happy to arrange a demo! You can schedule a personalized demo call with our team, or check out our interactive product demos on the homepage. Would you prefer a live demo or would you like me to guide you through our self-service demo?";
    }
    
    if (message.includes("how") && message.includes("work")) {
      return "ADmyBRAND uses AI to automate your marketing campaigns. Simply connect your accounts, set your goals, and our AI creates and optimizes campaigns across multiple platforms. It handles content creation, audience targeting, and performance optimization automatically!";
    }
    
    if (message.includes("feature") || message.includes("what")) {
      return "ADmyBRAND offers AI campaign generation, social media automation, analytics dashboards, multi-platform posting, audience targeting, content creation, and real-time optimization. Which specific feature would you like to know more about?";
    }
    
    if (message.includes("contact") || message.includes("support")) {
      return "You can reach our support team at hello@admybrand.com or call us at +1 (555) 123-4567. We're available Mon-Fri, 8am-5pm. You can also use the contact form on this page for detailed inquiries!";
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Great to meet you! I'm here to help you learn about ADmyBRAND and how it can transform your marketing. What would you like to know?";
    }
    
    return "That's a great question! I'd recommend speaking with our team for detailed information about that. You can schedule a call or send us a message through the contact form. Is there anything else about ADmyBRAND I can help clarify?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={`fixed bottom-6 right-6 z-50 ${
        isMinimized ? "w-80" : "w-96 h-[32rem]"
      } transition-all duration-300`}
    >
      <Card className="glass border-primary/20 shadow-2xl h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 bg-primary">
                <AvatarFallback>
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">ADmyBRAND Assistant</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 p-0"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col flex-1 overflow-hidden"
            >
              <CardContent className="flex-1 flex flex-col p-4 pt-0">
                {/* Quick Questions */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-muted-foreground mb-3">
                      Quick questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => sendMessage(question)}
                          className="text-xs"
                        >
                          <HelpCircle className="w-3 h-3 mr-1" />
                          {question}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <Avatar className="w-6 h-6 bg-primary flex-shrink-0">
                          <AvatarFallback>
                            <Bot className="w-3 h-3 text-primary-foreground" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        {message.content}
                      </div>
                      
                      {message.sender === "user" && (
                        <Avatar className="w-6 h-6 bg-secondary flex-shrink-0">
                          <AvatarFallback>
                            <User className="w-3 h-3" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <Avatar className="w-6 h-6 bg-primary">
                        <AvatarFallback>
                          <Bot className="w-3 h-3 text-primary-foreground" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-secondary p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2 mt-4">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => sendMessage(inputMessage)}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default Chatbot;