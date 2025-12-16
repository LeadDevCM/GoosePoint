import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingBag, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FarmStore() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4 max-w-3xl">
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-medium">Farm Store</h1>
          <p className="font-serif text-lg text-white/80 font-light leading-relaxed">
            Choose how you'd like to get fresh Goose Point oysters. Shop online for convenient delivery or visit us in person.
          </p>
        </div>
      </div>

      {/* Two-Path Cards Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {/* Path 1: Shop Online */}
          <Link href="/shop/products">
            <motion.div
              variants={fadeInUp}
              className="group cursor-pointer h-full"
            >
              <div className="flex flex-col h-full bg-white border border-gray-100 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src="https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg"
                    alt="Shop Online - Fresh oysters delivered to your door"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:to-black/50 transition-all duration-300" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-between flex-1 p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-sans text-2xl md:text-3xl font-medium text-foreground">Shop Online</h2>
                    </div>

                    <div className="space-y-3">
                      <p className="font-sans text-base font-medium text-foreground">Farm Store Products</p>
                      <p className="font-serif text-base text-muted-foreground leading-relaxed font-light">
                        Fresh shellfish delivered directly to your door. Browse our full selection of oysters, shucked varieties, and specialty products with fast, reliable shipping.
                      </p>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Browse our complete catalog</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Fast, insulated shipping available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Freshness guaranteed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 border-none rounded py-6 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300">
                      Shop Online
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Path 2: Visit The Oystery */}
          <Link href="/the-oystery">
            <motion.div
              variants={fadeInUp}
              className="group cursor-pointer h-full"
            >
              <div className="flex flex-col h-full bg-white border border-gray-100 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src="/assets/images/new/family-hero.jpg"
                    alt="Visit The Oystery - Experience our farm store in person"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 group-hover:to-black/50 transition-all duration-300" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-between flex-1 p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-sans text-2xl md:text-3xl font-medium text-foreground">Visit The Oystery</h2>
                    </div>

                    <div className="space-y-3">
                      <p className="font-sans text-base font-medium text-foreground">Farm Store In-Person</p>
                      <p className="font-serif text-base text-muted-foreground leading-relaxed font-light">
                        Experience our farm store in person. Talk with our knowledgeable staff, pick your oysters fresh, and discover everything our working farm has to offer.
                      </p>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Personal shopping experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Expert staff assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">+</span>
                        <span>Learn about our farm</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 border-none rounded py-6 text-xs uppercase tracking-widest font-sans font-bold transition-all duration-300">
                      Visit The Oystery
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Feature Section */}
      <section className="bg-secondary/40 py-16 md:py-24 mt-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-sans text-2xl md:text-3xl font-medium text-foreground">Why Choose Goose Point</h2>
            <p className="font-serif text-base text-muted-foreground max-w-2xl mx-auto">
              Whether you shop online or visit us in person, you're getting the same commitment to quality and freshness.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="text-4xl font-bold text-accent">40+</div>
              <h3 className="font-sans text-lg font-medium text-foreground">Years of Tradition</h3>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                Family-owned oyster farming with decades of expertise and passion.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="text-4xl font-bold text-accent">100%</div>
              <h3 className="font-sans text-lg font-medium text-foreground">Sustainable</h3>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                Environmentally responsible farming that improves water quality.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <div className="text-4xl font-bold text-accent">Fresh</div>
              <h3 className="font-sans text-lg font-medium text-foreground">Year-Round</h3>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                Consistently plump, flavorful oysters available every season.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
