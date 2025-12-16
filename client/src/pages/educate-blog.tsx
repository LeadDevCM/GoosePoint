import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Sample blog data
const blogArticles = [
  {
    id: 1,
    title: "Understanding Oyster Farming in Willapa Bay",
    excerpt: "Explore the sustainable practices that make Willapa Bay an ideal environment for growing world-class oysters. Learn about our commitment to environmental stewardship.",
    content: "Our oyster farming practices in Willapa Bay have been refined over decades. We focus on sustainable methods that actually improve water quality and create a thriving ecosystem.",
    date: "December 10, 2024",
    author: "Goose Point Team",
    category: "Farming"
  },
  {
    id: 2,
    title: "The Science Behind Oyster Flavor",
    excerpt: "Discover how water salinity, temperature, and food sources influence the unique taste profile of our oysters.",
    content: "The flavor of oysters is directly influenced by their environment. At Goose Point, our waters provide the perfect balance of salt, minerals, and nutrients that create our signature briny, slightly sweet flavor.",
    date: "December 5, 2024",
    author: "Goose Point Team",
    category: "Education"
  },
  {
    id: 3,
    title: "Seasonal Harvest Guide",
    excerpt: "Learn about oyster quality throughout the year and when to enjoy oysters at their peak.",
    content: "While we farm oysters year-round, each season offers unique characteristics. Winter oysters tend to be plumper due to cooler water temperatures and abundant food sources. Summer oysters have a lighter flavor profile.",
    date: "November 28, 2024",
    author: "Goose Point Team",
    category: "Seasonal"
  },
  {
    id: 4,
    title: "Sustainability and Conservation Efforts",
    excerpt: "How our farming methods protect the Willapa Bay estuary and support local marine ecosystems.",
    content: "Oyster farming is inherently sustainable. Oysters are filter feeders that improve water quality by removing excess nutrients and particles. Our practices go beyond compliance to actively enhance our local environment.",
    date: "November 20, 2024",
    author: "Goose Point Team",
    category: "Sustainability"
  }
];

export default function EducateBlog() {
  return (
    <div className="flex flex-col gap-0">
      {/* Back Navigation */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/educate">
            <Button variant="link" className="text-primary pl-0 hover:text-primary/80 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Education Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4 max-w-3xl">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium">Oyster Blog</h1>
          <p className="font-serif text-lg text-white/90 font-light leading-relaxed">
            Expert insights on oyster farming, sustainability, techniques, and industry trends from the Goose Point team.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {blogArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <p className="text-sm font-sans font-medium text-primary uppercase tracking-widest">{article.category}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <h3 className="font-sans text-xl md:text-2xl font-medium text-foreground leading-tight">
                      {article.title}
                    </h3>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-border">
                    <div className="flex flex-col gap-2 text-xs text-muted-foreground font-sans">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <Button variant="link" className="text-primary pl-0 hover:text-primary/80 font-sans font-medium text-sm justify-start">
                      Read Article →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 bg-secondary/30 rounded-lg p-8 md:p-12 border border-border text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-primary font-sans font-medium uppercase tracking-widest mb-3">Content Expansion</p>
            <h3 className="font-sans text-2xl md:text-3xl font-medium text-foreground mb-4">More Articles Coming Soon</h3>
            <p className="font-serif text-muted-foreground leading-relaxed mb-6">
              We're constantly creating new content about oyster farming techniques, recipes, sustainability, and industry insights. Join our Family & Friends Club to stay updated with the latest articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border border-border rounded px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-white hover:bg-primary/90 rounded px-6 py-2 text-xs uppercase tracking-widest font-sans font-bold">
                Join the Club
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="font-sans text-2xl md:text-3xl font-medium">Explore Other Resources</h2>
          <p className="font-serif text-white/90 leading-relaxed">
            Check out our recipes, videos, and media coverage to dive deeper into the world of oyster farming.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <Link href="/educate/recipes">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded py-4 text-xs uppercase tracking-widest font-sans font-bold">
                Recipes
              </Button>
            </Link>
            <Link href="/educate/videos">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded py-4 text-xs uppercase tracking-widest font-sans font-bold">
                Videos
              </Button>
            </Link>
            <Link href="/educate/media">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded py-4 text-xs uppercase tracking-widest font-sans font-bold">
                Media
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
