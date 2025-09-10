import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, MessageCircle, Mail, X } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false)

  const contactMethods = [
    {
      icon: Instagram,
      iconBg: "bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500",
      iconColor: "text-white",
      title: "Instagram",
      info: ["@hamazagym", "Follow for daily motivation", "and workout tips"]
    },
    {
      icon: MessageCircle,
      iconBg: "bg-green-500",
      iconColor: "text-white",
      title: "WhatsApp",
      info: ["+1 (555) 123-4567", "Mon-Fri: 6AM - 10PM", "Sat-Sun: 7AM - 8PM"]
    },
    {
      icon: Mail,
      iconBg: "bg-red-500",
      iconColor: "text-white",
      title: "Email",
      info: ["hello@hamazagym.com", "support@hamazagym.com", "We reply within 24 hours"]
    }
  ]

  const popupOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      color: "bg-green-500 hover:bg-green-600",
      action: () => window.open("https://wa.me/15551234567", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send us a detailed message",
      color: "bg-red-500 hover:bg-red-600",
      action: () => window.open("mailto:hello@hamazagym.com", "_blank")
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "DM us on social media",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600",
      action: () => window.open("https://instagram.com/hamazagym", "_blank")
    }
  ]

  return (
    <>
      <section id="contact" className="py-12 sm:py-16 md:py-14 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-3 sm:mb-4 md:mb-3 tracking-tight text-foreground">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-lg xl:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
              Ready to start your transformation? Contact us today to begin your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`border border-border bg-card ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${method.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`h-6 w-6 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {method.info.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < method.info.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="!bg-black cursor-pointer !text-white hover:!bg-accent"
              onClick={() => setShowPopup(true)}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform animate-in zoom-in-95 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Choose Your Preferred Contact Method
                </h3>
                <button
                  onClick={() => setShowPopup(false)}
                  className="p-2 rounded-full  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-3">
                {popupOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      option.action()
                      setShowPopup(false)
                    }}
                    className={`w-full ${option.color} text-white rounded-xl p-4 flex items-center space-x-4 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="bg-white/20 rounded-lg p-2">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{option.title}</div>
                      <div className="text-sm opacity-90">{option.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}