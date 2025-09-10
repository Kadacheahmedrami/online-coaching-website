"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import StrategySession from "@/components/homepage/StrategySession"

export default function ElegantSuccessStories() {
  const [activeStories, setActiveStories] = useState<{[key: number]: boolean}>({})
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<{[key: number]: boolean}>({})
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const stories = [
    {
      id: 1,
      name: "Fat Loss Transformation",
      achievement: "Lost 25kg in 4 months",
      beforeImage: "/transformations/before-body1.png",
      afterImage: "/transformations/after-body1.png",
      stats: "25kg Lost • 12% Body Fat Reduced",
      testimonial: "The program completely changed my relationship with food and exercise. I feel stronger and more confident than ever before."
    },
    {
      id: 2,
      name: "Muscle Building Journey", 
      achievement: "Gained 15kg muscle mass",
      beforeImage: "/transformations/before-body2.png",
      afterImage: "/transformations/after-body2.png", 
      stats: "15kg Muscle Gained • 65kg to 80kg",
      testimonial: "From skinny to strong - this transformation taught me that consistency and proper guidance can achieve anything."
    },
    {
      id: 3,
      name: "Strength & Conditioning",
      achievement: "Doubled lifting capacity",
      beforeImage: "/transformations/before-body3.png",
      afterImage: "/transformations/after-body3.png",
      stats: "100% Strength Increase • 6 Months",
      testimonial: "Not only did I get stronger physically, but mentally too. This program gave me discipline that extends to all areas of my life."
    },
    {
      id: 4,
      name: "Complete Body Recomposition",
      achievement: "Lost 18kg fat, gained 8kg muscle",
      beforeImage: "/transformations/before-body4.png",
      afterImage: "/transformations/after-body4.png",
      stats: "18kg Fat Lost • 8kg Muscle Gained • 8 Months",
      testimonial: "Amazing how my body completely transformed while eating more than I ever did before. Science-based approach really works."
    },
    {
      id: 5,
      name: "Athletic Performance",
      achievement: "Increased performance by 200%",
      beforeImage: "/transformations/before-body5.png",
      afterImage: "/transformations/after-body5.png",
      stats: "200% Performance Increase • Marathon Ready",
      testimonial: "From couch to marathon in 10 months. The structured approach made what seemed impossible become achievable."
    },
    {
      id: 6,
      name: "Senior Fitness Revival",
      achievement: "Regained strength at age 55",
      beforeImage: "/transformations/before-body6.png",
      afterImage: "/transformations/after-body6.png",
      stats: "Age 55 • 20kg Lost • Strength Doubled",
      testimonial: "Proof that age is just a number. I'm in better shape now than I was 20 years ago."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => ({
              ...prev,
              [cardId]: true
            }));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-20px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, []);

  const toggleStory = (storyId: number) => {
    setActiveStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };

  const navigateToTransformation = (transformationId: number) => {
    // Navigate to the transformation detail page
    window.location.href = `/success-stories/${transformationId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Success
            <span className="text-accent"> Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people. See before/after photos and discover what's possible.
          </p>
        </div>
      </section>

      {/* Transformations in Rows */}
      <section 
        ref={sectionRef}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-16">
            {stories.map((story, index) => {
              const isActive = activeStories[story.id] || false;
              const isCardVisible = visibleCards[story.id] || false;
              
              return (
                <div
                  key={story.id}
                  ref={el => { cardRefs.current[index] = el; }}
                  data-card-id={story.id}
                  id={`transformation-${story.id}`}
                  className={`transition-all duration-700 transform ${
                    isCardVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Row Layout - Alternating sides */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <div 
                          className="relative h-96 cursor-pointer group"
                          onClick={() => toggleStory(story.id)}
                        >
                          {/* Before Image */}
                          <img 
                            src={story.beforeImage}
                            alt={`${story.name} before`}
                            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                              isActive ? 'opacity-0' : 'opacity-100'
                            }`}
                          />

                          {/* After Image */}
                          <img 
                            src={story.afterImage}
                            alt={`${story.name} after`}
                            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                          />

                          {/* Before/After Labels */}
                          <div className="absolute top-4 left-4">
                            <span className={`bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                              isActive ? 'opacity-0 -translate-x-2' : 'opacity-100'
                            }`}>
                              Before
                            </span>
                            <span className={`absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                              isActive ? 'opacity-100' : 'opacity-0 translate-x-2'
                            }`}>
                              After
                            </span>
                          </div>

                          {/* Click Indicator */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                              {isActive ? 'Show Before' : 'Show After'}
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                          {story.name}
                        </h3>
                        <p className="text-xl text-slate-600 mb-4">
                          {story.achievement}
                        </p>
                        <div className="text-sm text-slate-500 font-medium mb-6 bg-slate-100 px-4 py-2 rounded-lg inline-block">
                          {story.stats}
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <blockquote className="text-lg text-slate-700 italic border-l-4 border-slate-300 pl-6 py-4 bg-slate-50 rounded-r-lg">
                        "{story.testimonial}"
                      </blockquote>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Reveal Button */}
                        <Button 
                          onClick={() => toggleStory(story.id)}
                          size="lg"
                          className={`transition-all duration-300 px-8 py-3 rounded-full ${
                            isActive 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-slate-900 hover:bg-slate-800'
                          }`}
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          {isActive ? 'Show Before Photo' : 'Show After Photo'}
                        </Button>
                        
                        {/* See More Button */}
                        <Button 
                          onClick={() => navigateToTransformation(story.id)}
                        
                          size="lg"
                          className="px-8 py-3 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-300"
                        >
                          See More Details
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Results</h3>
            <p className="text-slate-300">Real transformations, real people, real results</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-300">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-slate-300">Goal Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <StrategySession></StrategySession>
    </div>
  )
}