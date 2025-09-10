import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function StrategySession() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const benefits = [
    { text: "Personalized fitness assessment", delay: "delay-300" },
    { text: "Custom workout plan creation", delay: "delay-400" },
    { text: "Nutrition guidance and tips", delay: "delay-500" },
    { text: "Goal setting and timeline planning", delay: "delay-600" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className={`text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-3 text-balance tracking-tight">
            Book Your Free <span className="text-accent">Strategy Session</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-6 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Schedule a personalized consultation to discuss your goals and create a custom fitness plan.
          </p>
        </div>

        <Card className={`border-2 border-border bg-card shadow-xl transition-all duration-700 ease-out delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold text-card-foreground transition-all duration-700 ease-out delay-400 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}>
                  What You'll Get:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 transition-all duration-700 ease-out ${benefit.delay} ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`text-center transition-all duration-700 ease-out delay-700 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              }`}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    30-minute session • Completely free • No obligations
                  </p>
                </div>
                <Button size="lg" className="!bg-black !text-white hover:!bg-accent w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  <a href="/strategy-session">Book Your Free Session</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}