import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'

const faqs = [
  {
    question: 'Which state exam batches does PW offer?',
    answer: 'PW offers dedicated batches for WB Exams, UP Exams and Bihar Exams including regular and Power Batch variants. Our ambassador will share complete batch details and pricing on WhatsApp.',
  },
  {
    question: 'Does PW offer offline batches for state exams?',
    answer: 'Some state exam categories have offline batch variants available. Our campus ambassador will share both online and offline batch options with current pricing for your target state.',
  },
  {
    question: 'What is included in a PW State Exam Power Batch?',
    answer: 'Power Batches include more intensive preparation with additional mock tests, mentorship sessions and doubt support compared to regular batches. Ask our ambassador for Power Batch pricing.',
  },
  {
    question: 'Are crash course batches available for state exams?',
    answer: 'Yes. PW offers Crash Course variants for state examinations for students close to their exam date. Our ambassador will share crash course availability and pricing for your target exam.',
  },
]

export const metadata = genMeta({
  title: 'PW State Exams Discount 2025 — WB UP Bihar Exam Batches via Campus Ambassador',
  description: 'Get exclusive discounts on PW WB Exams, UP Exams and Bihar Exams batches. Connect with our verified PW Campus Ambassador for the best state exam prices on WhatsApp.',
  path: '/pw-state-exams-discount',
  keywords: ['PW WB exams discount', 'PW UP exams offer', 'PW Bihar exams batch', 'Physics Wallah state exams discount', 'PW WBCS discount'],
})

export default function PWStateExamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW State Exams', path: '/pw-state-exams-discount' }])) }} />
      <CategoryPage slug="pw-state-exams-discount" />
    </>
  )
}