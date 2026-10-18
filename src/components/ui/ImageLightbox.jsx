import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

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
      className="fixed inset-0 z-[60] flex items-center justify-center lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm" onClick={onClose} />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image */}
      <div className="relative z-[5] max-w-[90vw] max-h-[85vh] slide-up">
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        {current.caption && (
          <p className="text-center text-white/80 text-sm mt-3">{current.caption}</p>
        )}
        <p className="text-center text-white/50 text-xs mt-1">
          {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  )
}
