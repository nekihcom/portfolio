import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio | けむもち",
    template: "%s | けむもち"
  },
  description: "フロントエンドエンジニア けむもちのポートフォリオサイトです。",
  keywords: ["ポートフォリオ", "フロントエンド", "エンジニア", "Web開発", "React", "Next.js"],
  authors: [{ name: "けむもち" }],
  creator: "けむもち",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mkemmochi.com",
    siteName: "Portfolio | けむもち",
    title: "Portfolio | けむもち",
    description: "フロントエンドエンジニア けむもちのポートフォリオサイトです。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | けむもち",
    description: "フロントエンドエンジニア けむもちのポートフォリオサイトです。",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
