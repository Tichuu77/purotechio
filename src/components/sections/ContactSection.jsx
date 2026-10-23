import { useState, useEffect, useRef } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle, MapPin, Mail } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'
import { products } from '../../data/products'

const initialFormState = {
  name: '',
  email: '',
  city: '',
  product: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }
    if (!form.city.trim()) errs.city = 'City is required'
    if (!form.product) errs.product = 'Please select a product'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')

    // If no endpoint is configured, show a clear message
    if (!siteConfig.formEndpoint) {
      // Simulate a brief delay to show the loading state
      await new Promise((r) => setTimeout(r, 800))
      setStatus('error')
      return
    }

    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialFormState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses = (name) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-water-500/30 focus:border-water-500 ${
      errors[name] ? 'border-red-300 bg-red-50/30' : 'border-slate-200 hover:border-slate-300'
    }`

  return (
    <section id="contact" className="navy-gradient py-20 lg:py-28">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Find the Right Water Solution for You"
          subtitle="Fill out the form below and the PUROTECH team will get back to you with product information, pricing, and guidance."
          light
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">
                  Enquiry Submitted!
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Thank you for your interest. The PUROTECH team will review your enquiry and get back to you soon.
                </p>
                <Button variant="secondary" size="md" onClick={() => setStatus('idle')}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-navy-800 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClasses('name')}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-navy-800 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClasses('email')}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* City */}
                  <div>
                    <label htmlFor="contact-city" className="block text-sm font-medium text-navy-800 mb-1.5">
                      City <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className={inputClasses('city')}
                    />
                    {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                  </div>

                  {/* Product */}
                  <div>
                    <label htmlFor="contact-product" className="block text-sm font-medium text-navy-800 mb-1.5">
                      Product of Interest <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="contact-product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className={inputClasses('product')}
                    >
                      <option value="">Select a product</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                    {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy-800 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your requirements, questions, or anything else..."
                    className={`${inputClasses('message')} resize-none`}
                  />
                </div>

                {/* Error state message */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
                    <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        {siteConfig.formEndpoint
                          ? 'Something went wrong. Please try again or contact us directly.'
                          : 'The enquiry form is not yet connected to a submission endpoint.'}
                      </p>
                      <p className="text-xs text-amber-600 mt-1">
                        {siteConfig.contact.email
                          ? `You can also email us directly at ${siteConfig.contact.email}`
                          : 'Please check back soon or reach out through available contact channels.'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  variant="water"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details (Email & Address) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.contact.email && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-water-500/20 flex items-center justify-center shrink-0 text-aqua-300">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider font-semibold text-aqua-300 mb-0.5">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-navy-100 hover:text-white transition-colors truncate block font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            )}

            {siteConfig.contact.address && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-start gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-water-500/20 flex items-center justify-center shrink-0 text-aqua-300 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-xs uppercase tracking-wider font-semibold text-aqua-300">
                      Our Address
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        siteConfig.contact.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/15 hover:bg-white/25 text-white transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                      Directions →
                    </a>
                  </div>
                  <p className="text-xs text-navy-100 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-navy-300 text-sm">
              {siteConfig.contact.whatsapp ? (
                <>
                  Or reach us on{' '}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aqua-300 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </>
              ) : (
                'You can also get in touch by filling out the form above.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
