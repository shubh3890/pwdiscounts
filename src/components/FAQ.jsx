'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { homeFaqs } from '../data/faq'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden bg-card">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/2 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#F1F5F9] text-sm sm:text-base">{faq.question}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          {isOpen ? (
            <Minus size={13} className="text-primary" />
          ) : (
            <Plus size={13} className="text-primary" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-[#94A3B8] text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ faqs = homeFaqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-[#94A3B8] mt-4">
            Everything students ask before submitting an inquiry.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
