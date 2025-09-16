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
  ArrowRight
} from "lucide-react"

export default function FreeTrainingPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const freeResources = [
    {
      title: "Beginner's Workout Guide",
      description: "Complete 4-week program with step-by-step instructions for fitness beginners.",
      type: "PDF Guide",
      duration: "4 weeks",
      icon: Download,
      features: [
        "20+ exercises with instructions",
        "4-week progressive program",
        "Printable workout sheets",
        "Form tips and safety guidelines"
      ],
      downloads: "2,500+"
    },
    {
      title: "Nutrition Fundamentals",
      description: "Essential nutrition knowledge including macro counting and meal planning strategies.",
      type: "Video Series",
      duration: "2 hours",
      icon: Play,
      features: [
        "Macro nutrient breakdown",
        "Meal planning templates",
        "Healthy recipe ideas",
        "Supplement guidance"
      ],
      downloads: "1,800+"
    },
    {
      title: "Home Workout Videos",
      description: "Exercise demonstrations and full workout routines you can do anywhere.",
      type: "Video Library",
      duration: "30+ videos",
      icon: Video,
      features: [
        "Exercise form demonstrations",
        "Full-body workout routines",
        "Equipment-free exercises",
        "Modification options"
      ],
      downloads: "3,200+"
    },
    {
      title: "Progress Tracking Toolkit",
      description: "Tools and templates to set goals and track your fitness progress effectively.",
      type: "Digital Toolkit",
      duration: "Lifetime access",
      icon: Target,
      features: [
        "Goal setting framework",
        "Progress tracking sheets",
        "Measurement templates",
        "Habit formation strategies"
      ],
      downloads: "1,500+"
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
              <Button size="lg" className="bg-black  text-white hover:bg-accent cursor-pointer  w-full sm:w-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {freeResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow mx-4 sm:mx-0">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <resource.icon className="h-10 w-10 sm:h-12 sm:w-12 text-accent flex-shrink-0 mt-1" />
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
                        <span className="whitespace-nowrap">{resource.downloads} downloads</span>
                      </div>
                      <Button className="bg-accent text-white hover:bg-blue-700 w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4 flex-shrink-0" />
                        Download Free
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

         {/* CTA */}
         <StrategySession />
    </div>
  )
}