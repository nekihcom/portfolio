import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "エンジニアのnekihcomが、個人事業獲得を目指して発信する技術・仕事の知見ブログ。",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
