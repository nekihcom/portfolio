import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { DevEnvironment } from "@/components/ui/DevEnvironment";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Portfolio | もちけん",
    template: "%s | もちけん"
  },
  description: "フロントエンドエンジニア もちけんのポートフォリオサイトです。",
  keywords: ["ポートフォリオ", "フロントエンド", "エンジニア", "Web開発", "React", "Next.js"],
  authors: [{ name: "もちけん" }],
  creator: "もちけん",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.nekihcom.com",
    siteName: "Portfolio | もちけん",
    title: "Portfolio | もちけん",
    description: "フロントエンドエンジニア もちけんのポートフォリオサイトです。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | もちけん",
    description: "フロントエンドエンジニア もちけんのポートフォリオサイトです。",
  },
  robots: {
    index: true,
    follow: true,
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
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <DevEnvironment className="sticky top-[64px]" />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
