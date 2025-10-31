/**
 * Vosges Haut-Chocolat Border Radius Tokens
 * Subtle rounding for elegant, refined appearance
 */

export const radius = {
  none: '0',
  sm: '0.25rem',    // 4px
  base: '0.375rem', // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',   // Fully rounded
} as const

export type Radius = typeof radius
