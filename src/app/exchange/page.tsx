'use client'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ExchangePage() {
  const [progress, setProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState('07:23:02')
  const [energy, setEnergy] = useState(650)

  useEffect(() => {
    // Simulate progress updating
    setTimeLeft('07:23:02')
    setEnergy(6500)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Balance Display */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-2xl">$</span>
        </div>
        <span className="text-4xl font-bold">5,000,000</span>
      </div>

      {/* Cat Image */}
      <div className="relative w-48 h-48 my-8">
        <Image
          src="/dogtoothfairy.png"
          alt="Cute cat character"
          width={192}
          height={192}
          className="object-contain"
          priority
        />
      </div>

      {/* Progress Section */}
      <div className="w-full max-w-xs flex flex-col gap-2">
        <Progress value={progress} className="h-1.5 bg-zinc-800" />
        <div className="flex justify-between text-sm text-zinc-400">
          <span>{timeLeft}</span>
          <div className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-yellow-500"
              stroke="currentColor"
            >
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span>{energy}</span>
          </div>
        </div>
      </div>

      {/* Claim Button */}
      <Button
        className="w-full max-w-xs bg-zinc-800 hover:bg-zinc-700 text-white rounded-full h-12"
        disabled={progress < 100}
      >
        Claim
      </Button>
    </div>
  )
}

