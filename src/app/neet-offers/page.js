import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
import { neetFaqs } from '../../data/faq'

export const metadata = genMeta({
  title: 'NEET UG Preparation Offers & Student Discounts 2024',
  description: 'Discover NEET UG coaching discounts, merit scholarships, and student offers for medical entrance preparation. Get details within 24 hours via free inquiry.',
  path: '/neet-offers',
  keywords: ['NEET offers', 'NEET coaching discount', 'NEET UG student offers', 'medical entrance discount'],
})

export default function NEETOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(neetFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'NEET Offers', path: '/neet-offers' }])) }} />
      <CategoryPage slug="neet-offers" />
    </>
  )
}
