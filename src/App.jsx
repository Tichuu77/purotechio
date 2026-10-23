import { useState, useEffect } from 'react'
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
import AboutUs from './components/sections/AboutUs'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import ContactSection from './components/sections/ContactSection'

import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsConditions from './components/pages/TermsConditions'

export default function App() {
  const [view, setView] = useState(() => {
    const hash = window.location.hash
    if (hash === '#privacy') return 'privacy'
    if (hash === '#terms') return 'terms'
    return 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#privacy') {
        setView('privacy')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#terms') {
        setView('terms')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setView('home')
        if (hash && hash !== '#' && hash !== '#home') {
          const id = hash.slice(1)
          const el = document.getElementById(id)
          if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
          }
        } else if (hash === '#home' || !hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateToHome = () => {
    window.location.hash = ''
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <AnnouncementBar />
        <Navbar />
        {view === 'privacy' && <PrivacyPolicy onBack={navigateToHome} />}
        {view === 'terms' && <TermsConditions onBack={navigateToHome} />}
        {view === 'home' && (
          <main>
            <Hero />
            <BrandHighlights />
            <FeaturedProducts />
            <ProductSpotlight />
            <Technology />
            <HowItWorks />
            <ProductGallery />
            <AboutUs />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <ContactSection />
          </main>
        )}
      </div>
      <Footer />
    </div>
  )
}
