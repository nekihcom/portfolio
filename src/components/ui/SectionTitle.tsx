"use client"

import { motion } from "framer-motion"


interface SectionTitleProps {
  children: React.ReactNode;
  isCenter?: boolean;
  description?: string;
}


export const SectionTitle = ({ children, isCenter=false, description }: SectionTitleProps) => {
  // アニメーション設定
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.3
      }
    }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  // 装飾線のアニメーション
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100px", 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : ''}`}>
      <div className="relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={titleVariants}
          className={`text-4xl font-bold ${isCenter ? 'text-center' : 'text-left'}`}
        >
          {children}
        </motion.h2>
        <motion.div 
          className={`h-1 bg-teal-500 mt-2 rounded ${isCenter ? 'mx-auto' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={underlineVariants}
        />
      </div>
      {description && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={descriptionVariants}
          className="text-gray-600 mt-4 text-left"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
} 