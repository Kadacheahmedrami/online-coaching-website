"use client"
import React, { useState, useEffect } from 'react';
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
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Type definitions
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string | null;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string | null;
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

interface BlogApiResponse {
  posts: BlogPost[];
  pagination: PaginationInfo;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 5
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const categories = ["All", "Workouts", "Nutrition", "Mindset", "Recovery"];

  // Default fallback image
  const defaultImage = "/hamza-bio.webp";

  // Fetch blog posts from API
  const fetchBlogPosts = async (page: number = 1, category: string = selectedCategory) => {
    try {
      setLoading(true);
      setError(null);
      
      let url = `/api/blog?page=${page}&limit=5`;
      if (category !== "All") {
        url += `&category=${category}`;
      }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      
      const data: BlogApiResponse = await response.json();
      setBlogPosts(data.posts);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and category changes
  useEffect(() => {
    fetchBlogPosts(1, selectedCategory);
  }, [selectedCategory]);

  // Handle page changes
  const goToPage = (page: number) => {
    if (page >= 1 && page <= pagination.totalPages && !loading) {
      fetchBlogPosts(page, selectedCategory);
      // Scroll to top of blog posts section
      const element = document.getElementById('blog-posts-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle image errors
  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [postId]: true
    }));
  };

  // Get image source with proper fallback
  const getImageSrc = (post: BlogPost) => {
    if (imageErrors[post.id]) return defaultImage;
    if (post.image) {
      // If it's a relative path, prefix with /
      if (!post.image.startsWith('http') && !post.image.startsWith('/')) {
        return `/${post.image}`;
      }
      return post.image;
    }
    return defaultImage;
  };

  // Format date function to convert ISO string to readable format
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'No date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter posts based on search term (client-side search)
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Workouts": return Dumbbell;
      case "Nutrition": return Heart;
      case "Mindset": return TrendingUp;
      case "Recovery": return Clock;
      default: return BookOpen;
    }
  };

  const handleReadMore = (post: BlogPost): void => {
    // Navigate using slug if available, otherwise use ID
    const identifier = post.slug || post.id;
    window.location.href = `/blog/${identifier}`;
  };

  // Pagination component
  const PaginationControls = () => {
    if (pagination.totalCount === 0) return null;
    
    return (
      <div className="flex flex-col items-center gap-6 py-8 border-t border-gray-200 mt-8">
        {/* Page Info */}
        <div className="text-sm text-gray-600">
          Showing page {pagination.currentPage} of {pagination.totalPages} 
          ({pagination.totalCount} total articles)
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => goToPage(pagination.currentPage - 1)}
            disabled={!pagination.hasPrevPage || loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

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
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  disabled={loading}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                    pageNum === pagination.currentPage
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => goToPage(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage || loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Jump (for many pages) */}
        {pagination.totalPages > 5 && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Quick jump:</span>
            <div className="flex gap-1">
              {pagination.currentPage > 3 && (
                <>
                  <button
                    onClick={() => goToPage(1)}
                    disabled={loading}
                    className="px-2 py-1 text-xs text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    First
                  </button>
                  {pagination.currentPage > 4 && <span className="px-1">...</span>}
                </>
              )}
              
              {pagination.currentPage < pagination.totalPages - 2 && (
                <>
                  {pagination.currentPage < pagination.totalPages - 3 && <span className="px-1">...</span>}
                  <button
                    onClick={() => goToPage(pagination.totalPages)}
                    disabled={loading}
                    className="px-2 py-1 text-xs text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    Last
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-red-600 mx-auto mb-4" />
        <p className="text-gray-600">Loading articles...</p>
      </div>
    </div>
  );

  // Error component
  const ErrorMessage = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Articles</h3>
      <p className="text-gray-600 mb-4 px-4">{error}</p>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
        onClick={() => fetchBlogPosts(1, selectedCategory)}
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium shadow-lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Fitness Blog
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 px-2">
              Expert Fitness <span className="text-red-600">Insights</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Transform your fitness journey with proven strategies, workout tips, and nutrition guidance.
            </p>
            
            <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Target className="mr-2 h-5 w-5" />
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 sm:py-8 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors shadow-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    disabled={loading}
                    className={`inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                      selectedCategory === category
                        ? "bg-red-600 text-white border-red-600 shadow-lg"
                        : "bg-white text-gray-700 border-gray-200 hover:border-red-600 hover:text-red-600 shadow-sm"
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="blog-posts-section" className="py-8 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            {!loading && (
              <p className="text-gray-600">
                {pagination.totalCount} article{pagination.totalCount !== 1 ? "s" : ""} found
                {searchTerm && filteredPosts.length !== blogPosts.length && (
                  <span> ({filteredPosts.length} matching search)</span>
                )}
              </p>
            )}
          </div>

          {/* Loading State */}
          {loading && <LoadingSpinner />}

          {/* Error State */}
          {error && !loading && <ErrorMessage />}

          {/* Blog Posts Grid */}
          {!loading && !error && (
            <>
              <div className="grid gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white border border-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
                    onClick={() => handleReadMore(post)}
                  >
                    {/* Mobile Layout: Vertical Stack */}
                    <div className="block lg:hidden">
                      {/* Image Section */}
                      <div className="w-full h-48 relative overflow-hidden">
                        <img 
                          src={getImageSrc(post)}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={() => handleImageError(post.id)}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6">
                        <div className="space-y-3">
                          {/* Category Badge */}
                          <span className="inline-flex items-center w-fit px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-medium">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.category}
                          </span>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-200">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-red-600" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-red-600" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3 text-red-600" />
                              <span>{post.author}</span>
                            </div>
                          </div>

                          {/* Read More Button */}
                          <div className="pt-2">
                            <button
                              className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold text-sm transition-colors duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReadMore(post);
                              }}
                            >
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout: Horizontal */}
                    <div className="hidden lg:block">
                      <div className="flex h-64 xl:h-72">
                        {/* Image Section */}
                        <div className="w-1/3 relative overflow-hidden">
                          <img 
                            src={getImageSrc(post)}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(post.id)}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content Section */}
                        <div className="w-2/3 p-6 xl:p-8 flex flex-col justify-center">
                          <div className="space-y-4">
                            {/* Category Badge */}
                            <span className="inline-flex items-center w-fit px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                              <Tag className="w-3 h-3 mr-2" />
                              {post.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl xl:text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-200">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 leading-relaxed text-sm xl:text-base">
                              {post.excerpt}
                            </p>

                            {/* Meta Info and Read More */}
                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center gap-4 xl:gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-red-600" />
                                  <span>{formatDate(post.publishedAt)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-red-600" />
                                  <span>{post.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4 text-red-600" />
                                  <span>{post.author}</span>
                                </div>
                              </div>

                              <button
                                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold text-sm xl:text-base transition-colors duration-200"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleReadMore(post);
                                }}
                              >
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              <PaginationControls />
            </>
          )}

          {/* No Results */}
          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4 px-4">
                {searchTerm ? 
                  "Try adjusting your search terms or selecting a different category." :
                  "No articles available for this category."
                }
              </p>
              <button
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}