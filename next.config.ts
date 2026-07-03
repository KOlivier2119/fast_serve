import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow next/image to serve local public folder JPGs and PNGs
    formats: ["image/avif", "image/webp"],
    // No remotePatterns needed for local /public images
  },
};

export default nextConfig;
