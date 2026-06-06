import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
import { caFaqs } from '../../data/faq'

export const metadata = genMeta({
  title: 'CA Foundation Course Offers & Student Discounts 2024',
  description: 'Discover CA Foundation coaching discounts, study material offers, and scholarship programs. Get verified offer details within 24 hours via free inquiry.',
  path: '/ca-foundation-offers',
  keywords: ['CA Foundation offers', 'CA course discount', 'ICAI coaching discount', 'CA preparation offers'],
})

export default function CAFoundationOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(caFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'CA Foundation Offers', path: '/ca-foundation-offers' }])) }} />
      <CategoryPage slug="ca-foundation-offers" />
    </>
  )
}
