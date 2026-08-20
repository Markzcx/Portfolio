import { SKILL_GROUPS, TOOLS, TAG_COLORS } from '../data'
import { Reveal, Pill, SectionHeading } from './UI'

export function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-body)', borderTop: '1px solid var(--border-light)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="// skills" title="Technical Skill Set" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-main)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: TAG_COLORS[group.color]?.text ?? 'var(--brand-main)',
                    textTransform: 'uppercase',
                    marginBottom: '0.85rem',
                  }}
                >
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {group.skills.map((skill) => (
                    <Pill key={skill} label={skill} color={group.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', borderRadius: '14px', padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              Tools & Platforms
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  style={{
                    backgroundColor: 'var(--bg-body)',
                    border: '1px solid var(--border-main)',
                    color: 'var(--text-main)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-mono)',
                    transition: 'border-color 0.12s, color 0.12s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement
                    el.style.borderColor = 'var(--brand-border)'
                    el.style.color = 'var(--brand-main)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement
                    el.style.borderColor = 'var(--border-main)'
                    el.style.color = 'var(--text-main)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}


