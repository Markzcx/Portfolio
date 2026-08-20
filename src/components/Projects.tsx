import { useState, useEffect } from 'react'
import { PROJECTS } from '../data'
import { Reveal, Pill, SectionHeading, Nav } from './UI'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  // Reset image index when opening a new project modal
  const handleOpenModal = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project)
    setActiveImgIndex(0)
  }

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  return (
    <section id="projects" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
      
      {/* --- PROJECT MODAL --- */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 999999, backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', animation: 'fadeInOverlay 0.25s ease-out' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="project-modal-content"
            style={{ backgroundColor: 'var(--bg-body)', border: '1px solid var(--border-main)', borderRadius: '16px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', animation: 'modalSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)' }}
          >
            {/* Laging nasa ibabaw at clickable ang Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Modal" 
              style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 999, backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)'}
            >
              ✕
            </button>
            
            {/* IMAGE VIEWER WITH CONTROLS (HINDI NA NASTRETCH AT HINDI NAGBUBUG) */}
            <div className="modal-img-container" style={{ width: '100%', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-main)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              
              <img 
                src={selectedProject.images[activeImgIndex]} 
                alt={selectedProject.title} 
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', backgroundColor: '#0b0f19' }} 
              />

              {/* Navigation Arrows (Kung higit sa isa ang picture) */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                    style={{ position: 'absolute', left: '1rem', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', backdropFilter: 'blur(4px)' }}
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => setActiveImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                    style={{ position: 'absolute', right: '1rem', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', backdropFilter: 'blur(4px)' }}
                  >
                    ❯
                  </button>

                  {/* Dots Indicator sa ilalim ng picture */}
                  <div style={{ position: 'absolute', bottom: '10px', display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '999px', backdropFilter: 'blur(4px)' }}>
                    {selectedProject.images.map((_, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setActiveImgIndex(idx)}
                        style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: idx === activeImgIndex ? '#38bdf8' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'background 0.2s' }} 
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{selectedProject.icon}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{selectedProject.title}</h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>{selectedProject.description}</p>
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.85rem' }}>Technologies & Tools</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tags.map((tag, idx) => (
                    <Pill key={tag} label={tag} color={idx % 2 === 0 ? 'teal' : 'blue'} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PROJECTS GRID --- */}
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="// projects" title="Featured Work" />
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.25rem',
              gridAutoFlow: 'dense',
              alignContent: 'start'
            }} 
            className="bento-grid"
          >
            {PROJECTS.map((project, i) => {
              const isLarge = project.size === 'large'
              return (
                <div
                  key={project.title} className={isLarge ? "span-2" : "span-1"}
                  style={{ backgroundColor: 'var(--bg-body)', border: '1px solid var(--border-main)', borderRadius: '16px', padding: '1.75rem', transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.15s', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--brand-border)'; el.style.boxShadow = 'var(--card-shadow-hover)'; el.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--border-main)'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
                >
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{project.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.845rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {project.tags.slice(0, 3).map((tag) => <Pill key={tag} label={tag} color={i % 2 === 0 ? 'teal' : 'blue'} />)}
                      {project.tags.length > 3 && <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', alignSelf: 'center', marginLeft: '0.2rem' }}>+{project.tags.length - 3}</span>}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => handleOpenModal(project)}
                        style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--brand-main)', backgroundColor: 'var(--brand-bg)', border: 'none', padding: '0.45rem 0.9rem', borderRadius: '6px', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--border-main)' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--brand-bg)' }}
                      >
                        View Project ↗
                      </button>
                      
                      {/* @ts-ignore */}
                      {project.downloadLink && (
                        <a
                          href={/* @ts-ignore */ project.downloadLink}
                          download
                          style={{ textDecoration: 'none', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--brand-main)', backgroundColor: 'var(--brand-bg)', border: 'none', padding: '0.45rem 0.9rem', borderRadius: '6px', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--border-main)' }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-bg)' }}
                        >
                          Download CCNA_Simulator (Password: ccna) ⬇
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
      
      <style>{`
        .modal-img-container {
          height: 380px; 
        }
        
        .span-2 { grid-column: span 2; } .span-1 { grid-column: span 1; }
        @keyframes modalSlideUp { from { transform: translateY(30px) scale(0.95); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
        
        .project-modal-content::-webkit-scrollbar { width: 8px; }
        .project-modal-content::-webkit-scrollbar-track { background: var(--bg-body); }
        .project-modal-content::-webkit-scrollbar-thumb { background: var(--border-main); border-radius: 4px; }
        
        @media (max-width: 1024px) { 
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; } 
          .span-2 { grid-column: span 2; } 
        }
        
        @media (max-width: 768px) { 
          .bento-grid { grid-template-columns: 1fr !important; } 
          .span-2, .span-1 { grid-column: span 1 !important; } 
          .modal-img-container {
            height: 240px !important; 
          }
        }
      `}</style>
    </section>
  )
}


