"use client"

import { motion } from "framer-motion"
import { profileData } from "@/data/profile"
import { SocialLink } from "@/components/ui/SocialLink"
import { ProfileBlock } from "@/components/ui/ProfileBlock"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink"

export const Profile = () => {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <SectionContainer id="profile" className="mb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-75px" }}
      >
        {/* プロフィールブロック */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={itemVariants}
            className="text-center relative"
          >
            {/* デコレーション要素 */}
            <motion.div 
              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-teal-100/40 blur-xl z-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <div className="relative z-10">
              <ProfileBlock 
                image={profileData.image} 
                name={profileData.name} 
                fullName={profileData.fullName} 
                title={profileData.title} 
              />
            </div>
          </motion.div>

          {/* SNSブロック */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col relative"
          >
            {/* デコレーション要素 */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-100/40 blur-xl z-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="space-y-4 max-w-[330px] w-full relative z-10">
              {profileData.socialLinks.map((link, index) => (
                <SocialLink key={index} link={link} index={index} />
              ))}
            </div>
            <div className="mt-8">
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: profileData.description }}
              />
            </div>
            <div className="mt-8 flex justify-start">
              <ExploreLink 
                href="/profile" 
                jaText="プロフィール詳細を見る" 
                enText="View full profile"
                target="_self"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
} 