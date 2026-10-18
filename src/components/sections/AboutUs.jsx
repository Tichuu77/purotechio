import { useEffect, useRef, useState } from 'react'
import { Heart, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function AboutUs() {
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
    <section id="about" className="bg-slate-50/50 py-20 lg:py-28">
      <div ref={ref} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-water-600 mb-3">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              About PUROTECH
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-5">
              PUROTECH is focused on bringing thoughtfully designed water solutions to modern homes
              and everyday life. Through a product-focused approach, an emphasis on usability, and a
              commitment to customer support, PUROTECH aims to make exploring water purification and
              alkaline water ionization solutions simpler and more convenient.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Every PUROTECH product reflects a philosophy of quality and purpose — combining
              modern design sensibilities with practical water solutions. The brand prioritizes
              product quality, customer guidance, and ongoing support as core values.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Product Quality',
                'Customer Support',
                'Modern Design',
                'Thoughtful Engineering',
              ].map((value) => (
                <div key={value} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-water-50 flex items-center justify-center shrink-0">
                    <Heart size={14} className="text-water-600" />
                  </div>
                  <span className="text-sm font-medium text-navy-800">{value}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="md" href="#contact">
              Connect With Our Team
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-water-100/40 rounded-full blur-[80px]" />
            </div>
            <img
              src="https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335568/PUROTECH_Alkaline_Water_Showcase_scfzkp.png"
              alt="PUROTECH Alkaline Water Showcase — product lifestyle image"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-xl transition-all duration-700 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
