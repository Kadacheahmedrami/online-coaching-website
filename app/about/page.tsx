"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Trophy,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Heart,
  MessageCircle,
  Star,
  Clock
} from "lucide-react"
import StrategySession from "@/components/homepage/StrategySession"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/hamza.png"
                alt="Hamza - Professional Fitness Trainer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              
              {/* Simple floating badge */}
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                10+ Years Experience
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Professional Fitness Coach</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Meet <span className="text-accent">Hamza</span> 
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Your dedicated fitness coach committed to helping you achieve lasting results through personalized training and proven strategies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-accent cursor-pointer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              
              </div>

              {/* Simple stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My  <span className="text-accent">Story</span>  
            </h2>
            <p className="text-2xl text-gray-600">
              From personal struggle to helping hundreds transform their lives
            </p>
          </div>

          <div className="prose prose-xl text-center max-w-none text-gray-700 leading-relaxed">
            <p>
              My fitness journey started over a decade ago when I was struggling with my own health and confidence. 
              Like many of my clients today, I felt overwhelmed by conflicting advice and frustrated by lack of results.
            </p>
            
            <p>
              That's when I decided to take control. I immersed myself in learning about proper training techniques, 
              nutrition science, and the psychology of lasting change. What I discovered changed my life forever.
            </p>
            
            <p>
              After transforming my own body and mindset, I knew I had to share this knowledge with others. 
              Today, my mission is simple: to provide you with the same personalized guidance, proven strategies, 
              and unwavering support that helped me and hundreds of others achieve lasting transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Credentials & <span className="text-accent">Expertise</span> 
            </h2>
            <p className="text-xl text-gray-600">
              Professional certifications and proven experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">NASM-CPT Certified</h3>
                <p className="text-gray-600 text-sm">
                  National Academy of Sports Medicine Certified Personal Trainer
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Precision Nutrition</h3>
                <p className="text-gray-600 text-sm">
                  Level 1 certified nutrition coach
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">10+ Years Experience</h3>
                <p className="text-gray-600 text-sm">
                  Proven track record with 500+ transformations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-accent">Approach</span>  
            </h2>
            <p className="text-xl text-gray-600">
              What makes my training method different
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">100% Personalized</h3>
                  <p className="text-gray-600 text-sm">
                    Every program is tailored to your goals, fitness level, and lifestyle
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sustainable Results</h3>
                  <p className="text-gray-600 text-sm">
                    Focus on long-term habits, not quick fixes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Science-Based</h3>
                  <p className="text-gray-600 text-sm">
                    Evidence-based methods, not fitness fads
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 text-sm">
                    Continuous guidance and motivation throughout your journey
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Injury Prevention</h3>
                  <p className="text-gray-600 text-sm">
                    Safety-first approach with proper movement assessment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Holistic Wellness</h3>
                  <p className="text-gray-600 text-sm">
                    Addressing mindset, stress, and overall life balance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <StrategySession />
    </div>
  )
}