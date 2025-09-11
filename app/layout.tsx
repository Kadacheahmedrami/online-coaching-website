import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from "@/components/homepage/Header"
import Footer from "@/components/homepage/Footer"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzagym.com'),
  
  title: {
    default: 'Hamza Gym - Transform Your Body with Expert Online Coaching',
    template: '%s | Hamza Gym'
  },
  
  description: 'Transform your body with Hamza Gym\'s premium online fitness coaching. Personalized workout plans, nutrition guidance, and 24/7 support. Join 500+ success stories. Start your fitness journey today!',
  
  keywords: [
    'online fitness coaching',
    'personal trainer',
    'weight loss',
    'muscle building',
    'fitness transformation',
    'workout plans',
    'nutrition coaching',
    'online gym',
    'fitness coach',
    'body transformation',
    'home workouts',
    'strength training',
    'fat loss',
    'fitness community'
  ],

  authors: [{ name: 'Hamza Gym Team' }],
  creator: 'Hamza Gym',
  publisher: 'Hamza Gym',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Hamza Gym',
    title: 'Hamza Gym - Transform Your Body with Expert Online Coaching',
    description: 'Transform your body with Hamza Gym\'s premium online fitness coaching. Personalized workout plans, nutrition guidance, and 24/7 support. Join 500+ success stories.',
    images: [
      {
        url: '/hamza.png',
        width: 1200,
        height: 630,
        alt: 'Hamza Gym - Online Fitness Coaching',
        type: 'image/png',
      },
      {
        url: '/hamza.png',
        width: 800,
        height: 600,
        alt: 'Hamza Gym - Fitness Transformation',
        type: 'image/png',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Gym - Transform Your Body with Expert Online Coaching',
    description: 'Transform your body with Hamza Gym\'s premium online fitness coaching. Personalized workout plans, nutrition guidance, and 24/7 support.',
    images: ['/hamza.png'],
    creator: '@hamzagym',
    site: '@hamzagym',
  },

  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // Add other verification codes as needed
  },

  alternates: {
    canonical: '/',
  },

  category: 'fitness',
  
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'twitter:image': '/hamza.png',
    'twitter:image:alt': 'Hamza Gym - Online Fitness Coaching',
    'og:image:secure_url': '/hamza.png',
    'application-name': 'Hamza Gym',
    'apple-mobile-web-app-title': 'Hamza Gym',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.live" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hamza Gym',
              description: 'Premium online fitness coaching and personal training services',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzagym.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzagym.com'}/hamza.png`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzagym.com'}/hamza.png`,
              sameAs: [
                'https://www.facebook.com/hamzagym',
                'https://www.instagram.com/hamzagym',
                'https://www.twitter.com/hamzagym',
                'https://www.youtube.com/hamzagym',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                availableLanguage: ['English', 'Arabic']
              }
            })
          }}
        />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Online Fitness Coaching',
              description: 'Personalized online fitness coaching and training programs',
              provider: {
                '@type': 'Organization',
                name: 'Hamza Gym'
              },
              serviceType: 'Fitness Training',
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzagym.com',
                serviceName: 'Online Platform'
              }
            })
          }}
        />
      </head>
      
      <body className={`font-sans overflow-x-hidden antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        <Analytics />
        
        {/* Google Analytics - Replace with your GA4 measurement ID */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}