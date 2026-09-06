import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.mchkn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
