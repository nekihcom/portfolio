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
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        target={target}
        rel={rel}
        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
      >
        <span className="mr-1">{jaText}</span>
        <span className="text-sm opacity-80 mr-1">/ {enText}</span>
        <span className="text-lg">→</span>
      </Link>
    </motion.div>
  )
} 