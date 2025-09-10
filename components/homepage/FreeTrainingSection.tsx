import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Target, Play, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function FreeTrainingSection() {
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

  const resources = [
    {
      icon: Download,
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      title: "Beginner's Workout Guide",
      description: "Complete 4-week program designed for fitness beginners with step-by-step instructions.",
      buttonText: "Download Free Guide",
      delay: "delay-200"
    },
    {
      icon: Target,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      title: "Nutrition Basics",
      description: "Essential nutrition tips and meal planning strategies to fuel your fitness journey.",
      buttonText: "Get Nutrition Tips",
      delay: "delay-400"
    },
    {
      icon: Play,
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      title: "Video Tutorials",
      description: "Watch proper form demonstrations and exercise techniques from Hamza himself.",
      buttonText: "Watch Videos",
      delay: "delay-600"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="free-training" 
      className="py-12 sm:py-16 md:py-14 lg:py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-3 sm:mb-4 md:mb-3 tracking-tight text-foreground">
            Free <span className="text-accent">Training Resources</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Get started with our complimentary workout guides and fitness tips to begin your transformation journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className={`border border-border bg-card hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ease-out ${resource.delay} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${resource.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <resource.icon className={`h-6 w-6 ${resource.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{resource.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  {resource.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-8 transition-all duration-700 ease-out delay-800 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <Button variant="outline" className="bg-transparent">
            <a href="/free-training">View All Free Resources</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}