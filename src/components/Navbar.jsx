'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'

const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://forms.gle/YOUR_FORM_ID'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Offers',
    href: '#offers',
   children: [
  { label: '— PW Batches —', href: '/physics-wallah-discount' },
  { label: 'PW JEE', href: '/pw-jee-discount' },
  { label: 'PW NEET & Medical', href: '/pw-neet-discount' },
  { label: 'PW CA & Finance', href: '/pw-ca-finance-discount' },
  { label: 'PW Civil Services', href: '/pw-upsc-discount' },
  { label: 'PW SSC & Railway', href: '/pw-ssc-discount' },
  { label: 'PW Banking & Skills', href: '/pw-banking-skills-discount' },
  { label: 'PW State Exams', href: '/pw-state-exams-discount' },
  { label: 'PW Defence', href: '/pw-defence-discount' },
  { label: 'PW Entrance Exams', href: '/pw-entrance-discount' },
  { label: 'PW Professional', href: '/pw-professional-discount' },
  { label: 'PW Vidyapeeth', href: '/pw-vidyapeeth-discount' },
  { label: 'PW Skills & Tech', href: '/pw-skills-discount' },
],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
  { label: 'Become Ambassador', href: '/pw-ambassador' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <GraduationCap size={18} className="text-black" />
          </div>
          <span className="font-display font-bold text-lg text-gradient">PW Discounts</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <button
                  className="flex items-center gap-1 text-sm text-[#94A3B8] hover:text-primary transition-colors"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 glass rounded-xl shadow-xl shadow-black/30 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#CBD5E1] hover:text-primary hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm text-[#94A3B8] hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transition-all duration-200"
          >
            Unlock Student Discount
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#94A3B8] hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <p className="text-xs uppercase tracking-widest text-[#64748B] px-3 py-2">{link.label}</p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-[#CBD5E1] hover:text-primary rounded-lg hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm text-[#CBD5E1] hover:text-primary rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="block text-center bg-gradient-to-r from-primary to-amber-500 text-white font-semibold text-sm px-5 py-3 rounded-full"
                >
                  Unlock Student Discount
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
