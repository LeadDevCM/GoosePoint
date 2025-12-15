import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Minus, Plus, Share2, Truck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NotFound from "./not-found";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${params?.id}`],
    enabled: !!params?.id,
  });

  if (!match) return <NotFound />;
  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <NotFound />;

  // Set default option if exists and not selected
  if (product.options.length > 0 && !selectedOption) {
    setSelectedOption(product.options[0].values[0]);
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Breadcrumbs */}
      <div className="bg-secondary/30 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-muted-foreground">
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary font-medium">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Product Images */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative bg-white border border-gray-100 flex items-center justify-center p-8">
                      <img 
                        src={img} 
                        alt={`${product.title} view ${index + 1}`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl text-primary mb-2">{product.title}</h1>
              <div className="flex items-center gap-4">
                <p className="font-sans text-2xl text-accent font-medium">{product.price}</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-muted-foreground ml-2">(24 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Options */}
            {product.options.map((option, idx) => (
              <div key={idx} className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  {option.name}: <span className="text-muted-foreground font-normal normal-case">{selectedOption}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {option.values.map((val) => (
                    <button
                      key={val}
                      onClick={() => setSelectedOption(val)}
                      className={`px-6 py-3 text-sm border transition-all ${
                        selectedOption === val
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 hover:border-primary text-primary"
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity & Add to Cart */}
            <div className="pt-6 border-t border-gray-100 space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-primary"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-primary">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 text-primary"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button className="flex-1 h-12 bg-primary text-white hover:bg-accent hover:text-white border-none rounded-none text-sm uppercase tracking-widest font-bold">
                  Add to Cart
                </Button>
              </div>
              
              <Button variant="ghost" className="w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-primary gap-2">
                <Share2 className="w-4 h-4" /> Share this Product
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-accent shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-serif text-sm">Overnight Shipping</h4>
                  <p className="text-xs text-muted-foreground">Fresh from farm to door.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-serif text-sm">Quality Guaranteed</h4>
                  <p className="text-xs text-muted-foreground">Sustainably harvested.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Text */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-xs text-muted-foreground space-y-4 max-w-4xl">
          <p>
            Consuming raw or undercooked food increases your risk of foodborne illness.
            Raw food, especially raw shellfish, is of course inherently more dangerous than cooked food. So, buy from a reputable location (or directly from the farm!), don't eat raw shellfish if you're pregnant or immune-compromised, and if you're unsure if the oysters are safe to eat raw either cook them thoroughly (145 degrees for 15 seconds) or toss them out.
          </p>
          <p>
            <span className="font-bold text-red-700/80">WARNING:</span> Consuming shellfish products can expose you to chemicals including cadmium, which are known to the State of California to cause cancer and birth defects or other reproductive harm.
            For more information go to <a href="https://www.P65warnings.ca.gov/food" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">www.P65warnings.ca.gov/food</a>
          </p>
        </div>
      </div>
    </div>
  );
}
