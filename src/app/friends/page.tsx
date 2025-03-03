'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FriendsPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <h2 className="text-2xl font-bold">List of your friends</h2>

      {/* Friend List */}
      <Card className="bg-zinc-900 border-zinc-800">
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white">TG</span>
          </div>
          <span className="text-white">TG Username</span>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Invite a friend
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-orange-500 text-orange-500 hover:bg-orange-500/10"
        >
          Copy Invite
        </Button>
      </div>
    </div>
  )
}

