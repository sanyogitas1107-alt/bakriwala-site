import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BakriWalaOfficial - Learn Better. Farm Smarter. Earn More.',
  description: "India's Premier Goat Farming Education, Telemedicine & AI Advisory Platform.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Translate & Razorpay assets */}
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="preconnect" href="https://checkout.razorpay.com" />
      </head>
      <body className={inter.className}>
        {/* Persistent Hidden Translate Container */}
        <div 
          id="google_translate_element" 
          style={{ 
            position: 'fixed', 
            top: '-9999px', 
            left: '-9999px', 
            width: '1px', 
            height: '1px', 
            overflow: 'hidden', 
            opacity: 0, 
            pointerEvents: 'none',
            zIndex: -1 
          }} 
          aria-hidden="true"
        />

        {children}

        {/* Global Google Translate Initialization Callback */}
        <Script id="google-translate-init" strategy="beforeInteractive">
          {`
            window.googleTranslateElementInit = function() {
              if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi,mr,bn,te,ta,gu,pa,ur',
                  layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            };
          `}
        </Script>

        {/* Google Translate Script */}
        <Script 
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />

        {/* Razorpay Standard Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}