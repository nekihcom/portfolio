"use client"

import { motion } from "framer-motion"

import { profileData } from "@/data/profile"
import { SocialLink } from "@/components/ui/SocialLink"
import { ProfileBlock } from "@/components/ui/ProfileBlock"
import { SectionContainer } from "@/components/ui/SectionContainer"

export const Profile = () => {

  return (
    <SectionContainer id="profile" className="bg-gray-500a">
      {/* プロフィールブロック */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ProfileBlock 
            image={profileData.image} 
            name={profileData.name} 
            fullName={profileData.fullName} 
            title={profileData.title} 
          />
        </motion.div>

        {/* SNSブロック */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="space-y-4 max-w-[330px] w-full">
            {profileData.socialLinks.map((link, index) => (
              <SocialLink key={index} link={link} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
      {/* 自己紹介文ブロック */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: profileData.description }}
        />
        {/* <Link
          href="/about"
          className="inline-block px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          もっと知る
        </Link> */}
      </motion.div>
    </SectionContainer>
  )
  
} 