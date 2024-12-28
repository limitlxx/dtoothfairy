import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from './components/layout'

import { Header } from "./components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'dToothFairy',
  description: 'Telegram Mini App for dToothFairy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >    
       <Header 
        leftUser={{
          icon: "/placeholder.svg?height=32&width=32",
          name: "Nick Jay"
        }}
        rightUser={{
          icon: "/placeholder.svg?height=24&width=24",
          name: "Argent X"
        }}
      />     
        
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
