"use client"

import React from "react"
import { Shield, ArrowLeft, Eye, Users, Lock, Calendar, Mail, Phone, FileText, Globe, UserCheck, Database, AlertTriangle, Heart } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "information-collect", title: "Information We Collect", icon: Eye },
    { id: "how-we-use", title: "How We Use Your Information", icon: Users },
    { id: "how-we-share", title: "How We Share Your Information", icon: Globe },
    { id: "data-security", title: "Data Security", icon: Lock },
    { id: "your-rights", title: "Your Rights and Choices", icon: UserCheck },
    { id: "data-retention", title: "Data Retention", icon: Database },
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
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
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
              
              {/* Section 1: Introduction */}
              <section id="introduction" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">1. Introduction</h2>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <p className="mb-4">
                    Hamza Gym ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website and submit information through our consultation form.
                  </p>
                </div>
              </section>

              {/* Section 2: Information We Collect */}
              <section id="information-collect" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">2. Information We Collect</h2>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">2.1 Information You Provide Directly</h3>
                <p className="mb-4">When you submit our consultation form, we collect:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Personal Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full name (first and last name)</li>
                      <li>• Age</li>
                      <li>• Email address</li>
                      <li>• Phone number with country code</li>
                      <li>• Country/location information</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Health & Medical</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Medical conditions, injuries</li>
                      <li>• Health status and fitness level</li>
                      <li>• Previous exercise experience</li>
                      <li>• Physical measurements and goals</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Lifestyle & Preferences</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Fitness goals and motivations</li>
                      <li>• Exercise preferences</li>
                      <li>• Lifestyle factors</li>
                      <li>• Availability and scheduling</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">2.2 Automatically Collected Information</h3>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="mb-3"><strong>When you visit our website, we may automatically collect:</strong></p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• IP address and approximate location</li>
                        <li>• Browser type and version</li>
                        <li>• Device information</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Website usage patterns</li>
                        <li>• Date and time of visits</li>
                        <li>• Referring website information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">2.3 Cookies and Tracking Technologies</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="mb-3 text-blue-700 dark:text-blue-300"><strong>We may use cookies and similar technologies to:</strong></p>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Improve website functionality and user experience</li>
                    <li>• Remember your form progress (temporarily)</li>
                    <li>• Analyze website traffic and usage patterns</li>
                    <li>• Ensure website security</li>
                  </ul>
                </div>
              </section>

              {/* Section 3: How We Use Your Information */}
              <section id="how-we-use" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">3. How We Use Your Information</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">3.1 Primary Uses</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Provide Coaching Services</h4>
                        <p className="text-sm text-muted-foreground">Create personalized fitness and nutrition programs</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Communication</h4>
                        <p className="text-sm text-muted-foreground">Respond to consultation requests and provide ongoing support</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Service Improvement</h4>
                        <p className="text-sm text-muted-foreground">Enhance coaching methods and program effectiveness</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Health and Safety</h4>
                        <p className="text-sm text-muted-foreground">Ensure programs are appropriate for your health status</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">3.2 Additional Uses</h3>
                    <p className="mb-4">We may also use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Send educational content and fitness tips (with your consent)</li>
                      <li>Notify you about service updates or changes</li>
                      <li>Conduct internal research and analytics</li>
                      <li>Comply with legal requirements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: How We Share Your Information */}
              <section id="how-we-share" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">4. How We Share Your Information</h2>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">We DO NOT Sell Your Information</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        We never sell, rent, or trade your personal information to third parties for marketing purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">4.1 Limited Sharing Scenarios</h3>
                <p className="mb-4">We may share your information only in these specific circumstances:</p>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Service Providers</h4>
                    <p className="text-sm text-muted-foreground">
                      Certified fitness professionals, technical service providers, and payment processors working with Hamza Gym
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Legal Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      When required by law, legal process, or to protect rights, property, or safety of our users
                    </p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Business Transfers</h4>
                    <p className="text-sm text-muted-foreground">
                      If our business is sold, merged, or transferred, your information may be part of that transaction
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 mt-6">4.2 De-identified Information</h3>
                <p>
                  We may share aggregated, de-identified information that cannot be used to identify you for research, marketing, or business development purposes.
                </p>
              </section>

              {/* Section 5: Data Security */}
              <section id="data-security" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">5. Data Security</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">5.1 Security Measures</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Technical Safeguards</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Secure data transmission (SSL/TLS encryption)</li>
                          <li>• Access controls and authentication</li>
                          <li>• Regular security audits and updates</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-accent mb-2">Data Storage</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Secure servers with encryption</li>
                          <li>• Regular encrypted backups</li>
                          <li>• Limited access on need-to-know basis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Security Disclaimer</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          While we implement robust security measures, no system is 100% secure. We cannot guarantee absolute security of information transmitted over the internet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Your Rights and Choices */}
              <section id="your-rights" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">6. Your Rights and Choices</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">6.1 Access and Correction</h3>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Request access to your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Request updates to your health status or goals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">6.2 Communication Preferences</h3>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="mb-3"><strong>You can:</strong></p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Opt out of non-essential communications</li>
                            <li>• Choose preferred communication methods</li>
                          </ul>
                        </div>
                        <div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Update contact preferences anytime</li>
                            <li>• Request data deletion (subject to limitations)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">6.3 Data Deletion</h3>
                    <p className="mb-4">You may request deletion of your personal information, subject to:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Legal Retention</h4>
                        <p className="text-sm text-muted-foreground">Legal retention requirements</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Service Obligations</h4>
                        <p className="text-sm text-muted-foreground">Ongoing service obligations</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Business Interests</h4>
                        <p className="text-sm text-muted-foreground">Legitimate business interests</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">6.4 Data Portability</h3>
                    <p>You can request a copy of your personal information in a structured, machine-readable format.</p>
                  </div>
                </div>
              </section>

              {/* Section 7: Data Retention */}
              <section id="data-retention" className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold m-0">7. Data Retention</h2>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Retention Periods</h3>
                  <p className="mb-4 text-blue-700 dark:text-blue-300">
                    We retain your information for as long as necessary to provide services, comply with legal obligations, and resolve disputes.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Specific Timeframes</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Active consultation: Service period + 2 years</li>
                          <li>• Health information: Up to 7 years</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Communication records: Up to 3 years</li>
                          <li>• Website analytics: Up to 2 years</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Secure Deletion</h4>
                    <p className="text-sm text-muted-foreground">
                      When information is no longer needed, we securely delete or anonymize it according to industry standards.
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
                  <p className="mb-4">For questions about this Privacy Policy or our privacy practices, contact us at:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Privacy Questions</h4>
                      <p className="text-sm mb-1"><strong>Email:</strong> maouchahamza@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Requests</h4>
                      <p className="text-sm mb-1"><strong>Email:</strong> maouchahamza@gmail.com</p>
                      <p className="text-sm">Include full name and email used in consultation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-sm">We respond to privacy inquiries within 30 days of receipt</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Sections */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">International Data Transfers</h3>
                    <p>
                      If you are located outside our primary jurisdiction, your information may be transferred to and processed in countries with different data protection laws. We ensure appropriate safeguards are in place.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Children's Privacy</h3>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Our services are not intended for children under 16. Users between 16-18 should have parental consent. We do not knowingly collect information from children under 16 without proper consent.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Third-Party Links</h3>
                    <p>
                      Our website may contain links to third-party websites. This Privacy Policy does not apply to those sites. We encourage you to review their privacy policies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Changes to This Privacy Policy</h3>
                    <p className="mb-4">We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Posting the updated policy on our website</li>
                      <li>Updating the "Last Updated" date</li>
                      <li>Sending email notification for significant changes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Consent Notice */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Your Consent</h3>
                <p className="text-muted-foreground">
                  By submitting our consultation form and checking the consent box, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described.
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
            Review our Terms of Use and begin your transformation today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/terms-of-use"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition-colors"
            >
              View Terms of Use
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