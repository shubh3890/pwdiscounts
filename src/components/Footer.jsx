import Link from 'next/link'
import { GraduationCap, Mail, ExternalLink } from 'lucide-react'
import { categories } from '../data/categories'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap size={18} className="text-bg" />
              </div>
              <span className="font-display font-bold text-lg text-gradient">PW Discounts</span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Verified Physics Wallah Campus Ambassador platform for exclusive PW batch discounts.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
            >
              <Mail size={13} />
              Submit Inquiry
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Exam Categories */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-4 uppercase tracking-wide">Exam Categories</h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-[#64748B] text-sm hover:text-primary transition-colors">
                    {cat.title} Offers
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-4 uppercase tracking-wide">More Offers</h4>
            <ul className="space-y-2.5">
              {categories.slice(5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-[#64748B] text-sm hover:text-primary transition-colors">
                    {cat.title} Offers
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Browse Offers', href: '#categories' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Submit Inquiry', href: FORM_URL, external: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#64748B] text-sm hover:text-primary transition-colors inline-flex items-center gap-1">
                      {l.label} <ExternalLink size={10} />
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[#64748B] text-sm hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          {/* Disclaimer */}
          <div className="bg-surface/40 border border-white/5 rounded-xl px-5 py-4 mb-6 text-center">
            <p className="text-[#64748B] text-xs leading-relaxed max-w-3xl mx-auto">
              ⚠️ <strong className="text-[#94A3B8]">Disclaimer:</strong> This website is operated by an independent Physics Wallah Campus Ambassador. It is NOT the official Physics Wallah website. PW and Physics Wallah are registered trademarks of PhysicsWallah Pvt. Ltd. For official PW content visit{' '}
              <a href="https://pw.live" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pw.live</a>.
               We help students connect with the right PW batch at the best available price through the official Campus Ambassador program.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#64748B] text-xs">
            <p>© {year} PW Discounts. All rights reserved.</p>
            <p>Made with ❤️ for Indian students</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
