import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from "@/components/homepage/Header"
import Footer from "@/components/homepage/Footer"


export const metadata: Metadata = {
  title: 'Hamza Gym',
  description: 'Created with v0',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      
    
     
    
        {children}
        <Footer />
        <Analytics />
        
      </body>

    </html>
  )
}
