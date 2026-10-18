import { Droplets } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const productLinks = [
  { label: 'Alkaline Water Ionizer', href: '#products' },
  { label: 'Premium Water Ionizer', href: '#products' },
  { label: 'Water Purification Solutions', href: '#products' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="navy-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Droplets size={20} className="text-aqua-300" />
              </div>
              <span className="font-heading text-xl font-extrabold tracking-tight">PUROTECH</span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed max-w-xs">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-aqua-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-aqua-300">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-aqua-300">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-navy-200">
              {siteConfig.contact.phone ? (
                <p>
                  Phone:{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </p>
              ) : (
                <p className="italic text-navy-300">Phone number coming soon</p>
              )}
              {siteConfig.contact.email ? (
                <p>
                  Email:{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </p>
              ) : (
                <p className="italic text-navy-300">Email coming soon</p>
              )}
              {siteConfig.contact.address ? (
                <p>{siteConfig.contact.address}</p>
              ) : (
                <p className="italic text-navy-300">Address coming soon</p>
              )}
            </div>

            {/* Social */}
            {(siteConfig.social.instagram || siteConfig.social.facebook || siteConfig.social.youtube) && (
              <div className="flex gap-3 mt-4">
                {/* Social icons would go here when URLs are provided */}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-300">
          <p>© {currentYear} PUROTECH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
