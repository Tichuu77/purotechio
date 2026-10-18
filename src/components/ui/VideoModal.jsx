import { useEffect, useCallback, useRef } from 'react'
import { X } from 'lucide-react'

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!video) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm" onClick={onClose} />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close video"
      >
        <X size={24} />
      </button>

      {/* Video */}
      <div className="relative z-[5] w-[90vw] max-w-4xl slide-up">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          muted
          playsInline
          className="w-full rounded-xl shadow-2xl bg-black"
        >
          Your browser does not support the video element.
        </video>
        <p className="text-center text-white/80 text-sm mt-3 font-medium">{video.title}</p>
      </div>
    </div>
  )
}
