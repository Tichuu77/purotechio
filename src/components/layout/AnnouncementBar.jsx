export default function AnnouncementBar() {
  return (
    <div className="bg-navy-900 text-white py-2.5 px-4 text-center">
      <p className="text-xs sm:text-sm font-medium tracking-wide">
        <span className="hidden sm:inline">✦ </span>
        Discover a Better Way to Hydrate
        <span className="hidden sm:inline"> — </span>
        <span className="sm:hidden"> | </span>
        <a
          href="#products"
          className="underline underline-offset-2 hover:text-aqua-300 transition-colors"
        >
          Explore PUROTECH Water Solutions
        </a>
        <span className="hidden sm:inline"> ✦</span>
      </p>
    </div>
  )
}
