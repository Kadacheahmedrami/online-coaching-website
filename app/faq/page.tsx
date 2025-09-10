"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  MessageCircle,
  Clock,
  Target,
  Heart,
  Dumbbell,
  Award,
  Users,
  Zap,
  CheckCircle,
  Search,
} from "lucide-react"
import { useState } from "react"
import StrategySession from "@/components/homepage/StrategySession"
export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Getting Started", "Training", "Nutrition", "Pricing", "Support"]

  const faqs = [
    {
      id: 1,
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing noticeable changes within 2-4 weeks of consistent training and proper nutrition. Significant transformations typically occur within 8-12 weeks. However, results vary based on your starting point, goals, consistency, and individual factors like genetics and lifestyle.",
      category: "Getting Started",
      popular: true,
    },
    {
      id: 2,
      question: "Do I need prior gym experience to start?",
      answer:
        "Not at all! We work with clients of all fitness levels, from complete beginners to advanced athletes. Every program is customized to your current fitness level and goals. If you're new to exercise, we'll start with the basics and gradually progress as you build strength and confidence.",
      category: "Getting Started",
      popular: true,
    },
    {
      id: 3,
      question: "What's included in the training programs?",
      answer:
        "Our comprehensive programs include personalized workout plans, detailed nutrition guidance, progress tracking tools, form coaching videos, ongoing support through our app, weekly check-ins, and program adjustments based on your progress. You'll also get access to our exclusive member community.",
      category: "Training",
      popular: true,
    },
    {
      id: 4,
      question: "Can I train if I have injuries or physical limitations?",
      answer:
        "Yes! We specialize in working around injuries and physical limitations. All programs are adapted to ensure safe, effective training that supports your recovery and goals. We'll work with your healthcare providers when necessary and modify exercises to accommodate your specific needs.",
      category: "Training",
      popular: false,
    },
    {
      id: 5,
      question: "How often should I work out each week?",
      answer:
        "For most people, 3-4 workout sessions per week is optimal for building strength and seeing results while allowing adequate recovery. Beginners might start with 2-3 sessions, while more advanced individuals might train 4-5 times per week. We'll determine the right frequency based on your goals and schedule.",
      category: "Training",
      popular: false,
    },
    {
      id: 6,
      question: "Do I need to follow a strict diet?",
      answer:
        "No strict diets required! We focus on sustainable nutrition habits that fit your lifestyle. You'll learn how to make healthier choices while still enjoying foods you love. We provide flexible meal planning guidance and teach you how to balance nutrition with social events and busy schedules.",
      category: "Nutrition",
      popular: true,
    },
    {
      id: 7,
      question: "What if I can't stick to the meal plan?",
      answer:
        "Life happens, and we understand that! Our nutrition approach is flexible and adaptable. If you struggle with the meal plan, we'll work together to find alternatives that fit your preferences, schedule, and lifestyle. The goal is progress, not perfection.",
      category: "Nutrition",
      popular: false,
    },
    {
      id: 8,
      question: "How much do your programs cost?",
      answer:
        "Program pricing varies based on the level of support and duration you choose. We offer different packages to fit various budgets and needs. The best way to get accurate pricing is to book a free strategy session where we can discuss your goals and recommend the most suitable program for you.",
      category: "Pricing",
      popular: false,
    },
    {
      id: 9,
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options to make our programs accessible. We have monthly payment plans available for most programs. During your strategy session, we'll discuss payment options that work best for your budget.",
      category: "Pricing",
      popular: false,
    },
    {
      id: 10,
      question: "What if I'm not satisfied with my results?",
      answer:
        "We're committed to your success and stand behind our programs. If you follow the program as designed and don't see results within the specified timeframe, we'll work with you to adjust the approach or provide additional support at no extra cost. Your success is our priority.",
      category: "Support",
      popular: false,
    },
    {
      id: 11,
      question: "How do I track my progress?",
      answer:
        "We use multiple methods to track progress including body measurements, progress photos, strength improvements, energy levels, and how your clothes fit. We provide tracking sheets and recommend apps to make monitoring easy. Regular check-ins help us adjust your program based on your progress.",
      category: "Training",
      popular: false,
    },
    {
      id: 12,
      question: "Can I work out from home?",
      answer:
        "We offer both gym-based and home workout options. Home programs can be designed with minimal equipment or bodyweight exercises. We'll assess your available space and equipment to create an effective program that works for your situation.",
      category: "Training",
      popular: false,
    },
    {
      id: 13,
      question: "How quickly can I start after signing up?",
      answer:
        "You can typically start within 24-48 hours of signing up. After your enrollment, we'll schedule an onboarding call to set up your program, provide access to our app and resources, and answer any initial questions. Your custom program will be ready within 1-2 business days.",
      category: "Getting Started",
      popular: false,
    },
    {
      id: 14,
      question: "What makes your approach different from other trainers?",
      answer:
        "Our approach combines personalized programming, evidence-based methods, sustainable habit formation, and ongoing support. We focus on long-term lifestyle changes rather than quick fixes. Plus, you get direct access to me and our team, not just a generic program.",
      category: "Getting Started",
      popular: false,
    },
    {
      id: 15,
      question: "Do you work with people over 50?",
      answer:
        "Yes! We have extensive experience working with clients over 50. Our programs are adapted for age-appropriate training that focuses on maintaining mobility, building strength safely, and improving overall health. We understand the unique challenges and goals of mature adults.",
      category: "Training",
      popular: false,
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularFAQs = faqs.filter((faq) => faq.popular)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Getting Started":
        return Target
      case "Training":
        return Dumbbell
      case "Nutrition":
        return Heart
      case "Pricing":
        return Award
      case "Support":
        return Users
      default:
        return HelpCircle
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              <HelpCircle className="w-3 h-3 mr-1.5" />
              Get Your Questions Answered
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight text-foreground">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our training programs, nutrition guidance, and fitness process.
              Can't find what you're looking for? We're here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="cursor-pointer !bg-black !text-white hover:!bg-accent">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
          
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category)
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-background text-foreground border-border hover:border-accent"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Most Popular Questions</h2>
              <p className="text-muted-foreground">The questions we get asked most often</p>
            </div>

            <div className="space-y-4">
              {popularFAQs.map((faq) => (
                <Card key={faq.id} className="border border-border bg-card">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <HelpCircle className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-card-foreground mb-1">{faq.question}</h3>
                            <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              Popular
                            </span>
                          </div>
                        </div>
                        {openFAQ === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="pl-12">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Questions */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {selectedCategory === "All" ? "All Questions" : `${selectedCategory} Questions`}
            </h2>
            <p className="text-muted-foreground">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border border-border bg-card">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">{faq.question}</h3>
                          <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      {openFAQ === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or selecting a different category.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <StrategySession />
      
    </div>
  )
}
