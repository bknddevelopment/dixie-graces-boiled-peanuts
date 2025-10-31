# GitHub Pages Deployment Configuration

This document describes the GitHub Pages configuration for this Next.js 16 project.

## Configuration Overview

The project has been configured for static export to GitHub Pages with the following settings:

### 1. Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'dixie-graces-boiled-peanuts';

const nextConfig: NextConfig = {
  output: 'export',

  // GitHub Pages configuration
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',

  // Ensure images work with static export
  images: {
    unoptimized: true,
  },

  // Disable server-side features not compatible with static export
  trailingSlash: true,
};

export default nextConfig;
```

**Key Features:**
- `output: 'export'` - Enables static HTML export
- `basePath` - Sets the base path for GitHub Pages subdirectory (`/dixie-graces-boiled-peanuts`)
- `assetPrefix` - Ensures all assets load from the correct subdirectory
- `images.unoptimized: true` - Disables Next.js image optimization (not compatible with static export)
- `trailingSlash: true` - Ensures routes work correctly on GitHub Pages

### 2. Build Scripts (`package.json`)

Added a specific build script for GitHub Pages:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:github": "NODE_ENV=production next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

### 3. Jekyll Bypass

Created `.nojekyll` file in the `public/` directory to prevent GitHub Pages from processing the site with Jekyll.

### 4. Image Path Utility (`src/lib/basePath.ts`)

Created a utility to handle image paths in production:

```typescript
export const getBasePath = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/dixie-graces-boiled-peanuts';
  }
  return '';
};

export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
};
```

All image references in `src/app/page.tsx` now use `withBasePath()` to ensure they work in both development and production.

## Build Process

### Development Build
```bash
npm run dev
```
Runs on `http://localhost:3000` without basePath prefix.

### Production Build for GitHub Pages
```bash
npm run build:github
```

This generates a static site in the `out/` directory with:
- All assets prefixed with `/dixie-graces-boiled-peanuts`
- Static HTML files for all routes
- Optimized CSS and JavaScript bundles
- `.nojekyll` file to bypass Jekyll processing

## Deployment URL

The site will be accessible at:
```
https://bknddevelopment.github.io/dixie-graces-boiled-peanuts/
```

## GitHub Pages Setup Steps

1. **Build the project:**
   ```bash
   npm run build:github
   ```

2. **Push the `out/` directory to the `gh-pages` branch:**
   ```bash
   git add out
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Directory: `/ (root)`

## Verification

After deployment, verify that:
- ✅ All pages load correctly
- ✅ All images display with correct paths
- ✅ Navigation works
- ✅ CSS and JavaScript load properly
- ✅ Background images display correctly

## Files Modified

1. `/Users/charwinvanryckdegroot/Github/DixiePeanuts/vosges-haut-chocolat/next.config.ts`
2. `/Users/charwinvanryckdegroot/Github/DixiePeanuts/vosges-haut-chocolat/package.json`
3. `/Users/charwinvanryckdegroot/Github/DixiePeanuts/vosges-haut-chocolat/src/app/page.tsx`
4. `/Users/charwinvanryckdegroot/Github/DixiePeanuts/vosges-haut-chocolat/public/.nojekyll` (created)
5. `/Users/charwinvanryckdegroot/Github/DixiePeanuts/vosges-haut-chocolat/src/lib/basePath.ts` (created)

## Testing Locally

To test the production build locally:

```bash
# Build the project
npm run build:github

# Serve the out directory with a static server (requires http-server or similar)
npx http-server out -p 3000
```

Then navigate to `http://localhost:3000/dixie-graces-boiled-peanuts/` to test.

## Important Notes

- **Development mode** (`npm run dev`) will NOT have the basePath prefix
- **Production mode** (`npm run build:github`) will include the `/dixie-graces-boiled-peanuts` prefix
- All images must use the `withBasePath()` utility function
- CSS background images are handled automatically via inline styles with `withBasePath()`
- The `.nojekyll` file is automatically copied to the `out/` directory during build
