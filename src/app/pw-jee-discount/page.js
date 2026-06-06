import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwJeeFaqs = [
  {
    question: 'Which PW JEE batches are available with a discount?',
    answer:
      'Discounts are available on PW JEE batches including Arjuna, Eklavya, Lakshya, and other current session batches for JEE Main and JEE Advanced. Fill the form and our campus ambassador will share the latest batch pricing and available discounts on WhatsApp.',
  },
  {
    question: 'How much discount can I get on PW JEE batches?',
    answer:
      'Discount amounts vary by batch, timing, and ongoing offers. As a campus ambassador we can share the best available pricing. Submit the form and we will send you a complete price breakdown on WhatsApp within 2 hours.',
  },
  {
    question: 'Is PW JEE preparation good for IIT?',
    answer:
      'Physics Wallah JEE batches are taught by experienced faculty and have produced thousands of IIT selections. The combination of quality content and affordable pricing makes PW one of the top choices for JEE aspirants across India.',
  },
  {
    question: 'What is included in a PW JEE batch?',
    answer:
      'PW JEE batches typically include live and recorded video lectures, study materials, DPPs (Daily Practice Problems), test series, and doubt-solving sessions. Specific inclusions vary by batch — our ambassador will share complete details.',
  },
]

export const metadata = genMeta({
  title: 'PW JEE Batch Discount 2025 — Physics Wallah JEE Offers via Campus Ambassador',
  description:
    'Get exclusive discounts on Physics Wallah JEE Main and Advanced batches. Connect with our verified PW Campus Ambassador for the best PW JEE batch prices on WhatsApp.',
  path: '/pw-jee-discount',
  keywords: [
    'PW JEE discount',
    'Physics Wallah JEE batch discount',
    'PW Arjuna batch price',
    'PW Eklavya batch discount',
    'physics wallah JEE 2025 offer',
    'PW JEE campus ambassador',
  ],
})

export default function PWJEEDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwJeeFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Discounts', path: '/physics-wallah-discount' },
              { name: 'PW JEE Discount', path: '/pw-jee-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="pw-jee-discount" />
    </>
  )
}