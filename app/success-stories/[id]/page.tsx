"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Target, TrendingUp, Clock, Star, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import StrategySession from "@/components/homepage/StrategySession"

interface TransformationData {
  id: string;
  name: string;
  achievement: string;
  beforeImage: string;
  afterImage: string;
  stats: string;
  testimonial: string;
  age: number;
  height: string;
  startWeight: string;
  endWeight: string;
  duration: string;
  program: string;
  goals: string[];
  timeline: {
    week: number;
    weight: string;
    bodyFat: string;
    note: string;
  }[];
  beforeStats: {
    weight: string;
    bodyFat: string;
    muscle: string;
    waist: string;
  };
  afterStats: {
    weight: string;
    bodyFat: string;
    muscle: string;
    waist: string;
  };
  additionalImages: string[];
  detailedTestimonial: string;
  challenges: string[];
  keyFactors: string[];
  measurements: {
    chest: { before: string; after: string; };
    waist: { before: string; after: string; };
    hips: { before: string; after: string; };
    arms: { before: string; after: string; };
  };
}

export default function TransformationDetails() {
  const params = useParams()
  const router = useRouter()
  const [transformation, setTransformation] = useState<TransformationData | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Combine before/after images with additional images
  const getAllImages = (transformation: TransformationData) => {
    const images = [transformation.beforeImage, transformation.afterImage]
    if (transformation.additionalImages?.length > 0) {
      images.push(...transformation.additionalImages)
    }
    return images
  }

  // Get image label based on index
  const getImageLabel = (index: number, totalImages: number) => {
    if (index === 0) return 'Before'
    if (index === 1) return 'After'
    return `Progress ${index - 1}`
  }

  useEffect(() => {
    const fetchTransformation = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const id = Array.isArray(params.id) ? params.id[0] : params.id
        const response = await fetch(`/api/success-stories/${id}`)
        
        if (!response.ok) {
          throw new Error('Transformation not found')
        }
        
        const data = await response.json()
        setTransformation(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTransformation()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading transformation details...</p>
        </div>
      </div>
    )
  }

  if (error || !transformation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transformation Not Found</h1>
          <p className="text-slate-600 mb-8">{error || "The transformation you're looking for doesn't exist."}</p>
          <Button onClick={() => router.push('/success-stories')} className="bg-slate-900 hover:bg-slate-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Success Stories
          </Button>
        </div>
      </div>
    )
  }

  const allImages = getAllImages(transformation)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-6 md:py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button 
            onClick={() => router.push('/success-stories')} 
            variant="outline" 
            className="mb-4 md:mb-6 border-slate-300 text-slate-700 hover:bg-slate-100 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Button>
          
          <div className="flex flex-col space-y-6 lg:flex-row lg:items-start lg:gap-8 lg:space-y-0">
            <div className="flex-1">
              <h1 className="text-2xl w-full sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {transformation.name}'s <span className="text-accent text-3xl w-full sm:text-4xl lg:text-5xl"> Transformation</span> 
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6">{transformation.achievement}</p>
              
              {/* Mobile-friendly info grid */}
              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{transformation.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                  <Target className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{transformation.program}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg sm:col-span-2 lg:col-span-1">
                  <TrendingUp className="w-4 h-4 flex-shrink-0" />
                  <span>Age {transformation.age}</span>
                </div>
              </div>
            </div>
            
            {/* Stats card - responsive positioning */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full lg:w-auto lg:min-w-[280px]">
              <h3 className="font-semibold text-slate-900 mb-4 text-center lg:text-left">Quick Stats</h3>
              <div className="grid grid-cols-2 lg:block lg:space-y-2 gap-4 lg:gap-0 text-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <span className="text-slate-600">Start Weight:</span>
                  <span className="font-medium">{transformation.startWeight}</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <span className="text-slate-600">End Weight:</span>
                  <span className="font-medium">{transformation.endWeight}</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <span className="text-slate-600">Height:</span>
                  <span className="font-medium">{transformation.height}</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <span className="text-slate-600">Duration:</span>
                  <span className="font-medium">{transformation.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center">Transformation Gallery</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
            {/* Main Image Display */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] mb-4 md:mb-6 bg-slate-100 rounded-xl overflow-hidden">
              <img 
                src={allImages[activeImageIndex]}
                alt={`${getImageLabel(activeImageIndex, allImages.length)} transformation`}
                className="w-full h-full object-contain"
              />
              
              {/* Image Labels */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className="bg-slate-900 text-white text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                  {getImageLabel(activeImageIndex, allImages.length)}
                </span>
              </div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex(activeImageIndex === 0 ? allImages.length - 1 : activeImageIndex - 1)}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex(activeImageIndex === allImages.length - 1 ? 0 : activeImageIndex + 1)}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Navigation - Mobile Optimized */}
            <div className="flex gap-2 md:gap-4 justify-start md:justify-center overflow-x-auto pb-2 scrollbar-hide">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'border-slate-900 shadow-lg' 
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${getImageLabel(index, allImages.length)} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200"></div>
                  
                  {/* Thumbnail Label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 px-1 text-center">
                    <span className="hidden sm:inline">{getImageLabel(index, allImages.length)}</span>
                    <span className="sm:hidden">{index === 0 ? 'B' : index === 1 ? 'A' : 'P'}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-3 md:mt-4 text-sm text-slate-500">
              {activeImageIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="py-8 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12 text-center">Before & After Comparison</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Before Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">Before</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Weight</span>
                  <span className="font-bold text-lg">{transformation.beforeStats.weight}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Body Fat</span>
                  <span className="font-bold text-lg">{transformation.beforeStats.bodyFat}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Muscle Mass</span>
                  <span className="font-bold text-lg">{transformation.beforeStats.muscle}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Waist</span>
                  <span className="font-bold text-lg">{transformation.beforeStats.waist}</span>
                </div>
              </div>
            </div>

            {/* After Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-green-600 mb-6 text-center">After</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Weight</span>
                  <span className="font-bold text-lg">{transformation.afterStats.weight}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Body Fat</span>
                  <span className="font-bold text-lg">{transformation.afterStats.bodyFat}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Muscle Mass</span>
                  <span className="font-bold text-lg">{transformation.afterStats.muscle}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Waist</span>
                  <span className="font-bold text-lg">{transformation.afterStats.waist}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Story */}
      <section className="py-8 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center">The Full Story</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <blockquote className="text-base md:text-lg leading-relaxed text-slate-700 italic">
              "{transformation.detailedTestimonial}"
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <div className="flex gap-1">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
              </div>
              <span className="text-slate-600 text-sm md:text-base">- {transformation.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Challenges Overcome</span>
              </h3>
              <ul className="space-y-3">
                {transformation.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm md:text-base">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Factors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Success Factors</span>
              </h3>
              <ul className="space-y-3">
                {transformation.keyFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm md:text-base">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <StrategySession />
    </div>
  )
}