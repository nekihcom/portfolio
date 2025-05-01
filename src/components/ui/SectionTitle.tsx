"use client"

import { motion } from "framer-motion"


interface SectionTitleProps {
  children: React.ReactNode;
}


export const SectionTitle = ({ children }: SectionTitleProps) => {

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-center mb-12"
    >
      {children}
    </motion.h2>
  )

} 