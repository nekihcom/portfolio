/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.jp',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 