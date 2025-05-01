import { motion } from "framer-motion"
import Image from "next/image"

import { TSocialLink } from "@/data/profile"


type Props = {
  link: TSocialLink
  index: number
}

export const SocialLink = (props: Props) => {
  const { link, index } = props;

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
    <>
      <motion.a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm ${getSnsStyle(link.name)}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div>
          <p className="text-xs">{ link.name }</p>
          <span className="font-medium">@{link.username}</span>
        </div>
        {link.iconImage ? (
            <Image
              src={link.iconImage}
              alt={link.name}
              width={24}
              height={24}
              className="mr-3"
            />
          ) : (
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={link.icon} />
            </svg>
          )
        }
      </motion.a>
    </>
  )
}