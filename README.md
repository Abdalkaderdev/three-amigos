# Three Amigos Travel Vlog Website

A modern, responsive travel vlog website built for three adventurous friends: Wala, Raza, and Abd. This project showcases their travel experiences through beautiful design, engaging content, and smooth animations. Features a futuristic "Link in Bio" page with cosmic design elements.

## 🌟 Project Overview

The Three Amigos website is a comprehensive travel platform featuring:
- **Seven Core Pages**: Home, About, Blog, Shop (Coming Soon), Partners, Contact, and Links
- **Modern Design**: Clean, responsive layout with premium aesthetics
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Futuristic Elements**: Cosmic design for special pages like the Link in Bio
- **Mobile-First Responsive**: Optimized for all device sizes
- **SEO Optimized**: Built with Next.js best practices

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Typography**: Poppins font family + Orbitron for futuristic elements
- **Development**: TypeScript for type safety

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/Abdalkaderdev/three-amigos.git
cd three-amigos

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
three-amigos/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── blog/             # Blog page
│   ├── shop/             # Shop page
│   ├── partners/         # Partners page
│   ├── contact/          # Contact page
│   ├── links/            # Futuristic Link in Bio page
│   ├── newsletter/       # Newsletter page
│   ├── privacy-policy/   # Privacy Policy page
│   ├── terms-of-service/ # Terms of Service page
│   ├── cookie-policy/    # Cookie Policy page
│   └── disclaimer/       # Disclaimer page
├── components/           # Reusable components
│   ├── cards/           # Card components
│   │   ├── AnimatedCard.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── PartnerCard.tsx
│   ├── sections/        # Section components
│   │   ├── HeroSection.tsx
│   │   ├── SectionHeader.tsx
│   │   └── NewsletterSection.tsx
│   ├── ui/              # UI components
│   │   ├── AnimatedButton.tsx
│   │   ├── AnimatedIcon.tsx
│   │   ├── FuturisticLinkButton.tsx
│   │   ├── CosmicBackground.tsx
│   │   └── [shadcn components]
│   └── layout/          # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/assets/       # Static assets
│   ├── fonts/          # Font files
│   ├── logos/          # Logo files
│   ├── icons/          # Icon files
│   └── images/         # Image files
├── lib/                # Utility functions
├── docs/               # Documentation
└── [config files]     # Various config files
```

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#00BFFF)
- **Secondary**: Coral Pink (#FF6F61)
- **Background**: Soft Beige (#F5F5DC)
- **Cosmic**: Black (#000000) for futuristic pages
- **Text**: Various gray shades for hierarchy

### Typography
- **Headings**: Poppins Bold (Astrobia style)
- **Body**: Poppins Regular (300-700 weights)
- **Futuristic**: Orbitron font for cosmic elements
- **Spacing**: 8px grid system

### Components
- Rounded corners (12px-24px)
- Soft shadows for depth
- Hover animations on interactive elements
- Consistent spacing and alignment
- **NEW**: Cosmic glow effects and particle animations

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested across devices.

## 🎬 Animation System

Powered by Framer Motion with consistent timing and easing:
- **Fade-in animations** for page sections
- **Hover effects** on cards and buttons
- **Bouncing airplane** in navigation
- **Scroll-based animations** for enhanced UX
- **NEW**: Cosmic particle effects and orbiting elements
- **NEW**: Glow trail effects and mouse-following parallax

## 🌌 Futuristic Features

### Link in Bio Page (`/links`)
- **Cosmic background** with animated starfield
- **Futuristic link buttons** with glow effects
- **Particle animations** and orbiting elements
- **Mouse-following parallax** effects
- **Staggered animations** for smooth page load
- **Mobile-optimized** cosmic design

### Cosmic Design Elements
- **Glow effects** on text and buttons
- **Floating particles** with brand colors
- **Orbiting planets** and celestial elements
- **Gradient backgrounds** with animated shifts
- **Backdrop blur** and glass-morphism effects

## 🧩 Component Library

### Cards
- `AnimatedCard`: General purpose animated card
- `ProfileCard`: Team member profiles with hover effects
- `BlogCard`: Blog post previews with metadata
- `PartnerCard`: Partner/sponsor showcases

### UI Elements
- `AnimatedButton`: Buttons with hover animations
- `AnimatedIcon`: Icons with various animation types
- `FuturisticLinkButton`: Cosmic animated link buttons
- `CosmicBackground`: Starfield and particle effects
- `HeroSection`: Reusable hero section component
- `SectionHeader`: Consistent section headers

### Layout
- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Comprehensive footer with links and social media

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow ESLint configuration
- Use Prettier for code formatting
- Consistent naming conventions (PascalCase for components)

### Component Structure
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
- **NEW**: Use cosmic easing for futuristic effects

## 📈 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic with Next.js
- **SEO**: Meta tags and structured data ready
- **Animation Performance**: GPU-accelerated transforms

## 🔗 External Integrations

### Ready for Integration
- **Shopify**: E-commerce platform for shop page
- **Email Marketing**: Newsletter signup forms ready
- **Social Media**: Instagram, YouTube, TikTok integration points
- **Analytics**: Google Analytics setup ready

### Social Media Links
- **Instagram**: @threeamigos
- **TikTok**: @threeamigos
- **YouTube**: @threeamigos
- **Email**: hello@threeamigos.travel

## 📚 Documentation

- [ROADMAP.md](./ROADMAP.md) - Development phases and timeline
- [STYLE_GUIDE.md](./STYLE_GUIDE.md) - Design system guidelines
- [COMPONENTS.md](./COMPONENTS.md) - Component documentation
- [TODO.md](./TODO.md) - Current tasks and next steps

## 🤝 Contributing

This project is designed for easy collaboration:
1. Follow the established component structure
2. Use TypeScript for type safety
3. Test responsive design on multiple devices
4. Document new components in COMPONENTS.md
5. Follow the cosmic design system for futuristic elements

## 📄 License

This project is created for Three Amigos Travel. All rights reserved.

---

**Built with ❤️ for the travel community**

For questions or support, refer to the documentation files or contact the development team.

**Repository**: https://github.com/Abdalkaderdev/three-amigos