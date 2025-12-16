import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, Instagram, Facebook, Twitter, MapPin, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Navigation structure with dropdown items
const navigationItems = [
  {
    label: "OUR STORY",
    href: "/story",
    items: [
      { label: "History & Mission", href: "/story" },
      { label: "Goose Point Farm", href: "/story#farm" },
      { label: "Nisbet Oyster Company", href: "/story#nisbet" },
      { label: "The Oystery", href: "/the-oystery" },
      { label: "Hawaiian Shellfish Hatchery", href: "/hawaiian-shellfish" },
    ],
  },
  {
    label: "SHOP",
    href: "/shop",
    items: [
      { label: "Farm Store Products", href: "/shop" },
      { label: "Seed - Coming Soon", href: "/shop#seed", disabled: true },
      { label: "Wholesale Oysters", href: "/wholesale", requiresLogin: true },
      { label: "Shipping Information", href: "/shipping" },
    ],
  },
  {
    label: "EDUCATE",
    href: "/educate",
    items: [
      { label: "Education Hub", href: "/educate" },
      { label: "Oyster Blog", href: "/educate/blog" },
      { label: "Recipes", href: "/educate/recipes" },
      { label: "Video Content", href: "/educate/videos" },
      { label: "Media Coverage & Press", href: "/educate/media" },
    ],
  },
  {
    label: "CONNECT",
    href: "/connect",
    items: [
      { label: "Contact Us", href: "/connect" },
      { label: "Apply Online / Careers", href: "/connect#careers" },
      { label: "Meet the Team", href: "/connect#team" },
      { label: "Q&A / FAQ", href: "/connect#faq" },
      { label: "Visit The Oystery", href: "/the-oystery" },
      { label: "Family & Friends Club", href: "/connect#newsletter" },
    ],
  },
];

// Dropdown component for desktop navigation
function NavDropdown({ item, isOpen, onMouseEnter, onMouseLeave }: {
  item: typeof navigationItems[0];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="flex items-center gap-1 hover:text-primary transition-colors uppercase text-sm font-medium tracking-wide text-muted-foreground py-2"
      >
        {item.label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-white rounded-md shadow-lg border border-border min-w-[220px] py-2">
          {item.items.map((subItem, index) => {
            const isHashLink = subItem.href.includes('#');
            const linkClassName = `block px-4 py-2.5 text-sm transition-colors ${
              subItem.disabled
                ? 'text-muted-foreground/50 cursor-not-allowed'
                : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
            }`;
            const linkContent = (
              <span className="flex items-center gap-2">
                {subItem.label}
                {subItem.requiresLogin && (
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">Login</span>
                )}
                {subItem.disabled && (
                  <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Soon</span>
                )}
              </span>
            );

            return isHashLink ? (
              <a
                key={index}
                href={subItem.href}
                className={linkClassName}
                onClick={(e) => subItem.disabled && e.preventDefault()}
              >
                {linkContent}
              </a>
            ) : (
              <Link
                key={index}
                href={subItem.href}
                className={linkClassName}
                onClick={(e) => subItem.disabled && e.preventDefault()}
              >
                {linkContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Mobile accordion item
function MobileNavAccordion({ item, isOpen, onToggle, onClose }: {
  item: typeof navigationItems[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-border/30 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left font-serif text-lg hover:text-primary transition-colors"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 pl-4 space-y-3">
          {item.items.map((subItem, index) => {
            const isHashLink = subItem.href.includes('#');
            const linkClassName = `block text-sm transition-colors ${
              subItem.disabled
                ? 'text-muted-foreground/50 cursor-not-allowed'
                : 'text-muted-foreground hover:text-primary'
            }`;
            const linkContent = (
              <span className="flex items-center gap-2">
                {subItem.label}
                {subItem.requiresLogin && (
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">Login</span>
                )}
                {subItem.disabled && (
                  <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Soon</span>
                )}
              </span>
            );
            const handleClick = (e: React.MouseEvent) => {
              if (subItem.disabled) {
                e.preventDefault();
              } else {
                onClose();
              }
            };

            return isHashLink ? (
              <a
                key={index}
                href={subItem.href}
                className={linkClassName}
                onClick={handleClick}
              >
                {linkContent}
              </a>
            ) : (
              <Link
                key={index}
                href={subItem.href}
                className={linkClassName}
                onClick={handleClick}
              >
                {linkContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<number | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileAccordion(null);
  };

  const handleDropdownEnter = (index: number) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (index: number) => {
    setOpenMobileAccordion(openMobileAccordion === index ? null : index);
  };

  // Split navigation items for left and right sides
  const leftNavItems = navigationItems.slice(0, 2); // OUR STORY, SHOP
  const rightNavItems = navigationItems.slice(2); // EDUCATE, CONNECT

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Announcement Bar - Azure Blue for brand prominence */}
      <div className="bg-primary text-primary-foreground text-center text-xs uppercase tracking-widest py-2 font-sans font-medium">
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
              <SheetContent side="left" className="w-[300px] pt-12 overflow-y-auto">
                <nav className="flex flex-col">
                  {navigationItems.map((item, index) => (
                    <MobileNavAccordion
                      key={index}
                      item={item}
                      isOpen={openMobileAccordion === index}
                      onToggle={() => toggleMobileAccordion(index)}
                      onClose={closeMobileMenu}
                    />
                  ))}
                </nav>

                {/* Mobile Cart Link */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <Link
                    href="/cart"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="font-serif text-lg">Shopping Cart</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Nav Left - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center justify-end space-x-8">
            {leftNavItems.map((item, index) => (
              <NavDropdown
                key={index}
                item={item}
                isOpen={openDropdown === index}
                onMouseEnter={() => handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              />
            ))}
          </nav>

          {/* Logo - Always Centered */}
          <div className="flex justify-center">
            <Link href="/" className="group">
              <img
                src="/assets/goose-point-logo.png"
                alt="Goose Point - Family Farm & Oystery"
                className="h-[52px] md:h-[72px] w-auto group-hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Nav Right - Hidden on Mobile */}
          <div className="hidden lg:flex items-center justify-start space-x-8">
            {rightNavItems.map((item, index) => (
              <NavDropdown
                key={index + 2}
                item={item}
                isOpen={openDropdown === index + 2}
                onMouseEnter={() => handleDropdownEnter(index + 2)}
                onMouseLeave={handleDropdownLeave}
              />
            ))}

            {/* Cart in Desktop Nav */}
            <div className="flex items-center pl-4 border-l border-border/50">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-transparent hover:text-primary">
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

      {/* Footer - Azure Blue (#127ebc) primary brand color */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Footer Content - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* LEFT COLUMN - Navigation Links */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-white">Navigation</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li><Link href="/" className="hover:text-[#d9a520] transition-colors">Home</Link></li>
                <li><Link href="/story" className="hover:text-[#d9a520] transition-colors">About</Link></li>
                <li><Link href="/shop" className="hover:text-[#d9a520] transition-colors">Shop Seafood</Link></li>
                <li><Link href="/educate" className="hover:text-[#d9a520] transition-colors">Learn & Educate</Link></li>
                <li><Link href="/wholesale" className="hover:text-[#d9a520] transition-colors">Wholesale</Link></li>
                <li><Link href="/recipes" className="hover:text-[#d9a520] transition-colors">Recipes</Link></li>
                <li><Link href="/blog" className="hover:text-[#d9a520] transition-colors">Oyster Blog</Link></li>
                <li><Link href="/shipping" className="hover:text-[#d9a520] transition-colors">Shipping Info</Link></li>
                <li><Link href="/connect" className="hover:text-[#d9a520] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* CENTER COLUMN - Visit The Oystery & Store Hours */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-white">Visit The Oystery&trade;</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7081+Niawiakum+St+Hwy+101+Bay+Center+WA+98527"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/90 hover:text-[#d9a520] transition-colors flex items-start gap-2 mb-6"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  7081 Niawiakum St. Hwy 101<br />
                  Bay Center, WA 98527
                </span>
              </a>

              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white">Store Hours</h4>
              <div className="text-sm text-white/90 space-y-2">
                <p><span className="font-medium text-white">Summer (May-Sept):</span> 9am-5pm</p>
                <p><span className="font-medium text-white">Winter (Oct-Apr):</span> 9am-4pm</p>
              </div>
            </div>

            {/* RIGHT COLUMN - Mailing Address, Phone Numbers, Wholesale Contact, Social */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-white">Mailing Address</h4>
              <p className="text-sm text-white/90 mb-6">
                PO Box 338<br />
                Bay Center, WA 98527
              </p>

              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white">Phone Numbers</h4>
              <div className="text-sm text-white/90 space-y-1 mb-6">
                <p><a href="tel:3608756629" className="hover:text-[#d9a520] transition-colors">360.875.6629</a></p>
                <p><a href="tel:8888756629" className="hover:text-[#d9a520] transition-colors">888.875.6629</a></p>
                <p className="text-white/70">FAX 360.875.6684</p>
              </div>

              <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-3 text-white">Wholesale</h4>
              <p className="text-sm mb-6">
                <a href="mailto:sales@goosepoint.com" className="text-white/90 hover:text-[#d9a520] transition-colors">
                  sales@goosepoint.com
                </a>
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/goosepointoysters" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-white hover:text-[#d9a520] cursor-pointer transition-colors" />
                </a>
                <a href="https://twitter.com/goosepointoysters" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-white hover:text-[#d9a520] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/goosepointoysters" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-white hover:text-[#d9a520] cursor-pointer transition-colors" />
                </a>
                <a href="https://www.pinterest.com/goosepointoysters" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <svg className="h-5 w-5 text-white hover:text-[#d9a520] cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link href="/terms" className="hover:text-[#d9a520] transition-colors">Terms of Use</Link>
              <span className="text-white/40">|</span>
              <Link href="/shipping" className="hover:text-[#d9a520] transition-colors">Shipping &amp; Returns</Link>
              <span className="text-white/40">|</span>
              <Link href="/privacy" className="hover:text-[#d9a520] transition-colors">Privacy Policy</Link>
            </div>
            <p>&copy; 2025 Nisbet Oyster Co.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
