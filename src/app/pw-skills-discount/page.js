import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwSkillsFaqs = [
  {
    question: 'What courses are available on PW Skills?',
    answer:
      'PW Skills offers courses in Full Stack Web Development, Data Science, Python, Java, DSA, Cloud Computing, Cybersecurity, and more. All courses are designed for job market readiness with placement support.',
  },
  {
    question: 'How much discount is available on PW Skills courses?',
    answer:
      'PW Skills course discounts vary by program and enrollment period. Submit the form and our campus ambassador will share the latest pwskills.com course offers and pricing on WhatsApp within 2 hours.',
  },
  {
    question: 'Does PW Skills provide placement assistance?',
    answer:
      'Yes. PW Skills programs include placement support, resume building, mock interviews, and industry connections. Our ambassador can share detailed placement statistics for specific courses.',
  },
  {
    question: 'Is PW Skills good for freshers and beginners?',
    answer:
      'Yes. PW Skills courses are designed to take students from beginner to job-ready level. No prior coding experience is required for most programs. Courses include mentorship and live doubt-solving.',
  },
]

export const metadata = genMeta({
  title: 'PW Skills Course Discount 2025 — pwskills.com Offers via Campus Ambassador',
  description:
    'Get exclusive discounts on PW Skills coding and technology courses. Connect with our verified PW Campus Ambassador for the best pwskills.com course prices on WhatsApp.',
  path: '/pw-skills-discount',
  keywords: [
    'PW Skills discount',
    'pwskills course discount',
    'Physics Wallah coding course offer',
    'PW Skills price 2025',
    'pwskills campus ambassador discount',
    'PW full stack discount',
    'PW data science course offer',
  ],
})

export default function PWSkillsDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwSkillsFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Discounts', path: '/physics-wallah-discount' },
              { name: 'PW Skills Discount', path: '/pw-skills-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="pw-skills-discount" />
    </>
  )
}