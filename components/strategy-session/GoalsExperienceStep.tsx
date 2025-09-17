"use client"

import type React from "react"
import { 
  Activity, 
  Target, 
  Clock,
  Scale, 
  User, 
  Trophy, 
  Heart, 
  CheckCircle 
} from "lucide-react"

interface GoalsExperienceStepProps {
  formData: {
    currentState: string
    primaryGoal: string
    timeFrame: string
    experience: string
    availability: string
  }
  onOptionSelect: (field: string, value: string) => void
  currentStep: number
}

export default function GoalsExperienceStep({
  formData,
  onOptionSelect,
  currentStep
}: GoalsExperienceStepProps) {
  
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

  if (currentStep === 3) {
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
              onClick={() => onOptionSelect("currentState", state.value)}
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
  }

  if (currentStep === 4) {
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
                  onClick={() => onOptionSelect("primaryGoal", goal.value)}
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
                  onClick={() => onOptionSelect("timeFrame", timeFrame.value)}
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
  }

  if (currentStep === 5) {
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
                  onClick={() => onOptionSelect("experience", level.value)}
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
                  onClick={() => onOptionSelect("availability", availability.value)}
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
  }

  return null
}