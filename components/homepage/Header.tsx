"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 0px 0px"
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    // Set visible immediately for header since it's at the top
    setIsVisible(true)

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <header 
      ref={headerRef}
      className={` bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky py-1 top-0 z-50 transition-all duration-800 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a 
          href="/" 
          className={`flex items-center space-x-2 transition-all  ease-out  ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-6 scale-95'
          }`}
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={80} />
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {[
            { href: "/success-stories", text: "Success Stories", delay: "" },
            { href: "/about", text: "About", delay: "" },
            { href: "/free-training", text: "Free Training", delay: "" },
            { href: "/blog", text: "Blog", delay: "" },
        
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className={`text-muted-foreground hover:text-accent transition-all  ease-out text-sm ${item.delay} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div className={`md:hidden transition-all  ease-out  ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-95'
        }`}>
          <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <Button className={`hidden md:flex !bg-accent !text-white hover:!bg-red-800 rounded-lg px-4 md:px-5 lg:px-6 py-2 text-sm font-medium shadow-sm transition-all  ease-out delay-1000 hover:scale-105 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-6 scale-95'
        }`}>
          <a href="/strategy-session">Book Strategy Session</a>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div
        className={`md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-2"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
          {[
            { href: "/success-stories", text: "Success Stories" },
            { href: "/about", text: "About" },
            { href: "/free-training", text: "Free Training" },
            { href: "/strategy-session", text: "Strategy Session" },
            { href: "/blog", text: "Blog" },
            { href: "/faq", text: "FAQ" },
            { href: "/contact", text: "Contact" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block text-muted-foreground hover:text-accent transition-all duration-300 ease-out text-sm py-3 px-2 rounded-lg hover:bg-accent/5 transform hover:translate-x-1 ${
                isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-2'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
          <div className={`pt-3 transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-2'
          }`}
          style={{ 
            transitionDelay: isMobileMenuOpen ? '350ms' : '0ms' 
          }}>
            <Button
              className="w-full !bg-accent !text-white hover:!bg-red-800 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 transform hover:scale-105"
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