import { resumePdf, profilePic } from '../data'
import { Reveal } from './UI'

export function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '7rem 2rem 4rem', maxWidth: '1120px', margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(circle at center, var(--hero-dot) 1.2px, transparent 1.4px)', backgroundSize: '22px 22px', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--tag-teal-bg)', border: '1px solid var(--tag-teal-border)', color: 'var(--tag-teal-txt)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'currentColor', display: 'inline-block', boxShadow: '0 0 0 2px var(--tag-teal-bg)', animation: 'pulse 2s infinite' }} />
                  Open to Full-time & Rotating Shift Roles
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                IT Systems &<br />
                <span style={{ color: 'var(--brand-main)' }}>Network Support</span>
                <br />Specialist.
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '540px', marginBottom: '2rem', fontWeight: 400 }}>
                I keep infrastructure running and people productive — from 24/7 hospital helpdesks
                to enterprise VLAN deployments. CCNA-trained. MSP-seasoned. Ready for the next challenge.
              </p>
              
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--brand-main)', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, background 0.15s, transform 0.1s' }} onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-hover)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }} onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
                  View CV ↗
                </a>
                
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Mark_Fernandez_Resume.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid var(--border-main)', transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, border-color 0.15s, transform 0.1s' }} onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--brand-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }} onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
                  <span style={{ fontSize: '1.1rem' }}>📄</span> Download CV
                </a>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                {[ { value: '2+', label: 'Years Experience' }, { value: 'L1 – L2', label: 'Support Tier' }, { value: 'Network/NOC Engineer', label: 'Aspiring' } ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem', letterSpacing: '0.05em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: '16px', padding: '1.5rem', minWidth: '240px', boxShadow: 'var(--card-shadow)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--brand-border)', marginBottom: '1rem', backgroundColor: 'var(--bg-body)' }}>
                {/* Hero image is intentionally NOT lazy-loaded for best performance/LCP score */}
                <img src={profilePic} alt="Mark Fernandez" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Mark Fernandez</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>📍 Pangasinan, Philippines</div>
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', width: '100%', textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Open to</div>
                {['IT Support L2', 'System Admin', 'NOC Ops', 'Network Admin/Eng.'].map((role) => (
                  <div key={role} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--brand-main)', fontSize: '0.6rem' }}>▸</span>{role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </section>
  )
}


