"use client"
import Image from "next/image"; 
import { useEffect, useState } from "react";

import { Contract, type AccountInterface, type Call } from 'starknet';
import type { SessionAccountInterface } from '@argent/tma-wallet'; 
 
import { initWallet } from '../../components/telegram-provider'; 


export default function Telegram() { 
  const ABI = [{}];

  const TAMAGOTCHI_ADDRESS = ""

  const argentTMA = initWallet(TAMAGOTCHI_ADDRESS); 
  const [IsConnected, setIsConnected] = useState(true);
  const [AccountAddress, setAccountAddress] = useState<string>("");

  let account: SessionAccountInterface | undefined;
  let isConnected = false;
  let isLoading = false;
  let contract: Contract | undefined;

  useEffect(() => {
    // Call connect() as soon as the app is loaded
    argentTMA
      .connect()
      .then((res) => {
        if (!res) {
          // Not connected
          setIsConnected(false);
          return;
        }
        
        const { account, callbackData } = res;

        if (account.getSessionStatus() !== "VALID") {
          // Session has expired or scope (allowed methods) has changed
          // A new connection request should be triggered

          // The account object is still available to get access to user's address
          // but transactions can't be executed
          const { account } = res;

          setAccountAddress(account.address);
          setIsConnected(false);
          return;
        }

        // The session account is returned and can be used to submit transactions
        setAccountAddress(account.address);
        setIsConnected(true);
        // Custom data passed to the requestConnection() method is available here
        console.log("callback data:", callbackData);
      })
      .catch((err) => {
        console.error("Failed to connect", err);
      });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Welcome to telegram{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li> 
        </ol>
 
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
