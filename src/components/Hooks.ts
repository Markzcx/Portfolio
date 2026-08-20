import { useState, useEffect, useRef } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      const isSavedDark = saved === 'dark'
      setIsDark(isSavedDark)
      if (isSavedDark) document.documentElement.classList.add('dark')
    } else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(isSystemDark)
      if (isSystemDark) document.documentElement.classList.add('dark')
    }
  }, [])
  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }
  return { isDark, toggleDark }
}


export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>('')
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 
      let current = ''
      for (const id of ids) {
        const element = document.getElementById(id.toLowerCase())
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = id
          }
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() 
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])
  return activeId
}


export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect() 
        }
      },
      { threshold: 0.1 } 
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  return { ref, isIntersecting }
}

// ─── Sub-components ───────────────────────────────────────────────────────────


