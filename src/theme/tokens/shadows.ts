/**
 * Vosges Haut-Chocolat Shadow Tokens
 * Elevation system for depth and hierarchy
 */

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',

  // Colored shadows for brand elements
  purple: '0 10px 25px -5px rgba(56, 22, 103, 0.3)',
  teal: '0 10px 25px -5px rgba(13, 115, 119, 0.3)',
  amber: '0 10px 25px -5px rgba(255, 193, 7, 0.3)',
} as const

export type Shadows = typeof shadows
