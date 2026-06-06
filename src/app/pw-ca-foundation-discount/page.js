import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwCAFaqs = [
  {
    question: 'Does Physics Wallah offer CA Foundation batches?',
    answer:
      'Yes. PW offers CA Foundation batches covering all four papers — Principles of Accounting, Business Laws, Quantitative Aptitude, and Business Economics. Our ambassador can share current batch details and discount pricing.',
  },
  {
    question: 'What discount is available on PW CA Foundation batches?',
    answer:
      'Discounts vary by batch and enrollment timing. Submit the form and our PW Campus Ambassador will share the latest CA Foundation batch offers and pricing on WhatsApp within 2 hours.',
  },
  {
    question: 'Is PW CA Foundation coaching good for ICAI exams?',
    answer:
      'PW CA Foundation batches follow the ICAI syllabus and are taught by experienced CA faculty. The combination of quality content and affordable pricing makes PW a strong option for CA Foundation aspirants.',
  },
  {
    question: 'Does PW CA Foundation include study materials?',
    answer:
      'Most PW CA Foundation batches include digital study materials, practice questions, mock tests, and doubt-solving sessions. Specific inclusions vary by batch — our ambassador will share complete details.',
  },
]

export const metadata = genMeta({
  title: 'PW CA Foundation Batch Discount 2025 — Physics Wallah CA Offers',
  description:
    'Get exclusive discounts on Physics Wallah CA Foundation batches. Connect with our verified PW Campus Ambassador for the best PW CA Foundation prices on WhatsApp.',
  path: '/pw-ca-foundation-discount',
  keywords: [
    'PW CA Foundation discount',
    'Physics Wallah CA Foundation batch price',
    'PW CA coaching offer 2025',
    'physics wallah CA Foundation campus ambassador',
    'PW CA batch discount',
  ],
})

export default function PWCAFoundationDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwCAFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Discounts', path: '/physics-wallah-discount' },
              { name: 'PW CA Foundation Discount', path: '/pw-ca-foundation-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="pw-ca-foundation-discount" />
    </>
  )
}