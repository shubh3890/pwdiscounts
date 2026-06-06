import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which professional course batches does PW offer?',
    answer: 'PW offers UGC NET, IELTS, Agriculture competitive exams, Teacher Training and TET batches. Our campus ambassador will share complete batch details and current pricing on WhatsApp.',
  },
  {
    question: 'Is PW UGC NET batch good for JRF?',
    answer: 'Yes. PW UGC NET batches cover both Paper 1 and subject-specific Paper 2 for college teaching eligibility and Junior Research Fellowship. Our ambassador will share available subject batches and pricing.',
  },
  {
    question: 'Does PW offer IELTS preparation?',
    answer: 'Yes. PW IELTS batches cover all four modules — Listening, Reading, Writing and Speaking — with experienced faculty and regular mock tests. Ask our ambassador for current IELTS batch pricing.',
  },
  {
    question: 'Which Teacher Training and TET batches does PW offer?',
    answer: 'PW offers CTET and State TET batches covering Child Development, Pedagogy and subject knowledge. Our ambassador will share complete TET batch details and available discounts.',
  },
]

export const metadata = genMeta({
  title: 'PW Professional Courses Discount 2025 — UGC NET IELTS TET via Campus Ambassador',
  description: 'Get exclusive discounts on PW UGC NET, IELTS, Agriculture and Teacher Training batches. Connect with our verified PW Campus Ambassador for best prices on WhatsApp.',
  path: '/pw-professional-discount',
  keywords: ['PW UGC NET discount', 'PW IELTS batch offer', 'PW TET price', 'Physics Wallah professional discount', 'PW CTET batch'],
})

export default function PWProfessionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW Professional Courses', path: '/pw-professional-discount' }])) }} />
      <CategoryPage slug="pw-professional-discount" />
    </>
  )
}