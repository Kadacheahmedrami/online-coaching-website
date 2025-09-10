"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Target, TrendingUp, Clock, Star, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import StrategySession from "@/components/homepage/StrategySession"

interface TransformationData {
  id: number;
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

  // Mock data - In a real app, this would come from an API
  const transformationsData: { [key: string]: TransformationData } = {
    "1": {
      id: 1,
      name: "Sarah Johnson",
      achievement: "Lost 25kg in 4 months",
      beforeImage: "/transformations/before-body1.png",
      afterImage: "/transformations/after-body1.png",
      stats: "25kg Lost • 12% Body Fat Reduced",
      testimonial: "The program completely changed my relationship with food and exercise. I feel stronger and more confident than ever before.",
      age: 32,
      height: "5'6\" (168cm)",
      startWeight: "85kg",
      endWeight: "60kg",
      duration: "4 months",
      program: "Fat Loss Transformation",
      goals: ["Lose weight", "Improve health", "Build confidence", "Develop healthy habits"],
      timeline: [
        { week: 0, weight: "85kg", bodyFat: "32%", note: "Starting point - motivated but overwhelmed" },
        { week: 4, weight: "80kg", bodyFat: "29%", note: "First month - learning new habits" },
        { week: 8, weight: "74kg", bodyFat: "25%", note: "Halfway point - seeing real changes" },
        { week: 12, weight: "67kg", bodyFat: "22%", note: "Three months - feeling amazing" },
        { week: 16, weight: "60kg", bodyFat: "20%", note: "Goal achieved - new lifestyle established" }
      ],
      beforeStats: {
        weight: "85kg",
        bodyFat: "32%",
        muscle: "38kg",
        waist: "89cm"
      },
      afterStats: {
        weight: "60kg",
        bodyFat: "20%",
        muscle: "40kg",
        waist: "68cm"
      },
      additionalImages: [
        "/transformations/before-body1.png",
        "/transformations/after-body1.png",
        "/transformations/progress-body1-1.png",
        "/transformations/progress-body1-2.png"
      ],
      detailedTestimonial: "When I started this journey, I was at my heaviest weight and lowest confidence. I had tried countless diets and exercise programs before, but nothing stuck. This program was different because it wasn't just about the physical transformation - it addressed my mindset, habits, and relationship with food. The coaches didn't just give me a meal plan and workout routine; they taught me how to think about nutrition and exercise in a sustainable way. The hardest part was the first few weeks when I had to break old habits, but the support system made all the difference. Now, 4 months later, I'm not just 25kg lighter - I'm stronger, more energetic, and most importantly, I have the tools to maintain this lifestyle forever.",
      challenges: [
        "Emotional eating during stressful periods at work",
        "Finding time for workouts with a busy schedule",
        "Learning to meal prep and plan ahead",
        "Overcoming plateau at week 10"
      ],
      keyFactors: [
        "Consistent daily nutrition tracking",
        "Progressive strength training 4x per week",
        "Weekly check-ins with coach",
        "Building a support network",
        "Focus on sleep and stress management"
      ],
      measurements: {
        chest: { before: "102cm", after: "88cm" },
        waist: { before: "89cm", after: "68cm" },
        hips: { before: "108cm", after: "90cm" },
        arms: { before: "32cm", after: "28cm" }
      }
    },
    "2": {
      id: 2,
      name: "Marcus Chen",
      achievement: "Gained 15kg muscle mass",
      beforeImage: "/transformations/before-body2.png",
      afterImage: "/transformations/after-body2.png",
      stats: "15kg Muscle Gained • 65kg to 80kg",
      testimonial: "From skinny to strong - this transformation taught me that consistency and proper guidance can achieve anything.",
      age: 24,
      height: "5'10\" (178cm)",
      startWeight: "65kg",
      endWeight: "80kg",
      duration: "8 months",
      program: "Muscle Building Journey",
      goals: ["Build muscle mass", "Increase strength", "Improve physique", "Boost confidence"],
      timeline: [
        { week: 0, weight: "65kg", bodyFat: "12%", note: "Skinny guy ready to transform" },
        { week: 8, weight: "70kg", bodyFat: "13%", note: "First 2 months - learning proper form" },
        { week: 16, weight: "74kg", bodyFat: "14%", note: "4 months - strength gains accelerating" },
        { week: 24, weight: "77kg", bodyFat: "15%", note: "6 months - visible muscle growth" },
        { week: 32, weight: "80kg", bodyFat: "15%", note: "Goal achieved - strong and confident" }
      ],
      beforeStats: {
        weight: "65kg",
        bodyFat: "12%",
        muscle: "52kg",
        waist: "76cm"
      },
      afterStats: {
        weight: "80kg",
        bodyFat: "15%",
        muscle: "67kg",
        waist: "81cm"
      },
      additionalImages: [
        "/transformations/before-body2.png",
        "/transformations/after-body2.png",
        "/transformations/progress-body2-1.png",
        "/transformations/progress-body2-2.png"
      ],
      detailedTestimonial: "I was the classic 'hardgainer' - I could eat anything and everything without gaining weight. While some people envied this, I was actually quite insecure about my skinny frame. I tried working out on my own for years but made very little progress because I didn't understand the importance of progressive overload, proper nutrition, and recovery. This program taught me that building muscle isn't just about lifting heavy weights - it's about consistency, eating enough of the right foods, and following a structured plan. The transformation wasn't just physical; I gained confidence that carries into every aspect of my life.",
      challenges: [
        "Eating enough calories to support muscle growth",
        "Learning proper lifting technique and form",
        "Staying consistent during busy work periods",
        "Overcoming shoulder injury at month 5"
      ],
      keyFactors: [
        "Progressive overload in strength training",
        "Eating in a caloric surplus with adequate protein",
        "Prioritizing compound movements",
        "Consistent sleep schedule (8+ hours)",
        "Regular form checks and technique refinement"
      ],
      measurements: {
        chest: { before: "91cm", after: "107cm" },
        waist: { before: "76cm", after: "81cm" },
        hips: { before: "89cm", after: "96cm" },
        arms: { before: "28cm", after: "36cm" }
      }
    },
    // Add more transformations here...
  }

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const id = Array.isArray(params.id) ? params.id[0] : params.id
      if (id && transformationsData[id]) {
        setTransformation(transformationsData[id])
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading transformation details...</p>
        </div>
      </div>
    )
  }

  if (!transformation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transformation Not Found</h1>
          <p className="text-slate-600 mb-8">The transformation you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/success-stories')} className="bg-slate-900 hover:bg-slate-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Success Stories
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button 
            onClick={() => router.push('/success-stories')} 
            variant="outline" 
            className="mb-6 border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Button>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {transformation.name}'s Transformation
              </h1>
              <p className="text-xl text-slate-600 mb-4">{transformation.achievement}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {transformation.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {transformation.program}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Age {transformation.age}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-4">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Start Weight:</span>
                  <span className="font-medium">{transformation.startWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">End Weight:</span>
                  <span className="font-medium">{transformation.endWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Height:</span>
                  <span className="font-medium">{transformation.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Duration:</span>
                  <span className="font-medium">{transformation.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Transformation Gallery</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Main Image Display */}
            <div className="relative h-96 lg:h-[500px] mb-6 bg-slate-100 rounded-xl overflow-hidden">
              <img 
                src={transformation.additionalImages[activeImageIndex]}
                alt={`Transformation progress ${activeImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Image Labels */}
              <div className="absolute top-4 left-4">
                <span className="bg-slate-900 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {activeImageIndex === 0 ? 'Before' : activeImageIndex === 1 ? 'After' : `Progress ${activeImageIndex - 1}`}
                </span>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-4 justify-center overflow-x-auto pb-2">
              {transformation.additionalImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'border-slate-900 shadow-lg' 
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Before & After Comparison</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before Stats */}
            <div className="bg-white rounded-xl shadow-lg p-8">
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
            <div className="bg-white rounded-xl shadow-lg p-8">
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Full Story</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <blockquote className="text-lg leading-relaxed text-slate-700 italic">
              "{transformation.detailedTestimonial}"
            </blockquote>
            <div className="mt-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-slate-600">- {transformation.name}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-500" />
                Challenges Overcome
              </h3>
              <ul className="space-y-3">
                {transformation.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Factors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Success Factors
              </h3>
              <ul className="space-y-3">
                {transformation.keyFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{factor}</span>
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