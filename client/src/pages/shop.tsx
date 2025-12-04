import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/data";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Shop() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl">Shop The Harvest</h1>
          <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto font-light">
            Direct from our farm to your door. Freshness guaranteed.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8 shrink-0">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-sans font-bold uppercase tracking-widest text-xs">Filter</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg mb-4">Categories</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors text-primary font-medium">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fresh Oysters</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shucked Oysters</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Seafood Meals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pantry & Tools</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Price Range</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Under $20
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  $20 - $50
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  $50+
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <motion.div 
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden bg-white border border-gray-100 mb-6">
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gray-100">
                      <Button className="w-full bg-primary text-white hover:bg-accent hover:text-white border-none shadow-none uppercase tracking-widest text-xs font-bold py-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-lg text-primary">{product.title}</h3>
                    <p className="font-sans text-accent font-medium tracking-wide text-sm">{product.price}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed px-2 line-clamp-2">{product.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <Button variant="outline" className="w-10 h-10 p-0 border-primary bg-primary text-white hover:bg-primary/90 rounded-none">1</Button>
            <Button variant="outline" className="w-10 h-10 p-0 border-gray-200 hover:border-primary hover:text-primary rounded-none">2</Button>
            <Button variant="outline" className="w-10 h-10 p-0 border-gray-200 hover:border-primary hover:text-primary rounded-none">3</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
