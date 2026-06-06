import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwNeetFaqs = [
  {
    question: 'Which PW NEET batches are available with a discount?',
    answer:
      'Discounts are available on PW NEET batches including Yakeen, Arjuna NEET, and other current session batches. Our campus ambassador will share the latest pricing and offers directly on WhatsApp after you fill the form.',
  },
  {
    question: 'Is Physics Wallah good for NEET preparation?',
    answer:
      'Yes. PW NEET batches are taught by highly experienced Biology, Physics and Chemistry faculty. PW has produced thousands of NEET qualifiers and is trusted by lakhs of medical aspirants across India every year.',
  },
  {
    question: 'What is the fee for PW NEET batches?',
    answer:
      'PW NEET batch fees vary by batch type and duration. Through our campus ambassador program we can share the best available pricing and current discounts. Submit the form for a WhatsApp reply within 2 hours.',
  },
  {
    question: 'Does PW offer NEET repeater batches?',
    answer:
      'Yes, Physics Wallah offers dedicated repeater batches for NEET aspirants appearing in their second or third attempt. These batches have a focused curriculum. Ask our ambassador for current repeater batch offers.',
  },
]

export const metadata = genMeta({
  title: 'PW NEET Batch Discount 2025 — Physics Wallah NEET Offers via Campus Ambassador',
  description:
    'Get exclusive discounts on Physics Wallah NEET UG batches. Connect with our verified PW Campus Ambassador for the best PW NEET batch prices directly on WhatsApp.',
  path: '/pw-neet-discount',
  keywords: [
    'PW NEET discount',
    'Physics Wallah NEET batch discount',
    'PW Yakeen batch price',
    'PW NEET UG offer 2025',
    'physics wallah NEET campus ambassador',
    'PW NEET repeater batch discount',
  ],
})

export default function PWNEETDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwNeetFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Discounts', path: '/physics-wallah-discount' },
              { name: 'PW NEET Discount', path: '/pw-neet-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="pw-neet-discount" />
    </>
  )
}