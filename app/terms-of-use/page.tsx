"use client"

import React from "react"
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Heart, Scale, FileText, Users, Lock, Phone } from "lucide-react"
import Link from "next/link"

export default function TermsOfUsePage() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle },
    { id: "services", title: "About Our Services", icon: Heart },
    { id: "consultation", title: "Consultation Form", icon: FileText },
    { id: "health", title: "Health & Safety", icon: AlertTriangle },
    { id: "responsibilities", title: "User Responsibilities", icon: Users },
    { id: "intellectual", title: "Intellectual Property", icon: Lock },
    { id: "liability", title: "Limitation of Liability", icon: Scale },
    { id: "contact", title: "Contact Information", icon: Phone },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-12 h-12 text-accent" />
              <h1 className="text-4xl font-bold">Terms of Use</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services and submitting your consultation form.
            </p>
            <div className="text-sm text-muted-foreground">
              <p><strong>Effective Date:</strong> September 17, 2025</p>
              <p><strong>Last Updated:</strong> September 17, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Quick Navigation
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all"
                  >
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              
              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">1. Acceptance of Terms</h2>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <p className="mb-4">
                    By accessing and using the Hamza Gym website and submitting information through our consultation form, you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use our Website or submit any information.
                  </p>
                </div>
              </section>

              {/* Section 2: About Our Services */}
              <section id="services" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">2. About Our Services</h2>
                </div>
                <p className="mb-4">Hamza Gym provides online fitness coaching, nutrition guidance, and wellness consultation services. Our services include:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Personalized Programs</h4>
                    <p className="text-sm text-muted-foreground">Custom workout plans and nutrition guidance tailored to your goals</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">Progress tracking and coaching support throughout your journey</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">Professional advice from certified fitness trainers</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Educational Content</h4>
                    <p className="text-sm text-muted-foreground">Fitness and wellness resources to support your goals</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Consultation Form */}
              <section id="consultation" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">3. Consultation Form and Information Collection</h2>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">3.1 Form Submission</h3>
                <p className="mb-4">By completing and submitting our consultation form, you:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Provide consent for us to collect and process your personal information</li>
                  <li>Acknowledge that all information provided is accurate and complete</li>
                  <li>Understand that this information will be used to provide coaching services</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">3.2 Required Information</h3>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="mb-3"><strong>Our form collects:</strong></p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Personal Details:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Name, age, contact information</li>
                        <li>• Location and availability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Health & Fitness:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Medical conditions and limitations</li>
                        <li>• Fitness goals and preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Medical Information Accuracy</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        You are responsible for providing accurate and complete medical information. Failure to disclose relevant health conditions may affect the safety and effectiveness of your fitness program.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Health & Safety */}
              <section id="health" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">4. Health and Safety Disclaimers</h2>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">4.1 Medical Clearance Required</h3>
                  <p className="mb-4 text-red-700 dark:text-red-300">
                    Before beginning any fitness program, you should consult with your physician, especially if you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-red-700 dark:text-red-300">
                    <li>Have any medical conditions or injuries</li>
                    <li>Are taking medications</li>
                    <li>Have cardiovascular conditions</li>
                    <li>Are pregnant or nursing</li>
                    <li>Have any physical limitations</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold mb-3">4.2 Assumption of Risk</h3>
                <p className="mb-4">
                  Participation in fitness activities involves inherent risks. By using our services, you acknowledge and assume all risks associated with physical exercise and fitness activities.
                </p>

                <h3 className="text-lg font-semibold mb-3">4.3 Not Medical Advice</h3>
                <p className="mb-6">
                  Our coaching services do not constitute medical advice. We are not licensed medical professionals, and our recommendations should not replace professional medical consultation.
                </p>
              </section>

              {/* Section 5: User Responsibilities */}
              <section id="responsibilities" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">5. User Responsibilities</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">5.1 Age Requirement</h3>
                    <p>You must be at least 16 years of age to use our services. Users under 18 must have parental consent.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">5.2 Truthful Information</h3>
                    <p>You agree to provide accurate, current, and complete information when submitting our consultation form.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">5.3 Communication</h3>
                    <p>You agree to maintain open communication about your progress, challenges, and any changes to your health status.</p>
                  </div>
                </div>
              </section>

              {/* Section 6: Intellectual Property */}
              <section id="intellectual" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">6. Intellectual Property</h2>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Content Ownership</h3>
                  <p className="mb-4 text-blue-700 dark:text-blue-300">
                    All content on this Website, including workout plans, nutrition guides, and training resources, is owned by Hamza Gym and protected by copyright laws.
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    We grant you a limited, non-exclusive license to use our materials solely for your personal fitness goals. You may not reproduce, distribute, or commercialize our content without written permission.
                  </p>
                </div>
              </section>

              {/* Section 7: Limitation of Liability */}
              <section id="liability" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">7. Limitation of Liability</h2>
                </div>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Service Limitations</h4>
                    <p className="text-sm text-muted-foreground">
                      Our services are provided "as is" without warranties. We do not guarantee specific fitness results.
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Liability Cap</h4>
                    <p className="text-sm text-muted-foreground">
                      Our total liability shall not exceed the amount paid for services.
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Indemnification</h4>
                    <p className="text-sm text-muted-foreground">
                      You agree to indemnify Hamza Gym from claims arising from service use or Terms violation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Contact Information */}
              <section id="contact" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">8. Contact Information</h2>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="mb-4">For questions about these Terms of Use, please contact us at:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">General Inquiries</h4>
                      <p className="text-sm mb-1"><strong>Email:</strong> legal@hamazagym.com</p>
                      <p className="text-sm mb-1"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <p className="text-sm mb-1">Mon-Fri: 6AM - 10PM</p>
                      <p className="text-sm">Sat-Sun: 7AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Agreement Notice */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6 text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Agreement Acknowledgment</h3>
                <p className="text-muted-foreground">
                  By submitting our consultation form, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Ready to Start Your Fitness Journey?</h3>
          <p className="text-muted-foreground mb-4">
            Review our Privacy Policy and begin your transformation today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/privacy-policy"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition-colors"
            >
              View Privacy Policy
            </Link>
            <Link 
              href="/strategy-session"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Start Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}