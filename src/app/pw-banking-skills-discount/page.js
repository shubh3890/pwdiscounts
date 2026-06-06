import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which banking exam batches does PW offer?',
    answer: 'PW offers IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant and BFSI batches. Our ambassador will share complete batch details and current pricing on WhatsApp.',
  },
  {
    question: 'What PW Skills courses are available?',
    answer: 'PW Skills offers Digital Marketing, Data Science, Banking Skills and BFSI programs. Our campus ambassador will share course details, placement statistics and current pricing.',
  },
  {
    question: 'Does PW Banking include current affairs preparation?',
    answer: 'Yes. PW Banking batches include Banking Awareness, Current Affairs, Financial Awareness and all core subjects. Ask our ambassador for complete batch inclusions and pricing.',
  },
  {
    question: 'Is placement support available with PW Skills courses?',
    answer: 'Yes. PW Skills courses include placement preparation, resume building and hiring partner connections. Our ambassador will share detailed placement information for specific courses.',
  },
]

export const metadata = genMeta({
  title: 'PW Banking & Skills Discount 2025 — IBPS SBI RBI via PW Campus Ambassador',
  description: 'Get exclusive discounts on PW Banking IBPS SBI RBI and Skills course batches. Connect with our verified PW Campus Ambassador for best prices on WhatsApp.',
  path: '/pw-banking-skills-discount',
  keywords: ['PW Banking discount', 'PW IBPS batch offer', 'PW SBI PO price', 'Physics Wallah banking discount', 'PW skills course offer'],
})

export default function PWBankingSkillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW Banking & Skills', path: '/pw-banking-skills-discount' }])) }} />
      <CategoryPage slug="pw-banking-skills-discount" />
    </>
  )
}