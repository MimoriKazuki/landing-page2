'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-2 z-50">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Clock className="w-4 h-4 mr-3" />
        <p className="text-sm font-light tracking-wider mr-4">
          LIMITED TIME OFFER ENDS IN
        </p>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <span className="text-lg font-light">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-xs ml-1 opacity-70">H</span>
          </div>
          <span className="text-lg font-light opacity-50">:</span>
          <div className="text-center">
            <span className="text-lg font-light">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-xs ml-1 opacity-70">M</span>
          </div>
          <span className="text-lg font-light opacity-50">:</span>
          <div className="text-center">
            <span className="text-lg font-light">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-xs ml-1 opacity-70">S</span>
          </div>
        </div>
      </div>
    </div>
  )
}