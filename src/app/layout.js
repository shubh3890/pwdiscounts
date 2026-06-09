import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { organizationSchema, websiteSchema } from '../lib/seo'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
 title: {
  default: 'PW Discounts — Physics Wallah Batch Discounts via Campus Ambassador',
  template: '%s | PW Discounts',
},
description:
  'Connect with a verified Physics Wallah Campus Ambassador and get exclusive discounts on PW batches for JEE, NEET, CA Foundation, Vidyapeeth, and Skills courses.',
  metadataBase: new URL(process.env.SITE_URL || 'https://pwdiscounts.in'),
  keywords: 'educational offers, student discounts, course discounts, JEE offers, NEET offers, CA Foundation offers',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'PW Discounts',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {/* Google Analytics - replace GA_MEASUREMENT_ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
        {/* Microsoft Clarity - replace CLARITY_ID */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
      </head>
      <body className="bg-bg text-[#F8FAFC] font-body antialiased">{children}<Analytics /></body>
    </html>
  )
}
