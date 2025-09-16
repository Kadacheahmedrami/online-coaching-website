"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, EyeOff, Loader2, Trophy, Users, Star, RefreshCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import StrategySession from "@/components/homepage/StrategySession"

interface RevealedStories {
  [key: number]: boolean
}

interface SuccessStory {
  id: number
  name: string
  achievement: string
  age?: number
  height?: string
  duration?: string
  program?: string
  beforeImage: string
  afterImage: string
  startWeight?: number
  endWeight?: number
  stats: string
  testimonial: string
  featured: boolean
  createdAt: string
}

interface SuccessStoriesApiResponse {
  stories?: SuccessStory[]
  error?: string
}

export default function ElegantSuccessStories() {
  const [revealedStories, setRevealedStories] = useState<RevealedStories>({})
  const [stories, setStories] = useState<SuccessStory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    fetchSuccessStories()
  }, [])

  const fetchSuccessStories = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/success-stories')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data: SuccessStory[] = await response.json()
      setStories(data)
      
    } catch (err) {
      console.error('Error fetching success stories:', err)
      setError('Failed to load success stories. Please try again later.')
    
    } finally {
      setLoading(false)
    }
  }

  const toggleReveal = (storyId: number): void => {
    setRevealedStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }))
  }

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section Skeleton */}
      <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
          <div className="animate-pulse">
            <div className="h-12 md:h-16 lg:h-20 bg-gray-200 rounded-lg mb-4 md:mb-6 mx-auto w-3/4"></div>
            <div className="h-6 md:h-8 bg-gray-100 rounded mb-6 md:mb-8 mx-auto w-2/3"></div>
          </div>
        </div>
      </section>

      {/* Story Skeletons */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {[1, 2, 3].map((index) => (
              <div key={index} className="animate-pulse">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}>
                  
                  {/* Image Skeleton */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl md:rounded-2xl h-64 sm:h-80 md:h-96 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Text Skeleton */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-2 md:px-0">
                    <div>
                      <div className="h-8 md:h-10 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-6 bg-gray-100 rounded mb-4 w-full"></div>
                      <div className="flex gap-2 mb-4">
                        <div className="h-6 bg-gray-100 rounded w-16"></div>
                        <div className="h-6 bg-gray-100 rounded w-20"></div>
                        <div className="h-6 bg-gray-100 rounded w-24"></div>
                      </div>
                      <div className="h-10 bg-gray-100 rounded w-2/3 mb-6"></div>
                    </div>
                    <div className="h-20 bg-gray-50 border-l-4 border-gray-200 rounded-r-lg mb-4"></div>
                    <div className="h-12 bg-gray-200 rounded-full w-48"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  // Error State Component
  const ErrorState = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
          <div className="text-red-500 mb-6">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Oops! Something went wrong</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={fetchSuccessStories}
              className="bg-slate-900 hover:bg-slate-800"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </>
              )}
            </Button>
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Don't worry, we've loaded some example stories to show you what's possible!
        </p>
      </div>
    </div>
  )

  // Empty State Component
  const EmptyState = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Success
            <span className="text-accent"> Stories</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <Trophy className="w-16 h-16 text-slate-400 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Amazing Stories Coming Soon!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We're collecting incredible transformation stories from our community. 
                Check back soon to see inspiring journeys of real people achieving real results.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">What to expect:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Real transformations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-accent" />
                  <span>Before & after photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>Detailed testimonials</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={fetchSuccessStories}
                className="bg-slate-900 hover:bg-slate-800"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Check for Updates
              </Button>
              <Link href="/">
                <Button variant="outline">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  // Loading state
  if (loading) {
    return <LoadingSkeleton />
  }

  // Error state (but still show fallback data)
  if (error && stories.length === 0) {
    return <ErrorState />
  }

  // Empty state
  if (!loading && !error && stories.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Error Banner (if API failed but we have fallback data) */}
      {error && stories.length > 0 && (
        <div className="bg-yellow-50 border-b border-yellow-200 py-3">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm text-yellow-800">
                  Showing example stories due to connection issues
                </span>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={fetchSuccessStories}
                className="text-yellow-800 border-yellow-300 hover:bg-yellow-100"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Retry
              </Button>
            </div>
          </div>
        </div>
      )}

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
          
          {/* Success Stats */}
          <div className="flex justify-center gap-8 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>{stories.length} Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              <span>100% Real Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span>Verified Stories</span>
            </div>
          </div>
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
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Featured Badge */}
                {story.featured && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured Story
                    </span>
                  </div>
                )}

                {/* Row Layout - Stack on mobile, alternating sides on desktop */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div 
                      className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer group"
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
                              className="object-contain transition-all duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index < 2}
                            />
                          ) : (
                            <Image 
                              src={story.beforeImage}
                              alt={`${story.name} before transformation`}
                              fill
                              className="object-contain transition-all duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={index < 2}
                            />
                          )}
                        </div>

                        {/* Before/After Label */}
                        <div className="absolute top-2 md:top-4 left-2 md:left-4 pointer-events-none">
                          <span className={`text-white text-xs font-semibold px-2 md:px-3 py-1 rounded-full transition-all duration-300 ${
                            revealedStories[story.id] ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {revealedStories[story.id] ? 'After' : 'Before'}
                          </span>
                        </div>

                        {/* Click Indicator */}
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 pointer-events-none">
                          <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 md:px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-accent">
                            {revealedStories[story.id] ? 'Click to show before' : 'Click to reveal'}
                          </div>
                        </div>

                        {/* Click Overlay Effect */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {revealedStories[story.id] ? (
                              <EyeOff className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
                            ) : (
                              <Eye className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
                            )}
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

                      {/* Additional Info */}
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {story.age && (
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                            Age: {story.age}
                          </span>
                        )}
                        {story.duration && (
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                            Duration: {story.duration}
                          </span>
                        )}
                        {story.program && (
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                            Program: {story.program}
                          </span>
                        )}
                      </div>

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
                        className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300 w-full sm:w-auto group"
                      >
                        See More Details
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <div className="text-3xl md:text-4xl font-bold mb-2">{stories.length}+</div>
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}