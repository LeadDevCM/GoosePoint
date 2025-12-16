import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sun, Droplets, Leaf, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

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

export default function HawaiianShellfish() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/assets/images/hawaiian-shellfish-solar.jpg"
            alt="Hawaiian Shellfish Hatchery with Solar Panels in Kea'au, Hawaii"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-4"
          >
            <span className="uppercase tracking-[0.3em] text-sm font-sans font-medium text-accent">
              Kea'au, Hawaii
            </span>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-tight font-medium">
              Hawaiian Shellfish, LLC
            </h1>
            <p className="font-serif text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed">
              Pioneering sustainable oyster seed production in the heart of the Pacific.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-1 bg-accent"></div>
              <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">
                Securing Our Future
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Hawaiian Shellfish, LLC is an affiliated company of Nisbet Oyster Co. Inc. and Goose Point Oyster Co. Together, our three companies employ more than 100 people and have been in the oyster business for 39 years.
                </p>
                <p>
                  Our decision to establish a hatchery in Hawaii was a direct response to the challenges facing Pacific Northwest oyster production. Ocean acidification has made it increasingly difficult to secure a reliable source of oyster seed in Washington waters.
                </p>
                <p>
                  The Hawaiian hatchery, which draws saltwater from a deep well, was designed from the ground up to operate as energy efficiently as possible—ensuring sustainable seed production for generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-secondary/30 p-8 rounded-lg"
            >
              <h3 className="font-sans text-xl font-medium text-foreground mb-6">About Nisbet Oyster Co.</h3>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed text-sm">
                <p>
                  Nisbet Oyster Co. Inc. is a family-owned and operated oyster farm and processing operation located on Willapa Bay, Washington, producing under the Goose Point Oysters brand.
                </p>
                <p>
                  We farm on approximately 1,900 acres of tide lands in Willapa Bay on the south-western coast of Washington State. Much of our tidelands has been in oyster production since the late 1800s.
                </p>
                <p>
                  As such, we are committed to long-term sustainability and our success is tied to external environmental factors such as ocean productivity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Innovation Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <Sun className="w-12 h-12 text-accent mx-auto" />
            <h2 className="font-sans text-3xl md:text-4xl font-medium">
              Pioneering Solar Energy
            </h2>
            <p className="font-serif text-white/80 max-w-2xl mx-auto text-lg">
              Our groundbreaking solar installation is the first of its kind in Hawaii's aquaculture industry.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl font-sans font-bold text-accent mb-4">75%</div>
              <p className="font-serif text-white/90">of hatchery energy now generated by solar power</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl font-sans font-bold text-accent mb-4">170K</div>
              <p className="font-serif text-white/90">pounds of CO₂ eliminated annually</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="text-5xl font-sans font-bold text-accent mb-4">1st</div>
              <p className="font-serif text-white/90">solar-powered shellfish hatchery in Hawaii</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Hawaii Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">
              Why Hawaii?
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-lg">
              Strategic advantages make Hawaii the ideal location for sustainable oyster seed production.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground mb-3">Deep Well Seawater</h3>
              <p className="font-serif text-muted-foreground">
                Access to pristine, naturally filtered saltwater drawn from deep wells, unaffected by ocean acidification.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground mb-3">Year-Round Production</h3>
              <p className="font-serif text-muted-foreground">
                Hawaii's consistent tropical climate enables continuous seed production throughout the year.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground mb-3">Solar Energy Abundance</h3>
              <p className="font-serif text-muted-foreground">
                Abundant sunshine allows us to power our operations with clean, renewable solar energy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seed Sales Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">
              Oyster Seed Sales
            </h2>
            <p className="font-serif text-muted-foreground text-lg leading-relaxed">
              Hawaiian Shellfish produces high-quality Pacific oyster seed for commercial growers. Our seed is known for its vigor, uniformity, and excellent survival rates. Contact us to discuss your seed needs.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-medium text-foreground mb-1">Location</h4>
                    <p className="font-serif text-muted-foreground text-sm">
                      Kea'au, Hawaii<br />
                      Big Island
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-medium text-foreground mb-1">Phone</h4>
                    <p className="font-serif text-muted-foreground text-sm">
                      <a href="tel:3608756629" className="hover:text-primary transition-colors">360.875.6629</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-medium text-foreground mb-1">Email</h4>
                    <p className="font-serif text-muted-foreground text-sm">
                      <a href="mailto:sales@goosepoint.com" className="hover:text-primary transition-colors">sales@goosepoint.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/connect">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded px-8 py-6 text-sm uppercase tracking-widest font-sans font-medium">
                  Contact Us About Seed <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(32,10%,26%)] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="font-sans text-3xl md:text-4xl font-medium">
            Part of the Goose Point Family
          </h2>
          <p className="font-serif text-white/80 max-w-2xl mx-auto text-lg">
            Hawaiian Shellfish is proud to be part of the Nisbet Oyster Co. family of companies, working together to bring you the finest oysters from tide to table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/story">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground rounded px-8 py-6 text-sm uppercase tracking-widest font-sans font-medium">
                Our Story
              </Button>
            </Link>
            <Link href="/shop">
              <Button className="bg-accent text-white hover:bg-accent/90 rounded px-8 py-6 text-sm uppercase tracking-widest font-sans font-medium">
                Shop Goose Point Oysters
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
