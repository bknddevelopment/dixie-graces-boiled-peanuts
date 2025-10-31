/**
 * Get the base path for assets in production (GitHub Pages)
 * In development, returns empty string
 * In production, returns the repository name prefix
 */
export const getBasePath = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/dixie-graces-boiled-peanuts';
  }
  return '';
};

/**
 * Add base path prefix to a public asset path
 * @param path - Path to the asset (e.g., "/logo.webp")
 * @returns Path with base path prefix in production
 */
export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  // Don't add prefix if path is absolute URL or already has the prefix
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
};
