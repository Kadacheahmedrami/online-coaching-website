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
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import StrategySession from "@/components/homepage/StrategySession"

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
  order: number;
  createdAt: string;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
}

interface FAQApiResponse {
  faqs: FAQ[];
  pagination: PaginationInfo;
}

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [popularFAQs, setPopularFAQs] = useState<FAQ[]>([])
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 10
  })
  const [loading, setLoading] = useState(true)
  const [popularLoading, setPopularLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const categories = ["All", "Getting Started", "Training", "Nutrition", "Pricing", "Support"]

  // Fetch popular FAQs (separate from paginated results)
  const fetchPopularFAQs = useCallback(async () => {
    try {
      setPopularLoading(true)
      const response = await fetch('/api/faq?popular=true&limit=5')
      
      if (!response.ok) {
        throw new Error('Failed to fetch popular FAQs')
      }
      
      const data: FAQApiResponse = await response.json()
      setPopularFAQs(data.faqs)
    } catch (err) {
      console.error('Error fetching popular FAQs:', err)
    } finally {
      setPopularLoading(false)
    }
  }, [])

  // Fetch FAQs with pagination
  const fetchFAQs = useCallback(async (page: number = 1, category: string = selectedCategory) => {
    try {
      setLoading(true)
      setError(null)
      
      let url = `/api/faq?page=${page}&limit=10`
      if (category !== "All") {
        url += `&category=${encodeURIComponent(category)}`
      }
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error('Failed to fetch FAQs')
      }
      
      const data: FAQApiResponse = await response.json()
      setFaqs(data.faqs)
      setPagination(data.pagination)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching FAQs:', err)
    } finally {
      setLoading(false)
    }
  }, [selectedCategory])

  // Initial fetch
  useEffect(() => {
    fetchPopularFAQs()
    fetchFAQs(1, selectedCategory)
  }, [fetchPopularFAQs, fetchFAQs, selectedCategory])

  // Handle page changes
  const goToPage = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages && !loading) {
      fetchFAQs(page, selectedCategory)
      // Scroll to FAQ section
      const element = document.getElementById('faq-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Filter FAQs based on search term (client-side search on current page)
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

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

  // Pagination component
  const PaginationControls = () => {
    if (pagination.totalCount === 0) return null;
    
    return (
      <div className="flex flex-col items-center gap-6 py-8 border-t border-border mt-8">
        {/* Page Info */}
        <div className="text-sm text-muted-foreground">
          Showing page {pagination.currentPage} of {pagination.totalPages} 
          ({pagination.totalCount} total questions)
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="default"
            onClick={() => goToPage(pagination.currentPage - 1)}
            disabled={!pagination.hasPrevPage || loading}
            className="flex items-center gap-2 px-4 py-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 mx-4">
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              let pageNum;
              if (pagination.totalPages <= 5) {
                pageNum = i + 1;
              } else if (pagination.currentPage <= 3) {
                pageNum = i + 1;
              } else if (pagination.currentPage >= pagination.totalPages - 2) {
                pageNum = pagination.totalPages - 4 + i;
              } else {
                pageNum = pagination.currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNum}
                  variant={pageNum === pagination.currentPage ? "default" : "outline"}
                  size="default"
                  onClick={() => goToPage(pageNum)}
                  disabled={loading}
                  className="w-10 h-10 p-0 font-medium"
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="default"
            onClick={() => goToPage(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage || loading}
            className="flex items-center gap-2 px-4 py-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Jump (for many pages) */}
        {pagination.totalPages > 5 && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Quick jump:</span>
            <div className="flex gap-1">
              {pagination.currentPage > 3 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => goToPage(1)}
                    disabled={loading}
                    className="text-xs"
                  >
                    First
                  </Button>
                  {pagination.currentPage > 4 && <span className="px-1">...</span>}
                </>
              )}
              
              {pagination.currentPage < pagination.totalPages - 2 && (
                <>
                  {pagination.currentPage < pagination.totalPages - 3 && <span className="px-1">...</span>}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => goToPage(pagination.totalPages)}
                    disabled={loading}
                    className="text-xs"
                  >
                    Last
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Loading state
  if (loading && faqs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading FAQs...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error && faqs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Error Loading FAQs</h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => fetchFAQs(1, selectedCategory)} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    )
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
                    disabled={loading}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
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
      {selectedCategory === "All" && searchTerm === "" && popularFAQs.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Most Popular Questions</h2>
              <p className="text-muted-foreground">The questions we get asked most often</p>
              {popularLoading && (
                <div className="flex items-center gap-2 mt-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Loading popular questions...</span>
                </div>
              )}
            </div>

            {!popularLoading && (
              <div className="space-y-4">
                {popularFAQs.map((faq) => (
                  <Card key={`popular-${faq.id}`} className="border border-border bg-card">
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
            )}
          </div>
        </section>
      )}

      {/* All Questions */}
      <section id="faq-section" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {selectedCategory === "All" ? "All Questions" : `${selectedCategory} Questions`}
            </h2>
            <p className="text-muted-foreground">
              {!loading && (
                <>
                  {pagination.totalCount} question{pagination.totalCount !== 1 ? "s" : ""} found
                  {searchTerm && filteredFAQs.length !== faqs.length && (
                    <span> ({filteredFAQs.length} matching search on this page)</span>
                  )}
                </>
              )}
              {loading && <span>Loading questions...</span>}
            </p>
          </div>

          {loading && faqs.length === 0 ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
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
                              <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                                  {faq.category}
                                </span>
                                {faq.popular && (
                                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                    Popular
                                  </span>
                                )}
                              </div>
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

              {/* Pagination Controls */}
              <PaginationControls />
            </>
          )}

          {filteredFAQs.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? 
                  "Try adjusting your search terms or selecting a different category." :
                  "No questions available for this category."
                }
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
                <div className="text-2xl font-bold text-card-foreground mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-card-foreground mb-2">15+</div>
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