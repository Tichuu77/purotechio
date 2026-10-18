import { useEffect, useRef, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { spotlightProduct } from '../../data/products'

export default function ProductSpotlight() {
  const ref = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

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

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-water-100 to-aqua-50 rounded-full blur-[80px] opacity-60" />
            </div>
            <img
              src={spotlightProduct.image}
              alt={`${spotlightProduct.name} — product showcase`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`relative z-10 w-full max-w-lg rounded-2xl transition-all duration-700 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-water-600 mb-3">
              Featured Product
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
              {spotlightProduct.heading}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {spotlightProduct.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {spotlightProduct.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-water-50 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-water-600" />
                  </div>
                  <span className="text-sm text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" href="#contact">
                Enquire About This Product
                <ArrowRight size={16} />
              </Button>
              <Button variant="ghost" size="md" href="#gallery">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
