"use client"
import React, { useState } from 'react';
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
} from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Workouts", "Nutrition", "Mindset", "Recovery"];

  const blogPosts = [
    {
      id: 1,
      title: "5 Common Workout Mistakes That Are Sabotaging Your Progress",
      excerpt: "Avoid these critical errors that could be preventing you from reaching your fitness goals. Learn the proper techniques and mindset shifts needed to maximize your training results.",
      category: "Workouts",
      readTime: "5 min read",
      publishDate: "2024-01-15",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Meal Prep for Busy People: Simple Strategies That Actually Work",
      excerpt: "Discover practical meal planning strategies that fit into your hectic schedule. Master the art of efficient cooking and smart grocery shopping for sustained energy.",
      category: "Nutrition",
      readTime: "7 min read",
      publishDate: "2024-01-12",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Muscle After 40: What You Need to Know",
      excerpt: "Age-specific strategies for maintaining and building muscle mass effectively. Understand how your body changes and adapt your training accordingly for optimal results.",
      category: "Workouts",
      readTime: "6 min read",
      publishDate: "2024-01-10",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1583500178690-f7ff6d5d0e34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Psychology of Lasting Fitness Habits",
      excerpt: "Why willpower isn't enough and how to create sustainable fitness habits that stick. Discover the mental strategies that separate successful people from those who quit.",
      category: "Mindset",
      readTime: "8 min read",
      publishDate: "2024-01-08",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Recovery 101: Why Rest Days Are Crucial for Your Progress",
      excerpt: "Learn why recovery is just as important as your workouts and how to optimize your rest days. Master sleep, nutrition, and active recovery techniques.",
      category: "Recovery",
      readTime: "5 min read",
      publishDate: "2024-01-05",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Hydration and Performance: How Much Water Do You Really Need?",
      excerpt: "The truth about hydration for fitness performance and optimal strategies. Cut through the myths and learn evidence-based hydration guidelines for athletes.",
      category: "Nutrition",
      readTime: "4 min read",
      publishDate: "2024-01-01",
      author: "Hamza",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  // Format date function to convert YYYY-MM-DD to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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

  const handleReadMore = (postId: number) => {
    window.location.href = `/blog/${postId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4 mr-2" />
              Fitness Blog
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Expert Fitness <span className="text-red-600">Insights</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your fitness journey with proven strategies, workout tips, and nutrition guidance.
            </p>
            
            <button className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-red-600 cursor-pointer transition-colors">
              <Target className="mr-2 h-5 w-5" />
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      selectedCategory === category
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-red-600"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                onClick={() => handleReadMore(post.id)}
              >
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} h-64 sm:h-72`}>
                  {/* Image Section */}
                  <div className="w-1/3 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      {/* Category Badge */}
                      <span className="inline-flex items-center w-fit px-3 py-1.5 bg-gray-100 text-red-600 rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {post.excerpt}
                      </p>

                      {/* Meta Info and Read More */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <button
                          className="flex items-center text-red-600 hover:text-red-800 font-semibold text-sm sm:text-base transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(post.id);
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
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