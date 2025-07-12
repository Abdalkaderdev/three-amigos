# Assets Directory Structure

This directory contains all static assets for the Three Amigos travel website.

## 📁 Directory Structure

```
public/assets/
├── fonts/                 # Font files
│   └── Astrobia-Regular.ttf
├── logos/                 # Logo and branding
│   ├── three-amigos-logo.svg
│   ├── three-amigos-logo.png
│   ├── favicon.ico
│   └── favicon.png
├── icons/                 # Icon files
│   ├── airplane.svg
│   ├── instagram.svg
│   ├── youtube.svg
│   ├── tiktok.svg
│   └── email.svg
└── images/               # Image assets
    ├── team/             # Team member photos
    │   ├── wala-profile.jpg
    │   ├── raza-profile.jpg
    │   └── abd-profile.jpg
    ├── blog/             # Blog post featured images
    │   ├── tokyo-street-food.jpg
    │   ├── iceland-northern-lights.jpg
    │   ├── santorini-sunset.jpg
    │   ├── vietnam-backpacking.jpg
    │   ├── morocco-tagine.jpg
    │   └── drone-photography.jpg
    └── destinations/     # Travel destination photos
        ├── tokyo/
        ├── iceland/
        ├── santorini/
        ├── vietnam/
        └── morocco/
```

## 🎨 Asset Guidelines

### Fonts
- **Astrobia**: Used for headings and brand elements
- **Poppins**: Loaded from Google Fonts for body text

### Images
- **Format**: Use WebP for modern browsers, with JPEG fallbacks
- **Optimization**: Compress images for web (80-90% quality)
- **Sizing**: Provide multiple sizes for responsive images
- **Alt Text**: Always include descriptive alt text

### Icons
- **Format**: SVG preferred for scalability
- **Style**: Consistent line weight and style
- **Colors**: Use CSS for coloring when possible

### Logos
- **Formats**: SVG for web, PNG for fallbacks
- **Variants**: Light and dark versions
- **Sizes**: Multiple sizes for different use cases

## 📝 Usage Notes

### Adding New Assets
1. Follow the directory structure
2. Use descriptive, kebab-case filenames
3. Optimize for web before adding
4. Update this README if adding new categories

### Image Optimization
```bash
# Example optimization commands
# For JPEG images
jpegoptim --max=85 image.jpg

# For PNG images
optipng -o7 image.png

# Convert to WebP
cwebp -q 85 image.jpg -o image.webp
```

### Responsive Images
Use Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/team/wala-profile.jpg"
  alt="Wala - The Photographer"
  width={400}
  height={400}
  className="rounded-full"
/>
```

## 🔗 External Assets

Currently using Pexels for placeholder images:
- High-quality stock photos
- Free for commercial use
- Consistent style and quality

### Pexels Images Used
- Team photos: Professional portraits
- Travel destinations: High-quality travel photography
- Blog covers: Relevant travel scenes

## 📋 TODO: Asset Creation

### High Priority
- [ ] Create custom Three Amigos logo
- [ ] Design favicon and app icons
- [ ] Take professional team photos
- [ ] Create custom airplane icon

### Medium Priority
- [ ] Develop brand style guide
- [ ] Create social media templates
- [ ] Design email newsletter templates
- [ ] Create loading animations

### Low Priority
- [ ] Develop icon library
- [ ] Create illustration set
- [ ] Design merchandise mockups
- [ ] Create video assets

---

**Note**: Replace placeholder images with original content as soon as possible to avoid licensing issues and create a unique brand identity.