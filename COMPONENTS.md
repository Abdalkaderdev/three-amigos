# Three Amigos Travel Website - Component Documentation

## 📋 Component Library Overview

This document provides comprehensive documentation for all reusable components in the Three Amigos travel website. Each component is designed to be modular, accessible, and consistent with the design system.

---

## 🎴 Card Components

### AnimatedCard
**Location**: `components/cards/AnimatedCard.tsx`

A versatile animated card component for showcasing content with smooth hover effects.

**Props**:
```tsx
interface AnimatedCardProps {
  title: string;           // Card title
  description: string;     // Card description/content
  image: string;          // Image URL
  date?: string;          // Optional date display
  buttonText?: string;    // CTA button text (default: "Read More")
  buttonHref?: string;    // CTA button link (default: "#")
  delay?: number;         // Animation delay in seconds (default: 0)
  className?: string;     // Additional CSS classes
}
```

**Features**:
- Scroll-triggered fade-in animation
- Hover lift effect (-10px transform)
- Image zoom on hover
- Responsive aspect ratio
- Customizable CTA button

**Usage**:
```tsx
<AnimatedCard
  title="Tokyo Street Food Adventure"
  description="Exploring the vibrant street food scene in Shibuya..."
  image="/assets/images/tokyo-food.jpg"
  date="December 2024"
  buttonText="Read Story"
  buttonHref="/blog/tokyo-adventure"
  delay={0.1}
/>
```

**Used In**: Home page (recent adventures), Blog page (post previews)

---

### ProfileCard
**Location**: `components/cards/ProfileCard.tsx`

Specialized card for displaying team member profiles with social media integration.

**Props**:
```tsx
interface ProfileCardProps {
  name: string;           // Team member name
  role: string;           // Their role/title
  bio: string;            // Biography text
  image: string;          // Profile image URL
  specialties: string[];  // Array of specialty tags
  social: {               // Social media handles
    instagram: string;
    youtube: string;
  };
  delay?: number;         // Animation delay
}
```

**Features**:
- Square aspect ratio for profile images
- Hover overlay with social icons
- Specialty tags with custom styling
- Professional layout with consistent spacing
- Social media icon animations

**Usage**:
```tsx
<ProfileCard
  name="Wala"
  role="The Photographer"
  bio="Master of capturing perfect moments..."
  image="/assets/images/wala-profile.jpg"
  specialties={["Photography", "Drone Shots", "Time-lapse"]}
  social={{
    instagram: "@wala_travels",
    youtube: "@WalaAdventures"
  }}
  delay={0.2}
/>
```

**Used In**: About page (team member showcases)

---

### BlogCard
**Location**: `components/cards/BlogCard.tsx`

Specialized card for blog post previews with metadata and author information.

**Props**:
```tsx
interface BlogCardProps {
  id: number;            // Post ID for routing
  title: string;         // Post title
  snippet: string;       // Post excerpt
  image: string;         // Featured image
  location: string;      // Travel location
  date: string;          // Publication date
  readTime: string;      // Estimated read time
  author: string;        // Author name
  delay?: number;        // Animation delay
}
```

**Features**:
- Author badge overlay on image
- Location and date metadata with icons
- Reading time indicator
- Hover color transitions for title
- Full-width CTA button

**Usage**:
```tsx
<BlogCard
  id={1}
  title="24 Hours in Tokyo: A Street Food Marathon"
  snippet="From dawn ramen to midnight takoyaki..."
  image="/assets/images/tokyo-blog.jpg"
  location="Tokyo, Japan"
  date="December 15, 2024"
  readTime="8 min read"
  author="Raza"
  delay={0.1}
/>
```

**Used In**: Blog page (post grid)

---

### PartnerCard
**Location**: `components/cards/PartnerCard.tsx`

Card component for displaying partner/sponsor information.

**Props**:
```tsx
interface PartnerCardProps {
  id: number;            // Partner ID
  name: string;          // Partner name
  description: string;   // Partner description
  logo: string;          // Partner logo/image
  category: string;      // Partner category
  delay?: number;        // Animation delay
}
```

**Features**:
- Category badge overlay
- Dark gradient overlay on image
- Partner name overlay on image
- External link styling
- Consistent hover effects

**Usage**:
```tsx
<PartnerCard
  id={1}
  name="Adventure Gear Co."
  description="Premium outdoor equipment for serious adventurers"
  logo="/assets/images/partner-logo.jpg"
  category="Equipment"
  delay={0.1}
/>
```

**Used In**: Partners page (sponsor showcases)

---

## 🎨 UI Components

### AnimatedButton
**Location**: `components/ui/AnimatedButton.tsx`

A versatile button component with hover animations and multiple variants.

**Props**:
```tsx
interface AnimatedButtonProps {
  href?: string;          // Optional link destination
  children: React.ReactNode; // Button content
  variant?: 'primary' | 'secondary' | 'outline'; // Style variant
  size?: 'sm' | 'md' | 'lg'; // Size variant
  className?: string;     // Additional CSS classes
  onClick?: () => void;   // Click handler
}
```

**Variants**:
- `primary`: Sky Blue background (#00BFFF)
- `secondary`: Coral Pink background (#FF6F61)
- `outline`: Transparent with colored border

**Sizes**:
- `sm`: Small padding (px-4 py-2)
- `md`: Medium padding (px-6 py-3)
- `lg`: Large padding (px-8 py-4)

**Features**:
- Hover scale animation (1.05x)
- Tap scale animation (0.95x)
- Arrow icon with slide animation
- Automatic Link vs Button rendering
- Consistent rounded-full styling

**Usage**:
```tsx
<AnimatedButton 
  href="/about"
  variant="primary"
  size="lg"
>
  Meet the Amigos
</AnimatedButton>

<AnimatedButton 
  variant="outline"
  onClick={handleClick}
>
  Learn More
</AnimatedButton>
```

**Used In**: All pages for CTAs and navigation

---

### AnimatedIcon
**Location**: `components/ui/AnimatedIcon.tsx`

Icon component with various animation types for enhanced visual appeal.

**Props**:
```tsx
interface AnimatedIconProps {
  icon: LucideIcon;       // Lucide React icon component
  size?: number;          // Icon size in pixels (default: 24)
  className?: string;     // Additional CSS classes
  animation?: 'bounce' | 'rotate' | 'pulse' | 'float'; // Animation type
}
```

**Animation Types**:
- `bounce`: Vertical bounce animation
- `rotate`: Continuous rotation
- `pulse`: Scale pulsing effect
- `float`: Complex floating motion (y + rotation)

**Usage**:
```tsx
<AnimatedIcon 
  icon={Plane} 
  size={48}
  animation="float"
  className="text-white/70"
/>
```

**Used In**: Navigation (airplane icon), hero sections, decorative elements

---

## 🏗️ Section Components

### HeroSection
**Location**: `components/sections/HeroSection.tsx`

Reusable hero section component with animated content and background.

**Props**:
```tsx
interface HeroSectionProps {
  title: string;          // Main headline
  subtitle: string;       // Supporting text
  ctaText: string;        // CTA button text
  ctaHref: string;        // CTA button link
  backgroundGradient?: string; // Custom gradient classes
}
```

**Features**:
- Full viewport height
- Animated airplane icon
- Staggered text animations
- Customizable gradient background
- Responsive typography scaling

**Usage**:
```tsx
<HeroSection
  title="Three Amigos"
  subtitle="Join Wala, Raza, and Abd on epic adventures around the globe..."
  ctaText="Meet the Amigos"
  ctaHref="/about"
  backgroundGradient="bg-gradient-to-br from-[#00BFFF] via-[#87CEEB] to-[#FF6F61]"
/>
```

**Used In**: Home page, potentially other landing pages

---

### SectionHeader
**Location**: `components/sections/SectionHeader.tsx`

Consistent header component for page sections.

**Props**:
```tsx
interface SectionHeaderProps {
  title: string;          // Section title
  subtitle?: string;      // Optional subtitle
  className?: string;     // Additional CSS classes
}
```

**Features**:
- Consistent typography (astrobia class)
- Scroll-triggered animation
- Centered layout with max-width
- Optional subtitle support

**Usage**:
```tsx
<SectionHeader
  title="Recent Adventures"
  subtitle="Check out our latest travel stories and get inspired for your next adventure"
/>
```

**Used In**: All pages for section organization

---

### NewsletterSection
**Location**: `components/sections/NewsletterSection.tsx`

Email newsletter signup section with gradient background.

**Props**:
```tsx
interface NewsletterSectionProps {
  title: string;          // Section title
  subtitle: string;       // Description text
  placeholder?: string;   // Input placeholder (default: "Enter your email")
  buttonText?: string;    // Button text (default: "Subscribe")
}
```

**Features**:
- Gradient background (Sky Blue to Coral Pink)
- Responsive form layout
- Consistent styling with design system
- Scroll-triggered animation

**Usage**:
```tsx
<NewsletterSection
  title="Never Miss an Adventure"
  subtitle="Get our latest travel stories and tips delivered straight to your inbox"
  placeholder="Your email address"
  buttonText="Subscribe Now"
/>
```

**Used In**: Blog page, potentially other pages

---

## 🧭 Layout Components

### Navbar
**Location**: `components/layout/Navbar.tsx`

Responsive navigation bar with mobile menu and animated elements.

**Props**: None (uses Next.js routing internally)

**Features**:
- Fixed positioning with backdrop blur
- Responsive mobile hamburger menu
- Active route highlighting with animated underline
- Animated airplane logo
- Smooth transitions for all interactions

**Navigation Items**:
- Home (/)
- About (/about)
- Blog (/blog)
- Shop (/shop)
- Partners (/partners)
- Contact (/contact)

**Usage**:
```tsx
<Navbar />
```

**Used In**: Layout component (all pages)

---

### Footer
**Location**: `components/layout/Footer.tsx`

Comprehensive footer with links, social media, and newsletter signup.

**Props**: None

**Features**:
- Multi-column responsive layout
- Social media links with hover animations
- Newsletter subscription form
- Animated logo
- Organized link sections (Explore, Connect, Legal)
- Copyright and legal information

**Usage**:
```tsx
<Footer />
```

**Used In**: Layout component (all pages)

---

## 🎬 Animation Patterns

### Standard Fade-In
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Staggered Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

---

## 📱 Responsive Behavior

### Grid Layouts
All card components work within responsive grid systems:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <ComponentCard key={item.id} {...item} delay={index * 0.1} />
  ))}
</div>
```

### Breakpoint Usage
- **Mobile**: Single column layouts, larger touch targets
- **Tablet**: Two-column grids, adjusted spacing
- **Desktop**: Three-column grids, hover effects enabled

---

## ♿ Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Proper tab order throughout components
- Focus indicators on all focusable elements

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- ARIA labels where appropriate

### Color Contrast
- WCAG 2.1 AA compliance
- High contrast focus indicators
- Color-blind friendly palette

---

## 🧪 Testing Guidelines

### Component Testing
```tsx
// Example test structure
describe('AnimatedCard', () => {
  it('renders content correctly', () => {
    // Test props rendering
  });

  it('handles hover interactions', () => {
    // Test hover states
  });

  it('navigates correctly on button click', () => {
    // Test navigation
  });
});
```

### Visual Testing
- Storybook integration for component documentation
- Visual regression testing for design consistency
- Cross-browser compatibility testing

---

## 🔄 Component Updates

### Version Control
- Semantic versioning for major component changes
- Changelog maintenance for breaking changes
- Backward compatibility considerations

### Performance Optimization
- Lazy loading for heavy components
- Memoization for expensive calculations
- Bundle size monitoring

---

## 📚 Usage Examples

### Creating a New Page
```tsx
export default function NewPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Page Title"
          subtitle="Page description"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <AnimatedCard
              key={item.id}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <NewsletterSection
          title="Stay Updated"
          subtitle="Get the latest updates"
        />
      </div>
    </div>
  );
}
```

### Adding New Card Types
1. Create new component in `components/cards/`
2. Follow existing prop interface patterns
3. Include animation props (delay)
4. Add to this documentation
5. Export from appropriate index file

---

This component documentation serves as a comprehensive reference for developers working on the Three Amigos travel website. Regular updates ensure accuracy and completeness as the component library evolves.