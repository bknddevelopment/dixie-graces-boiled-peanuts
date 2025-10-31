# System Patterns

## Architecture

### Design Token System
**Location**: `src/theme/tokens/`

Single source of truth for all design values:
- `colors.ts` - Brand colors, UI colors, gradients
- `typography.ts` - Font families, sizes, weights
- `spacing.ts` - Consistent spacing scale
- `shadows.ts` - Box shadow definitions
- `radius.ts` - Border radius values
- `animation.ts` - Transition timing

**Flow**: Tokens → `tailwind.config.ts` → Tailwind classes → Components

**Rule**: NEVER use arbitrary values. Always use tokens.

### Component Organization (Atomic Design)
```
src/components/
├── atoms/       # Basic building blocks
├── molecules/   # Simple combinations
├── organisms/   # Complex UI sections
└── templates/   # Page-level layouts
```

**Current State**: Components inline in `page.tsx` (NavLink, ProductCard)
**Future**: Extract to atomic structure

### File Structure Conventions
- Path alias: `@/*` maps to `src/*`
- Images in `public/` directory
- Global styles in `src/app/globals.css`
- Page components in `src/app/`

## Code Patterns

### Styling Pattern
```tsx
// ✅ Correct: Use tokens
className="bg-brand-primary text-white hover:bg-brand-primaryHover"

// ❌ Wrong: Arbitrary values
className="bg-[#381667] text-white hover:bg-[#4A1D6E]"
```

### Button Pattern
```tsx
// Primary CTA
className="bg-brand-primary hover:bg-brand-primaryHover text-white px-12 py-3 text-sm font-medium tracking-wider transition-colors"

// Secondary outline
className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
```

### Gradient Pattern
```tsx
className="bg-gradient-to-br from-red-700 via-teal-600 to-purple-900"
// Tokens available in colors.gradients
```

### Image Pattern
```tsx
<Image
  src="/image.webp"
  alt="Descriptive text"
  width={400}
  height={400}
  className="object-contain"
/>
```

## Naming Conventions
- Components: PascalCase
- Files: kebab-case for pages, PascalCase for components
- CSS variables: --kebab-case
- Tailwind classes: lowercase with dashes
