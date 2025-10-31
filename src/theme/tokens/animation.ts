/**
 * Vosges Haut-Chocolat Animation Tokens
 * Smooth, elegant transitions for refined user experience
 */

export const animation = {
  duration: {
    instant: '75ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },

  timing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    elegant: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',  // Smooth, refined
  },
} as const

export type Animation = typeof animation
