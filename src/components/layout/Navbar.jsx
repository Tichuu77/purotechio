import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-extrabold text-base leading-none">P</span>
            </div>
            <span className="font-heading text-xl font-extrabold text-navy-900 tracking-tight group-hover:text-navy-700 transition-colors">
              PUROTECH
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" href="#contact">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-navy-50 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} className="text-navy-900" /> : <Menu size={24} className="text-navy-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/20 backdrop-blur-sm" onClick={closeMobile} />
        <div
          className={`relative bg-white border-t border-slate-100 shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block px-4 py-3 text-base font-medium text-navy-800 hover:text-navy-900 hover:bg-navy-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <Button variant="primary" size="md" href="#contact" onClick={closeMobile} className="w-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
