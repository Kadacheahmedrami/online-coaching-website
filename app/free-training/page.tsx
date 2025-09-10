"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Play,
  Target,
  BookOpen,
  Calendar,
  CheckCircle,
  Users,
  Zap,
  ArrowRight,
  Video,
  Dumbbell,
  Heart,
  TrendingUp,
} from "lucide-react"

export default function FreeTrainingPage() {
  const freeResources = [
    {
      title: "Beginner's Complete Workout Guide",
      description:
        "A comprehensive 4-week program designed specifically for fitness beginners with step-by-step instructions, exercise demonstrations, and progression tracking.",
      type: "PDF Guide",
      duration: "4 weeks",
      difficulty: "Beginner",
      icon: Download,
      features: [
        "20+ exercises with detailed instructions",
        "4-week progressive program",
        "Printable workout sheets",
        "Form tips and safety guidelines",
        "Equipment alternatives for home workouts",
      ],
      downloadCount: "2,500+",
    },
    {
      title: "Nutrition Fundamentals Masterclass",
      description:
        "Essential nutrition knowledge including macro counting, meal planning strategies, and sustainable eating habits to fuel your fitness journey effectively.",
      type: "Video Series",
      duration: "2 hours",
      difficulty: "All Levels",
      icon: Play,
      features: [
        "Macro and micro nutrient breakdown",
        "Meal planning templates",
        "Healthy recipe ideas",
        "Supplement guidance",
        "Hydration strategies",
      ],
      downloadCount: "1,800+",
    },
    {
      title: "Home Workout Video Library",
      description:
        "Watch proper form demonstrations and exercise techniques from Hamza himself. Perfect for learning correct movement patterns and workout routines.",
      type: "Video Library",
      duration: "30+ videos",
      difficulty: "All Levels",
      icon: Video,
      features: [
        "Exercise form demonstrations",
        "Full-body workout routines",
        "Equipment-free exercises",
        "Modification options",
        "Cool-down and stretching",
      ],
      downloadCount: "3,200+",
    },
    {
      title: "Goal Setting & Progress Tracking Toolkit",
      description:
        "Comprehensive tools and templates to help you set realistic fitness goals, track your progress, and stay motivated throughout your journey.",
      type: "Digital Toolkit",
      duration: "Lifetime access",
      difficulty: "All Levels",
      icon: Target,
      features: [
        "SMART goal setting framework",
        "Progress tracking sheets",
        "Measurement log templates",
        "Motivation techniques",
        "Habit formation strategies",
      ],
      downloadCount: "1,500+",
    },
    {
      title: "Injury Prevention & Recovery Guide",
      description:
        "Learn essential techniques for preventing common workout injuries and promoting faster recovery between training sessions.",
      type: "PDF + Videos",
      duration: "1.5 hours",
      difficulty: "All Levels",
      icon: Heart,
      features: [
        "Common injury prevention tips",
        "Proper warm-up routines",
        "Recovery techniques",
        "Mobility exercises",
        "When to rest vs. push through",
      ],
      downloadCount: "900+",
    },
    {
      title: "Mindset & Motivation Masterclass",
      description:
        "Develop the mental tools needed for long-term fitness success. Learn how to overcome obstacles and maintain consistency.",
      type: "Audio + PDF",
      duration: "1 hour",
      difficulty: "All Levels",
      icon: TrendingUp,
      features: [
        "Psychology of habit formation",
        "Overcoming mental barriers",
        "Building self-discipline",
        "Staying motivated long-term",
        "Dealing with setbacks",
      ],
      downloadCount: "1,200+",
    },
  ]

  const quickTips = [
    {
      title: "Start with bodyweight exercises",
      description: "Master push-ups, squats, and planks before adding weights",
      icon: Dumbbell,
    },
    {
      title: "Consistency beats intensity",
      description: "3 moderate workouts per week is better than 1 intense session",
      icon: Calendar,
    },
    {
      title: "Focus on form first",
      description: "Perfect technique prevents injuries and maximizes results",
      icon: Target,
    },
    {
      title: "Track your progress",
      description: "What gets measured gets improved - log your workouts",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              <Download className="w-3 h-3 mr-1.5" />
              100% Free Resources
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight text-foreground">
              Free <span className="text-accent">Training Resources</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Get started with our comprehensive collection of workout guides, nutrition tips, and fitness education
              materials. Everything you need to begin your transformation journey - completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                <Download className="mr-2 h-5 w-5" />
                Download All Resources
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <Calendar className="mr-2 h-5 w-5" />
                Book Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Quick <span className="text-accent">Fitness Tips</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Essential principles to get you started on the right track
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border border-border bg-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Complete <span className="text-accent">Resource Library</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, video tutorials, and tools to support every aspect of your fitness journey. All
              created by Hamza and completely free to download.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {freeResources.map((resource, index) => (
              <Card key={index} className="border border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{resource.description}</p>
                      </div>
                    </div>

                    {/* Resource Details */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Type</div>
                        <div className="text-sm font-medium text-foreground">{resource.type}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="text-sm font-medium text-foreground">{resource.duration}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Level</div>
                        <div className="text-sm font-medium text-foreground">{resource.difficulty}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-foreground">What's Included:</div>
                      <div className="space-y-2">
                        {resource.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Download Stats & Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{resource.downloadCount} downloads</span>
                      </div>
                      <Button className="!bg-accent !text-accent-foreground hover:!bg-accent/90">
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

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-2 border-accent/20 bg-card shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Get Weekly <span className="text-accent">Fitness Tips</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join our newsletter for exclusive workout tips, nutrition advice, and motivation delivered straight
                    to your inbox every week.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Weekly workout routines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Nutrition tips and recipes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Exclusive member content</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button size="lg" className="w-full !bg-black !text-white hover:!bg-gray-800">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Subscribe Free
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam, unsubscribe anytime. Join 5,000+ fitness enthusiasts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    Ready for <span className="text-accent">Personalized Coaching?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    While these free resources are a great start, imagine what you could achieve with personalized
                    training, custom nutrition plans, and one-on-one coaching support.
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
                    30-minute consultation • Completely free • Custom fitness plan • No obligations
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
