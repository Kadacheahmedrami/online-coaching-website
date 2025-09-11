"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Trophy, Clock, Zap } from "lucide-react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const intervalRef = useRef(null)

  // Memoized image carousel data
  const images = useMemo(() => [
    {
      src: "/gym-guy-transparent.webp",
      alt: "Confident gym member at Hamaza Gym",
      type: "original",
    },
    {
      src: "/transformations/before-body1.png",
      alt: "Before transformation - Body 1",
      type: "before",
      label: "Before",
    },
    {
      src: "/transformations/after-body1.png",
      alt: "After transformation - Body 1",
      type: "after",
      label: "After",
    },
    {
      src: "/transformations/before-body2.png",
      alt: "Before transformation - Body 2",
      type: "before",
      label: "Before",
    },
    {
      src: "/transformations/after-body2.png",
      alt: "After transformation - Body 2",
      type: "after",
      label: "After",
    },
  ], [])

  // Optimized image loading effect
  useEffect(() => {
    // Use requestAnimationFrame for smoother initial load
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  // Memoized carousel advance function
  const advanceCarousel = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  // Optimized carousel auto-advance with proper cleanup
  useEffect(() => {
    // Only start carousel after images are loaded
    if (!imagesLoaded) return

    intervalRef.current = setInterval(advanceCarousel, 3000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [advanceCarousel, imagesLoaded])

  // Handle manual carousel navigation
  const handleCarouselClick = useCallback((index) => {
    setCurrentImageIndex(index)
    // Reset interval on manual interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(advanceCarousel, 3000)
    }
  }, [advanceCarousel])

  const currentImage = images[currentImageIndex]

  // Memoized card content calculation
  const cardContent = useMemo(() => {
    if (currentImageIndex === 0) {
      return {
        left: {
          icon: Trophy,
          value: "500+",
          label: "Success Stories",
          bgColor: "bg-accent/20",
          iconColor: "text-accent",
        },
        right: { 
          icon: Clock, 
          value: "24/7", 
          label: "Access", 
          bgColor: "bg-primary/20", 
          iconColor: "text-primary" 
        },
      }
    } else if (currentImageIndex === 1 || currentImageIndex === 2) {
      return {
        left: {
          icon: Zap,
          value: currentImageIndex === 1 ? "Start" : "-25kg",
          label: currentImageIndex === 1 ? "Fat Loss Journey" : "Weight Lost",
          bgColor: currentImageIndex === 1 ? "bg-red-500/20" : "bg-emerald-500/20",
          iconColor: currentImageIndex === 1 ? "text-red-500" : "text-emerald-500",
        },
        right: {
          icon: Trophy,
          value: currentImageIndex === 1 ? "12%" : "8%",
          label: "Body Fat",
          bgColor: currentImageIndex === 1 ? "bg-orange-500/20" : "bg-green-500/20",
          iconColor: currentImageIndex === 1 ? "text-orange-500" : "text-green-500",
        },
      }
    } else {
      return {
        left: {
          icon: Zap,
          value: currentImageIndex === 3 ? "Start" : "+15kg",
          label: currentImageIndex === 3 ? "Muscle Journey" : "Muscle Gained",
          bgColor: currentImageIndex === 3 ? "bg-blue-500/20" : "bg-purple-500/20",
          iconColor: currentImageIndex === 3 ? "text-blue-500" : "text-purple-500",
        },
        right: {
          icon: Trophy,
          value: currentImageIndex === 3 ? "65kg" : "80kg",
          label: "Body Weight",
          bgColor: currentImageIndex === 3 ? "bg-indigo-500/20" : "bg-violet-500/20",
          iconColor: currentImageIndex === 3 ? "text-indigo-500" : "text-violet-500",
        },
      }
    }
  }, [currentImageIndex])

  // Handle image load completion
  const handleImageLoad = useCallback(() => {
    setImagesLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[88vh] md:min-h-[94vh] md:mt-[7vh] overflow-x-hidden flex mt- py-8 sm:py-12 md:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 gap-8 md:gap-8 lg:gap-8 items-center justify-items-center">
          
          {/* Text Content - Centered on mobile */}
          <div
            className={`w-full md:col-span-1 lg:col-span-3 xl:col-span-2 space-y-6 z-10 relative text-center md:text-left lg:text-left transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <div
                className={`flex justify-center md:justify-start lg:justify-start transition-all duration-500 ease-out delay-100 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-medium">
                  <Zap className="w-3 h-3 mr-1.5" />
                  Transform Your Life Today
                </div>
              </div>

              <h1
                className={`text-5xl md:text-6xl font-bold text-balance leading-tight tracking-tight text-foreground transition-all duration-700 ease-out delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Build Your
                <br />
                <span className="text-accent">Dream Body</span>
              </h1>

              <p
                className={`text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground text-pretty max-w-xl leading-relaxed mx-auto md:mx-0 lg:mx-0 transition-all duration-700 ease-out delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Join our premium fitness community with personalized coaching and expert guidance from home.
              </p>
            </div>

            <div
              className={`flex justify-center md:justify-start lg:justify-start pt-2 transition-all duration-700 ease-out delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-accent cursor-pointer font-bold hover:bg-accent/90 active:bg-accent/80 
                            !text-white rounded-lg px-0 md:px-6 sm:px-8 py-3 text-base sm:text-lg
                            shadow-md hover:shadow-lg transition-all duration-200 
                            max-w-sm sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4" />
                Book a FREE Strategy Session
              </Button>
            </div>
          </div>

          {/* Image Section - Properly centered on mobile */}
          <div
            className={`w-full md:col-span-1 lg:col-span-2 xl:col-span-1 relative flex justify-center transition-all duration-800 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Background blur elements - optimized */}
            <div
              className={`absolute top-4 sm:top-8 md:top-12 lg:top-16 right-4 sm:right-8 md:right-10 lg:right-12 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-accent/10 rounded-full blur-2xl transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ willChange: 'transform, opacity' }}
            />
            <div
              className={`absolute bottom-8 sm:bottom-16 md:bottom-18 lg:bottom-24 left-4 sm:left-6 md:left-8 lg:left-10 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-primary/20 rounded-full blur-xl transition-all duration-1000 ease-out delay-600 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ willChange: 'transform, opacity' }}
            />

            {/* Main image container - centered and responsive */}
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-3xl" />

              {/* Main carousel image with Next.js Image optimization */}
              <div className="relative h-[45vh] sm:h-[50vh] mx-4 md:h-[55vh] lg:h-[70vh]">
                <div className="relative w-full h-full">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className={`object-contain object-bottom drop-shadow-2xl rounded-2xl transition-opacity duration-500 ${
                      imagesLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
                    onLoad={currentImageIndex === 0 ? handleImageLoad : undefined}
                    quality={85}
                  />
                  
                  {/* Preload next image for smoother transitions */}
                  {currentImageIndex < images.length - 1 && (
                    <div className="hidden">
                      <Image
                        src={images[currentImageIndex + 1].src}
                        alt={images[currentImageIndex + 1].alt}
                        width={300}
                        height={400}
                        priority={false}
                      />
                    </div>
                  )}
                </div>

                {/* Before/After label */}
                {currentImage.label && (
                  <div className="absolute top-0 md:top-5 left-2 z-20">
                    <div
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                        currentImage.type === "before" ? "bg-red-500/90 text-white" : "bg-green-500/90 text-white"
                      }`}
                    >
                      {currentImage.label}
                    </div>
                  </div>
                )}
              </div>

              {/* Carousel indicators - properly centered */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCarouselClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 ${
                      index === currentImageIndex ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Stats cards - optimized with memoized content */}
              <Card
                className={`absolute top-2 -left-2 sm:top-4 sm:-left-4 md:top-4 md:-left-3 lg:top-8 lg:-left-8 bg-card border-2 border-border shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ease-out delay-300 ${
                  isLoaded ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-8 translate-y-4"
                }`}
                style={{ willChange: 'transform' }}
              >
                <CardContent className="p-2 sm:p-3 md:p-2.5 lg:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 ${cardContent.left.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500`}
                    >
                      <cardContent.left.icon
                        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-3.5 md:w-3.5 lg:h-5 lg:w-5 ${cardContent.left.iconColor} transition-colors duration-500`}
                      />
                    </div>

                    <div className="transition-all duration-500">
                      <div className="text-sm sm:text-base md:text-base lg:text-xl font-bold text-card-foreground transform transition-all duration-500">
                        {cardContent.left.value}
                      </div>
                      <div className="text-xs text-muted-foreground transition-all duration-500">
                        {cardContent.left.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`absolute bottom-4 -right-2 sm:bottom-6 sm:-right-4 md:bottom-6 md:-right-3 lg:bottom-12 lg:-right-10 bg-card/95 backdrop-blur-sm border border-border/50 shadow-lg transform transition-all duration-700 ease-out hover:scale-110 hover:shadow-xl hover:-translate-y-1 delay-400 ${
                  isLoaded ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-8 translate-y-4"
                }`}
                style={{ willChange: 'transform' }}
              >
                <CardContent className="p-2 sm:p-3 md:p-2.5 lg:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 ${cardContent.right.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-700 ease-out`}
                    >
                      <cardContent.right.icon
                        className={`h-3 w-3 sm:h-4 sm:w-4 md:h-3.5 md:w-3.5 lg:h-5 lg:w-5 ${cardContent.right.iconColor} transition-all duration-700 ease-out`}
                      />
                    </div>

                    <div className="transition-all duration-700 ease-out">
                      <div className="text-sm sm:text-base md:text-base lg:text-xl font-bold text-card-foreground transition-all duration-700 ease-out">
                        {cardContent.right.value}
                      </div>
                      <div className="text-xs text-muted-foreground transition-all duration-700 ease-out">
                        {cardContent.right.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}