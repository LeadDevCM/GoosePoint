# Farm Store Two-Path Landing Page - Implementation Guide

## Project Overview

Successfully created a comprehensive Farm Store landing page for GoosePoint Oysters featuring two distinct visual paths: "Shop Online" and "Visit The Oystery". This implementation includes route reorganization, new page components, and supporting education hub pages.

## Architecture & Route Structure

### Route Changes
```
/shop                    -> Farm Store Landing (Two-path decision page)
/shop/products           -> Shop Products (Previously /shop - full product listing)
/the-oystery             -> The Oystery (Farm store location information)
/educate                 -> Education Hub (Parent page for learning resources)
/educate/blog            -> Education Blog (Coming soon placeholder)
/educate/recipes         -> Education Recipes (Coming soon placeholder)
/educate/videos          -> Education Videos (Coming soon placeholder)
/educate/media           -> Education Media (Coming soon placeholder)
```

## File Structure

### New Pages Created

1. **`/client/src/pages/shop.tsx`** (Renamed from farm-store.tsx)
   - Primary Farm Store landing page
   - Two-card layout with equal visual weight
   - Responsive grid (1 col mobile, 2 col desktop)
   - Features "Why Choose Goose Point" section at bottom

2. **`/client/src/pages/shop-products.tsx`** (Renamed from shop.tsx)
   - Full product catalog with filtering
   - Maintains all original shop functionality
   - Paginated grid layout
   - Category filtering system

3. **`/client/src/pages/the-oystery.tsx`** (New)
   - Farm store information page
   - Location, hours, contact details
   - "What to expect" section
   - Integration with Google Maps
   - Back navigation to farm store

4. **`/client/src/pages/educate.tsx`** (New)
   - Education hub landing page
   - Four content paths: Blog, Recipes, Videos, Media
   - Card-based navigation layout

5. **`/client/src/pages/educate-blog.tsx`** (New)
   - Educational articles placeholder
   - Ready for future content integration

6. **`/client/src/pages/educate-recipes.tsx`** (New)
   - Recipe collection placeholder
   - Ready for future oyster recipe content

7. **`/client/src/pages/educate-videos.tsx`** (New)
   - Video content placeholder
   - Ready for instructional video integration

8. **`/client/src/pages/educate-media.tsx`** (New)
   - Media kit and press resources placeholder
   - Ready for professional photos and press releases

### Updated Files

1. **`/client/src/App.tsx`**
   - Added imports for new pages
   - Updated route configuration
   - Routes ordered by priority and hierarchy

2. **`/client/src/pages/home.tsx`**
   - Updated CTA buttons to link to /shop instead of /shop/products
   - "Farm Store" label for primary hero CTA
   - "View All Products" button now links to /shop/products

## Design Features

### Farm Store Landing (shop.tsx)

#### Header Section
- Azure Blue (#127ebc) background
- Large responsive heading: "Farm Store"
- Descriptive subheading explaining choice options
- Montserrat typography for headings, Trocchi for body

#### Two-Path Cards
Each card features:
- Square aspect ratio image with gradient overlay
- Icon with circular background (12x12px, bg-primary/10)
- Title and subtitle
- Descriptive paragraph text
- Feature list with "+" prefix (in primary color)
- Separating border before button
- Full-width call-to-action button

**Path 1: Shop Online**
- Image: Pre-shucked oysters (external URL)
- Icon: ShoppingBag (lucide-react)
- Features:
  - Browse complete catalog
  - Fast, insulated shipping
  - Freshness guaranteed
- Button: "Shop Online" -> /shop/products

**Path 2: Visit The Oystery**
- Image: Family hero image (local asset)
- Icon: MapPin (lucide-react)
- Features:
  - Personal shopping experience
  - Expert staff assistance
  - Learn about our farm
- Button: "Visit The Oystery" -> /the-oystery

#### Why Choose Goose Point Section
- Light background with subtle pattern
- Three stat cards with animations
- Gold accent (#d9a520) for stat numbers
- Staggered animation on scroll

### The Oystery Details Page (the-oystery.tsx)

#### Structure
- Back navigation button
- Primary blue header section
- Two-column layout (image + info on desktop)
- Four info blocks:
  1. **Hours** - Operating hours with seasonal note
  2. **Location** - Address with Map button
  3. **Contact** - Phone and email
  4. **What to Expect** - Bulleted feature list
- Bottom CTA section with dual buttons

#### Interactive Elements
- Smooth scroll animations
- Responsive column layout
- External Google Maps link
- Back navigation to shop

### Education Hub (educate.tsx)

Four-card grid layout featuring:
- Blog Articles
- Recipes
- Videos
- Media Kit

Each card includes icon, title, description, and button.

## Design System Compliance

### Colors Used
- **Primary (Azure Blue)**: #127ebc
  - Main buttons
  - Text links and accents
  - Icon backgrounds
  - Hover states
- **Accent (Gold)**: #d9a520
  - Stat numbers
  - Secondary highlights
  - Hover states on primary buttons
- **Text (Dark Brown)**: #48423b
  - All primary text
  - Headings
- **Secondary (Light Gray)**: #F9F9F9
  - Card backgrounds
  - Subtle section backgrounds
- **White**: #FFFFFF
  - Main background
  - Card backgrounds

### Typography
- **Headings**: Montserrat (sans-serif)
  - Font weights: 500 (medium), 700 (bold)
  - Sizes: 16px to 48px (responsive)
- **Body**: Trocchi (serif)
  - Font weight: 300-400 (light to normal)
  - Used for descriptions and supporting text

### Spacing & Layout
- Container max-width: Consistent with existing design
- Grid gaps: 8px mobile, 12-16px desktop
- Padding: 8-12px (p-8 to p-12 in cards)
- Responsive breakpoints: Mobile-first (sm, md, lg)

### Animations
- Fade in up: opacity 0->1, y: 20->0, duration 600ms
- Stagger: 200ms delay between children
- Image hover: scale 110% over 500ms
- Gradient overlay: opacity transition on hover
- All animations use Framer Motion

## Key Features

### Accessibility
- Semantic HTML structure
- ARIA-friendly navigation
- Proper heading hierarchy (h1 > h2 > h3)
- Link text clearly describes destination
- Color contrast ratios meet WCAG standards

### Responsiveness
- Mobile-first design approach
- Single column on mobile (max-w-full)
- Two-column grid on desktop (md:grid-cols-2)
- Touch-friendly button sizes (min 48px height)
- Flexible image aspect ratios

### User Experience
- Clear visual hierarchy
- Warm, welcoming tone aligned with family farm brand
- Equal visual weight for both paths
- Smooth transitions and animations
- Clear CTAs with hover states

## Navigation Flow

```
Home (/home)
  |
  +-- "Farm Store" button --> /shop
        |
        +-- Shop Online card --> /shop/products (Browse & Purchase)
        |
        +-- Visit The Oystery card --> /the-oystery (Location Info)
              |
              +-- "Shop Online" button --> /shop/products
              |
              +-- "Visit Us" button --> Google Maps

Learn Section (/educate)
  |
  +-- Blog --> /educate/blog
  |
  +-- Recipes --> /educate/recipes
  |
  +-- Videos --> /educate/videos
  |
  +-- Media --> /educate/media
```

## Component Dependencies

### Imports Used
```typescript
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingBag, MapPin, ArrowLeft, Clock, Phone, Mail,
         Book, Video, Lightbulb, Users } from "lucide-react";
```

### UI Components
- Button (shadcn/ui)
- Input (for forms in future)
- Link (wouter routing)
- Icons (lucide-react)
- Motion (framer-motion for animations)

## Future Enhancements

### Content Integration
- [ ] Add actual store hours from CMS
- [ ] Integrate location from database
- [ ] Add blog articles to /educate/blog
- [ ] Add recipe collection with images
- [ ] Upload farm tour videos
- [ ] Create media kit with press photos

### Feature Additions
- [ ] Store locator map component
- [ ] Contact form on The Oystery page
- [ ] Product recommendations from shop analytics
- [ ] Customer reviews and testimonials
- [ ] Social media feeds
- [ ] Newsletter signup integration

### SEO Optimization
- [ ] Meta tags for Farm Store landing
- [ ] Open Graph tags for social sharing
- [ ] Structured data for farm business
- [ ] Alt text optimization
- [ ] Internal linking strategy

## Testing Checklist

### Functionality
- [ ] Navigation links work correctly
- [ ] Routes resolve to correct pages
- [ ] Back buttons navigate properly
- [ ] External links (Maps) open correctly
- [ ] Responsive layout at all breakpoints

### Design
- [ ] Colors match brand palette
- [ ] Typography scales correctly
- [ ] Animations perform smoothly
- [ ] Images load and display properly
- [ ] Hover states visible and clear

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast adequate
- [ ] Form inputs accessible
- [ ] Focus states visible

### Performance
- [ ] Page load time acceptable
- [ ] Images optimized
- [ ] Animations don't cause jank
- [ ] Mobile performance adequate

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile

## Deployment Notes

1. Ensure all image assets are available at specified URLs
2. Update contact information in the-oystery.tsx before launch
3. Configure Google Maps API key for location links
4. Set up email forwarding for contact form (future)
5. Add proper redirects if old /shop URLs exist in backlinks
6. Update sitemap.xml with new routes

## File Locations Summary

| Component | File Path | Purpose |
|-----------|-----------|---------|
| Farm Store Landing | `/client/src/pages/shop.tsx` | Two-path decision page |
| Shop Products | `/client/src/pages/shop-products.tsx` | Product catalog |
| The Oystery | `/client/src/pages/the-oystery.tsx` | Farm location info |
| Education Hub | `/client/src/pages/educate.tsx` | Learning resources |
| Education Blog | `/client/src/pages/educate-blog.tsx` | Articles (placeholder) |
| Education Recipes | `/client/src/pages/educate-recipes.tsx` | Recipes (placeholder) |
| Education Videos | `/client/src/pages/educate-videos.tsx` | Videos (placeholder) |
| Education Media | `/client/src/pages/educate-media.tsx` | Media Kit (placeholder) |
| App Router | `/client/src/App.tsx` | Route configuration |
| Home | `/client/src/pages/home.tsx` | Updated links |

---

**Implementation Date**: December 15, 2025
**Status**: Complete and Ready for Testing
**Live URL**: http://localhost:3000/shop
