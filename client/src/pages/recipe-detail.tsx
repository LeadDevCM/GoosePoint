import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Users, ChefHat, Printer } from "lucide-react";
import { recipes } from "@/lib/data";
import NotFound from "./not-found";

export default function RecipeDetail() {
  const [match, params] = useRoute("/recipes/:id");

  if (!match) return <NotFound />;

  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Breadcrumbs */}
      <div className="bg-secondary/30 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-muted-foreground">
          <Link href="/recipes" className="hover:text-primary">Recipes</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary font-medium">{recipe.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-gray-900">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-6">{recipe.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span>{recipe.servings} Servings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Ingredients */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-secondary/30 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-primary">Ingredients</h3>
                <Button variant="ghost" size="icon" className="hover:bg-white/50">
                  <Printer className="w-4 h-4" />
                </Button>
              </div>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground pb-3 border-b border-white/50 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="leading-relaxed">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Related Product CTA */}
            <div className="bg-primary text-white p-8 text-center space-y-4">
              <h4 className="font-serif text-xl">Ready to cook?</h4>
              <p className="text-white/70 text-sm">Get fresh Goose Point oysters delivered to your door.</p>
              <Link href="/shop">
                <Button className="w-full bg-white text-primary hover:bg-accent hover:text-white border-none rounded-none text-xs uppercase tracking-widest font-bold">
                  Shop Ingredients
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Content / Instructions */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {recipe.description}
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-primary border-b border-gray-100 pb-4">Instructions</h3>
              <div className="space-y-8">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-secondary/50 flex items-center justify-center text-primary font-serif text-xl font-bold rounded-full">
                      {idx + 1}
                    </div>
                    <div className="pt-2 space-y-2">
                      <p className="text-lg text-foreground leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
