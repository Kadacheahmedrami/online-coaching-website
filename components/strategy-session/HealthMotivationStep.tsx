"use client"

import type React from "react"
import { Heart, CheckCircle } from "lucide-react"

interface HealthMotivationStepProps {
  formData: {
    hasMedicalCondition: string
    medicalDetails: string
    motivation: string
    agreeToTerms: boolean
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onOptionSelect: (field: string, value: string) => void
  onTermsChange: (checked: boolean) => void
  currentStep: number
}

export default function HealthMotivationStep({
  formData,
  onInputChange,
  onOptionSelect,
  onTermsChange,
  currentStep
}: HealthMotivationStepProps) {
  
  if (currentStep !== 6) return null

  const handleMedicalConditionSelect = (value: string) => {
    // Call the onOptionSelect function
    onOptionSelect("hasMedicalCondition", value)
    
    // If selecting "no", clear the medical details
    if (value === "no") {
      // Create a synthetic event to clear medical details
      const syntheticEvent = {
        target: { 
          name: "medicalDetails", 
          value: "" 
        }
      } as React.ChangeEvent<HTMLTextAreaElement>
      onInputChange(syntheticEvent)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Heart className="w-12 h-12 text-accent mx-auto" />
        <h2 className="text-2xl font-bold">Health & Motivation</h2>
        <p className="text-muted-foreground">Help us understand your health status and goals</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="text-sm font-medium">
            Do you have any medical conditions, injuries, or physical limitations we should be aware of? *
          </label>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleMedicalConditionSelect("no")}
              className={`w-full p-3 border rounded-lg transition-all text-left hover:border-accent ${
                formData.hasMedicalCondition === "no"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-foreground"
              }`}
            >
              <span className="font-medium">No, I have no medical conditions or limitations</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleMedicalConditionSelect("yes")}
              className={`w-full p-3 border rounded-lg transition-all text-left hover:border-accent ${
                formData.hasMedicalCondition === "yes"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-foreground"
              }`}
            >
              <span className="font-medium">Yes, I have medical conditions or limitations to discuss</span>
            </button>
          </div>
          
          {formData.hasMedicalCondition === "yes" && (
            <div className="space-y-2">
              <label htmlFor="medicalDetails" className="text-sm font-medium">
                Please provide details about your medical conditions or limitations *
              </label>
              <textarea
                id="medicalDetails"
                name="medicalDetails"
                value={formData.medicalDetails}
                onChange={onInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Please describe any medical conditions, past injuries, physical limitations. This information helps us create a safe and effective plan tailored to your needs."
              />
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="motivation" className="text-sm font-medium">
            What motivates you to start this fitness journey? (Optional)
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={onInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Share what drives you to make this change (optional)..."
          />
        </div>
        
        {/* Terms and Privacy Agreement */}
        <div className="space-y-4 pt-4 border-t border-border">
          <div className="flex items-start gap-3">
            <div className="relative mt-1">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={(e) => onTermsChange(e.target.checked)}
                className="sr-only"
              />
              <label 
                htmlFor="agreeToTerms" 
                className={`flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer transition-all duration-200 ${
                  formData.agreeToTerms 
                    ? 'bg-accent border-accent shadow-sm' 
                    : 'bg-background border-border hover:border-accent'
                }`}
              >
                {formData.agreeToTerms && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
              </label>
            </div>
            <label htmlFor="agreeToTerms" className="text-sm text-foreground leading-relaxed cursor-pointer">
              I agree to the{" "}
              <a 
                href="/terms-of-use" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Terms of Use
              </a>
              {" "}and{" "}
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Privacy Policy
              </a>
              . I understand that my personal information will be used to provide coaching services and may be stored securely for this purpose. *
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}