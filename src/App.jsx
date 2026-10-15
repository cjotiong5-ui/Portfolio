import { TopNav } from './components/ui/TopNav'
import { BottomNav } from './components/ui/BottomNav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Journey } from './sections/Journey'
import { Contact } from './sections/Contact'
import { Footer } from './components/ui/Footer'
import { useReveal } from './hooks/useReveal'
import { FaultyBackground } from './components/effects/FaultyBackground'
import './components/ui/nav.css'

export default function App() {
  useReveal()

  return (
    <>
      <FaultyBackground />
      <TopNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}