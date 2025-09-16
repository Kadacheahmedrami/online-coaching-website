"use client"
import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  Loader2,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";

// Type definitions
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
}

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState(false);

  // Default fallback image
  const defaultImage = "/hamza-bio.webp";

  // Fetch blog post from API
  useEffect(() => {
    const fetchPost = async () => {
      if (!params.id) return;
      
      try {
        setLoading(true);
        const response = await fetch(`/api/blog/${params.id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog post not found');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogPost = await response.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog post. Please try again later.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  // Format date function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Get image source with proper fallback
  const getImageSrc = () => {
    
    if (imageError) return defaultImage;
    if (post?.image) {
      // If it's a relative path, prefix with /
      if (!post.image.startsWith('http') && !post.image.startsWith('/')) {
        return `/${post.image}`;
      }
      return post.image;
    }
    return defaultImage;
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex justify-center items-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-red-600 mx-auto mb-4" />
        <p className="text-gray-600">Loading article...</p>
      </div>
    </div>
  );

  // Error component
  const ErrorMessage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex justify-center items-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Article Not Found</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <div className="space-y-3">
          <button
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
          <button
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => window.location.href = '/blog'}
          >
            Back to Blog
          </button>
        </div>
      </div>
    </div>
  );

  // Handle sharing
  const handleShare = async () => {
    if (post && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to clipboard if share fails
        handleCopyToClipboard();
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here instead of alert
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error || !post) return <ErrorMessage />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm  top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center px-3 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImageSrc()}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
            loading="eager"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center px-4 py-2 bg-red-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
            <Tag className="w-3 h-3 mr-2" />
            {post.category}
          </span>
        </div>

        {/* Title Overlay for smaller screens */}
        <div className="absolute bottom-6 left-6 right-6 md:hidden">
          <h1 className="text-2xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            {/* Article Header */}
            <header className="mb-8 md:mb-12">
              <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-sm border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-600" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red-600" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-red-600" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed">
                        Welcome to this comprehensive blog post! This is where your main content would be displayed. 
                        The content is typically fetched from your database and can be rendered as HTML or Markdown 
                        for rich formatting and styling.
                      </p>
                      
                      <p>
                        This placeholder demonstrates how your blog post content would appear with proper typography, 
                        spacing, and responsive design. You can customize this section to match your content management 
                        system and styling preferences.
                      </p>

                      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                        <p className="text-red-800 font-medium">
                          Pro Tip: Replace this placeholder content with your actual blog post data from your API endpoint.
                        </p>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6 border-b border-gray-200 pb-3">
                        Key Takeaways
                      </h2>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                            <span>Professional blog layout with responsive design</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                            <span>Proper image handling with fallbacks and error states</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                            <span>SEO-friendly structure and meta information display</span>
                          </li>
                        </ul>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                        Conclusion
                      </h2>
                      
                      <p className="text-lg leading-relaxed">
                        This blog detail page provides a solid foundation for displaying your content with style and 
                        functionality. The component includes proper error handling, loading states, and social sharing 
                        capabilities to enhance user experience.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

           
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <button
            onClick={() => window.location.href = '/blog'}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Articles
          </button>
        </div>
      </main>
    </div>
  );
}