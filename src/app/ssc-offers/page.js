import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
export const metadata = genMeta({
  title: 'SSC Exam Coaching Offers & Student Discounts 2024',
  description: 'Find SSC CGL, CHSL, MTS coaching discounts and government job preparation offers. Get verified SSC coaching offer details within 24 hours via free inquiry.',
  path: '/ssc-offers',
  keywords: ['SSC offers', 'SSC CGL discount', 'SSC coaching discount', 'government job coaching offers'],
})

export default function SSCOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'SSC Offers', path: '/ssc-offers' }])) }} />
      <CategoryPage slug="ssc-offers" />
    </>
  )
}
