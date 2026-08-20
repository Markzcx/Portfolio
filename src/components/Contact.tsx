import { Reveal } from './UI'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '5rem 2rem 4rem', backgroundColor: 'var(--contact-bg)', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Column: Heading & Intro */}
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', color: 'var(--brand-main)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                // contact
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Let's Build Something<br />Reliable.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '420px' }}>
                Whether you have an opportunity, a question, or just want to connect, my inbox is always open. I'll try my best to get back to you!
              </p>
            </div>

            {/* Right Column: Balanced & Elegant Contact Card */}
            <div 
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid var(--border-main)', 
                borderRadius: '16px', 
                padding: '2.5rem', 
                boxShadow: 'var(--card-shadow)' 
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                Professional Contact
              </h3>
              
              {/* All items are now strictly inside one Flex column for equal gaps! */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                {/* 1. Email Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--bg-body)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    📧
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                      Email Address
                    </div>
                    <a 
                      href="mailto:markfernandez101010@gmail.com" 
                      style={{ fontSize: '1.05rem', color: 'var(--brand-main)', textDecoration: 'none', fontWeight: 600, transition: 'background-color 0.4s, color 0.4s, border-color 0.4s, opacity 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      markfernandez101010@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. Mobile Number Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--bg-body)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    📱
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                      WhatsApp | Viber
                    </div>
                    <div style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600, letterSpacing: '0.03em' }}>
                      09923166568
                    </div>
                  </div>
                </div>

                {/* 3. Roles Section */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--bg-body)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    💼
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem', marginTop: '0.2rem' }}>
                      Target Roles
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                      Open to IT Support Level 2, System Administration, NOC Operations, Network Administration, and Network Engineering opportunities.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Page Footer */}
          <div style={{ borderTop: '1px solid var(--border-main)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
              Mark Fernandez — IT Systems & Network Support Specialist
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
              Developed by MCFernandez
            </span>
          </div>

        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { 
            grid-template-columns: 1fr !important; 
            gap: 3rem !important; 
          }
        }
      `}</style>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────


