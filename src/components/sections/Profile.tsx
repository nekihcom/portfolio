"use client"

import { motion } from "framer-motion"

import { profileData } from "@/data/profile"
import { SocialLink } from "@/components/ui/SocialLink"
import { ProfileBlock } from "@/components/ui/ProfileBlock"
import { SectionContainer } from "@/components/ui/SectionContainer"

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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <SectionContainer id="profile" className="bg-gray-500a">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
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
            className="flex justify-center relative"
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
          </motion.div>
        </div>
        
        {/* 自己紹介文ブロック */}
        <motion.div
          variants={fadeInUpVariants}
          className="text-center relative"
        >
          <motion.div 
            className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-20 bg-gradient-to-r from-transparent via-teal-50 to-transparent opacity-50"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 0.5, scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <p
            className="text-gray-600 relative z-10"
            dangerouslySetInnerHTML={{ __html: profileData.description }}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
} 