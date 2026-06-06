import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoryHub from '../components/CategoryHub'
import TrustSection from '../components/TrustSection'
import Benefits from '../components/Benefits'
import Offers from '../components/Offers'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { generateMetadata as genMeta, faqSchema, organizationSchema } from '../lib/seo'
import { homeFaqs } from '../data/faq'

export const metadata = genMeta({
 title: 'PW Batch Discounts Up to 50% Off — Verified Campus Ambassador',
description: 'Get up to 50% off on Physics Wallah batches for JEE, NEET, UPSC, CA, SSC, Banking, Defence and more. Connect with our verified PW Campus Ambassador on WhatsApp.', path: '/',
  keywords: [
    'educational offers India',
    'student discounts courses',
    'JEE coaching discount',
    'NEET preparation offers',
    'CA Foundation student offers',
    'MBA entrance coaching discount',
    'GATE preparation offers',
    'SSC coaching discount',
  ],
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <Navbar />
      <main>
        <Hero />
        <CategoryHub />
        <TrustSection />
        <Benefits />
        <Offers />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
