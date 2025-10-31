# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 luxury chocolate e-commerce website for **Vosges Haut-Chocolat**, featuring a sophisticated design system based on the official Vosges brand identity. The site showcases holiday collections, advent calendars, and artisanal chocolate products.

**Key Context**: This project also serves as a template for **Dixie Grace's Artisanal Boiled Peanuts**, with product images stored in the parent directory and referenced in the site.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm start

# Linting
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router with Turbopack)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 (latest, with custom design tokens)
- **TypeScript**: Strict mode enabled
- **Icons**: Lucide React
- **Fonts**: Next.js font optimization with Playfair Display (serif) and Inter (sans-serif)

## Design System Architecture

The project uses a **token-based design system** located in `src/theme/tokens/`. This is the single source of truth for all design values.

### Design Tokens Structure

All design tokens are centralized in `src/theme/tokens/`:

```
src/theme/tokens/
├── index.ts         # Central export
├── colors.ts        # Brand colors, UI colors, gradients
├── typography.ts    # Font families, sizes, weights, line heights
├── spacing.ts       # Consistent spacing scale
├── shadows.ts       # Box shadow definitions
├── radius.ts        # Border radius values
└── animation.ts     # Transition durations and timing functions
```

**Important**: These tokens are imported into `tailwind.config.ts` and extend Tailwind's default theme. Always use these tokens rather than arbitrary values.

### Brand Colors

The Vosges brand identity uses:
- **Primary**: `#381667` (deep purple) - main brand color
- **Secondary**: `#0D7377` (teal) - accent color
- **Accent**: `#FFC107` (amber gold) - highlights
- **Background**: `#F6F6F4` (cream/off-white)

Access via Tailwind: `bg-brand-primary`, `text-brand-secondary`, etc.

### Component Organization (Atomic Design)

```
src/components/
├── atoms/       # Basic building blocks (buttons, inputs)
├── molecules/   # Simple component combinations
├── organisms/   # Complex UI sections
└── templates/   # Page-level layouts
```

Currently, components are defined inline in `src/app/page.tsx` (e.g., `NavLink`, `ProductCard`). Future refactoring should move these to the atomic structure.

## File Structure

```
vosges-haut-chocolat/
├── public/                              # Static assets
│   ├── dixiebackground.webp             # Hero background
│   └── DG_Original_Rendering_Transparent.webp  # Dixie Grace product image
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── page.tsx                     # Homepage (main layout)
│   │   ├── layout.tsx                   # Root layout with fonts
│   │   └── globals.css                  # Global styles + CSS variables
│   ├── components/                      # UI components (atomic structure)
│   ├── theme/                           # Design system tokens
│   └── docs/                            # Documentation
├── tailwind.config.ts                   # Tailwind config (imports tokens)
├── next.config.ts                       # Next.js configuration
└── tsconfig.json                        # TypeScript config with path aliases
```

## TypeScript Configuration

Path aliases are configured for cleaner imports:
- `@/*` maps to `src/*`

Example: `import { colors } from '@/theme/tokens'`

## Styling Conventions

1. **Use design tokens** from `src/theme/tokens/` via Tailwind classes
2. **Font families**:
   - `font-serif` (Playfair Display) for headings
   - `font-sans` (Inter) for body text
3. **CSS variables** are defined in `globals.css` for compatibility with Tailwind 4's `@theme inline` directive
4. **Responsive design**: Mobile-first approach with breakpoints `sm:`, `md:`, `lg:`
5. **Custom scrollbar** styled in `globals.css` to match brand colors

## Image Handling

- Use Next.js `<Image>` component for optimization
- Static images in `public/` folder
- Product images may reference assets from parent directory (`/Users/.../DixiePeanuts/`)
- Always provide `alt` text for accessibility
- Use `width` and `height` props for layout stability

## Current Page Structure (src/app/page.tsx)

The homepage contains these sections:
1. **Announcement Bar** - promotional message
2. **Header** - logo, navigation, icons (user, search, cart)
3. **Hero Section** - full-width background image with overlay
4. **Holiday Collection** - product grid with 4 cards
5. **Mellon Collie Sessions** - text + product image section
6. **Le Jardin de Cacao** - call-to-action section with image
7. **Footer** - 4-column layout with links and branding

## Component Patterns

### Inline Components (Current Approach)

```typescript
function NavLink({ children, dropdown = false }: {
  children: React.ReactNode,
  dropdown?: boolean
}) {
  // Implementation
}
```

### Product Cards

Product cards accept:
- `image`: emoji or path (to be refactored to proper image URLs)
- `title`, `price`, `rating`, `reviews`

## Development Workflow

1. **Make changes** to `src/app/page.tsx` or theme tokens
2. **Hot reload** is automatic via Next.js dev server
3. **Type checking** happens on build (strict mode enabled)
4. **Tailwind purges** unused classes in production build

## Build Output

- Production build generates static HTML for the homepage (`/`)
- Static generation (`○` symbol in build output)
- Turbopack is used for faster compilation

## Known Patterns

### Gradient Backgrounds

Multi-color gradients are used extensively:
```tsx
className="bg-gradient-to-br from-red-700 via-teal-600 to-purple-900"
```

Gradient tokens are available in `colors.gradients` for reuse.

### Button Styling

Primary CTA buttons:
```tsx
className="bg-brand-primary hover:bg-brand-primaryHover text-white px-12 py-3 text-sm font-medium tracking-wider transition-colors"
```

Secondary outline buttons:
```tsx
className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
```

## Future Considerations

1. **Component extraction**: Move inline components (`NavLink`, `ProductCard`) to `src/components/` following atomic design
2. **Product data**: Create a data layer for product information instead of hardcoding
3. **Routing**: Add product detail pages, about page, shop pages
4. **State management**: Consider adding cart functionality with context or state library
5. **SEO**: Add sitemap.xml, robots.txt, structured data (Schema.org)
6. **Testing**: Set up Jest + React Testing Library
7. **API integration**: Connect to headless CMS or e-commerce backend

## Design System Maintenance

When adding new design values:
1. Add to appropriate token file in `src/theme/tokens/`
2. Export from `src/theme/tokens/index.ts`
3. Extend in `tailwind.config.ts` if needed for Tailwind classes
4. Update CSS variables in `globals.css` if needed for `@theme inline`

**Never** use arbitrary Tailwind values (`bg-[#381667]`) - always use tokens (`bg-brand-primary`).
