'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Atom, Stethoscope, BookOpen, Calculator, TrendingUp, Cpu, Shield, Landmark, Code, GraduationCap, BookMarked, Award } from 'lucide-react'

const iconMap = { Atom, Stethoscope, BookOpen, Calculator, TrendingUp, Cpu, Shield, Landmark, Code, GraduationCap, BookMarked, Award }

import { categories } from '../data/categories'

// const extraCategories = [
//   {
//     slug: null,
//     title: 'CUET',
//     shortTitle: 'CUET',
//     icon: 'GraduationCap',
//     description: 'Central University Entrance Test preparation offers and student discounts.',
//     color: 'from-cyan-500/20 to-sky-500/10',
//   },
//   {
//     slug: null,
//     title: 'Foundation Courses',
//     shortTitle: 'Foundation',
//     icon: 'BookMarked',
//     description: 'Class 8–10 foundation course offers for early competitive exam preparation.',
//     color: 'from-fuchsia-500/20 to-purple-500/10',
//   },
// ]

const allCategories = [...categories]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function CategoryHub() {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Explore Categories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Browse Offers by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
            Choose your exam category to explore available student discounts and educational offers.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {allCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || GraduationCap
            const CardWrapper = cat.slug ? Link : 'div'
            const wrapperProps = cat.slug ? { href: `/${cat.slug}` } : {}

            return (
              <motion.div key={cat.title} variants={item}>
                <CardWrapper
                  {...wrapperProps}
                  className={`group block bg-card border border-white/5 rounded-2xl p-6 card-hover relative overflow-hidden ${!cat.slug ? 'opacity-60 cursor-default' : ''}`}
                >
                  {/* Gradient bg on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                      style={{ background: `${cat.accent || '#F59E0B'}22`, border: `1px solid ${cat.accent || '#F59E0B'}33` }}
                    >
                      <Icon size={22} style={{ color: cat.accent || '#F59E0B' }} />
                    </div>

                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {cat.slug ? (
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Explore Offers
                        <ArrowRight size={14} />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[#64748B] text-sm font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
