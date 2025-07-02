import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mochiken - Software Engineer",
    template: "%s | Mochiken"
  },
  description: "エンジニア Mochiken のポートフォリオサイト。React、Next.js、TypeScriptを使ったWeb開発の実績やブログ記事を公開しています。",
  keywords: ["フロントエンド", "React", "Next.js", "TypeScript", "Web開発", "ポートフォリオ"],
  authors: [{ name: "Mochiken" }],
  creator: "Mochiken",
  publisher: "Mochiken",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mchkn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.mchkn.com",
    title: "Mochiken - ポートフォリオ",
    description: "フロントエンドエンジニア Mochiken のポートフォリオサイト。React、Next.js、TypeScriptを使ったWeb開発の実績やブログ記事を公開しています。",
    siteName: "Mochiken Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mochiken Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mochiken - ポートフォリオ",
    description: "フロントエンドエンジニア Mochiken のポートフォリオサイト。React、Next.js、TypeScriptを使ったWeb開発の実績やブログ記事を公開しています。",
    images: ["/og-image.png"],
    creator: "@mochiken",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PersonJsonLd
          name="Mochiken"
          url="https://www.mchkn.com"
          jobTitle="フロントエンドエンジニア"
          worksFor="フリーランス"
          sameAs={[
            "https://github.com/mochiken",
            "https://twitter.com/mochiken",
          ]}
        />
        <WebsiteJsonLd
          name="Mochiken Portfolio"
          url="https://www.mchkn.com"
          description="フロントエンドエンジニア Mochiken のポートフォリオサイト。React、Next.js、TypeScriptを使ったWeb開発の実績やブログ記事を公開しています。"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
