'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      name: '田中 美咲様',
      age: '42歳',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2070&auto=format&fit=crop',
      title: '鏡を見るのが楽しみになりました',
      comment: '使い始めて2週間で、主人から「最近肌がきれいになった？」と言われました。3週間経った今では、ファンデーションの量が半分に。素肌に自信が持てるようになりました。',
      highlight: '素肌に自信'
    },
    {
      name: '佐藤 恵子様',
      age: '48歳',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop',
      title: '同窓会で驚かれました',
      comment: '長年悩んでいた目元のシワとほうれい線が薄くなってきて、先日の同窓会では「エステでも通ってるの？」と聞かれました。これまで色々試しましたが、ここまで効果を感じたのは初めてです。',
      highlight: '見た目年齢マイナス10歳'
    },
    {
      name: '山田 由美様',
      age: '55歳',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      title: '娘に褒められました',
      comment: '「お母さん、最近若くなった？」と娘に言われて嬉しくて泣いてしまいました。頬のシミが薄くなって、肌にハリが戻ってきたのを実感しています。もう手放せません。',
      highlight: '家族も実感'
    },
    {
      name: '鈴木 真理子様',
      age: '61歳',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2070&auto=format&fit=crop',
      title: '諦めていた私でも効果を実感',
      comment: '60歳を過ぎて諦めていましたが、使い始めて1ヶ月で明らかに肌が変わりました。深いシワも浅くなってきて、友人からも「何使ってるの？」と聞かれることが増えました。',
      highlight: '年齢不問の効果'
    }
  ]

  const stats = [
    { number: '98.7%', label: '満足度' },
    { number: '94.3%', label: 'リピート率' },
    { number: '15万人', label: '愛用者数' }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Background pattern"
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
            <span className="font-medium">15万人</span>のお客様が
            <span className="block mt-2">選ばれた理由</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            実際にご使用いただいた方々からのお声
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-48 lg:h-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-medium text-lg text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.age}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gray-800 text-gray-800" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-gray-900 pl-4 mb-4">
                      <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                        {testimonial.highlight}
                      </span>
                    </div>
                    
                    <h4 className="font-medium text-lg mb-3 text-gray-900">{testimonial.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{testimonial.comment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 統計セクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1556228852-80b6e5eeff06?q=80&w=2070&auto=format&fit=crop"
                alt="Statistics background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/90"></div>
            </div>
            <div className="relative z-10 p-12 text-white">
              <div className="grid grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-4xl md:text-5xl font-light mb-2">{stat.number}</p>
                    <p className="text-sm uppercase tracking-wider text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 大きな顧客写真セクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop"
                alt="Happy customer"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-light mb-6 text-gray-900">
                年齢を重ねても、美しく
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                私たちの製品は、年齢に関係なく、すべての女性の美しさを引き出します。
                科学的に証明された成分と、お客様一人ひとりの声を大切にした製品開発により、
                確かな効果をお約束します。
              </p>
              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <p className="text-gray-700 italic">
                  "この製品に出会えて本当に良かった。今では鏡を見るのが楽しみです。"
                </p>
                <p className="text-sm text-gray-600 mt-3">- 愛用者の声より</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block border border-gray-300 px-8 py-4 bg-white">
              <p className="text-gray-700 font-light">
                ※ 大変ご好評をいただいており、在庫に限りがございます
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}