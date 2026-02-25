import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Ensure images work with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
