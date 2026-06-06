import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const faqs = [
  {
    question: 'Which entrance exam batches does PW offer?',
    answer: 'PW offers CUET UG, CUET PG, IPMAT, NIMCET and CLAT batches. Our campus ambassador will share complete batch details, current pricing and available discounts on WhatsApp.',
  },
  {
    question: 'Is PW CUET batch good for central university admissions?',
    answer: 'Yes. PW CUET batches cover domain subjects and General Test comprehensively. PW CUET has helped thousands of students secure admissions in top central universities across India.',
  },
  {
    question: 'What does the PW IPMAT batch cover?',
    answer: 'PW IPMAT batch covers preparation for IIM Indore and IIM Rohtak five-year integrated MBA programs, including Quantitative Aptitude, Verbal Ability and Logical Reasoning. Ask our ambassador for current pricing.',
  },
  {
    question: 'Does PW offer CLAT preparation?',
    answer: 'Yes. PW CLAT batch covers Legal Reasoning, Logical Reasoning, English, Quantitative Techniques and Current Affairs for National Law University admissions. Our ambassador will share current batch details.',
  },
]

export const metadata = genMeta({
  title: 'PW Entrance Exam Discount 2025 — CUET IPMAT CLAT via PW Campus Ambassador',
  description: 'Get exclusive discounts on PW CUET UG, CUET PG, IPMAT, NIMCET and CLAT batches. Connect with our verified PW Campus Ambassador for best entrance exam prices.',
  path: '/pw-entrance-discount',
  keywords: ['PW CUET discount', 'PW IPMAT batch offer', 'PW CLAT price', 'Physics Wallah entrance exam discount', 'PW NIMCET batch'],
})

export default function PWEntrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'PW Discounts', path: '/physics-wallah-discount' }, { name: 'PW Entrance Exams', path: '/pw-entrance-discount' }])) }} />
      <CategoryPage slug="pw-entrance-discount" />
    </>
  )
}