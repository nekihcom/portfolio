import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "mochiken, Software Engineer",
  description: "エンジニアもちけんのポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenMaruGothic.variable} antialiased bg-neutral-100 text-gray-900`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8055306644572160"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <div className="pt-[80px] pb-24">
          {children}
        </div>
        <ScrollToTop />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
