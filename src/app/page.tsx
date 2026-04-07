import Flashlight from '@/components/Flashlight'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FadeObserver from '@/components/FadeObserver'

export default function Home() {
  return (
    <>
      <Flashlight />
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <FadeObserver />
    </>
  )
}
