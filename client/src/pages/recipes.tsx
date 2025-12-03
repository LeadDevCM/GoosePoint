import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

// Placeholder images for recipes
const recipe1 = "https://goosepoint.com/wp-content/uploads/2016/07/shooter-commercial-served-several.jpg";
const recipe2 = "https://goosepoint.com/wp-content/themes/goosepoint/img/clam-bake.png";
const recipe3 = "https://goosepoint.com/wp-content/uploads/2016/07/smoked_oysters-1.jpg";

const recipes = [
  {
    id: 1,
    title: "Classic Oyster Shooters",
    image: recipe1,
    time: "10 min",
    servings: "4",
    description: "The perfect start to any gathering. Spicy, briny, and invigorating."
  },
  {
    id: 2,
    title: "Willapa Bay Clam Bake",
    image: recipe2,
    time: "45 min",
    servings: "6",
    description: "A rustic one-pot meal featuring clams, corn, potatoes, and sausage."
  },
  {
    id: 3,
    title: "Smoked Oyster Dip",
    image: recipe3,
    time: "15 min",
    servings: "8",
    description: "Rich, creamy, and packed with umami flavor from our smoked oysters."
  }
];

export default function Recipes() {
  return (
    <div className="min-h-screen bg-background pb-24">
       <div className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl text-primary">From Our Kitchen</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Discover new ways to enjoy our premium shellfish.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Recipe
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} Servings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4" />
                    <span>Easy</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-accent pb-1 group-hover:border-primary transition-colors">
                    View Recipe
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
