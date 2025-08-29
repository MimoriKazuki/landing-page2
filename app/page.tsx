'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import ProductSection from '@/components/ProductSection'
import TestimonialSection from '@/components/TestimonialSection'
import HowToUseSection from '@/components/HowToUseSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import FloatingCTA from '@/components/FloatingCTA'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500
      setShowFloatingCTA(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <CountdownTimer />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <TestimonialSection />
      <HowToUseSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      {showFloatingCTA && <FloatingCTA />}
    </main>
  )
}
