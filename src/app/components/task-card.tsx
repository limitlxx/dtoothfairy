'use client'
interface TaskCardProps {
    icon: React.ReactNode
    title: string
    description: string
    day: number
    reward: number
  }
  
  export function TaskCard({ icon, title, description, day, reward }: TaskCardProps) {
    return (
      <div className="bg-zinc-900/50 rounded-xl p-4 flex gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-zinc-500">Day {day}</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              <span>{reward}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  