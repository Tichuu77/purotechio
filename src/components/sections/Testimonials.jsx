import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Star,
  ShieldCheck,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [userToggledPause, setUserToggledPause] = useState(false)

  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Determine cards per view based on viewport width
  useEffect(() => {
    const updateCardsPerView = () => {
      let nextCards = 3
      if (window.innerWidth < 640) {
        nextCards = 1
      } else if (window.innerWidth < 1024) {
        nextCards = 2
      }
      setCardsPerView(nextCards)
      setCurrentIndex((prev) => {
        const nextMax = Math.max(0, testimonials.length - nextCards)
        return Math.min(prev, nextMax)
      })
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)
  const activeIndex = Math.min(currentIndex, maxIndex)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentSafe = Math.min(prev, maxIndex)
      return currentSafe >= maxIndex ? 0 : currentSafe + 1
    })
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentSafe = Math.min(prev, maxIndex)
      return currentSafe <= 0 ? maxIndex : currentSafe - 1
    })
  }, [maxIndex])

  // Autoplay functionality (pauses on hover or if user manually paused)
  useEffect(() => {
    if (isPaused || userToggledPause) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, userToggledPause, nextSlide])

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const toggleAutoPlay = () => {
    setUserToggledPause((prev) => !prev)
  }

  return (
    <section id="testimonials" className="bg-slate-50/70 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          subtitle="Real stories from families, doctors, and wellness enthusiasts who trust PUROTECH for everyday pure and healthy alkaline hydration."
        />

        {/* Aggregate Trust Badge */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 -mt-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-heading font-bold text-navy-900 text-sm">4.9 / 5.0</span>
            <span className="text-xs text-slate-500">Overall Rating</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-300" />

          <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
            <ShieldCheck size={18} className="text-water-600" />
            <span>100% Verified Customer Feedback</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-300" />

          <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
            <HeartHandshake size={18} className="text-water-600" />
            <span>Dedicated After-Sales Service</span>
          </div>
        </div>

        {/* Slider Controls Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing{' '}
            <span className="text-navy-900 font-bold">
              {activeIndex + 1}–{Math.min(activeIndex + cardsPerView, testimonials.length)}
            </span>{' '}
            of <span className="text-navy-900 font-bold">{testimonials.length}</span> reviews
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-water-600 hover:border-water-300 hover:bg-water-50/50 transition-all shadow-xs cursor-pointer"
              title={userToggledPause ? 'Resume Auto-slide' : 'Pause Auto-slide'}
              aria-label={userToggledPause ? 'Resume Auto-slide' : 'Pause Auto-slide'}
            >
              {userToggledPause ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-water-600 hover:border-water-300 hover:bg-water-50/50 transition-all shadow-xs cursor-pointer active:scale-95"
              title="Previous reviews"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-water-600 hover:border-water-300 hover:bg-water-50/50 transition-all shadow-xs cursor-pointer active:scale-95"
              title="Next reviews"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider Carousel Container */}
        <div
          className="relative overflow-hidden -mx-3 px-1 py-4 focus:outline-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'ArrowRight') nextSlide()
          }}
          aria-roledescription="carousel"
          aria-label="Customer Testimonials Carousel"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 flex flex-col"
                aria-hidden={index < activeIndex || index >= activeIndex + cardsPerView}
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === i
                  ? 'w-8 h-2.5 bg-water-600'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={activeIndex === i ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 max-w-3xl mx-auto bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg mb-1 text-white">
              Ready to experience pure, alkaline water?
            </h4>
            <p className="text-sm text-navy-200">
              Speak with a PUROTECH water specialist for customized recommendations.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-water-500 hover:bg-water-600 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Enquire Today →
          </a>
        </div>
      </div>
    </section>
  )
}
