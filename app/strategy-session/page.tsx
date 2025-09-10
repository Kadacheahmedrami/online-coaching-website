"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Award,
  Heart,
  TrendingUp,
  MessageCircle,
  Video,
  ArrowRight,
  Star,
} from "lucide-react"
import { useState } from "react"

export default function StrategySessionPage() {
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: "",
    experience: "",
    availability: "",
  })

  const sessionBenefits = [
    {
      title: "Personalized Fitness Assessment",
      description: "Complete evaluation of your current fitness level, strengths, and areas for improvement",
      icon: Target,
    },
    {
      title: "Custom Goal Setting",
      description: "Define clear, achievable fitness goals with realistic timelines and milestones",
      icon: TrendingUp,
    },
    {
      title: "Workout Plan Preview",
      description: "Get a sample of what your personalized training program would look like",
      icon: Award,
    },
    {
      title: "Nutrition Guidance",
      description: "Basic nutrition principles and meal planning strategies for your goals",
      icon: Heart,
    },
    {
      title: "Obstacle Identification",
      description: "Identify potential challenges and create strategies to overcome them",
      icon: CheckCircle,
    },
    {
      title: "Next Steps Planning",
      description: "Clear roadmap for your fitness journey with actionable next steps",
      icon: ArrowRight,
    },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The strategy session was incredibly valuable. Hamza helped me understand exactly what I needed to do to reach my goals.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Even the free consultation provided more value than I expected. It gave me clarity and motivation to start my journey.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      text: "Hamza's expertise was evident from the first conversation. The session set the foundation for my successful transformation.",
      rating: 5,
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { ...formData, selectedTime })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              <Calendar className="w-3 h-3 mr-1.5" />
              100% Free • No Obligations
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight text-foreground">
              Free <span className="text-accent">Strategy Session</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Get personalized fitness guidance in a complimentary 30-minute consultation. Discover exactly what you
              need to achieve your goals with a custom roadmap designed just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Session
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ask Questions First
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">30 Minutes</h3>
                <p className="text-sm text-muted-foreground">
                  Focused, valuable consultation designed to give you maximum insight in minimum time
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Video Call</h3>
                <p className="text-sm text-muted-foreground">
                  Convenient online meeting via Zoom, Google Meet, or your preferred platform
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Completely Free</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden costs, no obligations. Just valuable guidance to help you succeed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              What You'll <span className="text-accent">Receive</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              This isn't just a sales call. You'll walk away with actionable insights and a clear plan, regardless of
              whether you decide to work together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessionBenefits.map((benefit, index) => (
              <Card key={index} className="border border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Book Your <span className="text-accent">Free Session</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and select your preferred time. I'll send you a calendar invite with all the
              details.
            </p>
          </div>

          <Card className="border-2 border-accent/20 bg-card shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Optional"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-foreground">
                      Fitness Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="goals" className="text-sm font-medium text-foreground">
                    Primary Fitness Goals *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell me about your fitness goals, challenges, and what you hope to achieve..."
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Preferred Time Slot *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                          selectedTime === time
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-background text-foreground border-border hover:border-accent"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full !bg-black !text-white hover:!bg-gray-800"
                    disabled={!selectedTime || !formData.name || !formData.email || !formData.goals}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book My Free Strategy Session
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By booking this session, you agree to receive communication about your fitness journey. No spam,
                  unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              What Others <span className="text-accent">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Hear from people who started their transformation with a strategy session
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border bg-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium text-xs">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-card-foreground">{testimonial.name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 tracking-tight text-foreground">
              Common <span className="text-accent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  Is this really free with no strings attached?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Absolutely. This is a genuine consultation where I provide real value regardless of whether you decide
                  to work with me. My goal is to help you succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">What if I'm a complete beginner?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Perfect! I love working with beginners because we can build the right foundation from day one. The
                  session will be tailored to your current level.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">How do I prepare for the session?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Just come with an open mind and be ready to discuss your goals honestly. I'll guide you through
                  everything else during our conversation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
