import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mochiken",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 text-gray-900`}
      >
        <Header />
        <div className="pt-[100px]">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
