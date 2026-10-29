import { useState, useCallback, useMemo } from 'react'
import { ZoomIn } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ImageLightbox from '../ui/ImageLightbox'
import { galleryImages } from '../../data/gallery'

export default function ProductGallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const categories = useMemo(
    () => [
      { id: 'all', label: 'All Photos & Guides', count: galleryImages.length },
      {
        id: 'product',
        label: 'Product Showcase',
        count: galleryImages.filter((img) => img.category === 'product').length,
      },
      {
        id: 'infographic',
        label: 'Health Guides & Infographics',
        count: galleryImages.filter((img) => img.category === 'infographic').length,
      },
    ],
    []
  )

  const filteredImages = useMemo(() => {
    if (activeTab === 'all') return galleryImages
    return galleryImages.filter((img) => img.category === activeTab)
  }, [activeTab])

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(-1)

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length)
  }, [filteredImages.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }, [filteredImages.length])

  return (
    <section id="gallery" className="bg-slate-50/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery & Knowledge"
          title="Every Detail. Every Angle."
          subtitle="Explore the PUROTECH collection through premium product photography and certified health science infographics."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id)
                  setLightboxIndex(-1)
                }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-water-600 text-white shadow-md shadow-water-600/25 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content-adaptive Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {filteredImages.map((img, i) => (
            <div
              key={img.id}
              className="break-inside-avoid mb-5 group relative rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                onClick={() => openLightbox(i)}
                className="relative w-full cursor-pointer bg-slate-50 overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-navy-900 text-xs font-semibold backdrop-blur-sm shadow-md">
                    <ZoomIn size={14} className="text-water-600" />
                    Click to view full size
                  </span>
                </div>
              </div>

              {/* Caption & Category Footer */}
              <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-water-600 block mb-0.5">
                    {img.category === 'infographic' ? 'Health Guide & Science' : 'Product Showcase'}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate group-hover:text-water-600 transition-colors">
                    {img.caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-water-500 group-hover:text-white text-slate-400 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  aria-label={`Expand ${img.caption}`}
                >
                  <ZoomIn size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
