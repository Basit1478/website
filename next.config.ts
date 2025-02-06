// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
  // You can add other Next.js configurations here
};

export default nextConfig;
