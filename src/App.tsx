import { useState, useEffect, useRef, ReactNode } from 'react'
import { NAV_LINKS } from './data'
import { useDarkMode, useScrollSpy } from './components/Hooks'
import { Nav } from './components/UI'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'

export default function App() {
  const { isDark, toggleDark } = useDarkMode()
  const activeSection = useScrollSpy(NAV_LINKS)

  return (
    <div>
      <Nav active={activeSection} isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  )
}
