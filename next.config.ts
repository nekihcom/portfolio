import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.mchkn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
