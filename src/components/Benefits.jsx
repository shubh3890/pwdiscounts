'use client'
import { motion } from 'framer-motion'
import { BadgeCheck, Heart, Clock, RefreshCcw } from 'lucide-react'

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Verified Offers',
    description: 'All educational offers and discount information is carefully verified before being shared with students.',
    color: '#F59E0B',
  },
  {
    icon: Heart,
    title: 'Student Friendly',
    description: 'Designed entirely around student needs — simple, transparent, and genuinely helpful throughout the process.',
    color: '#F43F5E',
  },
  {
    icon: Clock,
    title: 'Fast Assistance',
    description: 'Receive relevant offer details within 24 hours of submitting your inquiry, with responsive follow-up support.',
    color: '#10B981',
  },
  {
    icon: RefreshCcw,
    title: 'Updated Information',
    description: 'Our offer listings are updated multiple times weekly to ensure you never miss a limited-time student discount.',
    color: '#6366F1',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why PW Discount</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Built for <span className="text-gradient">Student Success</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            Everything on PW Discounts is designed to help students find the best educational opportunities without the noise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-white/5 rounded-2xl p-6 card-hover group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${b.color}22`, border: `1px solid ${b.color}33` }}
                >
                  <Icon size={20} style={{ color: b.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
