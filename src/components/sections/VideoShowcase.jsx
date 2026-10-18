import { useState } from 'react'
import { Play } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import VideoModal from '../ui/VideoModal'
import { videos } from '../../data/videos'

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section id="videos" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video Showcase"
          title="See PUROTECH in Action"
          subtitle="Watch product demonstrations and explore the PUROTECH experience through video."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative rounded-2xl overflow-hidden bg-navy-900 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer text-left"
              aria-label={`Play video: ${video.title}`}
            >
              {/* Poster */}
              <div className="aspect-video relative">
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-contain bg-gradient-to-br from-navy-800 to-navy-900 p-4 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-pulse w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Play size={22} className="text-navy-900 ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-1">{video.title}</h3>
                <p className="text-xs text-navy-300 line-clamp-2">{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  )
}
