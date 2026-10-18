import { useEffect, useRef, useState } from 'react'
import { Play, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  const sectionRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
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
    <section id="home" className="hero-gradient relative overflow-hidden">
      {/* Subtle water-inspired decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-water-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-aqua-200/15 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-water-600 mb-4">
              Pure Water. Better Living.
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
              A Better Way to{' '}
              <span className="relative">
                <span className="relative z-10">Experience Water</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-water-200/60 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              PUROTECH brings thoughtfully designed water purifiers and alkaline water ionizers to 
              modern homes. Explore solutions built for quality, convenience, and a better everyday 
              hydration experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#products">
                Explore Our Products
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="#videos">
                <Play size={16} className="text-water-600" />
                Watch Product Video
              </Button>
            </div>
          </div>

          {/* Right — Product Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-water-300/15 rounded-full blur-[60px]" />
            </div>

            <div className="relative">
              <img
                src="https://res.cloudinary.com/dxujnm2sl/image/upload/v1792335566/Premium_Purotech_Water_Ionizer_Studio_Shot_f1vavq.png"
                alt="Premium PUROTECH Water Ionizer — sleek studio product photograph"
                width={520}
                height={520}
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImgLoaded(true)}
                className={`relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transition-all duration-700 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
              {/* Label */}
              <div
                className={`absolute bottom-4 right-4 z-20 glass-card rounded-xl px-4 py-2.5 shadow-lg transition-all duration-700 delay-300 ${
                  imgLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-xs font-semibold text-navy-900">Designed for Modern Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
