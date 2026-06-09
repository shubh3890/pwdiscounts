import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { generateMetadata as genMeta } from '../../lib/seo'

export const metadata = genMeta({
  title: 'PW Discounts Blog — Physics Wallah Batch Guides & Discount Tips',
  description: 'Read expert guides on PW batch discounts, Physics Wallah ambassador program, PW coupon codes, JEE NEET UPSC batch prices and how to save on PW courses.',
  path: '/blog',
  keywords: ['pw discounts blog', 'physics wallah batch guide', 'pw ambassador guide', 'pw coupon code', 'pw batch price guide'],
})

const posts = [
  {
    slug: 'pw-ambassador-program',
    title: 'PW Campus Ambassador Program 2026 — Complete Guide',
    description: 'Everything you need to know about the Physics Wallah Campus Ambassador program — how to join, benefits, incentives and how ambassadors share exclusive PW batch discounts.',
    date: 'Jun 8, 2026',
    readTime: '5 min read',
    tag: 'Ambassador',
    featured: true,
  },
  {
    slug: 'pw-batch-discount-2026',
    title: 'How to Get PW Batch Discount in 2026 — Up to 50% Off',
    description: 'Step by step guide on how to get genuine Physics Wallah batch discounts through the official campus ambassador program. No fake coupon codes — just real savings.',
    date: 'Jun 8, 2026',
    readTime: '4 min read',
    tag: 'Discount Guide',
    featured: true,
  },
  {
    slug: 'pw-coupon-code',
    title: 'PW Coupon Code 2026 — What Actually Works',
    description: 'Searching for a PW coupon code? Here is the honest truth about Physics Wallah coupon codes and the better alternative that gets you real discounts directly.',
    date: 'Jun 8, 2026',
    readTime: '3 min read',
    tag: 'Coupon Code',
    featured: false,
  },
  {
    slug: 'pw-jee-batch-price',
    title: 'PW JEE Batch Price 2026 — Arjuna, Eklavya, Lakshya Complete List',
    description: 'Complete price guide for all Physics Wallah JEE batches including Arjuna, Eklavya and Lakshya. Plus how to get the best discount through the ambassador program.',
    date: 'Jun 8, 2026',
    readTime: '5 min read',
    tag: 'JEE',
    featured: false,
  },
  {
    slug: 'pw-neet-batch-price',
    title: 'PW NEET Batch Fees 2026 — Yakeen, Arjuna NEET Price & Discount',
    description: 'Complete fee guide for PW NEET batches including Yakeen and Arjuna NEET. How to get the best price on PW NEET preparation through campus ambassador discounts.',
    date: 'Jun 8, 2026',
    readTime: '4 min read',
    tag: 'NEET',
    featured: false,
  },
]

const tagColors = {
  'Ambassador': '#F59E0B',
  'Discount Guide': '#10B981',
  'Coupon Code': '#6366F1',
  'JEE': '#F43F5E',
  'NEET': '#3B82F6',
}

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-6">
              <Sparkles size={14} />
              PW Discounts Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              PW Batch Guides &{' '}
              <span className="text-gradient">Discount Tips</span>
            </h1>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Expert guides on Physics Wallah batches, ambassador program, discount strategies and how to save on PW courses.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-6">Featured</p>
            <div className="grid sm:grid-cols-2 gap-5 mb-14">
              {featured.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-card border border-white/5 rounded-2xl p-7 card-hover relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                      style={{ background: `${tagColors[post.tag]}22`, color: tagColors[post.tag], border: `1px solid ${tagColors[post.tag]}33` }}
                    >
                      {post.tag}
                    </span>
                    <h2 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-[#64748B]">
                        <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                      </div>
                      <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* All Posts */}
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-6">All Articles</p>
            <div className="space-y-4">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-5 bg-card border border-white/5 rounded-2xl p-5 card-hover"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${tagColors[post.tag]}22`, color: tagColors[post.tag], border: `1px solid ${tagColors[post.tag]}33` }}
                      >
                        {post.tag}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-3 text-xs text-[#64748B] mt-3">
                      <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 mt-2 text-[#64748B] group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border border-amber-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-display font-bold mb-3">
                Ready to Get Your <span className="text-gradient">PW Discount</span>?
              </h2>
              <p className="text-[#94A3B8] text-sm mb-6">
                Skip the reading — fill the form and our verified PW Campus Ambassador contacts you on WhatsApp within 2 hours.
              </p>
              <Link
                href="/physics-wallah-discount"
                className="inline-flex items-center gap-2 bg-primary text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-amber-400 transition-all"
              >
                Get PW Batch Discount <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
