import { useState } from 'react'
import { Star, CheckCircle2, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Fallback initials if image fails to load
  const initials = testimonial.name
    ? testimonial.name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U'

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
      {/* Decorative subtle accent bar on top hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-water-500 to-aqua-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < testimonial.rating
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-200 fill-slate-200'
                }
              />
            ))}
          </div>
          <div className="w-8 h-8 rounded-full bg-water-50 text-water-600 flex items-center justify-center shrink-0">
            <Quote size={14} className="rotate-180" />
          </div>
        </div>

        {/* Product Tag */}
        {testimonial.product && (
          <div className="mb-3">
            <span className="inline-block text-[11px] font-semibold text-water-700 bg-water-50/80 px-2.5 py-0.5 rounded-full border border-water-100/60">
              {testimonial.product}
            </span>
          </div>
        )}

        {/* Review Text */}
        <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
          "{testimonial.review}"
        </p>
      </div>

      {/* Author & Image */}
      <div className="pt-4 border-t border-slate-100/80 flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 ring-2 ring-water-100 group-hover:ring-water-300 transition-all">
          {!imgError ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-water-100 text-water-700 font-bold text-sm">
              {initials}
            </div>
          )}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
              <div className="w-4 h-4 border-2 border-water-300 border-t-water-600 rounded-full animate-spin" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="font-heading font-bold text-navy-900 text-sm truncate">
              {testimonial.name}
            </h4>
            <span title="Verified Customer" className="shrink-0 text-emerald-500">
              <CheckCircle2 size={14} className="fill-emerald-100 text-emerald-600" />
            </span>
          </div>
          <p className="text-xs text-slate-500 truncate">
            {testimonial.role} {testimonial.location ? `• ${testimonial.location}` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

