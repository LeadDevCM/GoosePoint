import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Anchor, Waves } from "lucide-react";

const storyHero = "https://goosepoint.com/wp-content/themes/goosepoint/img/clam-bake.png";
const farmImage = "https://goosepoint.com/wp-content/themes/goosepoint/img/blue-seal-oysters.png";

export default function Story() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={storyHero} 
            alt="Goose Point Farm" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="font-sans text-lg md:text-xl max-w-2xl font-light">
            Generations of dedication to the pristine waters of Willapa Bay.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-accent">Est. 1985</h3>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                Stewards of the Estuary
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Goose Point Oysters was founded on a simple principle: that the best shellfish come from the healthiest environment. For over 40 years, we have farmed the tidelands of Willapa Bay with a deep respect for the ecosystem that sustains us.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our family-owned operation oversees every step of the process, from hatchery to harvest. This complete control ensures that every oyster that bears our name meets our rigorous standards for quality, safety, and sustainability.
              </p>
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src={farmImage} 
                alt="Oyster Farming" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-primary">Sustainable Practices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our farming methods actively improve water quality and provide habitat for native species. We give back more than we take.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-primary">Pristine Waters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Located in Willapa Bay, widely considered the cleanest estuary in the continental United States.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Anchor className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-primary">Family Tradition</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Decades of expertise passed down, ensuring artisanal care in every harvest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl mb-8">Taste the Difference</h2>
          <Button className="bg-white text-primary hover:bg-accent hover:text-white border-none rounded-none px-10 py-6 text-sm tracking-widest uppercase font-bold">
            Shop Our Oysters
          </Button>
        </div>
      </section>
    </div>
  );
}
