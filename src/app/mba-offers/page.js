import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
import { mbaFaqs } from '../../data/faq'

export const metadata = genMeta({
  title: 'MBA Entrance Coaching Offers & Student Discounts 2024',
  description: 'Find CAT, XAT, SNAP and MBA entrance coaching discounts and scholarship programs. Submit a free inquiry and get details in 24 hours.',
  path: '/mba-offers',
  keywords: ['MBA offers', 'CAT coaching discount', 'MBA entrance discount', 'CAT preparation offers'],
})

export default function MBAOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(mbaFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'MBA Offers', path: '/mba-offers' }])) }} />
      <CategoryPage slug="mba-offers" />
    </>
  )
}
