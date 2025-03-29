import { cn } from "@/lib/utils"
import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { motion } from "framer-motion"

export function Profile() {
  return (
    <ParallaxSection
      className="min-h-screen flex items-center"
      backgroundClassName="bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Profile</h2>
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full overflow-hidden">
              {/* プロフィール画像をここに配置 */}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Your Name</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            <p className="text-gray-600">
              ここに自己紹介文を記載します。
            </p>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
} 