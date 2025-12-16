# Farm Store Implementation - Code Reference

## Quick Code Snippets

### 1. Farm Store Landing Page - Main Structure

**File**: `/client/src/pages/shop.tsx`

```typescript
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingBag, MapPin } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FarmStore() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4 max-w-3xl">
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-medium">
            Farm Store
          </h1>
          <p className="font-serif text-lg text-white/80 font-light leading-relaxed">
            Choose how you'd like to get fresh Goose Point oysters. Shop online for
            convenient delivery or visit us in person.
          </p>
        </div>
      </div>

      {/* Two-Path Cards Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {/* Path 1: Shop Online */}
          <FarmStoreCard
            href="/shop/products"
            image="https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg"
            icon={ShoppingBag}
            title="Shop Online"
            category="Farm Store Products"
            description="Fresh shellfish delivered directly to your door. Browse our full selection of oysters, shucked varieties, and specialty products with fast, reliable shipping."
            features={[
              "Browse our complete catalog",
              "Fast, insulated shipping available",
              "Freshness guaranteed"
            ]}
            buttonText="Shop Online"
          />

          {/* Path 2: Visit The Oystery */}
          <FarmStoreCard
            href="/the-oystery"
            image="/assets/images/new/family-hero.jpg"
            icon={MapPin}
            title="Visit The Oystery"
            category="Farm Store In-Person"
            description="Experience our farm store in person. Talk with our knowledgeable staff, pick your oysters fresh, and discover everything our working farm has to offer."
            features={[
              "Personal shopping experience",
              "Expert staff assistance",
              "Learn about our farm"
            ]}
            buttonText="Visit The Oystery"
          />
        </motion.div>
      </div>

      {/* Why Choose Goose Point Section */}
      <section className="bg-secondary/40 py-16 md:py-24 mt-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-sans text-2xl md:text-3xl font-medium text-foreground">
              Why Choose Goose Point
            </h2>
            <p className="font-serif text-base text-muted-foreground max-w-2xl mx-auto">
              Whether you shop online or visit us in person, you're getting the same
              commitment to quality and freshness.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StatCard number="40+" title="Years of Tradition"
              description="Family-owned oyster farming with decades of expertise and passion." />
            <StatCard number="100%" title="Sustainable"
              description="Environmentally responsible farming that improves water quality." />
            <StatCard number="Fresh" title="Year-Round"
              description="Consistently plump, flavorful oysters available every season." />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

### 2. Farm Store Card Component

**Reusable Card Structure** (Can be extracted to separate component):

```typescript
interface FarmStoreCardProps {
  href: string;
  image: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  features: string[];
  buttonText: string;
}

function FarmStoreCard({
  href,
  image,
  icon: IconComponent,
  title,
  category,
  description,
  features,
  buttonText
}: FarmStoreCardProps) {
  return (
    <Link href={href}>
      <motion.div
        variants={fadeInUp}
        className="group cursor-pointer h-full"
      >
        <div className="flex flex-col h-full bg-white border border-gray-100 rounded
                        overflow-hidden hover:shadow-lg transition-shadow duration-300">

          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img
              src={image}
              alt={`${title} - ${category}`}
              className="w-full h-full object-cover transition-transform duration-500
                        group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent
                           to-black/40 group-hover:to-black/50 transition-all duration-300" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-between flex-1 p-8 md:p-10">
            <div className="space-y-6">
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center
                               justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-sans text-2xl md:text-3xl font-medium text-foreground">
                  {title}
                </h2>
              </div>

              {/* Category + Description */}
              <div className="space-y-3">
                <p className="font-sans text-base font-medium text-foreground">
                  {category}
                </p>
                <p className="font-serif text-base text-muted-foreground leading-relaxed
                             font-light">
                  {description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="pt-8 mt-8 border-t border-gray-100">
              <Button className="w-full bg-primary text-white hover:bg-primary/90
                               border-none rounded py-6 text-xs uppercase
                               tracking-widest font-sans font-bold
                               transition-all duration-300">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
```

### 3. The Oystery Location Page - Key Sections

**File**: `/client/src/pages/the-oystery.tsx`

```typescript
// Hours Section
<div className="space-y-4">
  <div className="flex items-center gap-3 mb-4">
    <Clock className="w-6 h-6 text-primary" />
    <h2 className="font-sans text-2xl font-medium text-foreground">Hours</h2>
  </div>
  <div className="space-y-3 bg-secondary/30 p-6 rounded">
    <div className="flex justify-between">
      <span className="font-sans font-medium text-foreground">Monday - Friday</span>
      <span className="font-serif text-muted-foreground">9:00 AM - 5:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span className="font-sans font-medium text-foreground">Saturday</span>
      <span className="font-serif text-muted-foreground">10:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span className="font-sans font-medium text-foreground">Sunday</span>
      <span className="font-serif text-muted-foreground">Closed</span>
    </div>
    <p className="text-xs text-muted-foreground mt-4 italic">
      Hours may vary seasonally. Call ahead for confirmation.
    </p>
  </div>
</div>

// Contact Section
<div className="space-y-4">
  <div className="flex items-center gap-3 mb-4">
    <Phone className="w-6 h-6 text-primary" />
    <h2 className="font-sans text-2xl font-medium text-foreground">Contact</h2>
  </div>
  <div className="space-y-4 bg-secondary/30 p-6 rounded">
    <div className="flex items-start gap-3">
      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-sans text-sm text-muted-foreground mb-1">Phone</p>
        <a href="tel:+1-360-555-0000"
           className="font-serif text-foreground hover:text-primary transition-colors">
          (360) 555-0000
        </a>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-sans text-sm text-muted-foreground mb-1">Email</p>
        <a href="mailto:info@goosepoint.com"
           className="font-serif text-foreground hover:text-primary transition-colors">
          info@goosepoint.com
        </a>
      </div>
    </div>
  </div>
</div>

// Dual Action Buttons
<div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
  <Link href="/shop/products" className="flex-1">
    <Button className="w-full bg-primary text-white hover:bg-primary/90 border-none
                      rounded py-6 text-xs uppercase tracking-widest font-sans font-bold">
      Shop Online
    </Button>
  </Link>
  <a href="https://maps.google.com/?q=Goose+Point+Oysters+Willapa+Bay"
     target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button className="w-full border-primary text-primary hover:bg-primary/5 border
                      rounded py-6 text-xs uppercase tracking-widest font-sans font-bold">
      Visit Us
    </Button>
  </a>
</div>
```

### 4. App.tsx Route Configuration

**File**: `/client/src/App.tsx` - Import section:

```typescript
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import ShopProducts from "@/pages/shop-products";
import TheOystery from "@/pages/the-oystery";
import ProductDetail from "@/pages/product-detail";
import Story from "@/pages/story";
import Recipes from "@/pages/recipes";
import RecipeDetail from "@/pages/recipe-detail";
import Wholesale from "@/pages/wholesale";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import Cart from "@/pages/cart";
import NotFound from "@/pages/not-found";
import Educate from "@/pages/educate";
import EducateBlog from "@/pages/educate-blog";
import EducateRecipes from "@/pages/educate-recipes";
import EducateVideos from "@/pages/educate-videos";
import EducateMedia from "@/pages/educate-media";
```

**Routes section**:

```typescript
function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop/products" component={ShopProducts} />
        <Route path="/the-oystery" component={TheOystery} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/story" component={Story} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/recipes/:id" component={RecipeDetail} />
        <Route path="/wholesale" component={Wholesale} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/educate" component={Educate} />
        <Route path="/educate/blog" component={EducateBlog} />
        <Route path="/educate/recipes" component={EducateRecipes} />
        <Route path="/educate/videos" component={EducateVideos} />
        <Route path="/educate/media" component={EducateMedia} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}
```

### 5. Stat Card Component (Reusable)

```typescript
interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

function StatCard({ number, title, description }: StatCardProps) {
  return (
    <motion.div variants={fadeInUp} className="text-center space-y-4">
      <div className="text-4xl font-bold text-accent">{number}</div>
      <h3 className="font-sans text-lg font-medium text-foreground">{title}</h3>
      <p className="font-serif text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
```

### 6. Animation Definitions

```typescript
// Entrance Animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Stagger Animation (for multiple children)
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2  // 200ms delay between children
    }
  }
};

// Usage in component
<motion.div
  variants={stagger}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}  // Only animate once on view
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
  {/* Children will be staggered */}
  <motion.div variants={fadeInUp}>Card 1</motion.div>
  <motion.div variants={fadeInUp}>Card 2</motion.div>
</motion.div>
```

### 7. Tailwind Classes Used

```typescript
// Layout
"container mx-auto px-4"           // Container with padding
"grid grid-cols-1 md:grid-cols-2"  // Responsive grid
"flex flex-col justify-between"     // Flex column, space content

// Spacing
"py-16 md:py-24"                    // Vertical padding (responsive)
"px-4"                              // Horizontal padding
"gap-8 md:gap-12"                   // Gap between grid items
"space-y-4"                         // Vertical spacing between children
"space-y-6"                         // Larger vertical spacing

// Sizing
"w-full h-full"                     // Full size
"w-12 h-12"                         // Icon container
"aspect-square"                     // Equal width/height

// Colors
"bg-primary"                        // Azure blue
"text-white"                        // White text
"border border-gray-100"            // Subtle border
"bg-secondary/40"                   // Light background with opacity

// Typography
"font-sans text-3xl md:text-5xl"    // Responsive heading
"font-serif text-base"              // Body text
"font-bold uppercase tracking-widest" // Button text

// Effects
"rounded overflow-hidden"           // Border radius
"hover:shadow-lg transition-shadow duration-300" // Hover shadow
"hover:scale-110"                   // Scale on hover
"transition-transform duration-500" // Transform animation

// Responsive
"md:text-5xl"                       // Desktop size
"lg:text-6xl"                       // Large desktop size
"md:p-10"                           // Desktop padding
"md:gap-12"                         // Desktop gap
```

### 8. Color Scheme Variables (from index.css)

```css
/* Azure Blue Primary */
--primary: 201 82% 40%;           /* #127ebc */
--primary-foreground: 0 0% 100%;

/* Gold Accent */
--accent: 43 74% 49%;             /* #d9a520 */
--accent-foreground: 0 0% 100%;

/* Text Colors */
--foreground: 32 10% 26%;         /* #48423b */
--muted-foreground: 32 10% 40%;

/* Backgrounds */
--background: 0 0% 100%;          /* White */
--secondary: 0 0% 98%;            /* #F9F9F9 */

/* Borders */
--border: 32 8% 85%;              /* Light border */
```

### 9. Responsive Breakpoints

```typescript
// Mobile First Approach
"text-3xl"         // Small mobile
"md:text-5xl"      // Tablet (768px+)
"lg:text-6xl"      // Desktop (1024px+)

// Common patterns
"grid-cols-1"      // Mobile: 1 column
"md:grid-cols-2"   // Tablet: 2 columns
"lg:grid-cols-3"   // Desktop: 3 columns

// Spacing examples
"py-16"            // Mobile: 64px
"md:py-24"         // Desktop: 96px

"px-4"             // Mobile: 16px
"md:px-6"          // Desktop: 24px
```

### 10. Link Navigation Pattern

```typescript
import { Link } from "wouter";

// Simple navigation
<Link href="/shop/products">
  <Button>Shop Online</Button>
</Link>

// External link
<a href="https://maps.google.com/?q=Goose+Point"
   target="_blank"
   rel="noopener noreferrer">
  <Button>Get Directions</Button>
</a>

// Navigation with state
import { useLocation } from "wouter";

function MyComponent() {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/shop/products");
  };

  return <Button onClick={handleClick}>Navigate</Button>;
}
```

---

## Debugging Tips

### Common Issues & Solutions

**Issue**: Images not loading
```typescript
// Check image URL is correct
// For local assets: /assets/images/new/filename.jpg
// For external: Full URL with https
<img src="/assets/images/new/family-hero.jpg" />
<img src="https://goosepoint.com/wp-content/uploads/..." />
```

**Issue**: Animations not smooth
```typescript
// Check framer-motion is imported
import { motion } from "framer-motion";

// Verify viewport prop is set for lazy animations
<motion.div whileInView="animate" viewport={{ once: true }}>
```

**Issue**: Links not working
```typescript
// Use wouter Link for internal navigation
import { Link } from "wouter";

<Link href="/shop/products">
  <Button>Click me</Button>
</Link>

// Make sure href starts with /
```

**Issue**: Styling not applying
```typescript
// Verify classes are valid Tailwind
// Check spacing: space-y-4 (16px), space-y-6 (24px), space-y-8 (32px)
// Check padding: p-4 (16px), p-6 (24px), p-8 (32px), p-10 (40px)
// Check responsive: md: for 768px+, lg: for 1024px+
```

---

## Performance Optimization Tips

```typescript
// Use whileInView with once: true for better performance
<motion.div
  whileInView="animate"
  viewport={{ once: true }}  // Animation plays only once
>

// Lazy load images
<img
  src="..."
  alt="..."
  loading="lazy"  // Native lazy loading
/>

// Use aspect-ratio instead of fixed heights for better responsive design
<div className="relative aspect-square">
  <img className="w-full h-full object-cover" />
</div>
```

---

**Generated**: December 15, 2025
**Version**: 1.0
**Ready for Production**: Yes

