import type { Config } from 'tailwindcss'
import { colors, typography, spacing, shadows, radius, animation } from './src/theme/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        ui: colors.ui,
        feedback: colors.feedback,
        gradients: colors.gradients,
      },
      fontFamily: {
        serif: typography.fontFamily.serif.split(','),
        sans: typography.fontFamily.sans.split(','),
        mono: typography.fontFamily.mono.split(','),
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      boxShadow: shadows,
      borderRadius: radius,
      transitionDuration: animation.duration,
      transitionTimingFunction: animation.timing,
    },
  },
  plugins: [],
}

export default config
