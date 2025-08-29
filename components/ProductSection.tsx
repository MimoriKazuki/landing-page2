'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles, Microscope, Shield } from 'lucide-react'
import Image from 'next/image'

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState(0)
  
  const features = [
    {
      title: 'ナノ化レチノール',
      subtitle: '医師推奨成分',
      description: '通常の1/1000サイズまで微細化。角質層の奥深くまで浸透し、内側からハリを生み出します。',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'ヒト幹細胞培養液',
      subtitle: '再生医療技術',
      description: '肌細胞の活性化を促進。28日周期のターンオーバーを正常化し、健やかな肌へと導きます。',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'ビタミンC誘導体',
      subtitle: '美白有効成分',
      description: 'メラニンの生成を抑制。シミの原因にアプローチし、透明感のある肌を実現します。',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1609097189008-08fecb3177f5?q=80&w=2069&auto=format&fit=crop'
    }
  ]

  const beforeAfter = [
    { age: '40代', before: '深いほうれい線', after: 'ハリのある肌へ', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop' },
    { age: '50代', before: '目立つシミ', after: '透明感のある肌へ', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop' },
    { age: '60代', before: 'たるみ', after: 'リフトアップ効果', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2069&auto=format&fit=crop' }
  ]

  return (
    <section id="product" className="py-24 bg-white relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1611080027993-eb3dd122e954?q=80&w=2070&auto=format&fit=crop"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            なぜ<span className="font-medium">28日</span>で
            <span className="block mt-2">肌は生まれ変わるのか</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            3つの革新的成分が肌の根本にアプローチ
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* タブナビゲーション */}
          <div className="flex justify-center mb-12 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-8 py-4 rounded-none font-light transition-all duration-300 border ${
                    activeTab === index
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                  }`}
                >
                  <Icon className="w-5 h-5 inline-block mr-3" />
                  {feature.title}
                </button>
              )
            })}
          </div>

          {/* アクティブなタブの内容 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                {(() => {
                  const Icon = features[activeTab].icon
                  return <Icon className="w-16 h-16 mb-6 text-gray-700" />
                })()}
                <h3 className="text-3xl font-light mb-3 text-gray-900">{features[activeTab].title}</h3>
                <p className="text-gray-600 font-medium mb-6">{features[activeTab].subtitle}</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {features[activeTab].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ビフォーアフター */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-light text-center mb-12 text-gray-900">
              実証された効果
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={`${item.age}の変化`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-2xl font-light">{item.age}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">BEFORE</p>
                        <p className="text-gray-700">{item.before}</p>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-gray-500 mb-2">AFTER</p>
                        <p className="font-medium text-gray-900">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 高級感のある製品画像セクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light mb-6 text-gray-900">
                  科学と美の融合
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  15年の研究開発期間を経て誕生した、革新的なスキンケア。
                  最先端のナノテクノロジーと、自然由来成分の絶妙なバランスが、
                  あなたの肌に奇跡をもたらします。
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50">
                    <p className="text-3xl font-light text-gray-900">15年</p>
                    <p className="text-sm text-gray-600 mt-2">研究開発期間</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50">
                    <p className="text-3xl font-light text-gray-900">92.8%</p>
                    <p className="text-sm text-gray-600 mt-2">効果実感率</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury skincare products"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}