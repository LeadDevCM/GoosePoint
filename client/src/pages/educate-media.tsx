import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

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

// Sample media mentions
const mediaMentions = [
  {
    id: 1,
    outlet: "Discovery Channel",
    title: "Dirty Jobs: Oyster Farming",
    date: "2023",
    type: "TV Feature"
  },
  {
    id: 2,
    outlet: "Food & Wine Magazine",
    title: "Washington's Hidden Oyster Gems",
    date: "March 2024",
    type: "Magazine"
  },
  {
    id: 3,
    outlet: "FYI Network",
    title: "Coastal Living Episode",
    date: "2023",
    type: "TV Feature"
  },
  {
    id: 4,
    outlet: "Discovery Coast Magazine",
    title: "Local Oyster Farming Excellence",
    date: "Fall 2023",
    type: "Magazine"
  },
  {
    id: 5,
    outlet: "Seattle Times",
    title: "Willapa Bay Oyster Renaissance",
    date: "June 2024",
    type: "Press"
  },
  {
    id: 6,
    outlet: "Bon Appetit Online",
    title: "Where to Find the Best Pacific Oysters",
    date: "April 2024",
    type: "Digital"
  }
];

export default function EducateMedia() {
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
      <section className="bg-gradient-to-br from-accent/90 to-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4 max-w-3xl">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium">Media & Press</h1>
          <p className="font-serif text-lg text-white/90 font-light leading-relaxed">
            Featured coverage, press mentions, and media resources highlighting Goose Point Oysters and our farming operations.
          </p>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground">As Seen In</p>
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground">Recent Coverage</h2>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Goose Point Oysters has been featured in numerous media outlets celebrating our commitment to quality and sustainability.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16"
          >
            {mediaMentions.map((mention) => (
              <motion.div
                key={mention.id}
                variants={fadeInUp}
                className="bg-white border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-xs font-sans font-medium text-accent uppercase tracking-widest mb-1">
                      {mention.type}
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">{mention.date}</p>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-sans text-lg font-medium text-foreground">
                    {mention.title}
                  </h3>
                  <p className="font-serif text-foreground font-medium">
                    {mention.outlet}
                  </p>
                </div>
                <Button variant="link" className="text-accent pl-0 hover:text-accent/80 font-sans font-medium text-sm justify-start mt-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Feature
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Media Kit CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-8 md:p-12 border border-accent/20 text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-accent font-sans font-medium uppercase tracking-widest mb-3">Download</p>
            <h3 className="font-sans text-2xl md:text-3xl font-medium text-foreground mb-4">Media Kit</h3>
            <p className="font-serif text-muted-foreground leading-relaxed mb-8">
              Access our complete media kit with high-resolution photos, company information, farm history, and press release templates.
            </p>
            <Button className="bg-accent text-white hover:bg-accent/90 rounded px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Media Kit (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-3">
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground">Visual Assets</p>
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground">Photo Gallery</h2>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/10 flex items-center justify-center overflow-hidden group cursor-pointer hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-center p-4">
                  <p className="text-sm text-accent font-sans font-medium">Photo {item}</p>
                  <p className="text-xs text-muted-foreground mt-2 font-serif">Farm & Operations</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Photo Gallery (ZIP)
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="font-sans text-2xl md:text-3xl font-medium">Press Inquiries</h2>
          <p className="font-serif text-white/90 leading-relaxed">
            For press inquiries, interviews, or media requests, please contact our public relations team.
          </p>
          <div className="space-y-3 pt-4">
            <p className="font-sans text-white">
              <strong>Email:</strong> media@goosepointoysters.com
            </p>
            <p className="font-sans text-white">
              <strong>Phone:</strong> (360) 555-0123
            </p>
          </div>
          <Link href="https://www.goosepointoysters.com/contact" className="inline-block">
            <Button className="bg-white text-accent hover:bg-white/90 rounded px-8 py-3 text-xs uppercase tracking-widest font-sans font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
