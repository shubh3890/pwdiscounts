'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Flame } from 'lucide-react'
import { categories } from '../data/categories'
import { Atom, Stethoscope, Calculator, TrendingUp, Shield, Landmark } from 'lucide-react'

const iconMap = { Atom, Stethoscope, Calculator, TrendingUp, Shield, Landmark }

const featured = categories

export default function Offers() {
  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={16} className="text-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">Featured</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Latest <span className="text-gradient">Offers</span>
            </h2>
          </div>
          <Link
            href="#categories"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all"
          >
            View All Categories <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Atom
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/${cat.slug}`}
                  className="group block bg-card border border-white/5 rounded-2xl p-5 card-hover relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${cat.accent}22`, border: `1px solid ${cat.accent}33` }}
                    >
                      <Icon size={20} style={{ color: cat.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-display font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
                        <span className="flex-shrink-0 text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-sm line-clamp-2">{cat.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                        Explore Offers <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
