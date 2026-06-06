import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, breadcrumbSchema } from '../../lib/seo'

export const metadata = genMeta({
  title: 'Banking Exam Coaching Offers & Student Discounts 2024',
  description: 'Discover IBPS PO, SBI PO, RBI banking exam coaching discounts and student offers. Get verified banking preparation offer details within 24 hours.',
  path: '/banking-offers',
  keywords: ['banking offers', 'IBPS coaching discount', 'SBI PO preparation offers', 'banking exam discount'],
})

export default function BankingOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Banking Offers', path: '/banking-offers' }])) }} />
      <CategoryPage slug="banking-offers" />
    </>
  )
}
