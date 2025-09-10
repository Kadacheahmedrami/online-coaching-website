import { Button } from "@/components/ui/button"
import { Award, Trophy, Target, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-12 sm:py-16 md:py-14 lg:py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`relative order-2 md:order-1 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <img
              src="/hamza.png"
              alt="Hamza - Professional Fitness Trainer"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className={`space-y-6 order-1 md:order-2 transition-all duration-700 ease-out delay-200 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance tracking-tight text-foreground">
                Meet <span className="text-accent">Hamza</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
                With over 10 years of experience in fitness and nutrition, Hamza has helped thousands of clients
                achieve their dream bodies and transform their lives.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  iconBg: "bg-accent/20",
                  iconColor: "text-accent",
                  title: "Certified Personal Trainer",
                  subtitle: "NASM-CPT, Precision Nutrition Level 1",
                  delay: "delay-300"
                },
                {
                  icon: Trophy,
                  iconBg: "bg-primary/20",
                  iconColor: "text-primary",
                  title: "500+ Success Stories",
                  subtitle: "Proven track record of client transformations",
                  delay: "delay-500"
                },
                {
                  icon: Target,
                  iconBg: "bg-accent/20",
                  iconColor: "text-accent",
                  title: "Personalized Approach",
                  subtitle: "Custom programs tailored to your unique goals",
                  delay: "delay-700"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-700 ease-out ${item.delay} ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className={`w-8 h-8 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`pt-4 transition-all duration-700 ease-out delay-900 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              <Button variant="outline" className="bg-transparent">
                <a href="/about">Learn More About Hamza</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}