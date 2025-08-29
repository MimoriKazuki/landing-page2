'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="border border-white/50 px-8 py-3 text-sm uppercase tracking-wider">
              FINAL OPPORTUNITY
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            このチャンスを
            <br />
            <span className="font-medium">お見逃しなく</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light">
            特別価格は<span className="font-medium text-white">本日23:59</span>まで
            <br />
            明日には通常価格に戻ります
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-12 mb-12 border border-white/20">
            <h3 className="text-2xl font-light mb-8">今すぐ始めるべき理由</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="border-l-2 border-white/50 pl-6">
                <h4 className="font-medium mb-3 text-lg">限定価格</h4>
                <p className="text-sm text-gray-300">最大70%OFFは期間限定。この機会を逃すと二度とない価格です。</p>
              </div>
              
              <div className="border-l-2 border-white/50 pl-6">
                <h4 className="font-medium mb-3 text-lg">在庫僅少</h4>
                <p className="text-sm text-gray-300">人気商品のため、在庫に限りがございます。完売次第終了となります。</p>
              </div>
              
              <div className="border-l-2 border-white/50 pl-6">
                <h4 className="font-medium mb-3 text-lg">返金保証</h4>
                <p className="text-sm text-gray-300">30日間の返金保証付き。リスクなくお試しいただけます。</p>
              </div>
            </div>
          </div>
          
          <motion.button
            onClick={() => scrollToSection('pricing')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white text-gray-900 text-lg font-light tracking-wider hover:bg-gray-100 transition-all duration-300 group"
          >
            PURCHASE NOW
            <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">REMAINING</p>
              <p className="text-4xl font-light">47</p>
            </div>
            <div className="border-l border-gray-600"></div>
            <div className="text-center">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">SOLD TODAY</p>
              <p className="text-4xl font-light">1,234</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}