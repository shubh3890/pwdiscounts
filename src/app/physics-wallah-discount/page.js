import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
const pwMainFaqs = [
  {
    question: 'How can I get a Physics Wallah batch discount?',
    answer:
      'Fill out the inquiry form on this page. Our verified PW Campus Ambassador will contact you on WhatsApp within 2 hours with the latest available PW batch discounts for JEE, NEET, Vidyapeeth, CA Foundation, and Skills courses.',
  },
  {
    question: 'Are you an official Physics Wallah Campus Ambassador?',
    answer:
      'Yes. This platform is operated by a verified Physics Wallah Campus Ambassador as part of the official PW Ambassador Program. We are not the official PW website (pw.live) but we are an authorized ambassador who can provide genuine batch discounts.',
  },
  {
    question: 'What PW batches can I get a discount on?',
    answer:
      'Through our campus ambassador program, discounts are available on PW JEE batches (Arjuna, Eklavya, Lakshya), PW NEET batches (Yakeen, Arjuna NEET), PW Vidyapeeth programs, PW CA Foundation batches, and PW Skills courses.',
  },
  {
    question: 'Is Physics Wallah worth it for competitive exam preparation?',
    answer:
      'Physics Wallah is India\'s most affordable and highly trusted ed-tech platform with millions of students. PW faculty includes top educators with proven track records. With our ambassador discounts, PW batches become even more accessible.',
  },
  {
    question: 'How do I contact the PW Campus Ambassador directly?',
    answer:
      'Fill out the inquiry form on any page of this website. Our PW Campus Ambassador will reach out to you personally on WhatsApp within 2 hours with batch details, pricing, and available discounts.',
  },
  {
    question: 'Is pwdiscounts.in the official PW website?',
    answer:
      'No. pwdiscounts.in is an independent platform operated by a PW Campus Ambassador. The official Physics Wallah website is pw.live. We are part of the official ambassador program and provide genuine discounts — but we are not PW\'s corporate website.',
  },
]

export const metadata = genMeta({
 title: 'PW Campus Ambassador — Get Up to 50% Off on PW Batches',
description: '✅ Verified PW Campus Ambassador. Get exclusive discounts on PW JEE, NEET, UPSC, CA, SSC batches. Fill form — ambassador contacts you in 2 hours on WhatsApp.', path: '/physics-wallah-discount',
  keywords: [
    'Physics Wallah discount',
    'PW discount 2025',
    'PW batch discount',
    'physics wallah campus ambassador',
    'pw.live discount',
    'PW JEE NEET discount',
    'physics wallah offer code',
    'PW batch best price',
    'pwdiscounts',
  ],
})

export default function PhysicsWallahDiscountPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pwMainFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Physics Wallah Discount', path: '/physics-wallah-discount' },
            ])
          ),
        }}
      />
      <CategoryPage slug="physics-wallah-discount" />
    </>
  )
}