"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Trophy,
  Award,
  Dumbbell,
  Users,
  Calendar,
  CheckCircle,
  Heart,
  Zap,
  Clock,
  MessageCircle,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="/hamza.png"
                alt="Hamza - Professional Fitness Trainer"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Cards */}
              <Card className="absolute top-4 -right-4 sm:top-6 sm:-right-6 bg-card border-2 border-border shadow-xl">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-card-foreground">10+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute bottom-6 -left-4 sm:bottom-8 sm:-left-6 bg-card border-2 border-border shadow-xl">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-card-foreground">500+</div>
                      <div className="text-xs text-muted-foreground">Clients Transformed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  <Heart className="w-3 h-3 mr-1.5" />
                  Passionate About Fitness
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance tracking-tight text-foreground">
                  Meet <span className="text-accent">Hamza</span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                  Your dedicated fitness coach committed to helping you achieve extraordinary results and transform your
                  life through personalized training and unwavering support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Strategy Session
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Hamza
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              My <span className="text-accent">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              From struggling with my own fitness journey to becoming a certified trainer who has transformed hundreds
              of lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My fitness journey started over a decade ago when I was struggling with my own health and confidence.
                  Like many of my clients today, I felt overwhelmed by conflicting advice and frustrated by lack of
                  results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That's when I decided to take control. I immersed myself in learning about proper training techniques,
                  nutrition science, and the psychology of lasting change. What I discovered changed my life forever.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">The Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After transforming my own body and mindset, I knew I had to share this knowledge with others. I became
                  certified and started helping friends, then family, then eventually built Hamaza Gym.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, my mission is simple: to provide you with the same personalized guidance, proven strategies,
                  and unwavering support that helped me and hundreds of others achieve lasting transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Credentials & <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Backed by professional certifications and years of hands-on experience helping clients achieve their
              goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">NASM-CPT Certified</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  National Academy of Sports Medicine Certified Personal Trainer with advanced specializations in
                  corrective exercise and performance enhancement.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Precision Nutrition Level 1</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced certification in nutrition coaching, helping clients develop sustainable eating habits that
                  support their fitness goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Functional Movement Screen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Certified in movement assessment and corrective exercise strategies to prevent injury and optimize
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Behavioral Change Specialist</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Specialized training in psychology of habit formation and motivation to help clients create lasting
                  lifestyle changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">10+ Years Experience</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Over a decade of hands-on experience working with clients of all fitness levels, from beginners to
                  competitive athletes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Proven Results</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  500+ successful client transformations with documented results in weight loss, muscle gain, and
                  overall health improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              My Training <span className="text-accent">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Every client is unique, and so should be their fitness journey. Here's what guides my approach to
              training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Personalized Approach</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No cookie-cutter programs. Every workout and nutrition plan is tailored to your specific goals,
                    fitness level, and lifestyle constraints.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Sustainable Habits</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focus on building long-term habits rather than quick fixes. We create systems that work for your
                    life and can be maintained for years to come.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Evidence-Based Methods</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All training and nutrition recommendations are backed by scientific research and proven
                    methodologies, not fitness fads or trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Holistic Wellness</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    True transformation involves more than just physical changes. We address mindset, stress management,
                    and overall life balance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Continuous Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your journey doesn't end after a workout. I provide ongoing guidance, motivation, and adjustments to
                    keep you progressing toward your goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Injury Prevention</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Safety comes first. Every program includes proper warm-up, movement assessment, and progressive
                    overload to minimize injury risk.
                  </p>
                </div>
              </div>
            </div>
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
                    Ready to Start Your <span className="text-accent">Transformation?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Let's work together to create a personalized plan that fits your lifestyle and helps you achieve the
                    results you've always wanted.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Strategy Session
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
