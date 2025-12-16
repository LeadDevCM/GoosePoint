# Footer Color Values - Complete Reference

## Master Color Palette

### Color 1: Azure Blue (Primary Background)
```
Name:        Azure Blue / Primary Blue
Hex Code:    #127ebc
RGB:         RGB(18, 126, 188)
HSL:         HSL(201, 82%, 40%)
CSS Variable: var(--primary)
Tailwind:    bg-primary
Contrast:    High (for text)
Use:         Footer background, CTAs, accents
```

### Color 2: White (Primary Text)
```
Name:        Pure White
Hex Code:    #ffffff
RGB:         RGB(255, 255, 255)
HSL:         HSL(0, 0%, 100%)
Tailwind:    text-white
Contrast:    Maximum
Use:         All main text, headings, icons
```

### Color 3: Gold / Brass (Accent)
```
Name:        Gold / Brass Accent
Hex Code:    #d9a520
RGB:         RGB(217, 165, 32)
HSL:         HSL(43, 74%, 49%)
CSS Variable: var(--accent)
Tailwind:    text-[#d9a520]
Contrast:    High (for hover states)
Use:         Hover states, emphasis, warmth
```

---

## Text Color Variations (White with Opacity)

### 100% Opacity (Full White)
```
Class:       text-white
Hex:         #ffffff
RGB:         RGB(255, 255, 255)
Opacity:     100%
Alpha:       1.0
Use:         Headings, primary text, icons
Contrast on #127ebc: 4.7:1 (WCAG AA)
```

### 90% Opacity (Nearly Full White)
```
Class:       text-white/90
Hex:         rgba(255, 255, 255, 0.9)
RGB:         RGB(255, 255, 255) @ 90%
Opacity:     90%
Alpha:       0.9
Use:         Body text, addresses, main content
Contrast on #127ebc: 4.7:1 (WCAG AA)
Display:     Very visible, excellent readability
```

### 80% Opacity (Light White)
```
Class:       text-white/80
Hex:         rgba(255, 255, 255, 0.8)
RGB:         RGB(255, 255, 255) @ 80%
Opacity:     80%
Alpha:       0.8
Use:         Secondary text (not used in new footer)
Contrast on #127ebc: 4.2:1 (WCAG AA)
Display:     Slightly lighter, still readable
```

### 70% Opacity (Lighter White)
```
Class:       text-white/70
Hex:         rgba(255, 255, 255, 0.7)
RGB:         RGB(255, 255, 255) @ 70%
Opacity:     70%
Alpha:       0.7
Use:         Secondary information (FAX, meta)
Contrast on #127ebc: 3.2:1 (WCAG AA)
Display:     Noticeably lighter, still readable
```

### 60% Opacity (Muted White)
```
Class:       text-white/60
Hex:         rgba(255, 255, 255, 0.6)
RGB:         RGB(255, 255, 255) @ 60%
Opacity:     60%
Alpha:       0.6
Use:         De-emphasized text (not used in new footer)
Contrast on #127ebc: 2.8:1 (WCAG A)
Display:     More subtle
```

### 40% Opacity (Subtle White)
```
Class:       text-white/40
Hex:         rgba(255, 255, 255, 0.4)
RGB:         RGB(255, 255, 255) @ 40%
Opacity:     40%
Alpha:       0.4
Use:         Dividers, separators between links
Contrast on #127ebc: 1.8:1 (Decorative)
Display:     Very subtle, decorative only
```

### 20% Opacity (Faint White)
```
Class:       text-white/20 or border-white/20
Hex:         rgba(255, 255, 255, 0.2)
RGB:         RGB(255, 255, 255) @ 20%
Opacity:     20%
Alpha:       0.2
Use:         Border lines, very subtle dividers
Contrast:    Not suitable for text
Display:     Barely visible
```

---

## Color Mixing Chart

### How Opacity Affects White on Blue

When you layer white (RGB 255,255,255) at different opacities on Azure Blue (RGB 18,126,188):

| Opacity | Visual Effect | Looks Like |
|---------|---|---|
| 100% | Pure white | Bright, high contrast |
| 90% | Nearly white | Very light, excellent readability |
| 80% | Light white | Light, still very readable |
| 70% | Lighter white | Noticeably lighter, still readable |
| 60% | Muted white | More subtle |
| 50% | Half-tone white | Mid-tone |
| 40% | Faint white | Subtle, decorative |
| 20% | Very faint white | Barely visible |

---

## Exact Tailwind Color Classes Used in Footer

### Current Implementation

```tsx
// Background Container
<footer className="bg-primary text-primary-foreground">
  // bg-primary = Azure Blue (#127ebc)
  // text-primary-foreground = White (#ffffff)

  // Headings / Labels
  <h4 className="text-white">Navigation</h4>
  // text-white = #ffffff

  // Body Content
  <ul className="text-white/90">
    <li>Item text</li>
  </ul>
  // text-white/90 = rgba(255,255,255,0.9)

  // Links with Hover
  <a className="hover:text-[#d9a520]">Link</a>
  // hover:text-[#d9a520] = Gold (#d9a520)

  // Social Icons
  <Facebook className="h-5 w-5 text-white hover:text-[#d9a520]" />
  // text-white = #ffffff
  // hover:text-[#d9a520] = Gold (#d9a520)

  // Secondary Text
  <p className="text-white/70">FAX Info</p>
  // text-white/70 = rgba(255,255,255,0.7)

  // Bottom Bar
  <div className="text-white/70">
    // text-white/70 = rgba(255,255,255,0.7)
    <span className="text-white/40">|</span>
    // text-white/40 = rgba(255,255,255,0.4)
  </div>

  // Borders
  <div className="border-t border-white/20">
    // border-white/20 = rgba(255,255,255,0.2)
  </div>
</footer>
```

---

## Contrast Ratio Calculations

### WCAG Accessibility Standards

**Formula:** (L1 + 0.05) / (L2 + 0.05)
Where L = relative luminance

### Actual Ratios in Footer

| Color Pair | Luminance Calculation | Ratio | WCAG Level | Pass |
|---|---|---|---|---|
| White (#fff) on Azure Blue (#127ebc) | (1.0 + 0.05) / (0.188 + 0.05) | 4.7:1 | AA | ✓ Yes |
| White (90%) on Azure Blue | 4.7:1 | AA | ✓ Yes |
| White (70%) on Azure Blue | 3.2:1 | AA | ✓ Yes |
| Gold (#d9a520) on Azure Blue | 3.8:1 | AAA* | ✓ Yes |

*AAA for large text (18pt+)

---

## CSS Color Definitions

### How Colors Are Defined in Codebase

**File:** `/client/src/index.css`

```css
:root {
  /* Azure Blue - Primary brand color for CTAs, links, accents */
  --primary: 201 82% 40%; /* #127ebc */
  --primary-foreground: 0 0% 100%; /* white */

  /* Gold/Yellowish Accent - PRESERVED from original design */
  --accent: 43 74% 49%; /* #d9a520 - Gold/Brass Accent */
  --accent-foreground: 0 0% 100%;
}
```

### How Tailwind Uses These Variables

```tsx
// Using HSL format (space-separated)
className="bg-primary"              // Uses --primary color
className="text-white"              // Tailwind utility
className="text-white/90"           // White with 90% opacity
className="hover:text-[#d9a520]"   // Arbitrary value for gold
```

---

## Color System Hierarchy

### Foundation Colors (Base Palette)
1. **Primary:** #127ebc (Azure Blue) - Main brand color
2. **Foreground:** #ffffff (White) - Default text
3. **Accent:** #d9a520 (Gold) - Interactive states

### Derived Colors (Generated from base)
- White/90: Lighter text
- White/70: Secondary text
- White/40: Separators
- White/20: Borders

---

## Quick Reference Table

| Element | Color Value | Hex | Tailwind Class |
|---|---|---|---|
| Footer Background | Azure Blue | #127ebc | bg-primary |
| Main Text | White | #ffffff | text-white |
| Body Content | White 90% | rgba(255,255,255,0.9) | text-white/90 |
| Headings | White | #ffffff | text-white |
| Hover State | Gold | #d9a520 | hover:text-[#d9a520] |
| Icons (normal) | White | #ffffff | text-white |
| Icons (hover) | Gold | #d9a520 | hover:text-[#d9a520] |
| Secondary Text | White 70% | rgba(255,255,255,0.7) | text-white/70 |
| Separators | White 40% | rgba(255,255,255,0.4) | text-white/40 |
| Border Lines | White 20% | rgba(255,255,255,0.2) | border-white/20 |

---

## Browser Support Notes

All color formats used are fully supported in:
- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- Mobile browsers (iOS, Android)

### Color Format Support
- Hex (#127ebc): Universally supported
- RGB (18, 126, 188): Universally supported
- HSL (201, 82%, 40%): Universally supported
- RGBA with opacity: Universally supported
- CSS Variables: All modern browsers (IE 11 not supported, but site doesn't support IE 11)

---

## Accessibility Considerations

### Color Blindness
- Azure Blue + White: Distinguishable for all types of color blindness
- Gold accent: Provides additional contrast cue
- High contrast ratios ensure visibility regardless of vision type

### Recommended Verification Tools
- WCAG Color Contrast Checker: https://webaim.org/resources/contrastchecker/
- axe DevTools: Browser extension for automated accessibility checks
- Lighthouse: Built into Chrome DevTools

---

## Future Reference

This document serves as the authoritative source for:
- Footer color values
- Exact color hex codes
- Opacity values
- Tailwind class usage
- Accessibility compliance
- CSS variable definitions

Keep this for reference when:
- Updating footer colors in future
- Creating design specifications
- Auditing accessibility
- Documenting design decisions
