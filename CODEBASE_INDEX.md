# Three Amigos Travel Website - Codebase Index

## 📋 Project Overview

**Project Name**: Three Amigos Travel Vlog Website  
**Framework**: Next.js 13.5.1 with App Router  
**Language**: TypeScript  
**Styling**: Tailwind CSS + Shadcn/ui  
**Animations**: Framer Motion  
**Status**: Phase 2 (Animations in Progress)  

## 🏗️ Architecture Overview

```
three-amigos-travel/
├── app/                    # Next.js App Router
├── components/            # Reusable React components
├── pages/                # Legacy Pages Router (to be migrated)
├── lib/                  # Utility functions and helpers
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── [config files]       # Configuration and documentation
```

## 📁 Directory Structure

### `/app` - Next.js App Router
- **`layout.tsx`** (1KB) - Root layout with metadata and global styles
- **`page.tsx`** (6.1KB) - Home page with hero section and recent adventures
- **`globals.css`** (1.6KB) - Global CSS with Tailwind directives and custom styles

### `/components` - React Components

#### `/components/ui` - UI Component Library (50+ components)
**Shadcn/ui Components:**
- `accordion.tsx` (2.0KB) - Collapsible content sections
- `alert.tsx` (1.6KB) - Alert messages and notifications
- `alert-dialog.tsx` (4.4KB) - Confirmation dialogs
- `aspect-ratio.tsx` (158B) - Maintain aspect ratio for content
- `avatar.tsx` (1.4KB) - User profile avatars
- `badge.tsx` (1.1KB) - Status and category badges
- `breadcrumb.tsx` (2.7KB) - Navigation breadcrumbs
- `button.tsx` (1.8KB) - Primary button component
- `calendar.tsx` (2.6KB) - Date picker calendar
- `card.tsx` (1.9KB) - Content card containers
- `carousel.tsx` (6.1KB) - Image/content carousel
- `chart.tsx` (10KB) - Data visualization charts
- `checkbox.tsx` (1.1KB) - Checkbox input component
- `collapsible.tsx` (335B) - Collapsible content
- `command.tsx` (4.8KB) - Command palette interface
- `context-menu.tsx` (7.1KB) - Right-click context menus
- `dialog.tsx` (3.8KB) - Modal dialogs
- `dropdown-menu.tsx` (7.2KB) - Dropdown menus
- `drawer.tsx` (3.0KB) - Slide-out drawers
- `form.tsx` (4.1KB) - Form components with validation
- `hover-card.tsx` (1.2KB) - Hover-triggered cards
- `input.tsx` (851B) - Text input fields
- `input-otp.tsx` (2.1KB) - One-time password input
- `label.tsx` (733B) - Form labels
- `menubar.tsx` (7.8KB) - Application menu bar
- `navigation-menu.tsx` (4.9KB) - Navigation menus
- `pagination.tsx` (2.7KB) - Page navigation
- `popover.tsx` (1.2KB) - Popover content
- `progress.tsx` (798B) - Progress indicators
- `radio-group.tsx` (1.5KB) - Radio button groups
- `resizable.tsx` (1.7KB) - Resizable panels
- `scroll-area.tsx` (1.6KB) - Custom scroll areas
- `select.tsx` (5.5KB) - Dropdown select
- `separator.tsx` (777B) - Visual separators
- `sheet.tsx` (4.2KB) - Slide-out sheets
- `skeleton.tsx` (264B) - Loading skeletons
- `slider.tsx` (1.1KB) - Range sliders
- `sonner.tsx` (902B) - Toast notifications
- `switch.tsx` (1.1KB) - Toggle switches
- `table.tsx` (2.7KB) - Data tables
- `tabs.tsx` (1.9KB) - Tabbed content
- `textarea.tsx` (778B) - Multi-line text input
- `toast.tsx` (4.8KB) - Toast notifications
- `toaster.tsx` (792B) - Toast container
- `toggle.tsx` (1.4KB) - Toggle buttons
- `toggle-group.tsx` (1.7KB) - Toggle button groups
- `tooltip.tsx` (1.1KB) - Information tooltips

**Custom Animated Components:**
- `AnimatedButton.tsx` (1.6KB) - Button with Framer Motion animations
- `AnimatedIcon.tsx` (1.0KB) - Icon with various animation types

#### `/components/cards` - Card Components
- `AnimatedCard.tsx` (1.9KB) - General purpose animated card
- `BlogCard.tsx` (2.7KB) - Blog post preview cards
- `PartnerCard.tsx` (1.9KB) - Partner/sponsor showcase cards
- `ProfileCard.tsx` (2.7KB) - Team member profile cards

#### `/components/sections` - Page Sections
- `HeroSection.tsx` (2.1KB) - Reusable hero section component
- `NewsletterSection.tsx` (1.3KB) - Email newsletter signup
- `SectionHeader.tsx` (742B) - Consistent section headers

#### `/components/layout` - Layout Components
- `Footer.tsx` (5.6KB) - Site footer with links and social media
- `Navbar.tsx` (3.6KB) - Responsive navigation with mobile menu

### `/pages` - Legacy Pages Router (Migration Pending)
- `about.tsx` (4.3KB) - About Us page
- `blog.tsx` (3.8KB) - Blog listing page
- `contact.tsx` (9.5KB) - Contact page with form
- `index.tsx` (2.3KB) - Legacy home page
- `partners.tsx` (5.6KB) - Partners page
- `shop.tsx` (5.7KB) - Shop page (coming soon)

### `/lib` - Utility Functions
- `utils.ts` (169B) - Utility functions (clsx, cn)

### `/hooks` - Custom React Hooks
- `use-toast.ts` (3.9KB) - Toast notification hook

### `/public` - Static Assets
- `/assets/fonts/` - Font files (Astrobia, Poppins)
- `/assets/icons/` - Custom icon files
- `/assets/images/` - Travel and team images
- `/assets/logos/` - Brand logo files

## 🎨 Design System

### Color Palette
- **Primary**: Sky Blue (#00BFFF)
- **Secondary**: Coral Pink (#FF6F61)
- **Background**: Soft Beige (#F5F5DC)
- **Text**: Various gray shades for hierarchy

### Typography
- **Headings**: Poppins Bold (Astrobia style)
- **Body**: Poppins Regular (300-700 weights)
- **Spacing**: 8px grid system

### Component Standards
- Rounded corners (12px-24px)
- Soft shadows for depth
- Hover animations on interactive elements
- Consistent spacing and alignment

## 🎬 Animation System

### Framer Motion Implementation
- **Timing**: 0.3s for quick, 0.6s for standard animations
- **Easing**: Consistent easing curves across components
- **Performance**: GPU acceleration and reduced motion support

### Animated Components
- `AnimatedButton`: Hover effects and click animations
- `AnimatedCard`: Stagger animations and hover effects
- `AnimatedIcon`: Multiple animation types (bounce, rotate, scale)
- `HeroSection`: Fade-in and stagger animations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Touch-friendly interactions (44px minimum targets)
- Optimized navigation for mobile devices
- Performance optimizations for mobile networks

## 🛠️ Technology Stack

### Core Dependencies
- **Next.js**: 13.5.1 (App Router)
- **React**: 18.2.0
- **TypeScript**: 5.2.2
- **Tailwind CSS**: 3.3.3

### UI & Animation
- **Shadcn/ui**: Complete component library
- **Framer Motion**: 12.23.3 (animations)
- **Lucide React**: 0.525.0 (icons)
- **Radix UI**: Comprehensive UI primitives

### Forms & Validation
- **React Hook Form**: 7.53.0
- **Zod**: 3.23.8 (schema validation)
- **Hookform Resolvers**: 3.9.0

### Additional Libraries
- **date-fns**: 3.6.0 (date utilities)
- **recharts**: 2.12.7 (charts)
- **sonner**: 1.5.0 (toast notifications)
- **next-themes**: 0.3.0 (theme switching)

## 📊 Project Status

### ✅ Completed (Phase 1)
- [x] Next.js setup with App Router
- [x] Tailwind CSS configuration
- [x] Shadcn/ui component library
- [x] Basic page structure
- [x] Responsive design system
- [x] Navigation and layout components

### 🎬 In Progress (Phase 2)
- [x] Framer Motion integration
- [x] Basic animation components
- [x] Card hover effects
- [ ] Advanced scroll animations
- [ ] Page transitions
- [ ] Performance optimization

### 📋 Planned (Phase 3+)
- [ ] E-commerce integration (Shopify)
- [ ] Content management system
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Testing infrastructure

## 🔧 Development Guidelines

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Naming**: PascalCase for components, camelCase for functions
- **Structure**: Consistent component organization

### Component Architecture
```tsx
interface ComponentProps {
  // Define all props with types
}

export default function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX with proper className usage
  );
}
```

### Animation Guidelines
- Use consistent timing (0.3s for quick, 0.6s for standard)
- Apply `viewport={{ once: true }}` for scroll animations
- Use `whileHover` for interactive elements
- Support reduced motion preferences

## 📈 Performance Metrics

### Current Status
- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic with Next.js
- **SEO**: Meta tags and structured data ready

### Optimization Targets
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 600ms

## 🔗 External Integrations

### Ready for Integration
- **Shopify**: E-commerce platform
- **Email Marketing**: Newsletter signup forms
- **Social Media**: Instagram, YouTube, TikTok
- **Analytics**: Google Analytics setup

### Planned Integrations
- **Payment Processing**: Stripe, PayPal
- **Content Management**: Headless CMS
- **Search**: Algolia or similar
- **CDN**: Cloudflare or similar

## 📚 Documentation

### Current Documentation
- `README.md` - Project overview and setup
- `STYLE_GUIDE.md` - Design system guidelines
- `COMPONENTS.md` - Component documentation
- `TODO.md` - Current tasks and next steps
- `ROADMAP.md` - Development phases and timeline

### Planned Documentation
- API documentation
- Deployment guide
- Troubleshooting guide
- Component storybook

## 🚀 Deployment & Infrastructure

### Development
- **Local**: `npm run dev` (Next.js development server)
- **Build**: `npm run build` (Production build)
- **Start**: `npm run start` (Production server)

### Planned Infrastructure
- **Hosting**: Vercel or Netlify
- **Domain**: Custom domain setup
- **SSL**: Automatic HTTPS
- **CDN**: Global content delivery
- **Monitoring**: Performance and error tracking

---

**Last Updated**: December 2024  
**Version**: 0.1.0  
**Status**: Development Phase 2 (Animations)  

For detailed development tasks, see [TODO.md](./TODO.md)  
For project roadmap, see [ROADMAP.md](./ROADMAP.md)  
For design guidelines, see [STYLE_GUIDE.md](./STYLE_GUIDE.md) 