"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Trophy,
  Target,
  Calendar,
  ArrowRight,
  Quote,
  TrendingUp,
  Award,
  Heart,
  Zap,
  CheckCircle,
  Play,
} from "lucide-react"
import { useState } from "react"

export default function SuccessStoriesPage() {
  const [showTransformation, setShowTransformation] = useState({ left: false, right: false })

  const successStories = [
    {
      name: "Sarah Johnson",
      achievement: "Lost 25 lbs in 3 months",
      beforeWeight: "165 lbs",
      afterWeight: "140 lbs",
      timeframe: "3 months",
      testimonial:
        "Hamaza Gym transformed my entire approach to fitness. The trainers are incredible and the results speak for themselves! I never thought I could achieve this level of fitness, but with Hamza's guidance, I not only lost weight but gained confidence and energy I never knew I had.",
      goals: ["Weight Loss", "Increased Energy", "Better Sleep"],
      rating: 5,
    },
    {
      name: "Mike Chen",
      achievement: "Gained 15 lbs muscle",
      beforeWeight: "155 lbs",
      afterWeight: "170 lbs",
      timeframe: "4 months",
      testimonial:
        "Best investment I've made for my health. The community here is amazing and keeps me motivated every day. Hamza's personalized approach helped me build muscle I never thought possible while maintaining a busy work schedule.",
      goals: ["Muscle Gain", "Strength Building", "Better Physique"],
      rating: 5,
    },
    {
      name: "Emma Davis",
      achievement: "Completed first marathon",
      beforeWeight: "N/A",
      afterWeight: "N/A",
      timeframe: "6 months",
      testimonial:
        "The facilities are world-class and the atmosphere is incredibly motivating. I actually look forward to workouts! From barely being able to run a mile to completing my first marathon - this journey has been life-changing.",
      goals: ["Endurance Training", "Marathon Completion", "Cardiovascular Health"],
      rating: 5,
    },
    {
      name: "David Rodriguez",
      achievement: "Lost 40 lbs, reversed diabetes",
      beforeWeight: "220 lbs",
      afterWeight: "180 lbs",
      timeframe: "8 months",
      testimonial:
        "Hamza didn't just help me lose weight - he helped me reclaim my health. My doctor was amazed at my blood work improvements. The nutrition guidance was just as important as the workouts.",
      goals: ["Weight Loss", "Health Improvement", "Diabetes Management"],
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      achievement: "Gained strength after injury",
      beforeWeight: "N/A",
      afterWeight: "N/A",
      timeframe: "5 months",
      testimonial:
        "After my back injury, I thought my active days were over. Hamza's expertise in corrective exercise helped me not only recover but become stronger than before. His patience and knowledge made all the difference.",
      goals: ["Injury Recovery", "Strength Building", "Pain Management"],
      rating: 5,
    },
    {
      name: "James Wilson",
      achievement: "Transformed at age 45",
      beforeWeight: "195 lbs",
      afterWeight: "175 lbs",
      timeframe: "6 months",
      testimonial:
        "I thought it was too late to get in shape at 45, but Hamza proved me wrong. His age-appropriate training methods helped me achieve the best shape of my life while respecting my body's limitations.",
      goals: ["Weight Loss", "Muscle Toning", "Age-Appropriate Fitness"],
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Success Stories", icon: Trophy },
    { number: "95%", label: "Goal Achievement Rate", icon: Target },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Heart },
  ]

  const handleTransformationReveal = (side: "left" | "right") => {
    setShowTransformation((prev) => ({ ...prev, [side]: true }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              <Trophy className="w-3 h-3 mr-1.5" />
              Real Results from Real People
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight text-foreground">
              Success <span className="text-accent">Stories</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Discover inspiring transformations from our community members. See how personalized training, expert
              guidance, and unwavering support have helped hundreds achieve their fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                <Calendar className="mr-2 h-5 w-5" />
                Start Your Transformation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <TrendingUp className="mr-2 h-5 w-5" />
                View All Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-accent/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Featured <span className="text-accent">Transformations</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Witness incredible before and after transformations. Click to reveal the amazing results!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Fat to Lean Transformation - Left */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Fat Loss Journey</h3>
                <p className="text-muted-foreground">Sarah's incredible 40lb weight loss transformation</p>
              </div>

              <Card className="relative overflow-hidden border-2 border-accent/20 bg-card shadow-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-red-50 to-red-100">
                    {/* Before Image */}
                    <div
                      className={`absolute inset-0 transition-all duration-1000 ${showTransformation.left ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-32 h-32 bg-red-300 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-4xl">😔</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-lg font-semibold text-red-800">BEFORE</div>
                            <div className="text-sm text-red-600">185 lbs • Low Energy • Unhappy</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div
                      className={`absolute inset-0 transition-all duration-1000 ${showTransformation.left ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-32 h-32 bg-green-300 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-4xl">💪</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-lg font-semibold text-green-800">AFTER</div>
                            <div className="text-sm text-green-600">145 lbs • High Energy • Confident</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reveal Button */}
                    {!showTransformation.left && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          onClick={() => handleTransformationReveal("left")}
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl animate-pulse"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Reveal Transformation
                        </Button>
                      </div>
                    )}

                    {/* Celebration Effect */}
                    {showTransformation.left && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 animate-bounce text-2xl">🎉</div>
                        <div
                          className="absolute top-8 right-6 animate-bounce text-2xl"
                          style={{ animationDelay: "0.2s" }}
                        >
                          ✨
                        </div>
                        <div
                          className="absolute bottom-12 left-8 animate-bounce text-2xl"
                          style={{ animationDelay: "0.4s" }}
                        >
                          🔥
                        </div>
                        <div
                          className="absolute bottom-6 right-4 animate-bounce text-2xl"
                          style={{ animationDelay: "0.6s" }}
                        >
                          💯
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-2">
                <div className="text-sm font-medium text-accent">6 Months • Personalized Training</div>
                <p className="text-sm text-muted-foreground italic">
                  "I never thought I could love my body this much. Hamza changed my entire relationship with fitness!"
                </p>
              </div>
            </div>

            {/* Skinny to Muscle Transformation - Right */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Muscle Building Journey</h3>
                <p className="text-muted-foreground">Mike's amazing 25lb muscle gain transformation</p>
              </div>

              <Card className="relative overflow-hidden border-2 border-accent/20 bg-card shadow-xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-50 to-blue-100">
                    {/* Before Image */}
                    <div
                      className={`absolute inset-0 transition-all duration-1000 ${showTransformation.right ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-32 h-32 bg-blue-300 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-4xl">😟</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-lg font-semibold text-blue-800">BEFORE</div>
                            <div className="text-sm text-blue-600">140 lbs • Skinny • Low Confidence</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div
                      className={`absolute inset-0 transition-all duration-1000 ${showTransformation.right ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-32 h-32 bg-purple-300 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-4xl">🏆</span>
                          </div>
                          <div className="space-y-2">
                            <div className="text-lg font-semibold text-purple-800">AFTER</div>
                            <div className="text-sm text-purple-600">165 lbs • Muscular • Strong</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reveal Button */}
                    {!showTransformation.right && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          onClick={() => handleTransformationReveal("right")}
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl animate-pulse"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Reveal Transformation
                        </Button>
                      </div>
                    )}

                    {/* Celebration Effect */}
                    {showTransformation.right && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 animate-bounce text-2xl">🎊</div>
                        <div
                          className="absolute top-8 right-6 animate-bounce text-2xl"
                          style={{ animationDelay: "0.2s" }}
                        >
                          ⚡
                        </div>
                        <div
                          className="absolute bottom-12 left-8 animate-bounce text-2xl"
                          style={{ animationDelay: "0.4s" }}
                        >
                          💪
                        </div>
                        <div
                          className="absolute bottom-6 right-4 animate-bounce text-2xl"
                          style={{ animationDelay: "0.6s" }}
                        >
                          🚀
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-2">
                <div className="text-sm font-medium text-accent">8 Months • Strength Training</div>
                <p className="text-sm text-muted-foreground italic">
                  "From skinny to strong! Hamza's program gave me the confidence I never had before."
                </p>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          {(showTransformation.left || showTransformation.right) && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowTransformation({ left: false, right: false })}
                variant="outline"
                className="bg-transparent"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Reset Transformations
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border border-border bg-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-card-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Transformation <span className="text-accent">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Each story represents months of dedication, personalized coaching, and life-changing results. Your story
              could be next.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-card-foreground">{story.name}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-accent">{story.achievement}</div>
                        <div className="text-xs text-muted-foreground">{story.timeframe}</div>
                      </div>
                    </div>

                    {/* Before/After Stats */}
                    {story.beforeWeight !== "N/A" && (
                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">Before</div>
                          <div className="text-lg font-semibold text-foreground">{story.beforeWeight}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">After</div>
                          <div className="text-lg font-semibold text-accent">{story.afterWeight}</div>
                        </div>
                      </div>
                    )}

                    {/* Goals */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">Goals Achieved:</div>
                      <div className="flex flex-wrap gap-2">
                        {story.goals.map((goal, goalIndex) => (
                          <span
                            key={goalIndex}
                            className="inline-flex items-center px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-accent/30" />
                      <p className="text-muted-foreground leading-relaxed pl-4 italic">"{story.testimonial}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Visual <span className="text-accent">Transformations</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Pictures speak louder than words. See the incredible physical transformations our clients have achieved.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                        <Trophy className="h-8 w-8 text-accent" />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">Before/After Photo</div>
                      <div className="text-xs text-muted-foreground">Transformation #{item}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-medium text-card-foreground mb-1">Client Transformation</div>
                    <div className="text-xs text-muted-foreground">Amazing results in record time</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-2 border-accent/20 bg-card shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-accent" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Your Success Story <span className="text-accent">Starts Here</span>
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of others who have transformed their lives with personalized training and expert
                    guidance. Your transformation is just one decision away.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Strategy Session
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    View Training Programs
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Join our community of 500+ successful transformations • Free consultation • No obligations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
