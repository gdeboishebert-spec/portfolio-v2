import IntroSequence from '@/components/IntroSequence'
import Surveillance from '@/components/Surveillance'
import Flashlight from '@/components/Flashlight'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FadeObserver from '@/components/FadeObserver'

export default function Home() {
  return (
    <>
      <IntroSequence />
      <Surveillance />
      <Flashlight />
      <Nav />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <FadeObserver />
    </>
  )
}
