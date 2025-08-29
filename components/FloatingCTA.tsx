'use client'

import { motion } from 'framer-motion'

export default function FloatingCTA() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm md:text-base font-light text-gray-900">
            LIMITED TIME OFFER
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            Save up to 70% - Offer ends soon
          </p>
        </div>
        <button
          onClick={() => scrollToSection('pricing')}
          className="px-8 py-3 bg-gray-900 text-white font-light tracking-wider hover:bg-gray-800 transition-colors"
        >
          SHOP NOW
        </button>
      </div>
    </motion.div>
  )
}