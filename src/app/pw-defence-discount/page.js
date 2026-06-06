import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which defence exam batches does PW offer?',
    answer: 'PW offers NDA, Agniveer, CDS and NSAT batches for defence aspirants. Our campus ambassador will share complete batch details, current pricing and available discounts on WhatsApp.',
  },
  {
    question: 'What is the PW Agniveer batch?',
    answer: 'PW Agniveer batch covers preparation for all four services — Army, Navy, Air Force and Coast Guard — with complete syllabus coverage and extensive practice tests. Ask our ambassador for current pricing.',
  },
  {
    question: 'What is the NSAT batch from PW?',
    answer: 'NSAT is a special National Scholarship cum Admission Test batch offered by PW. It is designed for students seeking scholarship-based admissions. Our ambassador will share complete NSAT batch details.',
  },
  {
    question: 'Is PW NDA batch good for Class 12 students?',
    answer: 'Yes. PW NDA batches are designed for Class 11 and 12 students targeting the NDA entrance exam. The batch covers Mathematics and General Ability Test preparation comprehensively.',
  },
]

export const metadata = genMeta({
  title: 'PW Defence Batch Discount 2025 — NDA Agniveer CDS via PW Campus Ambassador',
  description: 'Get exclusive discounts on PW NDA, Agniveer, CDS and NSAT defence batches. Connect with our verified PW Campus Ambassador for the best defence exam prices on WhatsApp.',
  path: '/pw-defence-discount',
  keywords: ['PW NDA discount', 'PW Agniveer batch offer', 'PW CDS price', 'Physics Wallah defence discount', 'PW NSAT batch'],
})

export default function PWDefencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW Defence', path: '/pw-defence-discount' }])) }} />
      <CategoryPage slug="pw-defence-discount" />
    </>
  )
}