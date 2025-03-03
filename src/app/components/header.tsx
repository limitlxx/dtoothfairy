'use client'
import Image from 'next/image';

interface HeaderProps {
    leftUser: {
      icon: string
      name: string
    }
    rightUser: {
      icon: string
      name: string
    }
  }
  
  export function Header({ leftUser, rightUser }: HeaderProps) {
    return (
      <div className="flex justify-between items-center p-4">
        {/* Left User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-800 rounded-full overflow-hidden">
                        <Image
                      src={leftUser.icon}
                      alt={leftUser.name}
                      className="w-full h-full object-cover"
                    />
          </div>
          <span className="text-sm text-white">{leftUser.name}</span>
        </div>
  
        {/* Right User */}
        <div className="flex items-center gap-2 bg-orange-500/10 rounded-full px-3 py-1">
          <div className="w-6 h-6 bg-orange-500 rounded-full overflow-hidden flex items-center justify-center">
           
            <Image
                      src={leftUser.icon}
                      alt={leftUser.name}
                      className="w-4 h-4 object-cover"
                    />
          </div>
          <span className="text-sm text-orange-500">{rightUser.name}</span>
        </div>
      </div>
    )
  }
  
  