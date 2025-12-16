import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Clock, Users } from "lucide-react";

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

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Classic Raw Bar Oysters",
    category: "Appetizer",
    time: "5 min",
    servings: "4",
    description: "The simplest preparation showcasing pure oyster flavor. Shucked fresh and served on ice with lemon and mignonette.",
  },
  {
    id: 2,
    title: "Oyster Rockefeller",
    category: "Appetizer",
    time: "20 min",
    servings: "6",
    description: "Classic baked oysters topped with herbed butter, spinach, and breadcrumbs. A restaurant favorite.",
  },
  {
    id: 3,
    title: "Oyster Stew",
    category: "Main Course",
    time: "15 min",
    servings: "4",
    description: "Rich and creamy, this traditional comfort dish features fresh oysters in a buttery broth with cream and seasonings.",
  },
  {
    id: 4,
    title: "Grilled Oysters with Garlic Butter",
    category: "Appetizer",
    time: "10 min",
    servings: "4",
    description: "Oysters grilled in the shell and topped with aromatic garlic butter and fresh herbs.",
  },
  {
    id: 5,
    title: "Oyster Po' Boy Sandwich",
    category: "Lunch",
    time: "25 min",
    servings: "2",
    description: "Crispy fried oysters served on a traditional New Orleans-style hoagie with remoulade and fresh toppings.",
  },
  {
    id: 6,
    title: "Oyster Ceviche",
    category: "Appetizer",
    time: "15 min",
    servings: "4",
    description: "Fresh oysters cured in citrus with avocado, cucumber, and cilantro for a refreshing summer dish.",
  }
];

export default function EducateRecipes() {
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
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium">Oyster Recipes</h1>
          <p className="font-serif text-lg text-white/90 font-light leading-relaxed">
            Discover delicious ways to prepare and enjoy Goose Point oysters, from classic to creative preparations.
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground">Culinary Inspiration</p>
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground">Featured Recipes</h2>
            <p className="font-serif text-muted-foreground leading-relaxed">
              From raw bars to roasted preparations, explore versatile ways to enjoy our fresh oysters.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16"
          >
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                variants={fadeInUp}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <p className="text-sm font-sans font-medium text-accent uppercase tracking-widest">{recipe.category}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="space-y-3 flex-1">
                    <h3 className="font-sans text-xl font-medium text-foreground leading-tight">
                      {recipe.title}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      {recipe.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-border">
                    <div className="flex gap-4 text-xs text-muted-foreground font-sans">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>Serves {recipe.servings}</span>
                      </div>
                    </div>
                    <Button className="bg-accent text-white hover:bg-accent/90 rounded px-4 py-2 text-xs uppercase tracking-widest font-sans font-bold w-full">
                      View Recipe
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tips Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-lg p-8 md:p-12 border border-border max-w-3xl mx-auto"
          >
            <p className="text-sm text-accent font-sans font-medium uppercase tracking-widest mb-3">Cooking Tips</p>
            <h3 className="font-sans text-2xl font-medium text-foreground mb-6">How to Shuck & Prepare Oysters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif text-muted-foreground text-sm leading-relaxed">
              <div className="space-y-3">
                <p>
                  <strong className="text-foreground">Shucking:</strong> Use a shucking knife with a short, sturdy blade. Insert the knife into the hinge and twist gently to open the shell.
                </p>
                <p>
                  <strong className="text-foreground">Storage:</strong> Keep oysters on ice and use within a few days of delivery. Oysters should be stored cup-side down.
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <strong className="text-foreground">Serving:</strong> Raw oysters are best served ice-cold with fresh lemon, cocktail sauce, or mignonette.
                </p>
                <p>
                  <strong className="text-foreground">Freshness:</strong> Fresh oysters should have a clean ocean smell. Discard any that don't close when tapped.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="font-sans text-2xl md:text-3xl font-medium">Ready to Cook?</h2>
          <p className="font-serif text-white/90 leading-relaxed">
            Order fresh Goose Point oysters today and start creating delicious dishes with our premium shellfish.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-md mx-auto">
            <Link href="/shop">
              <Button className="w-full bg-white text-accent hover:bg-white/90 rounded py-4 text-xs uppercase tracking-widest font-sans font-bold">
                Order Oysters
              </Button>
            </Link>
            <Link href="/recipes">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded py-4 text-xs uppercase tracking-widest font-sans font-bold">
                All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
