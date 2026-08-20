import { useState } from 'react'
import { volunteerPic1 } from '../data'
import { Reveal, SectionHeading } from './UI'

export function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      
      {/* FULL-SCREEN HOVER ZOOM (Pinalaki para kitang-kita ang details) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          pointerEvents: 'none', // Para hindi maka-istorbo sa pag-scroll
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark Blur Background */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(8px)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />

        {/* The Expanded Large Picture */}
        <div 
          style={{
            position: 'relative',
            width: '90vw',           // Sobrang laki na nito!
            maxWidth: '1000px',
            height: '85vh',
            borderRadius: '12px',
            border: '2px solid var(--brand-main)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            zIndex: 2,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15)',
            backgroundColor: 'var(--bg-card)'
          }}
        >
          <img 
            src={volunteerPic1} 
            alt="Volunteering Detailed" 
            loading="lazy"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', // Papasok ng buo yung picture nang walang napuputol
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.6s ease'
            }} 
          />
        </div>
      </div>

      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
            
            <div>
              <SectionHeading label="// about" title="Bridging User Support & Backend Infrastructure" />
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                I am an IT Systems & Network Support Specialist with hands-on experience driving operational continuity across MSP and multi-site environments.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '3rem' }}>
                My core strength lies in bridging the gap between frontline user support and backend infrastructure. Whether I am managing a 24/7 hospital helpdesk, racking servers in a data center, or deploying secure VLAN-segmented networks for enterprise theme parks, my goal is always the same: to build and maintain resilient IT systems that keep operations running smoothly and securely. I don't just close tickets, I optimize infrastructure—actively designing custom scripts, systems, and deployment solutions that streamline operations, eliminate bottlenecks, and ensure seamless rollouts from the ground up.
              </p>

              <div 
                style={{
                  backgroundColor: 'var(--bg-body)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>🤝</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '-0.01em' }}>Beyond the Screen</h3>
                </div>
                
                {/* Dito natin ilalagay yung trigger ng Hover */}
                <div 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ 
                    position: 'relative', 
                    height: '220px', 
                    width: '100%', 
                    marginBottom: '1.25rem',
                    cursor: 'zoom-in'
                  }}
                >
                  <div style={{ width: '100%', height: '100%', borderRadius: '8px', border: '1px solid var(--border-main)', overflow: 'hidden' }}>
                    <img 
                      src={volunteerPic1} 
                      alt="Volunteering" 
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  
                  {/* Floating Indicator na pwedeng i-hover */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      backdropFilter: 'blur(4px)',
                      pointerEvents: 'none',
                      opacity: isHovered ? 0 : 1,
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <span>🔍 Hover to Expand</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  I am deeply passionate about community and collaboration. Outside of standard IT operations, I regularly volunteer my time and technical expertise to assist others with their projects. I believe that sharing knowledge and lending a helping hand is the best way to grow both personally and professionally.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }} className="about-cards">
              {[
                { icon: '🏥', label: 'Hospital-grade SLA', desc: '24/7 critical environment support with zero-downtime mandate.' },
                { icon: '🌐', label: 'Network Architecture', desc: 'VLAN design, ACL policies, and Omada/Cisco deployments.' },
                { icon: '⚙️', label: 'Automation', desc: 'PowerShell tools for AD provisioning and network monitoring.' },
                { icon: '📋', label: 'CCNA Trained', desc: 'All three CCNAv7 modules: switching, routing, security & automation.' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: 'var(--bg-body)',
                    border: '1px solid var(--border-main)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-border)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-shadow-hover)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-main)'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) { 
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } 
        }
        @media (max-width: 600px) {
          .about-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}


