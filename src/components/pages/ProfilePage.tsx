"use client"

import { motion } from "framer-motion"
import { profileData } from "@/data/profile"
import { SocialLink } from "@/components/ui/SocialLink"
import { ProfileBlock } from "@/components/ui/ProfileBlock"
import { SectionContainer } from "@/components/ui/SectionContainer"

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
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• PostgreSQL</li>
                  <li>• AWS</li>
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
                    <h3 className="text-lg font-semibold text-gray-800">AWS Certified Solutions Architect – Associate</h3>
                    <p className="text-gray-600 mt-1">2023年取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">応用情報技術者</h3>
                    <p className="text-gray-600 mt-1">2022年取得</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">基本情報技術者</h3>
                    <p className="text-gray-600 mt-1">2021年取得</p>
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
                    <h3 className="text-lg font-semibold text-gray-800">株式会社テクノロジー</h3>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">現在</span>
                  </div>
                  <h4 className="text-base text-gray-700 mt-1">ソフトウェアエンジニア</h4>
                </div>
                <p className="text-gray-600 mt-2">2020年 - 現在</p>
                <p className="text-gray-600 mt-2">
                  フロントエンド開発を中心に、Webアプリケーションの設計・開発に従事。
                  ユーザー体験を重視したUI/UXデザインと、パフォーマンスの最適化に注力。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">株式会社デザイン</h3>
                  <h4 className="text-base text-gray-700 mt-1">Webデザイナー</h4>
                </div>
                <p className="text-gray-600 mt-2">2018年 - 2020年</p>
                <p className="text-gray-600 mt-2">
                  コーポレートサイトやECサイトのデザインを担当。
                  Adobe Creative Suiteを活用したデザイン制作と、HTML/CSSによる実装を担当。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">株式会社システム</h3>
                  <h4 className="text-base text-gray-700 mt-1">システムエンジニア</h4>
                </div>
                <p className="text-gray-600 mt-2">2016年 - 2018年</p>
                <p className="text-gray-600 mt-2">
                  企業向け業務システムの要件定義から設計、開発、テストまでを担当。
                  プロジェクトマネジメントの経験も積む。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </div>
  )
} 