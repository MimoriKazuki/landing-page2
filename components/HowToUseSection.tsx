'use client'

import { motion } from 'framer-motion'
import { Droplet, Hand, Heart } from 'lucide-react'

export default function HowToUseSection() {
  const steps = [
    {
      number: '1',
      title: 'CLEANSE',
      subtitle: '洗顔後すぐに',
      description: '清潔な肌に適量を手に取ります',
      icon: Droplet,
      time: 'MORNING & NIGHT'
    },
    {
      number: '2',
      title: 'APPLY',
      subtitle: '優しくなじませる',
      description: '顔全体に優しく伸ばし、気になる部分は重ね付け',
      icon: Hand,
      time: '30 SECONDS'
    },
    {
      number: '3',
      title: 'PRESS',
      subtitle: 'ハンドプレス',
      description: '手のひらで包み込むように浸透させます',
      icon: Heart,
      time: '10 SECONDS'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            シンプルな<span className="font-medium">3ステップ</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            1日2回、わずか1分のシンプルケア
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-gray-700" />
                    </div>
                    <div className="text-5xl font-light text-gray-300 mb-4">{step.number}</div>
                    <h3 className="text-2xl font-light mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500">{step.time}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gray-50 p-12"
          >
            <h3 className="text-2xl font-light mb-8 text-gray-900">
              ご使用上のポイント
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="font-medium text-gray-900 mb-2 uppercase tracking-wider text-sm">CONSISTENCY</p>
                <p className="text-sm text-gray-600">毎日朝晩の使用で最大限の効果を</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900 mb-2 uppercase tracking-wider text-sm">AMOUNT</p>
                <p className="text-sm text-gray-600">パール粒大が1回の適量です</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900 mb-2 uppercase tracking-wider text-sm">GENTLE</p>
                <p className="text-sm text-gray-600">こすらず優しくなじませてください</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}