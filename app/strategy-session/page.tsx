"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import PersonalInfoStep from "@/components/strategy-session/PersonalInfoStep"
import GoalsExperienceStep from "@/components/strategy-session/GoalsExperienceStep"
import HealthMotivationStep from "@/components/strategy-session/HealthMotivationStep"
import Link from "next/link"
export default function CoachingApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    age: "",
    currentState: "",
    primaryGoal: "",
    timeFrame: "",
    experience: "",
    availability: "",
    hasMedicalCondition: "",
    medicalDetails: "",
    motivation: "",
    agreeToTerms: false
  })

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    phone: "",
    age: ""
  })

  const totalSteps = 6

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string, countryCode: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '')
    
    if (countryCode === "+1") {
      return cleanPhone.length === 10
    } else if (countryCode === "+44") {
      return cleanPhone.length >= 10 && cleanPhone.length <= 11
    } else if (["+33", "+49", "+39", "+34"].includes(countryCode)) {
      return cleanPhone.length >= 9 && cleanPhone.length <= 10
    } else {
      return cleanPhone.length >= 7 && cleanPhone.length <= 15
    }
  }

  const validateAge = (age: string) => {
    const ageNum = parseInt(age)
    return !isNaN(ageNum) && ageNum >= 16 && ageNum <= 100
  }

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[^\d]/g, '')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    let processedValue = value
    
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue,
    }))

    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }

    // Real-time validation
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setValidationErrors(prev => ({
          ...prev,
          email: "Please enter a valid email address"
        }))
      }
    }
    
    if (name === 'phone' && processedValue) {
      if (!validatePhone(processedValue, formData.countryCode)) {
        setValidationErrors(prev => ({
          ...prev,
          phone: "Please enter a valid phone number for the selected country"
        }))
      }
    }
    
    if (name === 'age' && value) {
      if (!validateAge(value)) {
        setValidationErrors(prev => ({
          ...prev,
          age: "Please enter a valid age between 16 and 100"
        }))
      }
    }
  }

  const handleCountryCodeChange = (newCountryCode: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode: newCountryCode
    }))

    // Re-validate phone number with new country code
    if (formData.phone) {
      if (!validatePhone(formData.phone, newCountryCode)) {
        setValidationErrors(prev => ({
          ...prev,
          phone: "Please enter a valid phone number for the selected country"
        }))
      } else {
        setValidationErrors(prev => ({
          ...prev,
          phone: ""
        }))
      }
    }
  }

  // FIXED: This was the main issue - using prev state instead of current formData
  const handleOptionSelect = (field: string, value: string) => {
    console.log(`Setting ${field} to ${value}`) // Debug log
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTermsChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: checked
    }))
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

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const submissionData = {
        ...formData,
        phone: formData.countryCode + formData.phone
      }
      
      const response = await fetch('/api/strategy-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application')
      }

      setSubmitSuccess(true)
      console.log("Application submitted successfully:", data)
      
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && 
              formData.lastName && 
              formData.age && 
              validateAge(formData.age) &&
              !validationErrors.age
      case 2:
        return formData.email && 
              formData.phone && 
              validateEmail(formData.email) && 
              validatePhone(formData.phone, formData.countryCode) &&
              !validationErrors.email && 
              !validationErrors.phone
      case 3:
        return formData.currentState
      case 4:
        return formData.primaryGoal && formData.timeFrame
      case 5:
        return formData.experience && formData.availability
      case 6:
        return formData.hasMedicalCondition && (formData.hasMedicalCondition === "no" || formData.medicalDetails) && formData.agreeToTerms
      default:
        return true
    }
  }

  const resetForm = () => {
    setSubmitSuccess(false)
    setCurrentStep(1)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+1",
      age: "",
      currentState: "",
      primaryGoal: "",
      timeFrame: "",
      experience: "",
      availability: "",
      hasMedicalCondition: "",
      medicalDetails: "",
      motivation: "",
      agreeToTerms: false
    })
    setValidationErrors({
      email: "",
      phone: "",
      age: ""
    })
  }

  // Success screen
  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 flex items-center justify-center py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border border-border bg-card shadow-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your application. We'll review your information and get back to you within 24 hours.
              </p>
              <div className="gap-2 w-full justify-center items-center flex">
              <Link className="cursor-pointer" href="/success-stories" >
              <Button className="text-xl bg-black text-white font-bold cursor-pointer"  variant="outline">
             success stories 
              </Button>
              </Link>
             
            
              </div>
            
            </CardContent>
          </Card>

       
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 py-8">
      <div className="container mx-auto px-4 max-w-2xl">

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
            {/* Render appropriate step component */}
            <PersonalInfoStep
              formData={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                countryCode: formData.countryCode,
                age: formData.age
              }}
              validationErrors={validationErrors}
              onInputChange={handleInputChange}
              onCountryCodeChange={handleCountryCodeChange}
              currentStep={currentStep}
            />
            
            <GoalsExperienceStep
              formData={{
                currentState: formData.currentState,
                primaryGoal: formData.primaryGoal,
                timeFrame: formData.timeFrame,
                experience: formData.experience,
                availability: formData.availability
              }}
              onOptionSelect={handleOptionSelect}
              currentStep={currentStep}
            />
            
            <HealthMotivationStep
              formData={{
                hasMedicalCondition: formData.hasMedicalCondition,
                medicalDetails: formData.medicalDetails,
                motivation: formData.motivation,
                agreeToTerms: formData.agreeToTerms
              }}
              onInputChange={handleInputChange}
              onOptionSelect={handleOptionSelect}
              onTermsChange={handleTermsChange}
              currentStep={currentStep}
            />
            
            {/* Error Message */}
            {submitError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{submitError}</p>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                onClick={prevStep}
                variant="outline"
                disabled={currentStep === 1 || isSubmitting}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center gap-2 !bg-black !text-white hover:!bg-gray-800"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center gap-2 !bg-green-600 !text-white hover:!bg-green-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}