"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  User,
  Mail,
  Phone,
  Target,
  Activity,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Scale,
  Trophy,
  Clock,
  Heart
} from "lucide-react"
import { useState } from "react"

export default function CoachingApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    currentState: "",
    primaryGoal: "",
    timeFrame: "",
    experience: "",
    availability: "",
    motivation: "",
    challenges: ""
  })

  const totalSteps = 6

  const currentStates = [
    { value: "overweight", label: "Overweight", icon: Scale },
    { value: "skinny", label: "Skinny/Underweight", icon: User },
    { value: "lean", label: "Lean", icon: Activity },
    { value: "muscular", label: "Muscular", icon: Trophy },
    { value: "average", label: "Average/Normal", icon: Heart },
    { value: "obese", label: "Obese", icon: Scale }
  ]

  const goals = [
    { value: "weight_loss", label: "Weight Loss", icon: Scale },
    { value: "muscle_gain", label: "Muscle Gain", icon: Trophy },
    { value: "strength", label: "Build Strength", icon: Activity },
    { value: "endurance", label: "Improve Endurance", icon: Heart },
    { value: "toning", label: "Body Toning", icon: Target },
    { value: "general_fitness", label: "General Fitness", icon: CheckCircle }
  ]

  const timeFrames = [
    { value: "3_months", label: "3 Months" },
    { value: "6_months", label: "6 Months" },
    { value: "12_months", label: "12 Months" },
    { value: "ongoing", label: "Ongoing Journey" }
  ]

  const experienceLevels = [
    { value: "beginner", label: "Complete Beginner" },
    { value: "some", label: "Some Experience" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ]

  const availabilityOptions = [
    { value: "3_days", label: "3 days per week" },
    { value: "4_days", label: "4 days per week" },
    { value: "5_days", label: "5 days per week" },
    { value: "6_days", label: "6 days per week" },
    { value: "daily", label: "Daily" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleOptionSelect = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Application submitted:", formData)
    // Handle form submission here
    alert("Application submitted successfully! We'll get back to you within 24 hours.")
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.age
      case 2:
        return formData.email && formData.phone
      case 3:
        return formData.currentState
      case 4:
        return formData.primaryGoal && formData.timeFrame
      case 5:
        return formData.experience && formData.availability
      case 6:
        return formData.motivation && formData.challenges
      default:
        return true
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <User className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <p className="text-muted-foreground">Let's start with the basics</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="age" className="text-sm font-medium">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="25"
                min="16"
                max="100"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Mail className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">How can we reach you?</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Activity className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Current Physical State</h2>
              <p className="text-muted-foreground">How would you describe your current body composition?</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {currentStates.map((state) => (
                <button
                  key={state.value}
                  type="button"
                  onClick={() => handleOptionSelect("currentState", state.value)}
                  className={`p-4 border rounded-lg transition-all text-left hover:border-accent ${
                    formData.currentState === state.value
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <state.icon className="w-5 h-5" />
                    <span className="font-medium">{state.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Target className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Goals & Timeline</h2>
              <p className="text-muted-foreground">What do you want to achieve?</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Primary Goal *</label>
                <div className="grid grid-cols-2 gap-3">
                  {goals.map((goal) => (
                    <button
                      key={goal.value}
                      type="button"
                      onClick={() => handleOptionSelect("primaryGoal", goal.value)}
                      className={`p-3 border rounded-lg transition-all text-left hover:border-accent ${
                        formData.primaryGoal === goal.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <goal.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{goal.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium">Desired Timeline *</label>
                <div className="grid grid-cols-2 gap-3">
                  {timeFrames.map((timeFrame) => (
                    <button
                      key={timeFrame.value}
                      type="button"
                      onClick={() => handleOptionSelect("timeFrame", timeFrame.value)}
                      className={`p-3 border rounded-lg transition-all text-center hover:border-accent ${
                        formData.timeFrame === timeFrame.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{timeFrame.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Clock className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Experience & Availability</h2>
              <p className="text-muted-foreground">Tell us about your fitness background</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Fitness Experience *</label>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => handleOptionSelect("experience", level.value)}
                      className={`w-full p-3 border rounded-lg transition-all text-left hover:border-accent ${
                        formData.experience === level.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-foreground"
                      }`}
                    >
                      <span className="font-medium">{level.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium">Training Availability *</label>
                <div className="space-y-2">
                  {availabilityOptions.map((availability) => (
                    <button
                      key={availability.value}
                      type="button"
                      onClick={() => handleOptionSelect("availability", availability.value)}
                      className={`w-full p-3 border rounded-lg transition-all text-left hover:border-accent ${
                        formData.availability === availability.value
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border text-foreground"
                      }`}
                    >
                      <span className="font-medium">{availability.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Heart className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-2xl font-bold">Motivation & Challenges</h2>
              <p className="text-muted-foreground">Help us understand your journey better</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="motivation" className="text-sm font-medium">
                  What motivates you to start this fitness journey? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Share what drives you to make this change..."
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="challenges" className="text-sm font-medium">
                  What challenges have you faced in the past? *
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about any obstacles you've encountered..."
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Online Coaching Application</h1>
          <p className="text-muted-foreground">Transform your fitness journey with personalized coaching</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <Card className="border border-border bg-card shadow-lg">
          <CardContent className="p-8">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                onClick={prevStep}
                variant="outline"
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2 !bg-black !text-white hover:!bg-gray-800"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2 !bg-green-600 !text-white hover:!bg-green-700"
                >
                  <CheckCircle className="w-4 h-4" />
                  Submit Application
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Your information is secure and will only be used to create your personalized coaching plan.
          </p>
        </div>
      </div>
    </div>

  )
}