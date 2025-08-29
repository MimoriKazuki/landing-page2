'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(1)
  
  const plans = [
    {
      id: 0,
      name: '単品購入',
      originalPrice: 12800,
      price: 6400,
      discount: 50,
      quantity: 1,
      perMonth: 6400,
      shipping: '送料別',
      popular: false,
      savings: 6400
    },
    {
      id: 1,
      name: '3本セット',
      originalPrice: 38400,
      price: 15360,
      discount: 60,
      quantity: 3,
      perMonth: 5120,
      shipping: '送料無料',
      popular: true,
      savings: 23040,
      bonus: 'プレゼント付き'
    },
    {
      id: 2,
      name: '5本セット',
      originalPrice: 64000,
      price: 19200,
      discount: 70,
      quantity: 5,
      perMonth: 3840,
      shipping: '送料無料',
      popular: false,
      savings: 44800,
      bonus: '豪華プレゼント付き'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            本日限定価格
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            今だけ<span className="text-red-500">最大70%OFF</span>
          </h2>
          <p className="text-lg text-gray-600">
            この機会を逃すと通常価格に戻ります
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative cursor-pointer rounded-3xl p-6 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white scale-105 shadow-2xl'
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      一番人気！
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    selectedPlan === plan.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className={`text-sm ${
                    selectedPlan === plan.id ? 'text-pink-100' : 'text-gray-600'
                  }`}>
                    {plan.quantity}本 / {plan.quantity}ヶ月分
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className={`text-sm line-through ${
                    selectedPlan === plan.id ? 'text-pink-200' : 'text-gray-400'
                  }`}>
                    通常価格 ¥{plan.originalPrice.toLocaleString()}
                  </div>
                  <div className="text-4xl font-bold my-2">
                    ¥{plan.price.toLocaleString()}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                    selectedPlan === plan.id 
                      ? 'bg-white text-purple-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {plan.discount}%OFF
                  </div>
                </div>
                
                <div className={`text-center mb-4 ${
                  selectedPlan === plan.id ? 'text-pink-100' : 'text-gray-600'
                }`}>
                  <p className="text-sm">1本あたり</p>
                  <p className="text-2xl font-bold">¥{plan.perMonth.toLocaleString()}</p>
                </div>
                
                <div className={`text-center text-sm mb-4 ${
                  selectedPlan === plan.id ? 'text-white' : 'text-purple-600'
                }`}>
                  <p className="font-bold">{plan.shipping}</p>
                  {plan.bonus && <p className="mt-1">{plan.bonus}</p>}
                </div>
                
                <div className={`text-center p-3 rounded-xl ${
                  selectedPlan === plan.id 
                    ? 'bg-white/20' 
                    : 'bg-pink-50'
                }`}>
                  <p className={`text-sm ${
                    selectedPlan === plan.id ? 'text-white' : 'text-gray-600'
                  }`}>
                    お得額
                  </p>
                  <p className={`text-xl font-bold ${
                    selectedPlan === plan.id ? 'text-white' : 'text-red-500'
                  }`}>
                    ¥{plan.savings.toLocaleString()}
                  </p>
                </div>
                
                {selectedPlan === plan.id && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      選択中
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
              選択したプランで購入する
            </button>
            
            <div className="mt-12 flex justify-center gap-12">
              <div className="text-center">
                <p className="text-sm text-gray-600 uppercase tracking-wider">SECURE PAYMENT</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 uppercase tracking-wider">ALL CARDS ACCEPTED</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 uppercase tracking-wider">EXPRESS DELIVERY</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 border border-gray-300 p-8 text-center bg-white"
          >
            <h3 className="text-2xl font-light mb-4 text-gray-900">
              30日間返金保証
            </h3>
            <p className="text-gray-600">
              効果にご満足いただけなかった場合、商品代金を全額返金いたします
              <br />
              <span className="text-xs text-gray-500">*送料・手数料はお客様負担となります</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}