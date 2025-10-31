/**
 * Vosges Haut-Chocolat Color Tokens
 * Based on the official Vosges brand identity
 */

export const colors = {
  // Brand colors - Vosges signature palette
  brand: {
    primary: '#381667',      // Deep purple - primary brand color
    primaryHover: '#4A1D6E', // Slightly lighter for hover states
    primaryLight: '#5D2A8F', // Light variant
    secondary: '#0D7377',    // Teal - accent color
    accent: '#FFC107',       // Amber gold - highlights
    deepBlue: '#16213e',     // Dark blue for hero sections
    crimson: '#B91C1C',      // Deep red accent
  },

  // UI colors
  ui: {
    background: {
      primary: '#FFFFFF',    // Pure white
      secondary: '#F6F6F4',  // Cream/off-white - main background
      tertiary: '#F3F4F6',   // Light gray
      dark: '#1F2937',       // Dark background
    },
    border: {
      light: '#E5E7EB',
      medium: '#D1D5DB',
      dark: '#9CA3AF',
    },
    text: {
      primary: '#381667',    // Brand purple for primary text
      secondary: '#4B5563',  // Gray for secondary text
      tertiary: '#6B7280',   // Light gray for tertiary
      inverse: '#FFFFFF',    // White text on dark backgrounds
      muted: '#9CA3AF',      // Muted gray
    }
  },

  // Feedback colors
  feedback: {
    success: '#10B981',      // Green
    warning: '#F59E0B',      // Orange
    error: '#EF4444',        // Red
    info: '#3B82F6',         // Blue
  },

  // Gradient colors for hero sections
  gradients: {
    purpleBlue: {
      from: '#1a0a2e',
      via: '#16213e',
      to: '#0f3460',
    },
    tealBlue: {
      from: '#0D7377',
      via: '#14919B',
      to: '#1E40AF',
    },
    crimsonTeal: {
      from: '#B91C1C',
      via: '#0D7377',
      to: '#5B21B6',
    }
  }
} as const

export type Colors = typeof colors
