import AnnouncementBar from './components/layout/AnnouncementBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import BrandHighlights from './components/sections/BrandHighlights'
import FeaturedProducts from './components/sections/FeaturedProducts'
import ProductSpotlight from './components/sections/ProductSpotlight'
import Technology from './components/sections/Technology'
import HowItWorks from './components/sections/HowItWorks'
import ProductGallery from './components/sections/ProductGallery'
import VideoShowcase from './components/sections/VideoShowcase'
import AboutUs from './components/sections/AboutUs'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <BrandHighlights />
        <FeaturedProducts />
        <ProductSpotlight />
        <Technology />
        <HowItWorks />
        <ProductGallery />
        <VideoShowcase />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
