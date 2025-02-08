// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during build time
  },
  // You can add other Next.js configurations here
};

export default nextConfig;
