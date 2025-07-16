import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import { socialLinks } from "@/data/SocialLinkData";


export default function RedesignComponentsPage() {

  const blogData = [
    {
      title: "朝の30分で変わる、わたしのルーティン",
      date: "2025-01-01",
    },
    {
      title: "朝の30分で変わる、わたしのルーティン。朝の30分で変わる、わたしのルーティン。",
      date: "2025-01-01",
    },
    {
      title: "朝の30分で変わる、わたしのルーティン。朝の30分で変わる、わたしのルーティン。朝の30分で変わる、わたしのルーティン。",
      date: "2025-01-01",
    },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <section className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Badge</h1>
        <div className="mt-4 mb-10">
          <Badge variant="default">Badge</Badge>
        </div>


        <h1 className="text-2xl font-bold">Card (Work)</h1>
        <div className="mt-4 mb-10">
          <div className="max-w-[370px]">
            <Card className="overflow-hidden pt-0">
              <CardHeader className="relative h-48">
                <Image src="https://placehold.jp/1200x630.png" alt="Card Image" fill />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">朝の30分で変わる、わたしのルーティン</CardTitle>
                <CardDescription>毎日を少しだけ整える習慣。気持ちよく1日を始めるためのコツをご紹介します。</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>


        <h1 className="text-2xl font-bold">Card (Blog)</h1>
        <div className="mt-4 mb-10">
          <div className="flex flex-wrap gap-4">
            {blogData.map((blog, index) => (
              <div className="max-w-[320px]" key={index}>
                <Card className="overflow-hidden pt-0 h-full">
                  <CardHeader className="relative h-48">
                    <Image src="https://placehold.jp/1200x630.png" alt="Card Image" fill />
                  </CardHeader>
                  <CardContent className="h-2/6">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex-1">
                        <div className="mb-2">
                          <time className="text-sm text-gray-500">{blog.date}</time>
                        </div>
                        <CardTitle className="mb-2">{blog.title}</CardTitle>
                      </div>
                      <Badge variant="default" className="self-start">Badge</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>


        <h1 className="text-2xl font-bold">Text Link</h1>
        <div className="mt-4 mb-10">
          <Button variant="link" asChild className="group">
            <Link href="/" className="flex items-center gap-2">
              <span>詳細を見る</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>


        <h1 className="text-2xl font-bold">SNS</h1>
        <div className="mt-4 mb-10">
          {socialLinks.map((link, index) => (
            <div key={index}>
              {link.icon}
            </div>
          ))}
        </div>


        <h1 className="text-2xl font-bold">Title</h1>
        <div className="mt-4 mb-10">
          <div className={`relative`}>
            {/* 背景の英字タイトル */}
            <h1 className="text-8xl font-bold text-blue-200/60 select-none">
              RECRUIT
            </h1>

            {/* 前面の日本語タイトル */}
            <h2 className="text-4xl absolute top-9/12 transform -translate-y-1/2 font-bold text-gray-900 whitespace-nowrap">
              採用情報
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}