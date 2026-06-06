import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, breadcrumbSchema } from '../../lib/seo'

export const metadata = genMeta({
  title: 'GATE Exam Coaching Offers & Student Discounts 2024',
  description: 'Discover GATE coaching discounts, test series offers, and student promotions for engineering graduates. Get verified GATE offer details via free inquiry.',
  path: '/gate-offers',
  keywords: ['GATE offers', 'GATE coaching discount', 'GATE preparation discount', 'GATE test series offers'],
})

export default function GATEOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'GATE Offers', path: '/gate-offers' }])) }} />
      <CategoryPage slug="gate-offers" />
    </>
  )
}
