import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwVidyapeethFaqs = [
  {
    question: 'What courses does PW Vidyapeeth offer?',
    answer:
      'PW Vidyapeeth offers UG and PG degree programs, diploma courses, and professional certification programs with flexible online learning. Popular programs include BBA, BCA, MBA, MCA and more. Ask our ambassador for the full course list.',
  },
  {
    question: 'Is PW Vidyapeeth a recognized university?',
    answer:
      'PW Vidyapeeth partners with UGC-recognized universities for its degree programs. For the most accurate and updated accreditation details, our ambassador will share complete information on WhatsApp.',
  },
  {
    question: 'How much discount is available on PW Vidyapeeth courses?',
    answer:
      'Discount availability and amounts vary by program and enrollment period. Submit the form and our PW Campus Ambassador will share current Vidyapeeth course offers and pricing within 2 hours.',
  },
  {
    question: 'Can I study PW Vidyapeeth courses while preparing for competitive exams?',
    answer:
      'Yes. PW Vidyapeeth courses are designed for flexible online learning, making them suitable for students simultaneously preparing for JEE, NEET, CA, or other competitive examinations.',
  },
]

export const metadata = genMeta({
  title: 'PW Vidyapeeth Discount 2025 — Physics Wallah Vidyapeeth Course Offers',
  description:
    'Get exclusive discounts on PW Vidyapeeth degree and diploma programs. Connect with our verified PW Campus Ambassador for the best Vidyapeeth course prices on WhatsApp.',
  path: '/pw-vidyapeeth-discount',
  keywords: [
    'PW Vidyapeeth discount',
    'Physics Wallah Vidyapeeth offer',
    'Vidyapeeth course fees discount',
    'PW Vidyapeeth admission 2025',
    'pw vidyapeeth campus ambassador',
    'Vidyapeeth degree program discount',
  ],
})

export default function PWVidyapeethDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwVidyapeethFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Discounts', path: '/physics-wallah-discount' },
              { name: 'PW Vidyapeeth Discount', path: '/pw-vidyapeeth-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="pw-vidyapeeth-discount" />
    </>
  )
}