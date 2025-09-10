"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SuccessStories() {
  // Changed to track multiple active stories independently
  const [activeStories, setActiveStories] = useState<Record<number, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stories = [
    {
      id: 1,
      name: "Fat Loss Transformation",
      achievement: "Lost 25kg in 4 months",
      beforeImage: "/transformations/before-body1.png",
      afterImage: "/transformations/after-body1.png",
      stats: "25kg Lost • 12% Body Fat Reduced"
    },
    {
      id: 2,
      name: "Muscle Building Journey", 
      achievement: "Gained 15kg muscle mass",
      beforeImage: "/transformations/before-body2.png",
      afterImage: "/transformations/after-body2.png", 
      stats: "15kg Muscle Gained • 65kg to 80kg"
    },
    {
      id: 3,
      name: "Strength & Conditioning",
      achievement: "Doubled lifting capacity",
      beforeImage: "/transformations/before-body3.png",
      afterImage: "/transformations/after-body3.png",
      stats: "100% Strength Increase • 6 Months"
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

  const toggleStory = (storyId : number) => {
    setActiveStories(prev => ({
      ...prev,
      [storyId]: !prev[(storyId)]
    }))
  }

  return (
    <>
    <section 
      ref={sectionRef}
      className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16 transition-all duration-1000 delay-200 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-3 sm:mb-4 md:mb-3 tracking-tight text-foreground">
            Success <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Real transformations from real people. See before/after photos and client testimonials.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => {
            const isActive = activeStories[story.id] || false
            const isCardVisible = visibleCards[story.id] || false
            
            return (
              <div
                key={story.id}
                ref={el => { cardRefs.current[index] = el; }}
                data-card-id={story.id}
                className={`transition-all duration-700 transform ${
                  isCardVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <Card 
                  className={`overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200 cursor-pointer group ${
                    isCardVisible ? 'animate-in slide-in-from-bottom-4' : ''
                  }`}
                  onClick={() => toggleStory(story.id)}
                >
                  <CardContent className="p-0">
                    {/* Image Container - Made smaller */}
                    <div className="relative h-[480px] ">
                      {/* Before Image (Default) */}
                      <img 
                        src={story.beforeImage}
                        alt={`${story.name} before`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-110 ${
                          isActive ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                        }`}
                      />

                      {/* After Image (Revealed on Click) */}
                      <img 
                        src={story.afterImage}
                        alt={`${story.name} after`}
                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 group-hover:scale-110 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                      />

                      {/* Before/After Labels */}
                      <div className="absolute top-3 left-3">
                        <span className={`bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full transition-all duration-500 transform ${
                          isActive ? 'opacity-0 -translate-x-2 scale-90' : 'opacity-100 translate-x-0 scale-100'
                        }`}>
                          Before
                        </span>
                        <span className={`absolute top-0 left-0 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full transition-all duration-500 transform ${
                          isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-90'
                        }`}>
                          After
                        </span>
                      </div>

                      {/* Click indicator */}
                      <div className="absolute top-3 right-3">
                        <div className="border border-white/30 bg-black/20 backdrop-blur-sm text-white font-bold text-xs px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                          {isActive ? 'Click to see Before' : 'Click to see After'}
                        </div>
                      </div>

                      {/* Shimmer effect overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                        isCardVisible ? 'translate-x-full' : '-translate-x-full'
                      }`} 
                      style={{ 
                        animationDelay: `${index * 200 + 500}ms`,
                        animation: isCardVisible ? 'shimmer 1.5s ease-out forwards' : 'none'
                      }} />
                    </div>

                    {/* Content - Made more compact */}
                    <div className={`p-4 transition-all duration-500 group-hover:bg-gray-50 ${
                      isCardVisible ? 'animate-in slide-in-from-bottom-2' : ''
                    }`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors duration-300">
                        {story.name}
                      </h3>
                      <p className="text-gray-600 mb-2 text-sm">
                        {story.achievement}
                      </p>
                      <div className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                        {story.stats}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            className="bg-accent hover:bg-accent/90 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 group hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span>See More Transformations</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
    
    <style jsx>{`
      @keyframes shimmer {
        0% {
          transform: translateX(-100%) skewX(-12deg);
        }
        100% {
          transform: translateX(200%) skewX(-12deg);
        }
      }
      
      .animate-in {
        animation-fill-mode: both;
      }
      
      .slide-in-from-bottom-4 {
        animation: slideInFromBottom4 0.6s ease-out forwards;
      }
      
      .slide-in-from-bottom-2 {
        animation: slideInFromBottom2 0.4s ease-out forwards;
      }
      
      @keyframes slideInFromBottom4 {
        from {
          opacity: 0;
          transform: translateY(16px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInFromBottom2 {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
    </>
    
  )
}