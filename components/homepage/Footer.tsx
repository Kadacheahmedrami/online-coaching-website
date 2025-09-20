import { Dumbbell } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center">
                <Dumbbell className="h-3 w-3 sm:h-4 sm:w-4 text-accent-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight">Hamaza Gym</span>
            </div>
            <p className="text-background/70 text-pretty leading-relaxed max-w-md text-sm">
              Transform your body and mind with our premium fitness experience, expert guidance, and supportive
              community.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm sm:text-base">Pages</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>
                <a href="/success-stories" className="hover:text-accent transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/free-training" className="hover:text-accent transition-colors">
                  Free Training
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>
                <a href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/strategy-session" className="hover:text-accent transition-colors">
                  Strategy Session
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm sm:text-base">Contact</h4>
            <div className="space-y-2 text-background/70 text-sm">
           
              
              <p className="hover:text-accent transition-colors cursor-pointer">maouchahamza@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 text-center text-background/70 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
            <p>© 2024 Hamaza Gym. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a 
                href="/terms-of-use" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Terms of Use
              </a>
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}