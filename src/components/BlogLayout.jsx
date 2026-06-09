'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, Calendar, ChevronRight, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/4wK4pszQvZtrjpDn6'
const AMBASSADOR_FORM_URL = 'https://forms.gle/P2QkSPQZLgQ3a3pbA'

const relatedPosts = [
  { title: 'PW Ambassador Program — Complete Guide', href: '/blog/pw-ambassador-program', time: '5 min read' },
  { title: 'PW Batch Discount 2026 — How to Get', href: '/blog/pw-batch-discount-2026', time: '4 min read' },
  { title: 'PW Coupon Code — Does it Work?', href: '/blog/pw-coupon-code', time: '3 min read' },
  { title: 'PW JEE Batch Price — Complete List', href: '/blog/pw-jee-batch-price', time: '5 min read' },
  { title: 'PW NEET Batch Fees 2026', href: '/blog/pw-neet-batch-fees', time: '4 min read' },
]

export default function BlogLayout({ title, description, date, readTime, children, currentHref }) {
  const related = relatedPosts.filter(p => p.href !== currentHref).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#64748B] mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-[#94A3B8] truncate max-w-[200px]">{title}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs text-primary font-medium mb-6">
              <Sparkles size={12} />
              PW Discounts Blog
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#94A3B8] text-lg leading-relaxed mb-8"
            >
              {description}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 text-sm text-[#64748B]"
            >
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {readTime}
              </span>
            </motion.div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 prose-custom"
              >
                {children}

                {/* Bottom CTA */}
                <div className="mt-12 relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/15 via-card to-amber-900/10 border border-amber-500/20 p-8 text-center not-prose">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-amber-500/20 blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Get Your Discount</p>
                    <h3 className="text-2xl font-display font-bold mb-3">
                      Ready for Your <span className="text-gradient">PW Batch Discount</span>?
                    </h3>
                    <p className="text-[#94A3B8] text-sm mb-6">
                      Fill the form and our verified PW Campus Ambassador contacts you on WhatsApp within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-amber-500/25 hover:bg-amber-400 hover:scale-105 transition-all"
                      >
                        Get PW Batch Discount
                        <ArrowRight size={14} />
                      </a>
                      <a
                        href={AMBASSADOR_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 glass text-[#F8FAFC] font-semibold text-sm px-6 py-3 rounded-full hover:border-primary/30 transition-all"
                      >
                        Become Ambassador
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back to blog */}
                <div className="mt-8 not-prose">
                  <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#64748B] text-sm hover:text-primary transition-colors">
                    <ArrowLeft size={13} /> Back to Blog
                  </Link>
                </div>
              </motion.article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-amber-500/20 rounded-2xl p-6 sticky top-24"
                >
                  <div className="text-center mb-5">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">Get PW Discount</h3>
                    <p className="text-[#94A3B8] text-xs">Up to 50% off on PW batches</p>
                  </div>

                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-black font-bold text-sm px-5 py-3 rounded-full hover:bg-amber-400 transition-all mb-3"
                  >
                    🎁 Get Discount Now
                  </a>
                  <a
                    href={AMBASSADOR_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center glass text-[#CBD5E1] font-semibold text-sm px-5 py-3 rounded-full hover:border-primary/30 transition-all"
                  >
                    Become Ambassador
                  </a>

                  <p className="text-[#64748B] text-xs text-center mt-3">
                    Free · Reply in 2 hours · No spam
                  </p>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="font-display font-bold text-base mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {related.map((post, i) => (
                      <Link
                        key={i}
                        href={post.href}
                        className="group flex items-start justify-between gap-2 py-2 border-b border-white/5 last:border-0"
                      >
                        <span className="text-sm text-[#94A3B8] group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </span>
                        <ArrowRight size={12} className="flex-shrink-0 mt-1 text-[#64748B] group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-card border border-white/5 rounded-2xl p-6"
                >
                  <h3 className="font-display font-bold text-base mb-4">PW Batch Pages</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'PW JEE Discount', href: '/pw-jee-discount' },
                      { label: 'PW NEET Discount', href: '/pw-neet-discount' },
                      { label: 'PW UPSC Discount', href: '/pw-upsc-discount' },
                      { label: 'PW CA & Finance', href: '/pw-ca-finance-discount' },
                      { label: 'PW SSC & Railway', href: '/pw-ssc-discount' },
                      { label: 'All PW Discounts', href: '/physics-wallah-discount' },
                    ].map((l, i) => (
                      <Link
                        key={i}
                        href={l.href}
                        className="flex items-center justify-between text-sm text-[#64748B] hover:text-primary transition-colors py-1"
                      >
                        {l.label}
                        <ChevronRight size={12} />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
