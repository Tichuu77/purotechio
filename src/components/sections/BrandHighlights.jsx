import { useEffect, useRef } from 'react'
import { Droplets, Cpu, PenTool, Headphones } from 'lucide-react'

const highlights = [
  {
    icon: Droplets,
    title: 'Designed for Everyday Hydration',
    description: 'Water solutions crafted for daily convenience and modern living.',
  },
  {
    icon: Cpu,
    title: 'Modern Water Technology',
    description: 'Thoughtfully engineered products with a focus on quality and performance.',
  },
  {
    icon: PenTool,
    title: 'Thoughtful Product Design',
    description: 'Elegant aesthetics and user-focused design in every PUROTECH product.',
  },
  {
    icon: Headphones,
    title: 'Customer-Focused Support',
    description: 'Guidance and support through your product selection and ownership journey.',
  },
]

export default function BrandHighlights() {
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
    <section className="bg-white border-y border-slate-100">
      <div
        ref={ref}
        className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center px-4 ${
                  i < highlights.length - 1 ? 'lg:border-r lg:border-slate-100' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-water-50 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-water-600" />
                </div>
                <h3 className="font-heading text-sm font-bold text-navy-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
