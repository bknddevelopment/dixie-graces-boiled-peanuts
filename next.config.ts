import type { NextConfig } from "next";

const repoName = 'dixie-graces-boiled-peanuts';

const nextConfig: NextConfig = {
  output: 'export',

  // GitHub Pages configuration - always use basePath for static export
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,

  // Ensure images work with static export
  images: {
    unoptimized: true,
  },

  // Disable server-side features not compatible with static export
  trailingSlash: true,
};

export default nextConfig;
