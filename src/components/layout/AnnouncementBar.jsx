export default function AnnouncementBar() {
  return (
    <div className="bg-navy-900 text-white py-2.5 px-4 text-center">
      <p className="text-xs sm:text-sm font-medium tracking-wide">
        <span className="hidden sm:inline">✦ </span>
        <span className="inline-flex items-center font-semibold text-aqua-300 mr-1.5">
          Manufactured in Saitama, Japan
        </span>
        <span className="hidden md:inline text-white/40">|</span>
        <span className="hidden md:inline mx-1.5">Discover a Better Way to Hydrate —</span>
        <a
          href="#products"
          className="underline underline-offset-2 hover:text-aqua-300 transition-colors ml-1"
        >
          Explore PUROTECH
        </a>
        <span className="hidden sm:inline"> ✦</span>
      </p>
    </div>
  )
}
