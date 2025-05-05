"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/layout/Footer"
import { DevEnvironment } from "@/components/ui/DevEnvironment"

export default function NotFound() {
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
    hidden: { y: 20, opacity: 0 },
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

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.3
      }
    },
    hover: {
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      y: 1,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    }
  }

  // 装飾要素のアニメーション
  const decorationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <DevEnvironment />
      <div className="h-[97vh] flex flex-col relative overflow-hidden">
        {/* 背景の装飾要素 */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-100/30 blur-3xl"
          initial="hidden"
          animate="visible"
          variants={decorationVariants}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl"
          initial="hidden"
          animate="visible"
          variants={decorationVariants}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-teal-200/20 blur-xl"
          initial="hidden"
          animate="visible"
          variants={decorationVariants}
          transition={{ delay: 0.5 }}
        />
        
        <main className="flex-1 flex items-center justify-center z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-7xl font-bold mb-6 relative inline-block"
              variants={numberVariants}
            >
              <span className="text-teal-600">
                404
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 max-w-none mx-auto whitespace-nowrap"
              variants={itemVariants}
            >
              お探しのページは、どこかへ行ってしまったようです...
            </motion.p>
            
            <motion.div variants={buttonVariants}>
              <Link
                href="/"
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg w-[180px] inline-block shadow-sm"
              >
                トップページへ戻る
              </Link>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  )
} 