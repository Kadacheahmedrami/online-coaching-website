"use client"


import HeroSection from "@/components/homepage/HeroSection"
import SuccessStories from "@/components/homepage/SuccessStories"
import AboutSection from "@/components/homepage/AboutSection"
import FreeTrainingSection from "@/components/homepage/FreeTrainingSection"
import StrategySession from "@/components/homepage/StrategySession"
import BlogSection from "@/components/homepage/BlogSection"
import FAQSection from "@/components/homepage/FAQSection"
import ContactSection from "@/components/homepage/ContactSection"


export default function HamazaGymLanding() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/10">
      
      <HeroSection />
      <SuccessStories />
      <AboutSection />
      <FreeTrainingSection />
      <StrategySession />
      <BlogSection />
      <FAQSection />
      <ContactSection />
   
    </div>
  )
}