import { generateMetadata as genMeta, faqSchema, breadcrumbSchema } from '../../lib/seo'
import PWAmbassadorClient from './PWAmbassadorClient'

const ambassadorFaqs = [
  {
    question: 'What is the PW Campus Ambassador program?',
    answer:
      'The PW Campus Ambassador program is an official Physics Wallah initiative where selected students represent PW on their campus, help fellow students get batch discounts, and earn incentives for successful enrollments.',
  },
  {
    question: 'Who can become a PW Campus Ambassador?',
    answer:
      'Any student currently enrolled in a college or university in India can apply to become a PW Campus Ambassador. You should be enthusiastic about education and comfortable connecting with fellow students.',
  },
  {
    question: 'What are the benefits of becoming a PW Campus Ambassador?',
    answer:
      'PW Campus Ambassadors get exclusive batch discounts for themselves, earn incentives for every successful enrollment they facilitate, get official PW certification, build their professional network, and gain real-world marketing experience.',
  },
  {
    question: 'How do I become a PW Campus Ambassador?',
    answer:
      'Fill out the application form on this page. Our team will review your application and contact you on WhatsApp within 48 hours with next steps for joining the official PW Ambassador Program.',
  },
  {
    question: 'Is the PW Ambassador program free to join?',
    answer:
      'Yes. Joining the PW Campus Ambassador program is completely free. There is no registration fee or any charges involved.',
  },
  {
    question: 'What does a PW Campus Ambassador do?',
    answer:
      'A PW Campus Ambassador helps fellow students discover PW batches, shares exclusive discount information, answers queries about PW courses, and facilitates enrollments through the official ambassador program.',
  },
]

export const metadata = genMeta({
title: 'PW Campus Ambassador Program 2025 — Join & Earn Incentives',
description: '✅ Become a verified PW Campus Ambassador. Get official certification, earn incentives, exclusive batch discounts. Apply free — response in 48 hours on WhatsApp.', path: '/pw-ambassador',
  keywords: [
    'pw ambassador',
    'pw campus ambassador',
    'physics wallah ambassador',
    'pw ambassador program',
    'pw campus ambassador program',
    'brand ambassador of pw',
    'pw student ambassador',
    'pw brand ambassador',
    'pw ambassador live',
    'become pw ambassador',
    'physics wallah campus ambassador',
    'pw ambassador benefits',
  ],
})

export default function PWAmbassadorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(ambassadorFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'PW Campus Ambassador', path: '/pw-ambassador' },
            ])
          ),
        }}
      />
      <PWAmbassadorClient faqs={ambassadorFaqs} />
    </>
  )
}