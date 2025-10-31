/**
 * Vosges Haut-Chocolat Design Tokens
 * Central export for all design tokens
 */

export { colors, type Colors } from './colors'
export { typography, type Typography } from './typography'
export { spacing, type Spacing } from './spacing'
export { shadows, type Shadows } from './shadows'
export { radius, type Radius } from './radius'
export { animation, type Animation } from './animation'

// Combined tokens object
import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'
import { shadows } from './shadows'
import { radius } from './radius'
import { animation } from './animation'

export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  radius,
  animation,
} as const

export type Tokens = typeof tokens
