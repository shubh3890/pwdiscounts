import BlogLayout from '../../../components/BlogLayout'
import { generateMetadata as genMeta, faqSchema } from '../../../lib/seo'

const faqs = [
  {
    question: 'How much discount is available on PW batches?',
    answer: 'PW batch discounts through the campus ambassador program can go up to 50% depending on the batch, enrollment timing, and ongoing offers. Submit an inquiry to get the exact current discount for your chosen batch.',
  },
  {
    question: 'Do PW coupon codes work for discounts?',
    answer: 'PW coupon codes found online are often outdated or fake. The most reliable way to get a genuine PW batch discount is through the official campus ambassador program — no coupon codes needed.',
  },
  {
    question: 'How quickly do I get the discount details?',
    answer: 'After submitting the inquiry form on pwdiscounts.in, our verified PW Campus Ambassador contacts you on WhatsApp within 2 hours with the exact discount available on your chosen batch.',
  },
  {
    question: 'Is the discount available on all PW batches?',
    answer: 'Yes. Discounts are available on JEE, NEET, UPSC, CA Foundation, SSC, Railway, Banking, Defence, Skills and all other PW batch categories through the campus ambassador program.',
  },
]

export const metadata = genMeta({
  title: 'How to Get PW Batch Discount 2026 — Up to 50% Off on Physics Wallah',
  description: 'Step by step guide on how to get genuine Physics Wallah batch discounts in 2026. Up to 50% off on PW JEE, NEET, UPSC, CA, SSC batches through campus ambassador program.',
  path: '/blog/pw-batch-discount-2026',
  keywords: ['pw batch discount', 'physics wallah discount 2026', 'pw discount', 'pw batch offer', 'how to get pw discount', 'physics wallah batch discount'],
})

export default function PWBatchDiscountBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <BlogLayout
        title="How to Get PW Batch Discount in 2026 — Up to 50% Off"
        description="Step by step guide on getting genuine Physics Wallah batch discounts. No fake coupon codes — just real savings through the official campus ambassador program."
        date="Jun 8, 2026"
        readTime="4 min read"
        currentHref="/blog/pw-batch-discount-2026"
      >
        <div className="blog-content space-y-6 text-[#CBD5E1] leading-relaxed">

          <h2 className="text-2xl font-display font-bold text-white">Can You Really Get Up to 50% Off on PW Batches?</h2>
          <p>Yes — and it is more straightforward than most students think. Physics Wallah offers genuine discounts through their official Campus Ambassador program. These are not fake coupon codes found on random websites. They are real pricing arrangements that verified ambassadors can share directly with students.</p>
          <p>The discount amount varies by batch, enrollment timing, and current offers. In many cases students have saved between ₹1,000 and ₹5,000 on their PW batch enrollment through this route.</p>

          <h2 className="text-2xl font-display font-bold text-white mt-8">Why PW Coupon Codes Don't Work</h2>
          <p>If you have been searching for "PW coupon code" or "Physics Wallah discount code" online — you have probably noticed that most codes either don't work, are expired, or give only a tiny discount of ₹50-100.</p>
          <p>This is because PW has moved away from public coupon codes as their primary discount mechanism. Instead the official discount channel is now the Campus Ambassador program — where ambassadors share exclusive pricing directly with interested students on WhatsApp.</p>
          <p>This approach works better for students too because the discount is personalised to your specific batch interest and enrollment timeline rather than a generic code that may or may not apply.</p>

          <h2 className="text-2xl font-display font-bold text-white mt-8">Step by Step — How to Get Your PW Discount</h2>
          <ul className="list-none space-y-4 my-4">
            {[
              { title: 'Identify your target PW batch', desc: 'Know which batch you want — JEE, NEET, UPSC, CA, SSC or any other category. Having this ready speeds up the process.' },
              { title: 'Visit pwdiscounts.in', desc: 'Go to the relevant batch page on our website — for example pwdiscounts.in/pw-jee-discount for JEE or pwdiscounts.in/pw-neet-discount for NEET.' },
              { title: 'Fill the inquiry form', desc: 'Fill out the short inquiry form with your name, WhatsApp number, target batch and city. Takes less than 2 minutes.' },
              { title: 'Get contacted on WhatsApp', desc: 'Our verified PW Campus Ambassador will contact you on WhatsApp within 2 hours with the current pricing, available discount, and enrollment details.' },
              { title: 'Enroll at discounted price', desc: 'Once you confirm the batch and discount, enroll directly through the ambassador at the best available price.' },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 bg-card border border-white/5 rounded-xl p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-black font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-white mb-1">{step.title}</p>
                  <p className="text-[#94A3B8] text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-bold text-white mt-8">Which PW Batches Have Discounts Available?</h2>
          <p>Discounts are available across all major PW batch categories:</p>
          <div className="grid sm:grid-cols-2 gap-3 my-4">
            {[
              'PW JEE Main & Advanced — Arjuna, Eklavya, Lakshya',
              'PW NEET UG — Yakeen, Arjuna NEET',
              'PW UPSC & State PSC batches',
              'PW CA Foundation & CA Inter',
              'PW SSC CGL, CHSL, Railway',
              'PW Banking — IBPS, SBI, RBI',
              'PW Defence — NDA, Agniveer, CDS',
              'PW Skills — Coding, Data Science',
              'PW Vidyapeeth — Degree Programs',
              'PW Entrance — CUET, IPMAT, CLAT',
            ].map((batch, i) => (
              <div key={i} className="flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-3 text-sm">
                <span className="text-primary">✓</span>
                <span>{batch}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold text-white mt-8">When Are Discounts Highest?</h2>
          <p>PW batch discounts tend to be highest during these periods:</p>
          <ul className="list-none space-y-2 my-4">
            {[
              'New batch launch periods — when PW launches a new session batch',
              'Early enrollment windows — a few weeks before batch start date',
              'Festive seasons — Diwali, New Year, and other major festivals',
              'After major exam results — JEE Main results, NEET results etc',
              'Mid-session — when batches are already running and seats are available',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-amber-500 mt-0.5">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-bold text-white mt-8">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-[#94A3B8] text-sm">{faq.answer}</p>
            </div>
          ))}

          <div className="bg-surface/40 border border-white/5 rounded-xl p-4 mt-8">
            <p className="text-[#64748B] text-xs">
              <strong className="text-[#94A3B8]">Disclaimer:</strong> pwdiscounts.in is operated by an independent PW Campus Ambassador and is not the official Physics Wallah website. Visit pw.live for official content.
            </p>
          </div>
        </div>
      </BlogLayout>
    </>
  )
}
