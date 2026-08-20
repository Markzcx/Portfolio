import { CERTS, LEVEL_COLORS } from '../data'
import { Reveal, SectionHeading } from './UI'

export function Certifications() {
  return (
    <section id="certifications" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="// certifications" title="Training & Certifications" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="cert-grid">
            {CERTS.map((cert) => {
              const lc = LEVEL_COLORS[cert.level] ?? LEVEL_COLORS.Supplemental
              return (
                <div
                  key={cert.name}
                  style={{
                    backgroundColor: 'var(--bg-body)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '14px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--brand-border)'
                    el.style.boxShadow = 'var(--card-shadow-hover)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'var(--border-main)'
                    el.style.boxShadow = 'none'
                  }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: '10px', 
                      /* Gagawing puti ang background kung may logo para mag-blend */
                      backgroundColor: cert.logo ? '#ffffff' : 'var(--bg-card)', 
                      border: '1px solid var(--border-main)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                      overflow: 'hidden' 
                    }}>
                      {cert.logo ? (
                        /* Tinanggal ang padding para ma-fill ang buong container */
                        <img src={cert.logo} alt={`${cert.issuer} logo`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      ) : (
                        '📜'
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        backgroundColor: lc.bg,
                        color: lc.text,
                      }}
                    >
                      {cert.level}
                    </span>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.4 }}>{cert.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', marginTop: '0.4rem' }}>{cert.issuer}</div>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--brand-main)',
                        textDecoration: 'none',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: 'var(--brand-bg)',
                        borderRadius: '6px',
                        transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, background 0.2s'
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--border-main)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-bg)' }}
                    >
                      Verify Certificate ↗
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 1024px) { .cert-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}


