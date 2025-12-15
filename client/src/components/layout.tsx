import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs uppercase tracking-widest py-2 font-medium">
        Free Shipping on Orders Over $150
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-border shadow-sm" : "bg-white border-border"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-24 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Mobile Menu Toggle - Visible on Mobile */}
          <div className="lg:hidden flex justify-start">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] pt-12">
                <nav className="flex flex-col space-y-6 text-lg font-serif">
                  <Link href="/shop" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Shop</Link>
                  <Link href="/shop" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Our Oysters</Link>
                  <Link href="/story" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Our Story</Link>
                  <Link href="/blog" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Blog</Link>
                  <Link href="/recipes" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Recipes</Link>
                  <Link href="/wholesale" className="hover:text-accent transition-colors" onClick={closeMobileMenu}>Wholesale</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Nav Left - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center justify-start space-x-8 text-sm font-medium tracking-wide text-muted-foreground">
            <Link href="/shop" className="hover:text-primary transition-colors uppercase">Shop</Link>
            <Link href="/shop" className="hover:text-primary transition-colors uppercase">Oysters</Link>
            <Link href="/story" className="hover:text-primary transition-colors uppercase">Our Story</Link>
          </nav>

          {/* Logo - Always Centered */}
          <div className="flex justify-center">
            <Link href="/" className="group">
              <div className="flex flex-col items-center cursor-pointer">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-primary group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  GOOSE POINT
                </span>
                <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">FAMILY FARM & OYSTERY</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Right - Hidden on Mobile */}
          <div className="hidden lg:flex items-center justify-end space-x-8 text-sm font-medium tracking-wide text-muted-foreground">
            <Link href="/blog" className="hover:text-primary transition-colors uppercase">Blog</Link>
            <Link href="/recipes" className="hover:text-primary transition-colors uppercase">Recipes</Link>
            <Link href="/wholesale" className="hover:text-primary transition-colors uppercase">Wholesale</Link>
            
            {/* Cart in Desktop Nav */}
            <div className="flex items-center pl-4 border-l border-border/50">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-transparent hover:text-accent">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full"></span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Cart - Visible on Mobile Only (in right column) */}
          <div className="lg:hidden flex justify-end">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-transparent hover:text-accent">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full"></span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl italic">Goose Point Oysters</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Farming exceptional oysters in the Willapa Bay estuary for decades. Sustainable, healthy, and delivered fresh to you.
              </p>
            </div>
            
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-accent">Shop</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li><Link href="/shop" className="hover:text-white transition-colors">Fresh Oysters</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Shucked Oysters</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Seafood Meals</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Oyster Shooters</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Gift Cards</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-accent">Company</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/story" className="hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/recipes" className="hover:text-white transition-colors">Recipes</Link></li>
                <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale Inquiries</Link></li>
                <li><Link href="/wholesale" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-accent">Stay Connected</h4>
              <p className="text-xs text-primary-foreground/70">
                Join our newsletter for updates on seasonal harvests and special events.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-primary-foreground/10 border-none text-white placeholder:text-white/40 text-sm px-4 py-2 w-full focus:ring-1 focus:ring-accent outline-none"
                />
                <Button variant="secondary" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 border-none">
                  JOIN
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
            <p>&copy; 2025 Goose Point Oysters. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
