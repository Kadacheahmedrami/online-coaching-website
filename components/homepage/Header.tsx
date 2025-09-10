"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky py-1 top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={100} height={80} />
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {[
            { href: "/success-stories", text: "Success Stories" },
            { href: "/about", text: "About" },
            { href: "/free-training", text: "Free Training" },
            { href: "/blog", text: "Blog" },
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <Button className="hidden md:flex !bg-accent !text-white hover:!bg-red-800 rounded-lg px-4 md:px-5 lg:px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:scale-105">
          <a href="/strategy-session">Book Strategy Session</a>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div
        className={`md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
          {[
            { href: "/success-stories", text: "Success Stories" },
            { href: "/about", text: "About" },
            { href: "/free-training", text: "Free Training" },
            { href: "/blog", text: "Blog" },
           
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-muted-foreground hover:text-accent transition-colors text-sm py-3 px-2 rounded-lg hover:bg-accent/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
          <div className="pt-3">
            <Button
              className="w-full !bg-accent !text-white hover:!bg-red-800 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/strategy-session">Book Strategy Session</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}