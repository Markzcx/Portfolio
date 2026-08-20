import { useState, ReactNode } from 'react'
import { portLogo, NAV_LINKS, TAG_COLORS } from '../data'
import { useIntersectionObserver } from './Hooks'

export function Reveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const { ref, isIntersecting } = useIntersectionObserver()
  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
        transition: `background-color 0.4s, color 0.4s, border-color 0.4s, opacity 0.7s ease-out, transform 0.7s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}


export function Pill({ label, color = 'blue' }: { label: string; color?: string }) {
  const c = TAG_COLORS[color] ?? TAG_COLORS.blue
  return (
    <span
      style={{
        backgroundColor: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        padding: '2px 10px',
        borderRadius: '9999px',
        fontSize: '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}


export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          color: 'var(--brand-main)',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────


export function Nav({ active, isDark, toggleDark }: { active: string, isDark: boolean, toggleDark: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'var(--bg-nav)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-main)',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              zIndex: 51,
              transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={portLogo} 
              alt="Mark.IT Logo" 
              style={{ 
                height: '56px', /* Adjust mo ito kung gusto mong palakihin o paliitin yung logo sa nav */
                width: 'auto', 
                objectFit: 'contain' 
              }} 
            />
          </a>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="desktop-nav" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
              {NAV_LINKS.map((link) => {
                const isActive = active.toLowerCase() === link.toLowerCase()
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--brand-main)' : 'var(--text-muted)',
                      textDecoration: 'none',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      backgroundColor: isActive ? 'var(--brand-bg)' : 'transparent',
                      transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-main)'
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-bg)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = isActive ? 'var(--brand-main)' : 'var(--text-muted)'
                      ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = isActive ? 'var(--brand-bg)' : 'transparent'
                    }}
                  >
                    {link}
                  </a>
                )
              })}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'none', 
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            <button
              onClick={toggleDark}
              style={{
                background: 'var(--bg-body)',
                border: '1px solid var(--border-main)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, background 0.2s',
              }}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-nav)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-main)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 49,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: active.toLowerCase() === link.toLowerCase() ? 'var(--brand-main)' : 'var(--text-main)',
                textDecoration: 'none',
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-dropdown { display: none !important; }
        }

        
      `}</style>
    </>
  )
}


