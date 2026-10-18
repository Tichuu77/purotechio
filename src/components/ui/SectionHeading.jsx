import { useEffect, useRef } from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
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
    <div ref={ref} className={`reveal-section mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? 'text-aqua-300' : 'text-water-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-navy-200' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
