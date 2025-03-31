"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
} 