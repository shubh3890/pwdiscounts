'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  GraduationCap,
  Star,
  Users,
  Zap,
  BadgeCheck,
  Gift,
  TrendingUp,
  MessageCircle,
  Plus,
  Minus,
  ChevronRight,
  Award,
  Sparkles,
  Target,
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const AMBASSADOR_FORM_URL = 'https://forms.gle/P2QkSPQZLgQ3a3pbA'
const DISCOUNT_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/4wK4pszQvZtrjpDn6'

const benefits = [
  {
    icon: Gift,
    title: 'Exclusive Batch Discounts',
    description: 'Get the best discounts on all PW batches for yourself — JEE, NEET, UPSC, CA, SSC and more.',
    color: '#F59E0B',
  },
  {
    icon: TrendingUp,
    title: 'Earn Incentives',
    description: 'Earn attractive incentives for every successful PW batch enrollment you facilitate.',
    color: '#10B981',
  },
  {
    icon: BadgeCheck,
    title: 'Official PW Certification',
    description: 'Receive an official Physics Wallah Campus Ambassador certificate for your resume and LinkedIn.',
    color: '#6366F1',
  },
  {
    icon: Users,
    title: 'Build Your Network',
    description: 'Connect with thousands of PW ambassadors across India and build a strong professional network.',
    color: '#F59E0B',
  },
  {
    icon: Star,
    title: 'Real Experience',
    description: 'Gain real-world marketing and communication experience that sets you apart in placements.',
    color: '#EC4899',
  },
  {
    icon: Zap,
    title: 'Priority Support',
    description: 'Get dedicated support from the PW Ambassador team for all your queries and needs.',
    color: '#F59E0B',
  },
]

const steps = [
  {
    step: '01',
    title: 'Fill Application Form',
    description: 'Click the button below and fill out the short application form. Takes less than 2 minutes.',
  },
  {
    step: '02',
    title: 'Get Contacted on WhatsApp',
    description: 'Our PW Ambassador team reviews your application and contacts you on WhatsApp within 48 hours.',
  },
  {
    step: '03',
    title: 'Get Onboarded',
    description: 'Complete a simple onboarding process and receive your official PW Campus Ambassador credentials.',
  },
  {
    step: '04',
    title: 'Start Earning',
    description: 'Share PW batch discounts with fellow students and start earning incentives for every enrollment.',
  },
]

const stats = [
  { value: '10K+', label: 'Active Ambassadors' },
  { value: '500+', label: 'Colleges Covered' },
  { value: '50%', label: 'Max Batch Discount' },
  { value: '48hr', label: 'Onboarding Time' },
]

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
          {isOpen ? <Minus size={13} className="text-primary" /> : <Plus size={13} className="text-primary" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
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

export default function PWAmbassadorClient({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <nav className="flex items-center justify-center gap-2 text-sm text-[#64748B] mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[#94A3B8]">PW Campus Ambassador</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              Official PW Ambassador Program 2025
              <Sparkles size={14} className="text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Become a{' '}
              <span className="text-gradient">PW Campus</span>
              <br />
              Ambassador
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Join the official Physics Wallah Campus Ambassador program. Get exclusive PW batch discounts,
              earn incentives, receive official certification and represent PW on your campus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
            >
              
               <a href={AMBASSADOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-black font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:bg-amber-400 hover:scale-105 transition-all duration-200"
              >
                <GraduationCap size={18} />
                Apply to Become Ambassador
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={DISCOUNT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass text-[#F8FAFC] font-semibold text-base px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-200"
              >
                Get PW Batch Discount Instead
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {stats.map((stat, i) => (
                <div key={i} className="glass rounded-2xl px-4 py-4 text-center">
                  <p className="text-2xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-[#64748B] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        </section>

        {/* BENEFITS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Join</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Ambassador <span className="text-gradient">Benefits</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-white/5 rounded-2xl p-6 card-hover group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${b.color}22`, border: `1px solid ${b.color}33` }}
                    >
                      <Icon size={22} style={{ color: b.color }} />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{b.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                How to <span className="text-gradient">Get Started</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-card border border-white/5 rounded-2xl p-6 card-hover"
                >
                  <div className="text-5xl font-display font-bold text-primary/10 mb-4">{s.step}</div>
                  <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{s.description}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ChevronRight size={20} className="text-primary/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href={AMBASSADOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-black font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:bg-amber-400 hover:scale-105 transition-all duration-200"
              >
                <Target size={18} />
                Apply Now — It's Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[#64748B] text-xs mt-4">
                Free to join · Official PW Program · Response within 48 hours
              </p>
            </motion.div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8">
                About the <span className="text-gradient">PW Campus Ambassador Program</span>
              </h2>
              {[
                'The PW Campus Ambassador program — also known as the Physics Wallah Brand Ambassador or PW Student Ambassador program — is an official initiative by Physics Wallah to empower students across India to represent the PW brand on their college campuses.',
                'As a PW Campus Ambassador you become the official point of contact for PW batch discounts and information at your institution. Fellow students searching for PW batch prices, PW coupon codes, or PW discount information come to you directly — and you help them get enrolled at the best available price.',
                'The PW Ambassador program is open to students from all colleges and universities across India. Whether you are preparing for JEE, NEET, UPSC, CA Foundation, SSC, Banking, or any other competitive exam — if you use PW and believe in its quality, you can apply to become a campus ambassador.',
                'PW Campus Ambassadors receive official certification from Physics Wallah, exclusive batch discounts for personal use, and attractive incentives for every successful enrollment facilitated. Many ambassadors also gain valuable marketing and communication experience that strengthens their professional profile.',
                'This platform — PW Discounts — is operated by a verified PW Campus Ambassador. We help students connect with the official ambassador program for both getting discounts and joining the ambassador community. Fill out the application form above and our team will contact you on WhatsApp within 48 hours.',
              ].map((para, i) => (
                <p key={i} className="text-[#94A3B8] leading-relaxed mb-5 text-sm">{para}</p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Common <span className="text-gradient">Questions</span>
              </h2>
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
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/15 via-card to-amber-900/10 border border-amber-500/20 p-10 sm:p-16 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-6">
                  <Award size={14} />
                  Join 10,000+ PW Ambassadors Across India
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold mb-5 leading-tight">
                  Ready to Become a{' '}
                  <span className="text-gradient">PW Campus Ambassador</span>?
                </h2>
                <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
                  Apply now for free. Get official PW certification, exclusive discounts,
                  and start earning incentives within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={AMBASSADOR_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-primary text-black font-bold text-base px-10 py-4 rounded-full shadow-xl shadow-amber-500/30 hover:bg-amber-400 hover:scale-105 transition-all duration-200"
                  >
                    <GraduationCap size={18} />
                    Apply to Become Ambassador
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={DISCOUNT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 glass text-[#F8FAFC] font-semibold text-base px-8 py-4 rounded-full hover:border-primary/30 transition-all"
                  >
                    <MessageCircle size={16} />
                    Get PW Batch Discount Instead
                  </a>
                </div>
                <p className="text-[#64748B] text-xs mt-6">
                  Free to join · Official PW Ambassador Program · WhatsApp response within 48 hours
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-surface/40 border border-white/5 rounded-xl px-5 py-4 text-center">
            <p className="text-[#64748B] text-xs leading-relaxed">
              <strong className="text-[#94A3B8]">Disclaimer:</strong> This page is operated by an independent Physics Wallah Campus Ambassador. It is not the official Physics Wallah website. PW and Physics Wallah are registered trademarks of PhysicsWallah Pvt. Ltd. Visit{' '}
              <a href="https://pw.live" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pw.live</a>{' '}
              for official content.
            </p>
          </div>
        </div>

      </main>
      <Footer />
      
    </>
  )
}