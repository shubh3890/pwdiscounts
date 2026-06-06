import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
import { jeeFaqs } from '../../data/faq'

export const metadata = genMeta({
  title: 'JEE Preparation Offers & Student Discounts 2024',
  description: 'Find verified JEE Main and Advanced coaching discounts, student scholarships, and course offers. Submit a free inquiry and receive details within 24 hours.',
  path: '/jee-offers',
  keywords: ['JEE offers', 'JEE coaching discount', 'JEE Main student offers', 'IIT JEE preparation discount'],
})

export default function JEEOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(jeeFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'JEE Offers', path: '/jee-offers' }])) }} />
      <CategoryPage slug="jee-offers" />
    </>
  )
}
