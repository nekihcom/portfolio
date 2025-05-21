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
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // ビルド時の型チェックを無効化
    ignoreBuildErrors: true,
  },
  // 開発環境でのクロスオリジンリクエストを許可
  allowedDevOrigins: ['192.168.11.4'],
}

module.exports = nextConfig 