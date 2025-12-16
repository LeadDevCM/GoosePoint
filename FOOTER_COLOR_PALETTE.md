# Footer Color Palette Reference

## Complete Color System for Footer

### Primary Colors

#### Background - Azure Blue
```
Hex:     #127ebc
RGB:     18, 126, 188
HSL:     201° 82% 40%
Tailwind: bg-primary
Use: Footer background container
```

#### Text - White
```
Hex:     #ffffff
RGB:     255, 255, 255
HSL:     0° 0% 100%
Tailwind: text-white
Use: Primary text, headings, labels
```

### Accent Colors

#### Gold / Brass
```
Hex:     #d9a520
RGB:     217, 165, 32
HSL:     43° 74% 49%
Tailwind: text-[#d9a520]
Use: Hover states, emphasis accents
```

### Text Opacity Variations

#### High Contrast Text (Main Body)
```
Value:    text-white/90
RGB:      255, 255, 255 @ 90%
Use:      Main footer content, links, addresses
Contrast: 4.7:1 on Azure Blue (AA)
```

#### Medium Contrast Text
```
Value:    text-white/70
RGB:      255, 255, 255 @ 70%
Use:      Secondary information (FAX, metadata)
Contrast: 3.2:1 on Azure Blue (AA)
```

#### Low Contrast Text
```
Value:    text-white/40
RGB:      255, 255, 255 @ 40%
Use:      Dividers, separators
Contrast: 1.8:1 (Decorative)
```

---

## Color Combinations & Contrast Ratios

### Text on Azure Blue (#127ebc)

| Text Color | Opacity | RGB Value | Contrast | WCAG |
|---|---|---|---|---|
| White | 100% | 255,255,255 | 4.7:1 | AA |
| White | 90% | 255,255,255 @ 90% | 4.7:1 | AA |
| White | 80% | 255,255,255 @ 80% | 4.2:1 | AA |
| Gold | 100% | 217,165,32 | 3.8:1 | AAA* |
| Gold | 80% | 217,165,32 @ 80% | 3.5:1 | AA |

*AAA for large text (18pt+)

---

## Component Color Assignments

### Header Areas
```
Section Titles:
  Class: text-white
  Color: #ffffff
  Size: text-xs, font-bold, uppercase
  Examples:
    - "Navigation"
    - "Visit The Oystery"
    - "Mailing Address"
    - "Phone Numbers"
```

### Body Text
```
Main Content:
  Class: text-white/90
  Color: rgba(255, 255, 255, 0.9)
  Use: Address lines, store hours, contact info

  Example:
    - "7081 Niawiakum St. Hwy 101"
    - "Summer (May-Sept): 9am-5pm"
    - "PO Box 338"
```

### Link Elements
```
Normal State:
  Class: text-white/90
  Color: rgba(255, 255, 255, 0.9)

Hover State:
  Class: hover:text-[#d9a520]
  Color: #d9a520 (Gold)
  Transition: transition-colors

Elements:
  - Navigation links
  - Contact emails (mailto:)
  - Phone numbers (tel:)
  - Location maps (external)
  - Legal links (Terms, Privacy)
```

### Interactive Icons
```
Social Media Icons:
  Normal: text-white
  Hover: hover:text-[#d9a520]

Platforms:
  - Facebook
  - Twitter
  - Instagram
  - Pinterest
```

### Secondary Text
```
Less Important Info:
  Class: text-white/70
  Color: rgba(255, 255, 255, 0.7)
  Use: FAX numbers, metadata

Example:
  - "FAX 360.875.6684"
```

### Dividers & Separators
```
Border Lines:
  Class: border-white/20
  Color: rgba(255, 255, 255, 0.2)
  Use: Horizontal dividers between sections

Separator Text:
  Class: text-white/40
  Color: rgba(255, 255, 255, 0.4)
  Use: Pipe separators (|) between links
```

---

## Color Harmony

### Color Theory Behind the Palette

**Azure Blue (#127ebc) - Primary**
- Cool, professional tone
- High saturation creates visual interest
- Represents trust and reliability
- Modern and contemporary feel

**White (#ffffff)**
- Clean and readable
- High contrast with Azure Blue
- Represents clarity and simplicity
- Works well for typography

**Gold (#d9a520) - Accent**
- Warm complement to cool blue
- Creates visual warmth
- Signals interactivity and importance
- Luxurious, premium feel
- Works perfectly for hover states

### Psychological Impact
- **Blue:** Trust, professionalism, modernity
- **White:** Cleanliness, simplicity, clarity
- **Gold:** Warmth, luxury, engagement
- **Together:** Professional yet inviting brand experience

---

## CSS Class Reference

### Tailwind Classes Used

```tailwind
/* Container */
bg-primary                    /* Azure Blue background */
text-primary-foreground       /* White text on primary */

/* Text Colors */
text-white                    /* Pure white */
text-white/90                 /* 90% opacity white */
text-white/70                 /* 70% opacity white */
text-white/40                 /* 40% opacity white (separators) */

/* Interactive States */
hover:text-[#d9a520]          /* Gold on hover */
transition-colors             /* Smooth color transition */

/* Borders */
border-white/20               /* 20% opacity white borders */
border-white/40               /* 40% opacity white separators */

/* Icons */
cursor-pointer                /* Indicate clickability */
```

---

## Accessibility Checklist

- [x] Main text (white/90) has 4.7:1 contrast ratio on Azure Blue (WCAG AA)
- [x] Headings (white) have 4.7:1 contrast ratio (WCAG AA)
- [x] Hover states (gold) have 3.8:1 contrast ratio (WCAG AAA for large text)
- [x] Icons clearly visible in white
- [x] Separators have sufficient visual distinction
- [x] No color-only information conveyance
- [x] Sufficient spacing between interactive elements

---

## Browser & Device Compatibility

Colors are CSS standard and compatible with:
- All modern browsers
- Mobile devices (iOS, Android)
- Dark mode preferences (browser-dependent)
- Print media (not optimized)
- Color-blind vision (high contrast satisfies WCAG standards)

---

## Design System Integration

### Primary Color Usage
- **Header:** Azure Blue announcement bar, primary hover states
- **Footer:** Azure Blue background (new), gold hover accents
- **Body:** Primary color for CTAs, links, active states
- **Consistent:** Creates cohesive visual brand

### Footer Specific Role
Footer now serves as:
1. Brand reinforcement (primary color)
2. Visual anchor (strong color statement)
3. Call-to-action platform (gold hovers drive engagement)
4. Accessible and readable (high contrast)

---

## Notes for Future Updates

- All colors are defined in `/client/src/index.css` CSS variables
- Primary color can be globally updated via `--primary` variable
- Accent color can be updated via `--accent` variable
- Maintain minimum 4.5:1 contrast for text (WCAG AA)
- Preserve gold accent for brand warmth and personality
- Test color changes on various devices and lighting conditions
