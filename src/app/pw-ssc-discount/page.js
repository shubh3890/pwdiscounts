import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'

const faqs = [
  {
    question: 'Which SSC batches does PW offer?',
    answer: 'PW offers SSC CGL, CHSL, MTS, CPO and other SSC exam batches. Our campus ambassador will share the complete batch list, current pricing and available discounts on WhatsApp.',
  },
  {
    question: 'Does PW offer Railway exam batches?',
    answer: 'Yes. PW Railway batches cover RRB NTPC, Group D, AE and JE examinations. Ask our ambassador for current Railway batch pricing and available discounts.',
  },
  {
    question: 'What is the PW SSC Power Batch?',
    answer: 'PW SSC Power Batches offer more intensive preparation with additional mock tests, mentorship and doubt support. Our ambassador will share Power Batch pricing and help you decide if it suits your needs.',
  },
  {
    question: 'Are combo packages available for SSC and Railway together?',
    answer: 'Yes, combo packages are often available. Our campus ambassador will share current combo pricing and help you find the best value package for your target examinations.',
  },
]

export const metadata = genMeta({
  title: 'PW SSC & Railway Batch Discount 2025 — SSC CGL, RRB via Campus Ambassador',
  description: 'Get exclusive discounts on PW SSC CGL, CHSL, Railway RRB batches. Connect with our verified PW Campus Ambassador for the best SSC Railway prices on WhatsApp.',
  path: '/pw-ssc-discount',
  keywords: ['PW SSC discount', 'PW Railway batch offer', 'PW SSC CGL price', 'Physics Wallah SSC discount', 'PW RRB NTPC batch'],
})

export default function PWSSCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW SSC & Railway', path: '/pw-ssc-discount' }])) }} />
      <CategoryPage slug="pw-ssc-discount" />
    </>
  )
}