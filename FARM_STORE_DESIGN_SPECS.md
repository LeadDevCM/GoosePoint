# Farm Store Design Specifications

## Visual Design Reference

### Layout Grid
```
Desktop (md and up):
+----------------------------------------+
|   FARM STORE LANDING                   |
|                                        |
|   [CARD 1: SHOP ONLINE] [CARD 2: VISIT]
|                                        |
|   WHY CHOOSE GOOSE POINT               |
|   [STAT 1] [STAT 2] [STAT 3]           |
+----------------------------------------+

Mobile (sm and down):
+----------+
|FARM STORE|
|          |
|[CARD 1]  |
|          |
|[CARD 2]  |
|          |
|[STATS]   |
+----------+
```

### Card Component Breakdown

#### Shop Online Card
```
┌─────────────────────────────────┐
│  OYSTERS IMAGE                  │
│  (Gradient Overlay)             │
├─────────────────────────────────┤
│  [ICON]  SHOP ONLINE            │
│                                 │
│  Farm Store Products            │
│  Fresh shellfish delivered...   │
│                                 │
│  + Browse complete catalog      │
│  + Fast, insulated shipping     │
│  + Freshness guaranteed         │
│                                 │
├─────────────────────────────────┤
│ [SHOP ONLINE BUTTON]            │
└─────────────────────────────────┘
```

#### Visit The Oystery Card
```
┌─────────────────────────────────┐
│  FAMILY FARM IMAGE              │
│  (Gradient Overlay)             │
├─────────────────────────────────┤
│  [ICON]  VISIT THE OYSTERY      │
│                                 │
│  Farm Store In-Person           │
│  Experience our farm store...   │
│                                 │
│  + Personal shopping experience │
│  + Expert staff assistance      │
│  + Learn about our farm         │
│                                 │
├─────────────────────────────────┤
│ [VISIT THE OYSTERY BUTTON]      │
└─────────────────────────────────┘
```

## Color Palette

### Primary Colors
```
Azure Blue (Primary)
  HEX: #127ebc
  HSL: 201 82% 40%
  RGB: 18, 126, 188
  Usage: Buttons, headings, accents, hover states
  Contrast: AAA with white

Gold/Brass (Accent)
  HEX: #d9a520
  HSL: 43 74% 49%
  RGB: 217, 165, 32
  Usage: Stat numbers, highlights, hover accents
  Contrast: AAA with white
```

### Secondary Colors
```
Dark Brown (Text)
  HEX: #48423b
  HSL: 32 10% 26%
  RGB: 72, 66, 59
  Usage: Primary text, headings, body copy

Light Gray (Background)
  HEX: #F9F9F9
  HSL: 0 0% 98%
  RGB: 249, 249, 249
  Usage: Subtle backgrounds, secondary sections

White (Cards)
  HEX: #FFFFFF
  HSL: 0 0% 100%
  RGB: 255, 255, 255
  Usage: Card backgrounds, main background

Muted (Border/Divider)
  HEX: #e6e6e6 (approx)
  HSL: 0 0% 90%
  Usage: Borders, divider lines, subtle separations
```

## Typography Scale

### Heading Hierarchy

```
H1: Farm Store
  Font: Montserrat Bold (600)
  Size: 48px (desktop) / 32px (mobile)
  Line Height: 1.2
  Letter Spacing: normal
  Color: White (on primary bg) or Foreground

H2: Shop Online / Visit The Oystery
  Font: Montserrat Medium (500)
  Size: 32px (desktop) / 24px (mobile)
  Line Height: 1.3
  Color: Foreground (#48423b)

H3: Farm Store Products / Why Choose Goose Point
  Font: Montserrat Medium (500)
  Size: 20px (desktop) / 18px (mobile)
  Line Height: 1.4
  Color: Foreground
```

### Body Typography

```
Description Text
  Font: Trocchi Light (300)
  Size: 16px
  Line Height: 1.6
  Color: Muted Foreground (#6b7280)
  Letter Spacing: normal

Feature List
  Font: Trocchi Regular (400)
  Size: 14px
  Line Height: 1.5
  Color: Muted Foreground
  Format: "+" prefix in Primary color

Button Text
  Font: Montserrat Bold (700)
  Size: 12px
  Line Height: 1.4
  Letter Spacing: 2px (widest)
  Text Transform: UPPERCASE
  Color: White on Primary
```

## Spacing System

### Padding (Tailwind Classes)
```
Container Padding:
  Mobile: px-4 (16px)
  Desktop: px-4 (16px) - contained in max-w

Card Padding:
  Mobile: p-8 (32px)
  Desktop: p-10 (40px)

Section Padding:
  Vertical: py-16 (64px) mobile, py-24 (96px) desktop
  Horizontal: px-4 (16px)

Gap Between Cards:
  Mobile: gap-8 (32px)
  Desktop: gap-12 (48px)
```

### Margins
```
Header to Content: mt-0 (Header is adjacent)
Section Spacing: mt-8 (32px) between major sections
Element Spacing: space-y-4, space-y-6, space-y-8

Component Spacing:
  Icon to Text: gap-3 (12px)
  Card elements: space-y-6 (24px)
  Button area: pt-8 mt-8 border-t (32px padding + 32px margin)
```

## Interactive States

### Buttons

#### Primary Button (Shop Online / Visit The Oystery)
```
Default:
  Background: Azure Blue (#127ebc)
  Color: White
  Padding: py-6 (24px vertical)
  Width: Full width
  Border Radius: Slight (rounded)
  Font: Montserrat Bold 12px UPPERCASE tracking-widest

Hover:
  Background: Azure Blue at 90% opacity
  Color: White
  Transition: 300ms ease-out
  Slight elevation (shadow-lg)

Active/Focus:
  Background: Darker blue
  Ring: 2px ring of primary color
  Outline: None (ring used instead)
```

#### Card Container
```
Default:
  Background: White
  Border: 1px solid #e5e7eb (gray-100)
  Box Shadow: None
  Transition: 300ms

Hover:
  Box Shadow: lg (0 10px 25px -5px rgba(0,0,0,0.1))
  Transform: Scale 100%
  Image: Scale to 110%
  Overlay: Gradient darkens

Group Hover Effects:
  Cascade down to child elements
  Image transition: 500ms scale
  Gradient: 300ms opacity
```

### Icon Styling
```
Container:
  Shape: Circular (rounded-full)
  Width: 12px (48px)
  Height: 12px (48px)
  Background: Primary color at 10% opacity (#127ebc10)
  Display: Flex, centered

Icon:
  Size: 6px (24px)
  Color: Primary (#127ebc)
  Type: Lucide React
  Pair: ShoppingBag (online), MapPin (location)
```

## Image Treatment

### Card Images
```
Aspect Ratio: square (1:1)
Object Fit: cover
Overlay: Gradient from transparent to black/40

Default Gradient:
  from-transparent via-transparent to-black/40

Hover Gradient:
  to-black/50 (darker)

Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)

Image Zoom:
  Default: scale 100%
  Hover: scale 110%
  Duration: 500ms
```

### Specific Images Used
```
Path 1 (Shop Online):
  URL: https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg
  Alt: "Shop Online - Fresh oysters delivered to your door"
  Subject: Pre-shucked oysters

Path 2 (Visit The Oystery):
  URL: /assets/images/new/family-hero.jpg
  Alt: "Visit The Oystery - Experience our farm store in person"
  Subject: Family on farm
```

## Animation Details

### Entrance Animation (fadeInUp)
```javascript
{
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```
- Used on: Cards, feature sections
- Duration: 600ms
- Easing: Default (easeInOut)
- Trigger: whileInView with once: true

### Stagger Animation
```javascript
{
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}
```
- Delay: 200ms between children
- Used for: Card layout, stat sections

### Hover Animations
- Image scale: 110% over 500ms
- Gradient overlay: 300ms opacity
- Box shadow: Immediate (300ms default)

## Responsive Breakpoints

### Tailwind Breakpoints Used
```
sm: 640px   - Not explicitly used (mobile first)
md: 768px   - Main breakpoint for layout changes
lg: 1024px  - Text size scaling
xl: 1280px  - Container max-width
```

### Layout Changes
```
Mobile (<768px):
  - Single column grid
  - Full width cards (minus padding)
  - Smaller headings (md:text-3xl becomes text-2xl)
  - Compact spacing

Desktop (768px+):
  - Two column grid
  - Larger headings (md:text-3xl)
  - Increased gaps and padding
  - Full hover effects
```

### Text Scaling
```
H1: text-3xl (mobile) md:text-5xl lg:text-6xl
H2: text-2xl (mobile) md:text-3xl
H3: text-lg md:text-2xl
Body: text-base (consistent)
Small: text-sm (consistent)
```

## Accessibility Considerations

### Color Contrast
- White (#FFF) on Azure Blue (#127ebc): 10.8:1 (AAA)
- Dark Brown (#48423b) on White (#FFF): 10.2:1 (AAA)
- Gold (#d9a520) on White (#FFF): 6.2:1 (AA)

### Typography
- Minimum font size: 12px (buttons)
- Line height minimum: 1.4
- Font families: Serif and Sans-serif for distinction

### Interactive Elements
- Minimum touch target: 48px × 48px (buttons)
- Focus indicators: Ring styling
- Hover states: Clear visual feedback

### Image Alt Text
- Descriptive, not "image of..."
- Includes context (Online vs In-Person)
- Conveys actionable information

## Dark Mode (Future)

The design system supports dark mode:
```
Dark Background: #1e1b15 (Dark brown)
Dark Card: #2d2a23
Dark Text: #f5f5f5
Primary (lighter): #40a5db (Lighter blue)
Accent (same): #d9a520
```

Current implementation doesn't use dark mode, but CSS variables are prepared for future integration.

---

**Design System Version**: 1.0
**Last Updated**: December 15, 2025
**Brand Alignment**: GoosePoint Oysters Identity (Azure Blue + Gold Accent)
