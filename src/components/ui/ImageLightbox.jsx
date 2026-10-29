import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

export default function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const current = images[currentIndex]

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center lightbox-overlay p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" onClick={onClose} />

      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <a
          href={current.src}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:px-3 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm"
          title="Open original image in full resolution"
        >
          <ExternalLink size={16} />
          <span className="hidden sm:inline">Full Size</span>
        </a>
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer backdrop-blur-sm"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-sm hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer backdrop-blur-sm hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image & Caption */}
      <div className="relative z-10 max-w-[92vw] max-h-[90vh] flex flex-col items-center">
        <div className="max-h-[76vh] flex items-center justify-center">
          <img
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
        <div className="text-center mt-3 max-w-xl px-4">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-water-400 block mb-0.5">
            {current.category === 'infographic' ? 'Health Guide & Science' : 'Product Showcase'}
          </span>
          {current.caption && (
            <p className="text-white text-sm sm:text-base font-semibold drop-shadow">{current.caption}</p>
          )}
          <p className="text-white/50 text-xs mt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}
