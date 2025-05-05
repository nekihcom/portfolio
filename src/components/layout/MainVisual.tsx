"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MainVisual() {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={cn(
      "relative h-screen",
      "flex items-center justify-center",
      "bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    )}>
      {/* 背景アニメーション要素 */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      />
      
      {/* 装飾要素 */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-100/30 blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Welcome to My Portfolio
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-xl"
            variants={itemVariants}
          >
            フルスタックエンジニア
          </motion.p>
          <motion.div
            className="mt-8"
            variants={itemVariants}
          >
            <motion.a 
              href="#profile"
              className="inline-block px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              詳しく見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 