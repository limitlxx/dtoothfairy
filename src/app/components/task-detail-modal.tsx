'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { SmileIcon } from 'lucide-react'

interface TaskDetailModalProps {
  isOpen: boolean
  onClose: () => void
  task: {
    title: string
    description: string
    day: number
    reward: number
  }
}

export function TaskDetailModal({ isOpen, onClose, task }: TaskDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center">
            <SmileIcon className="w-10 h-10" />
          </div>
          
          <div className="text-center">
            <p className="text-zinc-400">{task.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-zinc-500">Day {task.day}</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <span>{task.reward}</span>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600"
            onClick={onClose}
          >
            Start Task
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

