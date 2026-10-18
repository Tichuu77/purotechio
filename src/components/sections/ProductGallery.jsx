import { useState, useCallback } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ImageLightbox from '../ui/ImageLightbox'
import { galleryImages } from '../../data/gallery'

export default function ProductGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(-1)

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  return (
    <section id="gallery" className="bg-slate-50/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Every Detail. Every Angle."
          subtitle="Explore the PUROTECH product collection through high-quality product photography."
        />

        {/* Masonry-inspired Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer ${
                img.featured ? 'col-span-2 row-span-2' : ''
              }`}
              aria-label={`View ${img.caption || 'product image'} in lightbox`}
            >
              <div className={`w-full ${img.featured ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-water-50/50 p-3 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-500 flex items-end justify-start">
                <div className="p-3 md:p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs sm:text-sm font-medium drop-shadow-lg">
                    {img.caption}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
