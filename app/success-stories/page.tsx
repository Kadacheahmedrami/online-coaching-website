"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import StrategySession from "@/components/homepage/StrategySession"

interface RevealedStories {
  [key: number]: boolean
}

export default function ElegantSuccessStories() {
  const [revealedStories, setRevealedStories] = useState<RevealedStories>({})

  const toggleReveal = (storyId: number): void => {
    setRevealedStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }))
  }

  const stories = [
    {
      id: 1,
      name: "Fat Loss Transformation",
      achievement: "Lost 25kg in 4 months",
      beforeImage: "/transformations/before-body1.png",
      afterImage: "/transformations/after-body1.png",
      stats: "25kg Lost • 12% Body Fat Reduced",
      testimonial: "The program completely changed my relationship with food and exercise. I feel stronger and more confident than ever before."
    },
    {
      id: 2,
      name: "Muscle Building Journey", 
      achievement: "Gained 15kg muscle mass",
      beforeImage: "/transformations/before-body2.png",
      afterImage: "/transformations/after-body2.png", 
      stats: "15kg Muscle Gained • 65kg to 80kg",
      testimonial: "From skinny to strong - this transformation taught me that consistency and proper guidance can achieve anything."
    },
    {
      id: 3,
      name: "Strength & Conditioning",
      achievement: "Doubled lifting capacity",
      beforeImage: "/transformations/before-body3.png",
      afterImage: "/transformations/after-body3.png",
      stats: "100% Strength Increase • 6 Months",
      testimonial: "Not only did I get stronger physically, but mentally too. This program gave me discipline that extends to all areas of my life."
    },
    {
      id: 4,
      name: "Complete Body Recomposition",
      achievement: "Lost 18kg fat, gained 8kg muscle",
      beforeImage: "/transformations/before-body4.png",
      afterImage: "/transformations/after-body4.png",
      stats: "18kg Fat Lost • 8kg Muscle Gained • 8 Months",
      testimonial: "Amazing how my body completely transformed while eating more than I ever did before. Science-based approach really works."
    },
    {
      id: 5,
      name: "Athletic Performance",
      achievement: "Increased performance by 200%",
      beforeImage: "/transformations/before-body5.png",
      afterImage: "/transformations/after-body5.png",
      stats: "200% Performance Increase • Marathon Ready",
      testimonial: "From couch to marathon in 10 months. The structured approach made what seemed impossible become achievable."
    },
    {
      id: 6,
      name: "Senior Fitness Revival",
      achievement: "Regained strength at age 55",
      beforeImage: "/transformations/before-body6.png",
      afterImage: "/transformations/after-body6.png",
      stats: "Age 55 • 20kg Lost • Strength Doubled",
      testimonial: "Proof that age is just a number. I'm in better shape now than I was 20 years ago."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Success
            <span className="text-accent"> Stories</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Real transformations from real people. See before/after photos and discover what's possible.
          </p>
        </div>
      </section>

      {/* Transformations in Rows */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {stories.map((story, index) => (
              <div
                key={story.id}
                id={`transformation-${story.id}`}
              >
                {/* Row Layout - Stack on mobile, alternating sides on desktop */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div 
                      className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                      onClick={() => toggleReveal(story.id)}
                    >
                      <div className="relative h-64 sm:h-80 md:h-96">
                        {/* Image Container */}
                        <div className="relative w-full h-full">
                          {revealedStories[story.id] ? (
                            <Image 
                              src={story.afterImage}
                              alt={`${story.name} after transformation`}
                              fill
                              className="object-contain transition-all duration-700"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index < 2}
                            />
                          ) : (
                            <Image 
                              src={story.beforeImage}
                              alt={`${story.name} before transformation`}
                              fill
                              className="object-contain transition-all duration-700"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index < 2}
                            />
                          )}
                        </div>

                        {/* Before/After Label */}
                        <div className="absolute top-2 md:top-4 left-2 md:left-4 pointer-events-none">
                          <span className={`text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full transition-colors duration-300 ${
                            revealedStories[story.id] ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {revealedStories[story.id] ? 'After' : 'Before'}
                          </span>
                        </div>

                        {/* Click Indicator */}
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 pointer-events-none">
                          <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 md:px-3 py-1 rounded-full">
                            {revealedStories[story.id] ? 'Click to show before' : 'Click to reveal'}
                          </div>
                        </div>

                        {/* Click Overlay Effect */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Eye className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-2 md:px-0">
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
                        {story.name}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 mb-3 md:mb-4">
                        {story.achievement}
                      </p>
                      <div className="text-sm text-slate-500 font-medium mb-4 md:mb-6 bg-slate-100 px-3 md:px-4 py-2 rounded-lg inline-block">
                        {story.stats}
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <blockquote className="text-base md:text-lg text-slate-700 italic border-l-4 border-slate-300 pl-4 md:pl-6 py-3 md:py-4 bg-slate-50 rounded-r-lg">
                      "{story.testimonial}"
                    </blockquote>
                    
                    {/* Action Button */}
                    <div className="flex flex-col gap-3 md:gap-4">
                      <Link 
                        href={`/success-stories/${story.id}`}
                        className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 w-full sm:w-auto"
                      >
                        See More Details
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Proven Results</h3>
            <p className="text-slate-300">Real transformations, real people, real results</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-300 text-sm md:text-base">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-slate-300 text-sm md:text-base">Goal Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-slate-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-300 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <StrategySession />
    </div>
  )
}