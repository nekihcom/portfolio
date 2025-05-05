"use client"

import { motion } from "framer-motion"


interface SectionTitleProps {
  children: React.ReactNode;
  isCenter?: boolean;
  description?: string;
}


export const SectionTitle = ({ children, isCenter=false, description }: SectionTitleProps) => {

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold ${isCenter ? 'text-center' : 'text-left'}`}
      >
        {children}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mt-3 text-left"
        >
          {description}
        </motion.p>
      )}
    </div>
  )

} 