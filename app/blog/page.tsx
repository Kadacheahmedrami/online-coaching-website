"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Calendar,
  Clock,
  Target,
  Dumbbell,
  Heart,
  TrendingUp,
  User,
  ArrowRight,
  Search,
  Tag,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Workouts", "Nutrition", "Mindset", "Recovery", "Beginner Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "5 Common Workout Mistakes That Are Sabotaging Your Progress",
      excerpt:
        "Avoid these critical errors that could be preventing you from reaching your fitness goals. Learn the proper techniques and mindset shifts needed for success.",
      category: "Workouts",
      readTime: "5 min read",
      publishDate: "2024-01-15",
      author: "Hamza",
      featured: true,
      tags: ["Form", "Technique", "Progress"],
    },
    {
      id: 2,
      title: "Meal Prep for Busy People: Simple Strategies That Actually Work",
      excerpt:
        "Discover practical meal planning strategies that fit into your hectic schedule. No complicated recipes or hours in the kitchen required.",
      category: "Nutrition",
      readTime: "7 min read",
      publishDate: "2024-01-12",
      author: "Hamza",
      featured: true,
      tags: ["Meal Prep", "Time Management", "Nutrition"],
    },
    {
      id: 3,
      title: "Building Muscle After 40: What You Need to Know",
      excerpt:
        "Age-specific strategies for maintaining and building muscle mass effectively. Learn how to adapt your training as you get older.",
      category: "Workouts",
      readTime: "6 min read",
      publishDate: "2024-01-10",
      author: "Hamza",
      featured: false,
      tags: ["Muscle Building", "Age", "Strength"],
    },
    {
      id: 4,
      title: "The Psychology of Lasting Fitness Habits",
      excerpt:
        "Why willpower isn't enough and how to create sustainable fitness habits that stick. Discover the science behind behavior change.",
      category: "Mindset",
      readTime: "8 min read",
      publishDate: "2024-01-08",
      author: "Hamza",
      featured: false,
      tags: ["Habits", "Psychology", "Motivation"],
    },
    {
      id: 5,
      title: "Recovery 101: Why Rest Days Are Crucial for Your Progress",
      excerpt:
        "Learn why recovery is just as important as your workouts and how to optimize your rest days for maximum results.",
      category: "Recovery",
      readTime: "5 min read",
      publishDate: "2024-01-05",
      author: "Hamza",
      featured: false,
      tags: ["Recovery", "Rest", "Performance"],
    },
    {
      id: 6,
      title: "Complete Beginner's Guide to Starting Your Fitness Journey",
      excerpt:
        "Everything you need to know to start exercising safely and effectively. From choosing exercises to setting realistic goals.",
      category: "Beginner Tips",
      readTime: "10 min read",
      publishDate: "2024-01-03",
      author: "Hamza",
      featured: false,
      tags: ["Beginner", "Getting Started", "Basics"],
    },
    {
      id: 7,
      title: "Hydration and Performance: How Much Water Do You Really Need?",
      excerpt:
        "The truth about hydration for fitness performance. Learn optimal hydration strategies for before, during, and after workouts.",
      category: "Nutrition",
      readTime: "4 min read",
      publishDate: "2024-01-01",
      author: "Hamza",
      featured: false,
      tags: ["Hydration", "Performance", "Health"],
    },
    {
      id: 8,
      title: "Overcoming Fitness Plateaus: When Progress Stalls",
      excerpt:
        "Hit a plateau? Here's how to break through when your progress stalls. Advanced strategies to reignite your results.",
      category: "Workouts",
      readTime: "6 min read",
      publishDate: "2023-12-28",
      author: "Hamza",
      featured: false,
      tags: ["Plateaus", "Progress", "Advanced"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Workouts":
        return Dumbbell
      case "Nutrition":
        return Heart
      case "Mindset":
        return TrendingUp
      case "Recovery":
        return Clock
      case "Beginner Tips":
        return Target
      default:
        return BookOpen
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Expert Fitness Knowledge
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight text-foreground">
              Fitness <span className="text-accent">Blog</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Expert fitness tips, workout advice, and nutrition guidance to help you on your transformation journey.
              Learn from proven strategies and scientific insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="!bg-black !text-white hover:!bg-gray-800">
                <Calendar className="mr-2 h-5 w-5" />
                Get Personal Coaching
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <Target className="mr-2 h-5 w-5" />
                Free Resources
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
                  placeholder="Search articles..."
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

      {/* Featured Posts */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Featured Articles</h2>
              <p className="text-muted-foreground">Our most popular and impactful content</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto">
                          <BookOpen className="h-8 w-8 text-accent" />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">Featured Article</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-card-foreground leading-tight">{post.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                              <Tag className="w-3 h-3 mr-1" />
                              {post.category}
                            </span>
                          </div>
                          <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80">
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === "All" && searchTerm === "" ? regularPosts : filteredPosts).map((post) => (
              <Card key={post.id} className="border border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="inline-block px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-between p-0 h-auto text-accent hover:text-accent/80"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
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

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-2 border-accent/20 bg-card shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-accent" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Never Miss <span className="text-accent">New Content</span>
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Get the latest fitness tips, workout routines, and nutrition advice delivered straight to your inbox
                    every week.
                  </p>
                </div>

                <div className="max-w-md mx-auto space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button size="lg" className="w-full !bg-black !text-white hover:!bg-gray-800">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Subscribe to Blog
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Join 5,000+ fitness enthusiasts • Weekly tips • No spam • Unsubscribe anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
