"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type ExploreLinkProps = {
  href: string
  jaText?: string
  enText?: string
  target?: string
  rel?: string
}

export const ExploreLink = ({ 
  href, 
  jaText = "もっと知りたい", 
  enText = "Explore further", 
  target = "_blank", 
  rel = "noopener noreferrer" 
}: ExploreLinkProps) => {
  // 下線のアニメーション設定
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className="flex justify-end">
      <div className="relative group">
        <Link
          href={href}
          target={target}
          rel={rel}
          className="inline-flex items-center text-gray-800 hover:text-gray-900 font-medium"
        >
          <span className="mr-1">{jaText}</span>
          <span className="text-sm opacity-80 mr-1">/ {enText}</span>
          <span className="text-lg">→</span>
        </Link>
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-teal-500 rounded"
          initial="hidden"
          whileHover="visible"
          variants={underlineVariants}
        />
      </div>
    </div>
  )
} 