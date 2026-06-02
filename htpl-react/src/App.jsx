import useScrollReveal from './hooks/useScrollReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import ProjectGallery from './components/ProjectGallery'
import Gallery from './components/Gallery'
import Technology from './components/Technology'
import Process from './components/Process'
import Quality from './components/Quality'
import Clients from './components/Clients'
import Commitment from './components/Commitment'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Products />
        <HowItWorks />
        <ProjectGallery />
        <Gallery />
        <Technology />
        <Process />
        <Quality />
        <Clients />
        <Commitment />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
