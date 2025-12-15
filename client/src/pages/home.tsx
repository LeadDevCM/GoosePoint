import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

// Using real images from Goose Point website, attempting to use full resolution by removing dimension suffixes
const heroImage = "/assets/images/new/shooters-closeup.jpg"; 
const oysterImage = "/assets/images/new/oysters-lemon-knife.jpg";
const shuckedImage = "https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg";
const shootersImage = "/assets/images/new/shooters-closeup.jpg";
const smokedImage = "https://goosepoint.com/wp-content/uploads/2016/07/smoked_oysters-1.jpg";
const knifeImage = "https://goosepoint.com/wp-content/uploads/2024/08/logo-knife-cutting-board.jpg";
const dinnerBundleImage = "https://goosepoint.com/wp-content/uploads/2020/05/dinnerbundle-scaled.jpg";

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

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Goose Point Oysters Clam Bake" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <h2 className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-accent font-bold drop-shadow-md">
              Willapa Bay, Washington
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
              Always in <span className="italic text-accent text-shadow-lg">Season</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Sustainably farmed shellfish delivered fresh from our pristine waters to your table.
            </p>
            <div className="pt-8">
              <Link href="/shop">
                <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white border-none rounded-none px-10 py-6 text-sm tracking-widest uppercase font-bold transition-all duration-300 shadow-xl">
                  Shop The Harvest
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Fresh From The Bay</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Our Selection</h2>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Product 1 */}
            <ProductCard 
              id="shellstock-oysters"
              image={oysterImage}
              title="Shellstock Oysters"
              price="$14.00 – $18.00"
              description="Fresh, in-shell oysters harvested daily. The pure taste of Willapa Bay."
            />
            {/* Product 2 */}
            <ProductCard 
              id="pre-shucked-blueseal"
              image={shuckedImage}
              title="Pre-Shucked BlueSeal™"
              price="$18.00 – $20.00"
              description="Convenient, plumb, and ready to use. Perfect for stews and frying."
            />
             {/* Product 3 */}
             <ProductCard 
              id="oyster-shooters"
              image={shootersImage}
              title="Oyster Shooters"
              price="$24.00 – $96.00"
              description="Our signature shooters. The perfect party starter."
            />
            {/* Product 4 */}
            <ProductCard 
              id="smoked-oysters"
              image={smokedImage}
              title="Smoked Oysters"
              price="$14.00 – $41.00"
              description="Rich, smoky flavor. A gourmet treat for any occasion."
            />
            {/* Product 5 */}
            <ProductCard 
              id="bbq-dinner-bundle"
              image={dinnerBundleImage}
              title="BBQ Dinner Bundle"
              price="$60.00"
              description="Everything you need for a perfect seafood feast."
            />
            {/* Product 6 */}
            <ProductCard 
              id="shucking-knife"
              image={knifeImage}
              title="Shucking Knife"
              price="$12.50"
              description="Professional grade tool for opening your oysters with ease."
            />
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/shop">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 text-xs uppercase tracking-widest font-bold">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          <div className="relative h-[500px] lg:h-auto order-2 lg:order-1 bg-gray-100">
             <img 
              src="/assets/images/new/family-hero.jpg" 
              alt="The Nisbet Family on the mudflats" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-primary text-white order-1 lg:order-2">
            <div className="space-y-8 max-w-lg">
              <div className="w-20 h-1 bg-accent"></div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Stewards of the <span className="italic text-accent">Estuary</span>
              </h2>
              <p className="text-white/80 leading-relaxed font-light text-lg">
                As good stewards of the Willapa Bay estuary, we’ve been farming exceptional oysters for decades. We believe that the best shellfish comes from the healthiest waters.
              </p>
              <p className="text-white/80 leading-relaxed font-light text-lg">
                Our farming methods actually improve water quality, creating a thriving ecosystem. We produce healthy, plump oysters year-round so you can enjoy the distinctive Pacific flavor in every order.
              </p>
              <Link href="/story">
                <Button variant="link" className="text-white pl-0 hover:text-accent uppercase tracking-widest text-xs font-bold mt-4 flex items-center gap-2">
                  Read Our Story <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale / Visit */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto space-y-8">
          <Star className="w-8 h-8 text-accent mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Wholesale & Direct</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We offer wholesale seafood pricing on all of our fresh shellfish & frozen seafood meals. You can now order wholesale seafood online, direct from Goose Point.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 max-w-lg mx-auto">
            <Link href="/wholesale">
              <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-none py-6 text-xs uppercase tracking-widest font-bold">
                Wholesale Account
              </Button>
            </Link>
            <Link href="/wholesale">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-none py-6 text-xs uppercase tracking-widest font-bold">
                Farm Store
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ id, image, title, price, description }: { id: string, image: string, title: string, price: string, description: string }) {
  return (
    <Link href={`/product/${id}`}>
      <motion.div variants={fadeInUp} className="group cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-white border border-gray-100 mb-6">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gray-100">
            <Button className="w-full bg-primary text-white hover:bg-accent hover:text-white border-none shadow-none uppercase tracking-widest text-xs font-bold py-4">
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="font-serif text-xl text-primary">{title}</h3>
          <p className="font-sans text-accent font-medium tracking-wide">{price}</p>
          <p className="text-muted-foreground text-sm leading-relaxed px-4 line-clamp-2">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
