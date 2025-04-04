"use client"

import { Container } from "@/components/ui/Container"
import { SectionTitle } from "../../components/ui/SectionTitle"
import { profileData } from "@/data/profile"
import Image from "next/image"
import Link from "next/link"

export const Profile = () => {
  // SNSリンクのスタイルを定義
  const getSnsStyle = (name: string) => {
    switch (name) {
      case "X (Twitter)":
        return "bg-gray-900 hover:bg-gray-800 text-white"
      case "GitHub":
        return "bg-gray-700 hover:bg-gray-600 text-white"
      case "LinkedIn":
        return "bg-blue-800 hover:bg-blue-700 text-white"
      case "Qiita":
        return "bg-green-600 hover:bg-green-500 text-white"
      default:
        return "bg-gray-50 hover:bg-gray-100 text-gray-900"
    }
  }

  return (
    <section id="profile" className="bg-gray-50 py-44">
      <Container>
        <SectionTitle>Profile</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* プロフィールブロック */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">{profileData.name}</h3>
            <p className="text-gray-600 mb-1">{profileData.fullName}</p>
            <p className="text-blue-600 font-medium">{profileData.title}</p>
          </div>

          {/* SNSブロック */}
          <div>
            <div className="space-y-4">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm ${getSnsStyle(link.name)}`}
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.icon} />
                  </svg>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 自己紹介文ブロック */}
        <div className="text-center">
          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: profileData.description }}
          />
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            自己紹介ページへ
          </Link>
        </div>
      </Container>
    </section>
  )
} 