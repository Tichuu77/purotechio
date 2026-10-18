import { useEffect, useRef } from 'react'
import { Search, PackageCheck, MessageCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Explore Your Water Needs',
    description:
      'Browse the PUROTECH product range and learn about the different water purification and ionization solutions available.',
  },
  {
    icon: PackageCheck,
    step: '02',
    title: 'Find a Suitable Solution',
    description:
      'Compare features, design, and product details to identify the PUROTECH product that fits your home and preferences.',
  },
  {
    icon: MessageCircle,
    step: '03',
    title: 'Contact the Team',
    description:
      'Reach out to the PUROTECH team for pricing, availability, installation guidance, and any further product questions.',
  },
]

export default function HowItWorks() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Getting Started Is Simple"
          subtitle="Three easy steps to finding the right PUROTECH water solution for you."
        />

        <div ref={ref} className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[3.25rem] left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-water-200 via-water-400 to-water-200" />

          {steps.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="relative z-10 w-[4.25rem] h-[4.25rem] rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center shadow-lg shadow-navy-900/20 mb-6">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-bold tracking-widest text-water-500 uppercase mb-2">
                  Step {item.step}
                </span>

                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
