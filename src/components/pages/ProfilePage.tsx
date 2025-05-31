"use client"

import { motion } from "framer-motion"
import { profileData } from "@/data/profile"
import { SocialLink } from "@/components/ui/SocialLink"
import { ProfileBlock } from "@/components/ui/ProfileBlock"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ContactForm } from "@/components/ui/ContactForm"

export const ProfilePage = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SectionContainer id="profile-page" className="py-36">
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
              className="flex flex-col items-center relative"
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

            </motion.div>
          </div>
          
          {/* メッセージセクション */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg text-gray-600">
                <p>
                  エンジニアとして、常に新しい技術や手法を学び続けることを大切にしています。
                  ユーザーにとって価値のある製品を作るために、技術的な課題解決だけでなく、
                  ユーザー体験の向上にも注力しています。
                </p>
                <p className="mt-4">
                  チーム開発では、コミュニケーションを大切にし、メンバーと協力しながら
                  より良いソリューションを提供することを心がけています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* スキルセクション */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">フロントエンド</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">バックエンド</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• PHP / Symfony</li>
                  <li>• Java</li>
                  <li>• Python / Django</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">CMS</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drupal</li>
                  <li>• WordPress</li>
                  <li>• microCMS</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">ミドルウェア・インフラ</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AWS EC2 / RDS / VPC / S3 / Route53 / Redshift</li>
                  <li>• MySQL / PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">その他</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Git / GitHub</li>
                  <li>• Figma</li>
                  <li>• Cursor</li>
                  <li>• Notion</li>
                  <li>• Slack</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 資格セクション */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">資格</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">統計検定2級</h3>
                    <p className="text-gray-600 mt-1">2025年5月取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Drupal Site Builder</h3>
                    <p className="text-gray-600 mt-1">2022年8月取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">応用情報技術者</h3>
                    <p className="text-gray-600 mt-1">2021年取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">基本情報技術者</h3>
                    <p className="text-gray-600 mt-1">2019年取得</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 経歴セクション */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">経歴</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-800">SIer</h3>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">現在</span>
                  </div>
                  <h4 className="text-base text-gray-700 mt-1">ソフトウェアエンジニア</h4>
                </div>
                <p className="text-gray-600 mt-2">2019年 - 現在</p>
                <p className="text-gray-600 mt-2">
                  CMSを使ったポータルサイトや社内システムの構築、BIツールを導入することによる営業活動支援などを実施。<br/>
                  特にDrupalやPowerBIの開発に力を入れ、要件定義から保守運用まで幅広く従事。<br />
                  メンバーとしての実装作業のみならずチームマネジメントの経験も積む。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">成蹊大学理工学部情報科学科</h3>
                </div>
                <p className="text-gray-600 mt-2">2015年 - 2019年</p>
                <p className="text-gray-600 mt-2">
                  専攻は自然言語処理で、卒業研究のテーマはTwitterのツイートを用いた言語生成モデルの構築。<br />
                  アルゴリズムやデータベース、ネットワーク、プログラミングなどIT全般を学ぶ。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      
        <motion.div
            variants={fadeInUpVariants}
            className="mt-32"
          >
            <ContactForm />
          </motion.div>
      </SectionContainer>
    </div>
  )
} 