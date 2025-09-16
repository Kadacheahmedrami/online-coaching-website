"use client"
import StrategySession from '@/components/homepage/StrategySession'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Play,
  Target,
  Calendar,
  CheckCircle,
  Users,
  Video,
  Heart,
  TrendingUp,
  BookOpen,
  Mail,
  ArrowRight,
  FileText,
  Monitor
} from "lucide-react"

// Types
interface FreeResource {
  id: string
  title: string
  description: string
  type: string
  duration: string
  features: string[]
  thumbnailUrl?: string
  downloadCount: number
  featured: boolean
  order: number
}

interface FreeResourcesApiResponse {
  resources?: FreeResource[]
  error?: string
}

type ResourceType = 'PDF Guide' | 'Video Series' | 'Video Library' | 'Digital Toolkit' | 'Course'

interface FreeResourceFilters {
  type?: string
  featured?: boolean
}

// Icon mapping for different resource types
const getIconForType = (type: string) => {
  switch (type.toLowerCase()) {
    case 'pdf guide':
    case 'pdf':
      return Download
    case 'video series':
    case 'video':
      return Play
    case 'video library':
      return Video
    case 'digital toolkit':
    case 'toolkit':
      return Target
    case 'course':
      return BookOpen
    default:
      return FileText
  }
}

export default function FreeTrainingPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [freeResources, setFreeResources] = useState<FreeResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fallback static data in case API fails
  const staticFallbackResources: FreeResource[] = [
    {
      id: '1',
      title: "Beginner's Workout Guide",
      description: "Complete 4-week program with step-by-step instructions for fitness beginners.",
      type: "PDF Guide",
      duration: "4 weeks",
      features: [
        "20+ exercises with instructions",
        "4-week progressive program",
        "Printable workout sheets",
        "Form tips and safety guidelines"
      ],
      downloadCount: 2500,
      featured: true,
      order: 1
    },
    {
      id: '2',
      title: "Nutrition Fundamentals",
      description: "Essential nutrition knowledge including macro counting and meal planning strategies.",
      type: "Video Series",
      duration: "2 hours",
      features: [
        "Macro nutrient breakdown",
        "Meal planning templates",
        "Healthy recipe ideas",
        "Supplement guidance"
      ],
      downloadCount: 1800,
      featured: false,
      order: 2
    },
    {
      id: '3',
      title: "Home Workout Videos",
      description: "Exercise demonstrations and full workout routines you can do anywhere.",
      type: "Video Library",
      duration: "30+ videos",
      features: [
        "Exercise form demonstrations",
        "Full-body workout routines",
        "Equipment-free exercises",
        "Modification options"
      ],
      downloadCount: 3200,
      featured: true,
      order: 3
    },
    {
      id: '4',
      title: "Progress Tracking Toolkit",
      description: "Tools and templates to set goals and track your fitness progress effectively.",
      type: "Digital Toolkit",
      duration: "Lifetime access",
      features: [
        "Goal setting framework",
        "Progress tracking sheets",
        "Measurement templates",
        "Habit formation strategies"
      ],
      downloadCount: 1500,
      featured: false,
      order: 4
    }
  ]

  const quickTips = [
    {
      title: "Start Simple",
      description: "Master bodyweight exercises before adding weights",
      icon: Target
    },
    {
      title: "Stay Consistent",
      description: "3 moderate workouts beat 1 intense session",
      icon: Calendar
    },
    {
      title: "Form First",
      description: "Perfect technique prevents injuries",
      icon: CheckCircle
    },
    {
      title: "Track Progress",
      description: "What gets measured gets improved",
      icon: TrendingUp
    }
  ]

  useEffect(() => {
    setIsMounted(true)
    fetchFreeResources()
  }, [])

  const fetchFreeResources = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/free-training')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data: FreeResource[] = await response.json()
      setFreeResources(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching free resources:', err)
      setError('Failed to load resources. Please try again later.')
      // Fallback to static data if API fails
      setFreeResources(staticFallbackResources)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (resourceId: string, title: string) => {
    try {
      // You can implement download logic here
      // For now, we'll just log it
      console.log(`Downloading resource: ${title} (ID: ${resourceId})`)
      
      // Optional: Track download analytics
      // await fetch('/api/track-download', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ resourceId })
      // })
      
      // Here you would typically redirect to a download URL or trigger a file download
      alert(`Download started for: ${title}`)
    } catch (err) {
      console.error('Download error:', err)
      alert('Download failed. Please try again.')
    }
  }

  // Prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-8 px-4 sm:py-10 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              100% Free Resources
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-accent">Free</span> Training Resources
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Get started with our comprehensive collection of workout guides, nutrition tips, 
              and fitness education materials. Everything you need to begin your transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button size="lg" className="bg-black text-white hover:bg-accent cursor-pointer w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                Download All Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
              Quick Fitness <span className="text-accent">Tips</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
              Essential principles to get you started on the right track
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg text-center mx-4 sm:mx-0">
                <CardContent className="p-4 sm:p-6">
                  <tip.icon className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
              <span className="text-accent">Complete</span> Resource Library
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive guides and tools to support every aspect of your fitness journey. 
              All created by Hamza and completely free.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              <p className="mt-4 text-gray-600">Loading resources...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 mb-4">{error}</p>
                <Button 
                  onClick={fetchFreeResources}
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {/* Resources Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {freeResources.map((resource) => {
                const IconComponent = getIconForType(resource.type)
                
                return (
                  <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow mx-4 sm:mx-0">
                    <CardContent className="p-6 sm:p-8">
                      <div className="space-y-4 sm:space-y-6">
                        {/* Featured Badge */}
                        {resource.featured && (
                          <div className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                            <Heart className="w-3 h-3 mr-1" />
                            Featured
                          </div>
                        )}

                        {/* Header */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 text-accent flex-shrink-0 mt-1" />
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 break-words">{resource.title}</h3>
                            <p className="text-gray-600 text-sm break-words">{resource.description}</p>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                          <div className="min-w-0">
                            <div className="text-xs text-gray-500 mb-1">Type</div>
                            <div className="text-sm font-medium break-words">{resource.type}</div>
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-gray-500 mb-1">Duration</div>
                            <div className="text-sm font-medium break-words">{resource.duration}</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 sm:space-y-3">
                          <div className="text-sm font-semibold">What's Included:</div>
                          <div className="space-y-2">
                            {resource.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600 break-words">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Download */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="h-4 w-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">{resource.downloadCount.toLocaleString()}+ downloads</span>
                          </div>
                          <Button 
                            className="bg-accent text-white hover:bg-blue-700 w-full sm:w-auto"
                            onClick={() => handleDownload(resource.id, resource.title)}
                          >
                            <Download className="mr-2 h-4 w-4 flex-shrink-0" />
                            Download Free
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && freeResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources available</h3>
              <p className="text-gray-600">Check back later for new free resources!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <StrategySession />
    </div>
  )
}