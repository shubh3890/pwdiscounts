import CategoryPage from '../../components/CategoryPage'
import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
export const metadata = genMeta({
  title: 'Skills & Technology Course Offers & Student Discounts 2024',
  description: 'Find online skill development and technology course discounts, coding bootcamp offers, and platform subscription promotions. Get verified details via free inquiry.',
  path: '/skills-offers',
  keywords: ['online course offers', 'skill development discount', 'coding course discount', 'technology course offers'],
})

export default function SkillsOffersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Skills Offers', path: '/skills-offers' }])) }} />
      <CategoryPage slug="skills-offers" />
    </>
  )
}
