'use client'

import { Coins, Users, Newspaper, TrendingUp, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {/* <header className="p-4">
        <h1 className="text-center text-sm font-medium">dToothFairy</h1>
      </header> */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-md mx-auto w-full px-4 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-md mx-auto flex justify-between px-4 py-2">
          <Link 
            href="/exchange" 
            className={`flex flex-col items-center p-2 ${
              pathname === '/exchange' ? 'text-orange-500' : 'text-zinc-400'
            }`}
          >
            <ArrowUpRight size={20} />
            <span className="text-xs mt-1">Exchange</span>
          </Link>
          <Link 
            href="/grow" 
            className={`flex flex-col items-center p-2 ${
              pathname === '/grow' ? 'text-orange-500' : 'text-zinc-400'
            }`}
          >
            <TrendingUp size={20} />
            <span className="text-xs mt-1">Grow</span>
          </Link>
          <Link 
            href="/friends" 
            className={`flex flex-col items-center p-2 ${
              pathname === '/friends' ? 'text-orange-500' : 'text-zinc-400'
            }`}
          >
            <Users size={20} />
            <span className="text-xs mt-1">Friends</span>
          </Link>
          <Link 
            href="/news" 
            className={`flex flex-col items-center p-2 ${
              pathname === '/news' ? 'text-orange-500' : 'text-zinc-400'
            }`}
          >
            <Newspaper size={20} />
            <span className="text-xs mt-1">News</span>
          </Link>
          <Link 
            href="/airdrop" 
            className={`flex flex-col items-center p-2 ${
              pathname === '/airdrop' ? 'text-orange-500' : 'text-zinc-400'
            }`}
          >
            <Coins size={20} />
            <span className="text-xs mt-1">Airdrop</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

