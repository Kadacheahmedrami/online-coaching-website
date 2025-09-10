"use client"

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
import StrategySession from "@/components/homepage/StrategySession"
export default function FreeTrainingPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Download className="w-4 h-4 mr-2" />
              100% Free Resources
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            <span className="text-accent">Free</span>   Training Resources
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with our comprehensive collection of workout guides, nutrition tips, 
              and fitness education materials. Everything you need to begin your transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                <Download className="mr-2 h-5 w-5" />
                Download All Resources
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Fitness  <span className="text-accent">Tips</span>  
            </h2>
            <p className="text-xl text-gray-600">
              Essential principles to get you started on the right track
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <tip.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-accent">Complete </span>      Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and tools to support every aspect of your fitness journey. 
              All created by Hamza and completely free.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {freeResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <resource.icon className="h-12 w-12 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Type</div>
                        <div className="text-sm font-medium">{resource.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Duration</div>
                        <div className="text-sm font-medium">{resource.duration}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold">What's Included:</div>
                      <div className="space-y-2">
                        {resource.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Download */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        {resource.downloads} downloads
                      </div>
                      <Button className="bg-accent text-white hover:bg-blue-700">
                        <Download className="mr-2 h-4 w-4" />
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