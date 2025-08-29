'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 高級感のある背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury skincare background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-8 px-6 py-2 border border-white/30 text-white/90 text-sm font-light tracking-wider uppercase backdrop-blur-sm"
            >
              Limited Edition - 50% OFF
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light mb-8 leading-tight"
            >
              時を超える
              <br />
              <span className="font-medium">美しさ</span>の秘密
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed"
            >
              最先端の皮膚科学が生んだ
              <br />
              <span className="font-medium">奇跡のスキンケア</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-10 py-5 bg-white text-gray-900 text-lg font-light tracking-wider hover:bg-gray-100 transition-all duration-300 shadow-2xl backdrop-blur-sm"
              >
                DISCOVER MORE
              </button>
              <button
                onClick={() => scrollToSection('product')}
                className="px-10 py-5 bg-transparent text-white text-lg font-light tracking-wider border border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                OUR STORY
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="border-l border-white/30 pl-4">
                <p className="text-3xl font-light">98.7%</p>
                <p className="text-sm text-white/70 uppercase tracking-wider mt-2">Satisfaction</p>
              </div>
              <div className="border-l border-white/30 pl-4">
                <p className="text-3xl font-light">15万</p>
                <p className="text-sm text-white/70 uppercase tracking-wider mt-2">Customers</p>
              </div>
              <div className="border-l border-white/30 pl-4">
                <p className="text-3xl font-light">30日</p>
                <p className="text-sm text-white/70 uppercase tracking-wider mt-2">Guarantee</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury skincare product"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
            
            {/* フローティング要素 */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl"
            >
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Clinical Tested</p>
              <p className="text-3xl font-light text-gray-900">92.8%</p>
              <p className="text-sm text-gray-500">効果を実感</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  )
}