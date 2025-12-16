import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Video, Newspaper, Image, ArrowRight } from "lucide-react";

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

export default function Educate() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-primary/90 to-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22grid%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 100 0 L 0 0 0 100%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22url(%23grid)%22/></svg>')] opacity-10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-tight font-medium">
              Learn About <span className="italic text-accent">Oysters</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Discover the art and science of oyster farming, sustainable practices, delicious recipes, and the stories behind every oyster we harvest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Explore Our Resources</h3>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">Education Hub</h2>
            <p className="text-muted-foreground text-lg font-serif max-w-2xl mx-auto">
              From bay to table, we share our knowledge and passion for oyster farming and sustainable practices.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {/* Blog Card */}
            <Link href="/educate/blog">
              <motion.div variants={fadeInUp} className="group cursor-pointer h-full">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="flex flex-col gap-6 h-full">
                    <div className="bg-primary/10 p-4 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="font-sans text-xl font-medium text-foreground">Oyster Blog</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">
                        Articles about oyster farming, sustainability, industry insights, and our practices in the Willapa Bay estuary.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Read Articles</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Recipes Card */}
            <Link href="/educate/recipes">
              <motion.div variants={fadeInUp} className="group cursor-pointer h-full">
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-8 h-full border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="flex flex-col gap-6 h-full">
                    <div className="bg-accent/10 p-4 rounded-lg w-fit group-hover:bg-accent/20 transition-colors duration-300">
                      <Newspaper className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="font-sans text-xl font-medium text-foreground">Recipes</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">
                        Discover delicious ways to prepare and enjoy oysters, from raw bars to roasted preparations and creative appetizers.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Explore Recipes</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Videos Card */}
            <Link href="/educate/videos">
              <motion.div variants={fadeInUp} className="group cursor-pointer h-full">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="flex flex-col gap-6 h-full">
                    <div className="bg-primary/10 p-4 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="font-sans text-xl font-medium text-foreground">Video Content</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">
                        Watch our educational videos about oyster farming techniques, shucking tips, and the stories of our farming practices.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Watch Videos</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Media Card */}
            <Link href="/educate/media">
              <motion.div variants={fadeInUp} className="group cursor-pointer h-full">
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-8 h-full border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="flex flex-col gap-6 h-full">
                    <div className="bg-accent/10 p-4 rounded-lg w-fit group-hover:bg-accent/20 transition-colors duration-300">
                      <Image className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="font-sans text-xl font-medium text-foreground">Media & Press</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">
                        Press mentions, TV features, and media coverage highlighting our oyster farming operations and community presence.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Coverage</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Popular Resources</h3>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">Featured Content</h2>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          >
            {/* Featured Blog Post */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary/30" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-xs uppercase tracking-widest text-primary font-sans font-medium">Featured Article</p>
                <h3 className="font-sans text-2xl font-medium text-foreground">Understanding Oyster Farming in Willapa Bay</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Explore the sustainable practices that make Willapa Bay an ideal environment for growing world-class oysters. Learn about our commitment to environmental stewardship and how modern farming techniques protect our estuary.
                </p>
                <Link href="/educate/blog">
                  <Button variant="link" className="text-primary pl-0 hover:text-primary/80 font-sans font-medium text-sm flex items-center gap-2">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Featured Recipe */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <Newspaper className="h-12 w-12 text-accent/30" />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-xs uppercase tracking-widest text-accent font-sans font-medium">Featured Recipe</p>
                <h3 className="font-sans text-2xl font-medium text-foreground">Classic Raw Bar Oysters</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  The simplest preparation is often the best. Learn how to properly shuck and serve oysters on the half shell with the perfect accompaniments to highlight their natural briny flavor and sweet finish.
                </p>
                <Link href="/educate/recipes">
                  <Button variant="link" className="text-accent pl-0 hover:text-accent/80 font-sans font-medium text-sm flex items-center gap-2">
                    View Recipe <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Featured Video Section */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
            <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <Video className="h-16 w-16 text-white/80" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent group-hover:h-2 transition-all duration-300" />
            </div>
            <div className="p-8 space-y-4">
              <p className="text-xs uppercase tracking-widest text-primary font-sans font-medium">Featured Video</p>
              <h3 className="font-sans text-2xl font-medium text-foreground">Behind the Scenes at Goose Point</h3>
              <p className="font-serif text-muted-foreground leading-relaxed">
                Get an exclusive look at our oyster farming operations in Willapa Bay. Watch as we explain our sustainable practices and demonstrate proper shucking techniques from our family farm.
              </p>
              <Link href="/educate/videos">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded px-8 py-6 text-xs uppercase tracking-widest font-sans font-bold mt-4">
                  Watch More Videos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-3xl">
          <h2 className="font-sans text-3xl md:text-4xl font-medium">Ready to Learn More?</h2>
          <p className="font-serif text-lg text-white/90 leading-relaxed">
            Dive deep into our educational resources to understand the artistry and science behind exceptional oyster farming. Whether you're a culinary enthusiast or just curious, we have resources for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-md mx-auto">
            <Link href="/educate/blog">
              <Button className="w-full bg-white text-primary hover:bg-accent hover:text-white border-none rounded py-6 text-xs uppercase tracking-widest font-sans font-bold">
                Explore Blog
              </Button>
            </Link>
            <Link href="/recipes">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded py-6 text-xs uppercase tracking-widest font-sans font-bold">
                View All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
