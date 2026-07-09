import BlogsSection from './components/BlogsSection'
import BrandLogosMarquee from './components/BrandLogosMarquee'
import CaseStudies from './components/CaseStudies'
import CTASection from './components/CTASection'
import FaqSection from './components/FaqSection'
import FeaturesGrid from './components/FeaturesGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import PlatformSection from './components/PlatformSection'
import ResultsSection from './components/ResultsSection'
import SearchShiftedSection from './components/SearchShiftedSection'
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <BrandLogosMarquee />
      <SearchShiftedSection />
      <FeaturesGrid />
      <HowItWorks />
      <ResultsSection />
      <PlatformSection />
      <TestimonialSection />
      <CaseStudies />
      <BlogsSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
