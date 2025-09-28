# Deo Exotic Attar & Perfume - Development Instructions

## Project Overview
Creating a premium Next.js e-commerce website for "Deo Exotic Attar & Perfume" - a luxury brand specializing in 100% natural oil-based perfumes with no parabens, chemicals, or side effects.

## Brand Identity
- **Business Name**: Deo Exotic Attar & Perfume
- **Value Proposition**: 100% Natural Oil-Based Perfumes - No Parabens, No Chemicals, No Side Effects
- **Target Audience**: Health-conscious luxury consumers seeking authentic, natural fragrances
- **Brand Colors**: 
  - Deep amber (#8B4513)
  - Gold (#FFD700) 
  - Cream (#FFF8DC)
  - Forest Green (#228B22)
- **Typography**: 
  - Headings: Playfair Display (elegant serif)
  - Body: Inter (clean sans-serif)

## Technical Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom theme
- **3D Graphics**: Three.js (@react-three/fiber, @react-three/drei)
- **Animations**: Framer Motion, GSAP ScrollTrigger, Lottie
- **State Management**: Zustand for cart, React Query for data
- **Language**: TypeScript
- **Performance**: Edge runtime, Server Components, Image optimization

## Key Features
1. **3D Hero Section**: Interactive perfume bottle with particle effects
2. **Glass-morphism UI**: Modern, premium aesthetic
3. **Scroll Animations**: Parallax effects and reveal animations
4. **Product Showcase**: 360° product views with AR capabilities
5. **Interactive Ingredients**: Educational transparency section
6. **Mobile-first Design**: Responsive across all devices

## Performance Targets
- Lighthouse score > 95
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1
- WCAG 2.1 AA compliance

## Project Structure
```
/app
  /layout.tsx (root layout with providers)
  /page.tsx (home page)
  /(components)
    /Header.tsx
    /Hero3D.tsx
    /ProductGrid.tsx
    /Testimonials.tsx
    /Features.tsx
    /Ingredients.tsx
    /CTA.tsx
    /Footer.tsx
  /api
    /newsletter/route.ts
    /products/route.ts
  /loading.tsx
  /error.tsx
  /not-found.tsx
```

## Development Approach
1. Start with component architecture and basic styling
2. Implement 3D features progressively
3. Add animations and interactions
4. Optimize for performance and accessibility
5. Test across devices and browsers

## Quality Standards
- Use Server Components by default, Client Components only when needed
- Implement proper error boundaries and loading states
- Follow accessibility best practices
- Optimize images with next/image
- Use semantic HTML and proper ARIA labels
- Implement proper TypeScript types

## Brand Voice & Messaging
- Emphasize purity, luxury, and natural authenticity
- Focus on health benefits and chemical-free formulation
- Maintain premium, trustworthy tone
- Highlight craftsmanship and quality