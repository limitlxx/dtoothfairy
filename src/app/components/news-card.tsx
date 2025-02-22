'use client'
import Image from "next/image"

interface NewsCardProps {
  title: string
  description: string
  imageUrl: string
}

export function NewsCard({ title, description, imageUrl }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl p-3 flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg bg-blue-900 shrink-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-black">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
      </div>
    </div>
  )
}

