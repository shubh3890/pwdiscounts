'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingDown } from 'lucide-react'
import Link from 'next/link'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID'

const badges = [
  '🎓 PW JEE',
  '🩺 PW NEET',
  '🏛️ PW UPSC & IAS',
  '📊 PW CA & Finance',
  '🛡️ PW SSC & Railway',
  '🏦 PW Banking',
  '⚔️ PW Defence',
  '📚 PW Vidyapeeth',
  '🎯 PW Entrance Exams',
  '💻 PW Skills & Tech',
  '🗺️ PW State Exams',
  '🎓 PW Professional',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          ✅ Verified PW Campus Ambassador Platform
          <Sparkles size={14} className="text-primary" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Get Exclusive{' '}
          <span className="text-gradient">PW Batch</span>
          <br />
          Discounts
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Connect with a verified Physics Wallah Campus Ambassador and unlock student discounts on PW JEE, NEET, Vidyapeeth, CA Foundation, and Skills batches — directly on WhatsApp.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2  bg-gradient-to-r from-primary to-amber-500 text-bg font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-200"
          >
            <TrendingDown size={18} />
            Unlock Student Discount
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="#categories"
            className="inline-flex items-center gap-2 glass text-[#F8FAFC] font-semibold text-base px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-200"
          >
            Browse Offers
          </Link>
        </motion.div>

        {/* Scrolling badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div className="flex gap-3 justify-center flex-wrap">
            {badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="inline-flex items-center gap-1.5 bg-surface/60 border border-white/10 text-[#CBD5E1] text-sm px-4 py-2 rounded-full"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
