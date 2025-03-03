'use client'
import { Button }  from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function Airdrop() {
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Balance Display */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-xl">$</span>
        </div>
        <span className="text-3xl font-bold">5,000,000</span>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="w-full bg-zinc-900">
          <TabsTrigger value="daily" className="flex-1">Daily</TabsTrigger>
          <TabsTrigger value="partners" className="flex-1">Partners</TabsTrigger>
          <TabsTrigger value="affiliates" className="flex-1">Affiliates</TabsTrigger>
          <TabsTrigger value="socials" className="flex-1">Socials</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <Link href="/lucky-spin" className="bg-zinc-900 rounded-lg p-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-2" />
          <h3 className="font-medium">Lucky Spin</h3>
        </Link>
        <Link href="/wall-breaker" className="bg-zinc-900 rounded-lg p-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-2" />
          <h3 className="font-medium">Wall breaker</h3>
        </Link>
        <Link href="/hit-island" className="bg-zinc-900 rounded-lg p-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-2" />
          <h3 className="font-medium">Hit the island</h3>
        </Link>
        <Link href="/tap-earn" className="bg-orange-500 rounded-lg p-4">
          <div className="w-12 h-12 bg-orange-600 rounded-full mb-2" />
          <h3 className="font-medium">Tap to Earn</h3>
        </Link>
        <Link href="/article" className="bg-zinc-900 rounded-lg p-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full mb-2" />
          <h3 className="font-medium">Article</h3>
        </Link>
      </div>

      {/* Redeem Button */}
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        Redeem
      </Button>
    </div>
  )
}

