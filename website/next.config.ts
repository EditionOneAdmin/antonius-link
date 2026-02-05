import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/antonius-link',
  assetPrefix: '/antonius-link',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
