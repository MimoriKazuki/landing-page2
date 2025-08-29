'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: '本当に効果はありますか？',
      answer: 'はい、臨床試験により92.8%の方が4週間以内に効果を実感されています。ただし、効果には個人差がありますので、まずは30日間の返金保証付きでお試しください。'
    },
    {
      question: '敏感肌でも使えますか？',
      answer: '無添加・低刺激処方で、敏感肌の方にもお使いいただけます。パッチテスト済みですが、心配な方は二の腕の内側などで事前にお試しください。'
    },
    {
      question: '他の化粧品と併用できますか？',
      answer: 'はい、併用可能です。洗顔後、最初にお使いいただくことで、その後の化粧品の浸透も良くなります。'
    },
    {
      question: 'どのくらいで効果が出ますか？',
      answer: '早い方で1週間、平均して2〜4週間で変化を実感される方が多いです。肌のターンオーバーを考慮し、最低でも1ヶ月はご継続ください。'
    },
    {
      question: '返金保証の条件は？',
      answer: '商品到着から30日以内であれば、使用済みでも返金いたします。返送料と振込手数料のみお客様負担となります。'
    },
    {
      question: '定期購入の縛りはありますか？',
      answer: 'いいえ、定期購入の回数縛りはございません。いつでも解約・休止が可能です。次回発送の10日前までにご連絡ください。'
    },
    {
      question: '妊娠中・授乳中でも使えますか？',
      answer: '成分は安全性の高いものを使用していますが、デリケートな時期ですので、かかりつけ医にご相談の上ご使用ください。'
    },
    {
      question: '男性でも使えますか？',
      answer: 'はい、男性の方にもお使いいただけます。実際に多くの男性のお客様にもご愛用いただいております。'
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
            よくあるご質問
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            お客様からよくいただくご質問にお答えします
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 p-8 text-left"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gray-50 p-12 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-light mb-6 text-gray-900">
            カスタマーサポート
          </h3>
          <p className="text-gray-600 mb-8">
            お電話またはメールにてお気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">PHONE</p>
              <p className="font-light text-gray-900 text-lg">0120-XXX-XXX</p>
              <p className="text-xs text-gray-500 mt-1">平日9:00-18:00</p>
            </div>
            <div className="border-l border-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">EMAIL</p>
              <p className="font-light text-gray-900 text-lg">support@example.com</p>
              <p className="text-xs text-gray-500 mt-1">24時間受付</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}