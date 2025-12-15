import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Shellstock Oysters",
      price: 18.00,
      quantity: 2,
      image: "/assets/images/new/oysters-lemon-knife.jpg",
      option: "Small (30 Count)"
    },
    {
      id: 2,
      title: "Shucking Knife",
      price: 12.50,
      quantity: 1,
      image: "https://goosepoint.com/wp-content/uploads/2024/08/logo-knife-cutting-board.jpg",
      option: "Standard"
    }
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15.00; // Flat rate for example
  const total = subtotal + shipping;

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-12 text-center">Your Cart</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-t border-gray-100">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 py-8 border-b border-gray-100">
                    <div className="w-24 h-24 bg-gray-50 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                        <p className="font-sans font-medium text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.option}</p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-primary"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-primary">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-primary"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-red-500 flex items-center gap-1 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/30 p-8 space-y-6 sticky top-28">
                <h3 className="font-serif text-2xl text-primary">Order Summary</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-primary font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping Estimate</span>
                    <span className="text-primary font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between text-lg font-bold text-primary">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary text-white hover:bg-accent hover:text-white border-none rounded-none py-6 text-sm uppercase tracking-widest font-bold">
                  Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <div className="text-center">
                  <Link href="/shop" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 space-y-8">
            <p className="text-xl text-muted-foreground font-light">Your cart is currently empty.</p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-white border-none rounded-none px-10 py-6 text-sm tracking-widest uppercase font-bold">
                Return to Shop
              </Button>
            </Link>
          </div>
        )}

        {/* Warning Text */}
        <div className="mt-20 pt-8 border-t border-gray-100 text-xs text-muted-foreground space-y-4 max-w-4xl mx-auto">
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
