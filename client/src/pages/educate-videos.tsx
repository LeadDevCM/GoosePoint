import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Play } from "lucide-react";

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

// Sample video data
const videos = [
  {
    id: 1,
    title: "How to Shuck an Oyster",
    category: "Technique",
    description: "Master the proper technique for shucking oysters safely and efficiently.",
    duration: "5:24"
  },
  {
    id: 2,
    title: "Farm Tour: Willapa Bay",
    category: "Farm Life",
    description: "Join us for an exclusive tour of our oyster farming operations in Willapa Bay.",
    duration: "12:15"
  },
  {
    id: 3,
    title: "Oyster Shooters 101",
    category: "Recipe",
    description: "Learn how to prepare the perfect oyster shooter, our signature drink.",
    duration: "3:42"
  },
  {
    id: 4,
    title: "Understanding Water Quality",
    category: "Education",
    description: "Discover how water quality impacts oyster flavor and our sustainable practices.",
    duration: "8:33"
  },
  {
    id: 5,
    title: "Grilling Fresh Oysters",
    category: "Recipe",
    description: "Chef's guide to grilling oysters in the shell with garlic butter.",
    duration: "6:18"
  },
  {
    id: 6,
    title: "Seasonal Harvest Highlights",
    category: "Farm Life",
    description: "See the highlights from our seasonal harvest operations and quality control.",
    duration: "9:50"
  }
];

export default function EducateVideos() {
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
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium">Video Content</h1>
          <p className="font-serif text-lg text-white/90 font-light leading-relaxed">
            Educational videos about oyster farming, preparation techniques, and behind-the-scenes farm tours.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-sans font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="space-y-3 flex-1">
                      <p className="text-xs font-sans font-medium text-primary uppercase tracking-widest">
                        {video.category}
                      </p>
                      <h3 className="font-sans text-lg font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded px-4 py-2 text-xs uppercase tracking-widest font-sans font-bold flex items-center justify-center gap-2">
                        <Play className="w-4 h-4 fill-white" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Video Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 border border-primary/20 max-w-3xl mx-auto"
          >
            <p className="text-sm text-primary font-sans font-medium uppercase tracking-widest mb-3">Featured Content</p>
            <h3 className="font-sans text-2xl md:text-3xl font-medium text-foreground mb-4">Behind the Scenes at Goose Point</h3>
            <p className="font-serif text-muted-foreground leading-relaxed mb-6">
              Get an exclusive look at our oyster farming operations in Willapa Bay. Watch our team in action as we explain sustainable practices and demonstrate quality control measures that ensure every oyster meets our high standards.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold inline-flex items-center gap-2">
              <Play className="w-4 h-4 fill-white" />
              Watch Featured Video
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="font-sans text-2xl md:text-3xl font-medium">Join the Family & Friends Club</h2>
          <p className="font-serif text-white/90 leading-relaxed">
            New videos are added regularly. Join our club to get notifications when we publish fresh educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-white/90 rounded px-6 py-2 text-xs uppercase tracking-widest font-sans font-bold">
              Join the Club
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
