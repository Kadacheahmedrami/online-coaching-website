import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Dumbbell, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
export default function BlogSection() {
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

  const blogPosts = [
    {
      icon: BookOpen,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      title: "5 Common Workout Mistakes",
      description: "Avoid these common pitfalls that could be sabotaging your fitness progress.",
      delay: "delay-200"
    },
    {
      icon: Target,
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      title: "Meal Prep for Busy People",
      description: "Simple strategies to maintain proper nutrition even with a hectic schedule.",
      delay: "delay-400"
    },
    {
      icon: Dumbbell,
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      title: "Building Muscle After 40",
      description: "Age-specific strategies for maintaining and building muscle mass effectively.",
      delay: "delay-600"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className="py-12 sm:py-16 md:py-14 lg:py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-3 sm:mb-4 md:mb-3 tracking-tight text-foreground">
            Fitness <span className="text-accent">Blog</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Expert fitness tips, workout advice, and nutrition guidance to help you on your journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`border border-border bg-card hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ease-out ${post.delay} ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${post.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <post.icon className={`h-6 w-6 ${post.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Link href='/blog'  className="p-0 h-auto text-accent ">
                  Read More →
                </Link>
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
            <a href="/blog">Read All Articles</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}