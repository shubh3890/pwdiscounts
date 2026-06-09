import BlogLayout from '../../../components/BlogLayout'
import { generateMetadata as genMeta, faqSchema } from '../../../lib/seo'
const faqs = [
  {
    question: 'What is the price of PW Arjuna batch for JEE?',
    answer: 'PW Arjuna JEE batch pricing varies by session and enrollment timing. Through our verified PW Campus Ambassador you can get the current Arjuna batch price and available discount directly on WhatsApp within 2 hours.',
  },
  {
    question: 'Which PW JEE batch is best — Arjuna, Eklavya or Lakshya?',
    answer: 'Arjuna is the flagship comprehensive batch, Eklavya is designed for focused preparation, and Lakshya targets advanced JEE Advanced preparation. The right batch depends on your current level and target. Our ambassador will guide you.',
  },
  {
    question: 'How much discount is available on PW JEE batches?',
    answer: 'PW JEE batch discounts through the campus ambassador program can go up to 50% depending on the batch and enrollment timing. Fill the inquiry form to get exact current pricing.',
  },
  {
    question: 'Is PW JEE batch good for IIT preparation?',
    answer: 'Yes. PW JEE batches are taught by experienced faculty and have produced thousands of IIT selections. The quality of content combined with affordable pricing makes PW one of the top choices for JEE aspirants.',
  },
]

export const metadata = genMeta({
  title: 'PW JEE Batch Price 2026 — Arjuna, Eklavya, Lakshya Fees & Discount',
  description: 'Complete price guide for PW JEE batches 2026 — Arjuna, Eklavya, Lakshya. How to get up to 50% discount on Physics Wallah JEE Main and Advanced batches via campus ambassador.',
  path: '/blog/pw-jee-batch-price',
  keywords: ['pw jee batch price', 'pw arjuna batch price', 'pw eklavya batch fees', 'pw lakshya batch price', 'physics wallah jee batch price 2026', 'pw jee discount'],
})

export default function PWJEEBatchPriceBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BlogLayout
        title="PW JEE Batch Price 2026 — Arjuna, Eklavya, Lakshya Complete Guide"
        description="Complete price guide for all Physics Wallah JEE batches including Arjuna, Eklavya and Lakshya — plus how to get the best discount through the ambassador program."
        date="Jun 8, 2026"
        readTime="5 min read"
        currentHref="/blog/pw-jee-batch-price"
      >
        <div className="blog-content space-y-6 text-[#CBD5E1] leading-relaxed">

          <h2 className="text-2xl font-display font-bold text-white">PW JEE Batch Overview 2026</h2>
          <p>Physics Wallah offers multiple JEE preparation batches designed for different preparation levels, timelines, and budgets. The three most popular PW JEE batches are Arjuna, Eklavya, and Lakshya — each targeting a specific type of JEE aspirant.</p>
          <p>PW JEE batches are available in both online and offline formats. Online batches include live classes, recorded lectures, DPPs and test series. Offline batches are available at PW centres across major cities.</p>

          <h2 className="text-2xl font-display font-bold text-white mt-8">PW Arjuna Batch — JEE</h2>
          <p>Arjuna is PW's flagship JEE preparation batch and the most popular choice among JEE aspirants. The Arjuna batch is designed for students in Class 11 and 12 who want comprehensive JEE Main and Advanced preparation.</p>
          <div className="bg-card border border-white/5 rounded-xl p-5 my-4">
            <h3 className="font-bold text-primary mb-3">Arjuna JEE Batch Includes</h3>
            <ul className="text-sm space-y-2">
              {['Complete Physics, Chemistry, Mathematics from Class 11 and 12', 'Live classes with experienced JEE faculty', 'Recorded lectures for revision', 'Daily Practice Problems (DPPs)', 'Regular chapter tests and mock tests', 'Full-length JEE Main and Advanced mock tests', 'Doubt-solving sessions'].map((item, i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-primary">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold text-white mt-8">PW Eklavya Batch — JEE</h2>
          <p>Eklavya is designed for students who want focused JEE preparation with a structured approach. It is particularly popular among students who are already familiar with the basics and want intensive practice and test preparation.</p>

          <h2 className="text-2xl font-display font-bold text-white mt-8">PW Lakshya Batch — JEE</h2>
          <p>Lakshya is PW's advanced JEE batch targeting students who are aiming specifically for JEE Advanced and IIT admissions. The curriculum is more intensive and covers advanced problem solving beyond the standard JEE Main level.</p>

          <h2 className="text-2xl font-display font-bold text-white mt-8">How to Get the Best PW JEE Batch Price</h2>
          <p>PW JEE batch prices vary by session, enrollment timing, and available offers. The most reliable way to get the current best price is through a verified PW Campus Ambassador.</p>
          <p>Ambassadors have access to pricing that is not publicly listed and can share exclusive discounts directly with students on WhatsApp. The process takes less than 5 minutes and you get a response within 2 hours.</p>

          <div className="bg-card border border-amber-500/20 rounded-xl p-5 my-6">
            <h3 className="font-bold text-primary mb-2">When to Enroll for Best Discount</h3>
            <ul className="text-sm space-y-2 text-[#94A3B8]">
              {[
                'Early enrollment — before the batch start date gives the best pricing',
                'New session launch — PW often runs special pricing for new batches',
                'After JEE Main results — promotional offers are common during this period',
                'Festive seasons — significant discounts during Diwali and New Year',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-amber-500">→</span>{tip}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold text-white mt-8">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-[#94A3B8] text-sm">{faq.answer}</p>
            </div>
          ))}

          <div className="bg-surface/40 border border-white/5 rounded-xl p-4 mt-8">
            <p className="text-[#64748B] text-xs">
              <strong className="text-[#94A3B8]">Disclaimer:</strong> pwdiscounts.in is operated by an independent PW Campus Ambassador. Batch pricing mentioned is approximate and subject to change. Contact our ambassador for current exact pricing. Not the official Physics Wallah website.
            </p>
          </div>
        </div>
      </BlogLayout>
    </>
  )
}
