'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID'

export default function CTA({ heading, subheading, label }) {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/15 via-card to-orange-500/10 border border-amber-500/20 p-10 sm:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/20 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-6">
              <Sparkles size={14} />
              🔥 Limited Time — Up to 50% Off on PW Batches
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-5 leading-tight">
              {heading || (
                <>
                  Ready to Get Your {' '}
                  <span className="text-gradient">PW Batch Discount </span>?
                </>
              )}
            </h2>

            <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
              {subheading || 'Fill out the form below and our verified PW Campus Ambassador will contact you on WhatsApp within 24 hours with your exclusive batch discount.'}
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
             className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber-400 text-black font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-200"
            >
              {label || 'Unlock Student Discount'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[#64748B] text-xs mt-6">
              Free · No spam · Ambassador contacts you on WhatsApp within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
