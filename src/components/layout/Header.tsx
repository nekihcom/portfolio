"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import clsx from "clsx"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // スクロール検知のためのイベントリスナー
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll(); // 初回実行で現在のスクロール位置を反映
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // メニュー開閉時のスクロール制御
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // ナビゲーションリンク
  const navLinks = [
    { id: "works", label: "Works" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" }
  ]

  // リンククリック時にモバイルメニューを閉じる
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // アニメーション設定
  const headerVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  // タイトルのアニメーション設定
  const titleVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // リンクのアニメーション設定
  const linkVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <motion.header
        initial="initial"
        animate="animate"
        variants={headerVariants}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 overflow-x-hidden",
          isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
      >
        <div className="w-full sm:w-full max-w-[960px] mx-auto px-4 md:px-0 flex justify-between items-center">
          {/* サイトタイトル */}
          <motion.div variants={titleVariants}>
            <Link href="/" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
              Mochiken&apos;s Portfolio
            </Link>
          </motion.div>

          {/* デスクトップナビゲーション */}
          <motion.nav className="hidden md:flex space-x-6" variants={linkVariants}>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80} // ヘッダーの高さ分をオフセット
                duration={800}
                activeClass="text-teal-600 font-medium"
                className="text-foreground hover:text-teal-600 cursor-pointer transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </ScrollLink>
            ))}
          </motion.nav>

          {/* モバイルメニューボタン */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-1 focus:outline-none"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="w-6 h-6 relative">
              <span className={clsx(
                "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 rounded-full",
                isMenuOpen ? "top-3 rotate-45" : "top-1"
              )} />
              <span className={clsx(
                "absolute left-0 top-3 w-6 h-0.5 bg-foreground transition-opacity duration-300 rounded-full",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={clsx(
                "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 rounded-full",
                isMenuOpen ? "top-3 -rotate-45" : "top-5"
              )} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 pt-20 px-0 md:hidden overflow-x-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.div key={link.id} variants={menuItemVariants}>
                  <ScrollLink
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={handleLinkClick}
                    activeClass="text-teal-600 font-medium"
                    className="block py-3 text-foreground hover:text-teal-600 text-lg border-b border-gray-100"
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>

            {/* 背景装飾 */}
            <motion.div 
              className="absolute -z-10 bottom-20 right-10 w-40 h-40 rounded-full bg-teal-50 blur-xl opacity-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 