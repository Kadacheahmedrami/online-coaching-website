import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function FAQSection() {
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

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing noticeable changes within 2-4 weeks of consistent training and proper nutrition. Significant transformations typically occur within 8-12 weeks.",
      delay: "delay-200"
    },
    {
      question: "Do I need prior gym experience?",
      answer: "Not at all! We work with clients of all fitness levels, from complete beginners to advanced athletes. Every program is customized to your current fitness level and goals.",
      delay: "delay-300"
    },
    {
      question: "What's included in the training programs?",
      answer: "Our programs include personalized workout plans, nutrition guidance, progress tracking, form coaching, and ongoing support throughout your fitness journey.",
      delay: "delay-400"
    },
    {
      question: "Can I train if I have injuries or limitations?",
      answer: "Yes! We specialize in working around injuries and physical limitations. All programs are adapted to ensure safe, effective training that supports your recovery and goals.",
      delay: "delay-500"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-12 sm:py-16 md:py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className={`text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16 transition-all duration-800 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-3 sm:mb-4 md:mb-3 tracking-tight text-foreground">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Get answers to common questions about our training process and programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`border border-border bg-card transition-all duration-700 ease-out ${faq.delay} ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-98'
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-8 transition-all duration-700 ease-out delay-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <Button variant="outline" className="bg-transparent">
            <a href="/faq">View All FAQs</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}