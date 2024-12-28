'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link'

const LandingPage = () => {

  const router = useRouter()

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


        <div className="relative w-48 h-48 my-8">
          <Image
            src="/logo.png"
            alt="Cute cat character"
            width={192}
            height={192}
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button" onClick={() => router.push('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Open with telegram
        </button>
        


      </main>
    </div>
  );
}

// Disable layout by providing a custom function
LandingPage.Layout = (page: React.ReactNode) => page;

export default LandingPage;