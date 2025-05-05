"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type ContactButtonProps = {
  href: string
  text: string
  target?: string
  rel?: string
}

export const ContactButton = ({ 
  href, 
  text, 
  target = "_blank", 
  rel = "noopener noreferrer" 
}: ContactButtonProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        target={target}
        rel={rel}
        className="relative inline-block px-8 py-3 bg-teal-600 text-white rounded-lg overflow-hidden group"
      >
        <span className="relative z-10">{text}</span>
        <motion.div
          className="absolute inset-0 bg-teal-700 z-0"
          initial={{ width: "0%" }}
          whileHover={{ 
            width: "100%",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute -z-10 -bottom-1 -right-1 w-12 h-12 rounded-full bg-teal-400/30 blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 }
          }}
        />
      </Link>
    </motion.div>
  )
} 