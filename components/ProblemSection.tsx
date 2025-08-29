'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AlertCircle, TrendingDown, XCircle, Clock } from 'lucide-react'

export default function ProblemSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const problems = [
    {
      icon: AlertCircle,
      title: '鏡を見るたびに感じる違和感',
      description: '年齢とともに現れる肌の変化に、自信を失いかけていませんか'
    },
    {
      icon: TrendingDown,
      title: '高額な美容施術への不安',
      description: 'クリニックでの施術は効果的でも、費用とリスクが心配です'
    },
    {
      icon: XCircle,
      title: '期待を裏切られ続けた経験',
      description: '数々の高級化粧品を試しても、満足できる結果が得られない'
    },
    {
      icon: Clock,
      title: '時間に追われる毎日',
      description: '複雑なスキンケアに時間をかける余裕がない現代女性へ'
    }
  ]

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            <span className="font-medium">このような</span>お悩み
            <span className="block mt-2">ございませんか</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 rounded-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'bg-white shadow-xl scale-105 border border-gray-100'
                    : 'bg-white/70 shadow-md border border-transparent'
                }`}
              >
                <Icon className={`w-10 h-10 mb-4 transition-colors ${
                  hoveredIndex === index ? 'text-gray-800' : 'text-gray-500'
                }`} />
                <h3 className="text-xl font-medium mb-3 text-gray-800">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            もう悩む必要はありません
          </h3>
          <p className="text-lg mb-8 text-gray-200">
            医学的エビデンスに基づいた革新的な成分配合により
            <br />
            <span className="font-medium text-2xl block mt-3">93.2%</span>
            <span className="text-sm">のお客様が効果を実感されています</span>
          </p>
          <div className="inline-block border border-white/30 px-8 py-3 font-light tracking-wider">
            DISCOVER THE SOLUTION
          </div>
        </motion.div>
      </div>
    </section>
  )
}