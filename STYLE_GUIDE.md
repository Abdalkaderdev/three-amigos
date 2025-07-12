# Three Amigos Travel Website - Style Guide

## 🎨 Design Philosophy

The Three Amigos travel website embodies adventure, friendship, and wanderlust through a modern, clean, and vibrant design system. Our aesthetic balances professionalism with playfulness, creating an inviting space that inspires travel while maintaining credibility and usability.

---

## 🌈 Color System

### Primary Colors
```css
/* Sky Blue - Primary brand color */
--sky-blue: #00BFFF;
--sky-blue-dark: #0099CC;
--sky-blue-light: #33CCFF;

/* Coral Pink - Secondary accent color */
--coral-pink: #FF6F61;
--coral-pink-dark: #E55A4C;
--coral-pink-light: #FF8A7A;
```

### Background Colors
```css
/* Soft Beige - Main background */
--soft-beige: #F5F5DC;
--soft-beige-dark: #EEEEDC;
--soft-beige-light: #FAFAF0;
```

### Neutral Grays
```css
--gray-900: #1F2937;  /* Headings, primary text */
--gray-800: #374151;  /* Secondary text */
--gray-600: #4B5563;  /* Body text */
--gray-500: #6B7280;  /* Muted text */
--gray-400: #9CA3AF;  /* Placeholder text */
--gray-300: #D1D5DB;  /* Borders */
--gray-200: #E5E7EB;  /* Light borders */
--gray-100: #F3F4F6;  /* Background accents */
```

### Usage Guidelines
- **Sky Blue (#00BFFF)**: Primary buttons, links, headings, brand elements
- **Coral Pink (#FF6F61)**: Secondary buttons, accents, call-to-action elements
- **Soft Beige (#F5F5DC)**: Page backgrounds, card backgrounds
- **White (#FFFFFF)**: Card backgrounds, content areas
- **Gray Scale**: Text hierarchy, borders, subtle elements

---

## ✍️ Typography

### Font Families
```css
/* Primary Font - Poppins */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Available Weights: */
/* 300 - Light */
/* 400 - Regular */
/* 500 - Medium */
/* 600 - SemiBold */
/* 700 - Bold */
```

### Typography Scale
```css
/* Headings */
.text-8xl { font-size: 6rem; }      /* 96px - Hero titles */
.text-6xl { font-size: 3.75rem; }   /* 60px - Page titles */
.text-5xl { font-size: 3rem; }      /* 48px - Section titles */
.text-4xl { font-size: 2.25rem; }   /* 36px - Subsections */
.text-3xl { font-size: 1.875rem; }  /* 30px - Card titles */
.text-2xl { font-size: 1.5rem; }    /* 24px - Large text */
.text-xl { font-size: 1.25rem; }    /* 20px - Emphasized text */

/* Body Text */
.text-lg { font-size: 1.125rem; }   /* 18px - Large body */
.text-base { font-size: 1rem; }     /* 16px - Body text */
.text-sm { font-size: 0.875rem; }   /* 14px - Small text */
.text-xs { font-size: 0.75rem; }    /* 12px - Captions */
```

### Typography Classes
```css
/* Astrobia Style - For Headlines */
.astrobia {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

/* Body Text */
.body-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Button Text */
.button-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 0.025em;
}
```

---

## 📐 Spacing & Layout

### Spacing Scale (8px Grid System)
```css
.space-1  { margin/padding: 0.25rem; }  /* 4px */
.space-2  { margin/padding: 0.5rem; }   /* 8px */
.space-3  { margin/padding: 0.75rem; }  /* 12px */
.space-4  { margin/padding: 1rem; }     /* 16px */
.space-6  { margin/padding: 1.5rem; }   /* 24px */
.space-8  { margin/padding: 2rem; }     /* 32px */
.space-12 { margin/padding: 3rem; }     /* 48px */
.space-16 { margin/padding: 4rem; }     /* 64px */
.space-20 { margin/padding: 5rem; }     /* 80px */
```

### Container Widths
```css
.max-w-7xl { max-width: 80rem; }   /* 1280px - Main content */
.max-w-4xl { max-width: 56rem; }   /* 896px - Article content */
.max-w-2xl { max-width: 42rem; }   /* 672px - Form content */
```

---

## 🎭 Component Styles

### Border Radius Standards
```css
.rounded-sm  { border-radius: 0.125rem; }  /* 2px */
.rounded     { border-radius: 0.25rem; }   /* 4px */
.rounded-lg  { border-radius: 0.5rem; }    /* 8px */
.rounded-xl  { border-radius: 0.75rem; }   /* 12px */
.rounded-2xl { border-radius: 1rem; }      /* 16px */
.rounded-3xl { border-radius: 1.5rem; }    /* 24px */
.rounded-full { border-radius: 9999px; }   /* Full circle */
```

### Shadow System
```css
.shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
.shadow    { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
```

### Button Styles
```css
/* Primary Button */
.btn-primary {
  background: #00BFFF;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #0099CC;
  transform: translateY(-2px);
}

/* Secondary Button */
.btn-secondary {
  background: #FF6F61;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: #00BFFF;
  border: 2px solid #00BFFF;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
}

.btn-outline:hover {
  background: #00BFFF;
  color: white;
}
```

### Card Styles
```css
.card {
  background: white;
  border-radius: 1.5rem; /* 24px */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

---

## 🎬 Animation Guidelines

### Timing Standards
```css
/* Animation Durations */
.duration-fast   { transition-duration: 150ms; }  /* Quick hover effects */
.duration-normal { transition-duration: 300ms; }  /* Standard transitions */
.duration-slow   { transition-duration: 500ms; }  /* Complex animations */
.duration-slower { transition-duration: 800ms; }  /* Page transitions */
```

### Easing Functions
```css
.ease-smooth { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
.ease-bounce { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
```

### Common Animation Patterns
```css
/* Hover Lift */
.hover-lift:hover {
  transform: translateY(-10px);
}

/* Scale on Hover */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Fade In Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Default: Mobile (0px and up) */

@media (min-width: 640px) {  /* sm */
  /* Small tablets and large phones */
}

@media (min-width: 768px) {  /* md */
  /* Tablets */
}

@media (min-width: 1024px) { /* lg */
  /* Laptops and desktops */
}

@media (min-width: 1280px) { /* xl */
  /* Large desktops */
}
```

### Responsive Grid
```css
/* Standard responsive grid pattern */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🎯 Component Usage Guidelines

### Cards
- Use `rounded-2xl` or `rounded-3xl` for modern look
- Apply `shadow-lg` for standard elevation
- Include hover animations with `hover:shadow-xl`
- Maintain consistent padding: `p-6` or `p-8`

### Buttons
- Primary actions: Sky Blue background
- Secondary actions: Coral Pink background
- Tertiary actions: Outline style
- Always include hover states and transitions

### Typography
- Use `astrobia` class for main headings
- Maintain proper hierarchy with size scale
- Ensure sufficient contrast ratios (4.5:1 minimum)
- Use consistent line heights (1.6 for body text)

### Spacing
- Follow 8px grid system consistently
- Use `space-y-*` for vertical spacing
- Use `gap-*` for grid and flex layouts
- Maintain consistent margins and padding

---

## ♿ Accessibility Standards

### Color Contrast
- Ensure WCAG 2.1 AA compliance (4.5:1 ratio)
- Test with color blindness simulators
- Provide alternative indicators beyond color

### Focus States
- Visible focus indicators on all interactive elements
- Consistent focus ring styling
- Logical tab order throughout the site

### Typography
- Minimum 16px font size for body text
- Sufficient line spacing (1.5 minimum)
- Clear visual hierarchy with headings

---

## 🔧 Implementation Notes

### CSS Custom Properties
```css
:root {
  --sky-blue: #00BFFF;
  --coral-pink: #FF6F61;
  --soft-beige: #F5F5DC;
  --transition-normal: 0.3s ease;
  --border-radius-card: 1.5rem;
  --shadow-card: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### Tailwind Configuration
Ensure all custom colors and spacing are properly configured in `tailwind.config.ts` for consistent usage across the project.

### Performance Considerations
- Use CSS transforms for animations (GPU accelerated)
- Minimize layout shifts with proper sizing
- Optimize images with proper aspect ratios
- Use `will-change` property sparingly

---

This style guide serves as the foundation for all design decisions and should be referenced when creating new components or modifying existing ones. Regular reviews ensure consistency and evolution of the design system.