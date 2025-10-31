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
