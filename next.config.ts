import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qiita-user-contents.imgix.net",
      },
    ],
  },
};

export default nextConfig;
