import { useState } from 'react'
import { EXPERIENCE } from '../data'
import { Reveal, Pill, SectionHeading } from './UI'

export function Experience() {
  const [openRole, setOpenRole] = useState(0)

  return (
    <section id="experience" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-body)', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="// experience" title="Where I've Delivered Impact" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {EXPERIENCE.map((job, ji) => {
              const isOpen = openRole === ji;
              return (
                <div key={job.company} style={{ backgroundColor: 'var(--bg-card)', border: `1px solid ${isOpen ? 'var(--brand-border)' : 'var(--border-main)'}`, borderRadius: '16px', overflow: 'hidden', boxShadow: isOpen ? 'var(--card-shadow-hover)' : 'var(--card-shadow)', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                  <button onClick={() => setOpenRole(isOpen ? -1 : ji)} className="exp-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1.75rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                      
                      <div style={{ width: 44, height: 44, borderRadius: '10px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', padding: '4px' }}>
                        <img 
                          src={job.logo} 
                          alt={`${job.company} logo`}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                      </div>

                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>{job.company}</div>
                        <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', marginTop: '0.1rem' }}>{job.role}</div>
                      </div>
                    </div>
                    <div className="exp-tags" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-light)', backgroundColor: 'var(--bg-body)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>{job.period}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--brand-main)', backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)', padding: '0.2rem 0.55rem', borderRadius: '9999px' }}>{job.type}</span>
                      <span style={{ color: 'var(--text-light)', fontSize: '1rem', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'block' }}>▾</span>
                    </div>
                  </button>
                  <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s ease-out' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ borderTop: '1px solid var(--border-light)', padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {job.entries.map((entry) => (
                          <div key={entry.client}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                              <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>{entry.client}</span>
                              <Pill label={entry.tag} color="blue" />
                            </div>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              {entry.bullets.map((b, bi) => (
                                <li key={bi} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                  <span style={{ color: 'var(--brand-main)', flexShrink: 0, marginTop: '0.35rem', fontSize: '0.55rem' }}>◆</span>{b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 640px) { .exp-btn { flex-direction: column; align-items: flex-start !important; } .exp-tags { width: 100%; justify-content: flex-start; margin-top: 0.5rem; } }
      `}</style>
    </section>
  )
}


