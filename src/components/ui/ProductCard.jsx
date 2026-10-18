import { useState } from 'react'
import Button from './Button'

export default function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-500 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-navy-50 to-water-50 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain p-6 product-image-hover transition-opacity duration-500 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 text-sm">
            Image unavailable
          </div>
        )}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-navy-200 border-t-water-500 rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{product.name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 mb-6">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-water-500 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Button variant="secondary" size="sm" href="#gallery" className="flex-1">
            View Details
          </Button>
          <Button variant="primary" size="sm" href="#contact" className="flex-1">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  )
}
