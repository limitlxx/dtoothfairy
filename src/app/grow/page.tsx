'use client'
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskCard } from "../components/task-card"
import { TaskDetailModal } from "../components/task-detail-modal"
import { SmileIcon as Tooth } from 'lucide-react'

export default function GrowPage() {
  const [selectedTask, setSelectedTask] = useState<null | {
    title: string
    description: string
    day: number
    reward: number
  }>(null)

  return (
    <div className="flex flex-col">    

      <div className="flex flex-col gap-6 p-4">
        {/* Balance Display */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">$</span>
          </div>
          <span className="text-4xl font-bold">5,000,000</span>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="w-full bg-zinc-900/50 p-1 h-auto gap-1">
            <TabsTrigger 
              value="daily" 
              className="flex-1 rounded-lg data-[state=active]:bg-zinc-800"
            >
              Daily
            </TabsTrigger>
            <TabsTrigger 
              value="partners" 
              className="flex-1 rounded-lg data-[state=active]:bg-zinc-800"
            >
              Partners
            </TabsTrigger>
            <TabsTrigger 
              value="affiliates" 
              className="flex-1 rounded-lg data-[state=active]:bg-zinc-800"
            >
              Affiliates
            </TabsTrigger>
            <TabsTrigger 
              value="socials" 
              className="flex-1 rounded-lg data-[state=active]:bg-zinc-800"
            >
              Socials
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Tasks List */}
        <div className="flex flex-col gap-4">
          <div 
            onClick={() => setSelectedTask({
              title: "Brush your Teeth",
              description: "Take a snapshot of yourself brushing your teeth.",
              day: 456,
              reward: 100
            })}
          >
            <TaskCard
              icon={<Tooth className="w-6 h-6 text-white" />}
              title="Brush your Teeth"
              description="Take a snapshot of yourself brushing your teeth."
              day={456}
              reward={100}
            />
          </div>
        </div>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <TaskDetailModal
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
        />
      )}
    </div>
  )
}

