"use client"

import { Container } from "@/components/ui/Container"
import { SectionTitle } from "../../components/ui/SectionTitle"
import { profileData } from "@/data/profile"
import Image from "next/image"
import Link from "next/link"

export const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Profile</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* プロフィールブロック */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">SNS</h3>
            <div className="space-y-4">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
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
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-6 whitespace-pre-line">
            {profileData.description}
          </p>
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