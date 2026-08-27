import type { Metadata } from "next";
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "エンジニアのnekihcomが、個人事業獲得を目指して発信する技術・仕事の知見ブログ。",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
