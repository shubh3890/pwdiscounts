import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which CA and Finance batches does PW offer?',
    answer: 'PW offers batches for CA Foundation, CA Intermediate, ACCA, CS Foundation, Commerce, MBA entrance (CAT/XAT/SNAP) and MBA GMAT. Our campus ambassador will share the complete batch list and current pricing on WhatsApp.',
  },
  {
    question: 'What discount is available on PW CA batches?',
    answer: 'Discount amounts vary by batch and enrollment timing. Submit the form and our PW Campus Ambassador will share the latest CA and Finance batch offers and pricing within 2 hours.',
  },
  {
    question: 'When should I enroll for PW CA Foundation?',
    answer: 'CA Foundation exams are held in May and November. Enroll at least 4-6 months before your target exam. Our ambassador will help you pick the right batch aligned with your target attempt.',
  },
  {
    question: 'Does PW offer ACCA and CS preparation?',
    answer: 'Yes. PW offers ACCA and CS Foundation batches. Submit the form and our ambassador will share complete batch details, fee structure and available discounts on WhatsApp.',
  },
]

export const metadata = genMeta({
  title: 'PW CA & Finance Batch Discount 2025 — CA, ACCA, CS, MBA via Campus Ambassador',
  description: 'Get exclusive discounts on PW CA Foundation, ACCA, CS, Commerce and MBA batches. Connect with our verified PW Campus Ambassador for best prices on WhatsApp.',
  path: '/pw-ca-finance-discount',
  keywords: ['PW CA discount', 'PW ACCA batch price', 'PW CS course offer', 'PW MBA discount', 'Physics Wallah CA finance batch'],
})

export default function PWCAFinancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW CA & Finance', path: '/pw-ca-finance-discount' }])) }} />
      <CategoryPage slug="pw-ca-finance-discount" />
    </>
  )
}

