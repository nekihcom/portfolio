/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'qiita-user-contents.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 