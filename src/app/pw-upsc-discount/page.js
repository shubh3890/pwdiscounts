import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which UPSC and State PSC batches does PW offer?',
    answer: 'PW offers UPSC CSE, UPPSC, MPPSC, MPSC, BPSC, OPSC, WBPSC and Judiciary batches. Our campus ambassador will share the complete batch list with current pricing on WhatsApp.',
  },
  {
    question: 'Does PW offer Power Batch for UPSC?',
    answer: 'Yes. PW UPSC Power Batches offer more intensive preparation with additional mentorship and test support. Our ambassador will share Power Batch pricing and compare it with regular batch options.',
  },
  {
    question: 'Is PW UPSC preparation good for beginners?',
    answer: 'Yes. PW UPSC batches are structured for both beginners and students who have previously attempted the exam. Our ambassador will recommend the right batch based on your preparation stage.',
  },
  {
    question: 'Which State PSC batches are available on PW?',
    answer: 'PW offers dedicated batches for UPPSC, MPPSC, MPSC, BPSC, OPSC and WBPSC with state-specific syllabus coverage. Ask our ambassador for current batch availability and pricing.',
  },
]

export const metadata = genMeta({
  title: 'PW UPSC & Civil Services Discount 2025 — IAS, State PSC Batches via Ambassador',
  description: 'Get exclusive discounts on PW UPSC, IAS, UPPSC, MPPSC, BPSC and Judiciary batches. Connect with our verified PW Campus Ambassador for best prices on WhatsApp.',
  path: '/pw-upsc-discount',
  keywords: ['PW UPSC discount', 'PW IAS batch price', 'PW UPPSC offer', 'Physics Wallah civil services discount', 'PW State PSC discount'],
})

export default function PWUPSCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW Civil Services', path: '/pw-upsc-discount' }])) }} />
      <CategoryPage slug="pw-upsc-discount" />
    </>
  )
}