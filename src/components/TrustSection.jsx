'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, ShieldCheck, RefreshCw, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: 1000, suffix: '+', label: 'Students Saved Money', color: '#F59E0B' },
  { icon: ShieldCheck, value: 50, suffix: '%', label: 'Max Discount Available', color: '#10B981' },
  { icon: RefreshCw, value: 7, suffix: 'x/wk', label: 'Offers Updated', color: '#6366F1' },
  { icon: Zap, value: 2, suffix: 'hr', label: 'Ambassador Reply Time', color: '#F43F5E' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 50
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-bold text-gradient">
      {count}{suffix}
    </span>
  )
}

export default function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Trusted Platform</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Why Students <span className="text-gradient">Trust PW Discounts</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-white/5 rounded-2xl p-6 text-center card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${stat.color}22`, border: `1px solid ${stat.color}33` }}
                >
                  <Icon size={22} style={{ color: stat.color }} />
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-[#94A3B8] text-sm mt-2">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
