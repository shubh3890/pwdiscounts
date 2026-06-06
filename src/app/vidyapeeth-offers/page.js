import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
export const metadata = genMeta({
  title: 'Vidyapeeth Distance Learning Offers & Course Discounts 2024',
  description: 'Find available Vidyapeeth and distance education course discounts, open university offers, and flexible learning promotions. Submit a free inquiry today.',
  path: '/vidyapeeth-offers',
  keywords: ['Vidyapeeth offers', 'distance learning discount', 'open university offers', 'flexible education discount'],
})

export default function VidyapeethOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Vidyapeeth Offers', path: '/vidyapeeth-offers' }])) }} />
      <CategoryPage slug="vidyapeeth-offers" />
    </>
  )
}
