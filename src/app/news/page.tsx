'use client'
import { Button } from "@/components/ui/button"
import { NewsCard } from "../components/news-card"
import { CountdownTimer } from "../components/countdown-timer"

export default function NewsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-orange-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-50" />
        <div className="absolute top-12 right-8 w-4 h-4 bg-white rounded-full opacity-30" />
        <div className="absolute top-24 left-1/4 w-3 h-3 bg-white rounded-full opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4 pb-24">
        <h1 className="text-2xl font-bold text-white mb-1">Special</h1>
        <h2 className="text-4xl font-extrabold text-white mb-4">Extra Bonuses</h2>
        
        <p className="text-white/90 text-center mb-4">
          Come back now and claim bonus!
        </p>

        <div className="mb-6">
          <CountdownTimer 
            initialHours={10}
            initialMinutes={20}
            initialSeconds={18}
          />
        </div>

        <Button className="bg-zinc-900 text-white hover:bg-zinc-800 mb-8 px-8">
          Redeem
        </Button>

        {/* News List */}
        <div className="w-full flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <NewsCard
              key={i}
              title="New tooth inventions"
              description="Description of the about new here!"
              imageUrl="/placeholder.svg?height=48&width=48"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

