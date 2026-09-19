import useScrollReveal from '../hooks/useScrollReveal'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import About from '../components/About'
import Products from '../components/Products'
import HowItWorks from '../components/HowItWorks'
import TestingQuality from '../components/TestingQuality'
import FleetCarousel from '../components/FleetCarousel'
import Gallery from '../components/Gallery'
import Technology from '../components/Technology'
import Process from '../components/Process'
import Quality from '../components/Quality'
import Reach from '../components/Reach'
import Serve from '../components/Serve'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Commitment from '../components/Commitment'
import CtaBand from '../components/CtaBand'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Landing() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Products />
        <FleetCarousel />
        <Gallery />
        <Technology />
        <Process />
        <HowItWorks />
        <TestingQuality />
        <Quality />
        <Reach />
        <Serve />
        <Clients />
        <Testimonials />
        <Commitment />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
