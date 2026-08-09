import { useState, useEffect, useRef, ReactNode } from 'react'

// ─── File Imports (Vite handles these automatically) ──────────────────────────
import resumePdf from './imports/Mark_Anthony_C._Fernandez_Resume.pdf' 
import profilePic from './imports/Mark Anthony C. Fernandez 2X2 Pic.jpg'
import volunteerPic1 from './imports/DICT2.jpg'
import projectPic from './imports/Cons.png'
import odcLogo from './imports/OnedocLogo.jpg' 
import dictLogo from './imports/dict-logo.png' 
import ciscoLogo from './imports/cisco.jpg' // Make sure the exact filename matches what you have!
import portLogo from './imports/PORTLOGO.png'

// Project Images
import omadaPic from './imports/OmadaPic.png'
import ad1 from './imports/ad1.png'
import ad2 from './imports/ad2.png'
import ad3 from './imports/ad3.png'
import dict1 from './imports/DICT1.jpg'
import dict2 from './imports/DICT2.jpg'

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

const EXPERIENCE = [
  {
    company: 'One Document Corporation',
    logo: odcLogo,
    role: 'IT Helpdesk Support — Multi-site / MSP',
    period: 'Nov 2024 – Present',
    type: 'Full-time',
    entries: [
      {
        client: 'JKQ Hospital',
        tag: 'Healthcare · 24/7 Operations',
        bullets: [
          'Delivered 24/7 Level 1 & 2 support for critical hospital operations, resolving hardware, OS, and enterprise printer issues to maintain zero downtime.',
          'Streamlined Active Directory workflows for user provisioning, access control, and onboarding/offboarding.',
          'Provided Level 1 support for IP phone systems and Cisco-based Network, resolving LAN/WAN connectivity issues and ensuring uninterrupted communication.',
          'Maintained strict SLA compliance via OS Ticket while handling physical data center operations, including rack-and-stack, structured cabling, and switch deployments.',
        ],
      },
      {
        client: 'BlueSky Theme Park & Event Center',
        tag: 'Hospitality · Network & POS',
        bullets: [
          'Acted as Network Administrator, deploying a TP-Link Omada enterprise network with VLANs, ACL policies, and MAC-address whitelisting to secure POS, server, and guest traffic.',
          'Engineered a custom PowerShell monitoring script and a Zabbix-like dashboard to track real-time network latency and resource performance, significantly speeding up root-cause analysis.',
          'Maintained high-availability POS systems, desktops, and retail peripherals through proactive troubleshooting.',
          'Provided end-to-end technical support for POS systems, cash drawers, receipt printers, and backend desktops.',
        ],
      },
      {
        client: 'National Electrification Administration - Main Office (NEA)',
        tag: 'Government · Infrastructure Deployment',
        bullets: [
          'Led the hardware setup and configuration of 60 workstations designated for nationwide branch deployment.',
          'Developed a PowerShell automation script to streamline bulk application installations and configured Hyper-V-hosted Ubuntu servers.',
          'Conducted rigorous compatibility testing to ensure seamless, real-time data transmission from endpoints to the NEA Command Center.',
        ],
      },
      {
        client: 'Alcala LGU & Local Government Offices',
        tag: 'Government · HRIS Deployment',
        bullets: [
          'Led hardware deployment and database integration of biometric HRIS systems across Municipal Hall, DSWD, RHU, and DA offices.',
          'Conducted formal system operation and data management training for LGU Human Resources staff.',
          'Managed end-to-end device installation, configuration, and network connectivity for all deployed biometric units.',
        ],
      },
      {
        client: 'Angkong Noodle House',
        tag: 'Retail · CCTV & POS',
        bullets: [
          'Provided CCTV deployment recommendations during project planning and site assessment.',
          'Installed and configured Hikvision cameras and NVR systems for full-site monitoring and security operations.',
          'Deployed and configured POS devices, ensuring proper network connectivity and system functionality.',
        ],
      },
    ],
  },
  {
    company: 'DICT Pangasinan',
    logo: dictLogo,
    role: 'IT Support & Network Engineer Assistant',
    period: 'Oct 2023 – Feb 2024',
    type: 'Internship',
    entries: [
      {
        client: 'Department of Information and Communications Technology',
        tag: 'Government · Network Infrastructure',
        bullets: [
          'Delivered technical support across government offices, endpoint troubleshooting, connectivity diagnostics, and hardware replacements.',
          'Assisted in installation, configuration, and readiness validation of VSAT satellite equipment for the national Free Wi-Fi 4All initiative.',
          'Conducted remote technical orientations for stakeholders on VSAT system operations and maintenance.',
          'Performed network infrastructure diagnostics and optimization across deployed public-sector sites.',
          'Created detailed technical documentation for all deployments and support interventions.',
        ],
      },
    ],
  },
]

const SKILL_GROUPS = [
  {
    label: 'Infrastructure',
    color: 'blue',
    skills: [
      'LAN/WAN Troubleshooting', 'Structured Cabling', 'Switch Deployment',
      'Access Point Setup', 'VLAN Configuration', 'Server Rack & Stack',
      'Multi-site Support', 'POS Deployment',
    ],
  },
  {
    label: 'Systems & Support',
    color: 'violet',
    skills: [
      'Active Directory', 'Level 1 & 2 Helpdesk', 'User Onboarding/Offboarding',
      'IP Phone Support', 'Printer Support', 'Remote Troubleshooting',
      'Endpoint Maintenance', 'SLA Management',
    ],
  },
  {
    label: 'Network & Operations',
    color: 'teal',
    skills: [
      'Cisco Devices', 'TP-Link Omada', 'VSAT Infrastructure',
      'ACL Implementation', 'Network Monitoring', 'Incident Response',
      'Wireless Deployment', 'Connectivity Optimization',
    ],
  },
  {
    label: 'Professional',
    color: 'amber',
    skills: [
      'Root Cause Analysis', 'Technical Documentation', 'Cross-team Communication',
      'Fast Learner', 'Works Under Pressure', 'Customer Service Mindset',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Omada Network Deployment',
    description: 'Designed and deployed an enterprise-grade Omada-based network with VLAN segmentation and ACL policies for a live commercial environment.',
    tags: ['TP-Link Omada', 'VLAN', 'ACL', 'Network Design'],
    size: 'large',
    icon: '🌐',
    images: [omadaPic], // Single Image
  },
  {
    title: 'Active Directory Onboarding Tool',
    description: 'Automated the manual IT onboarding process using PowerShell. The script seamlessly handles AD account creation, group assignments, and access control, reducing human error and deployment time.',
    tags: ['PowerShell', 'Active Directory', 'Automation'],
    size: 'medium',
    icon: '🔐',
    images: [ad1, ad2, ad3], // Multiple Images!
  },
  {
    title: 'Free Wi-Fi 4All  (VSAT Deployment)',
    description: 'Assisted in large-scale VSAT satellite installations across public sites, hardware setup, structured cabling, connectivity testing, and fault isolation.',
    tags: ['VSAT', 'Satellite', 'Government', 'Field Deployment'],
    size: 'medium',
    icon: '🛰️',
    images: [dict1, dict2], // Multiple Images!
  },
  {
    title: 'Enterprise Networking Lab',
    description: 'Designed and validated a comprehensive enterprise network architecture using simulation tools. Implemented advanced configurations including inter-VLAN routing, DHCP, NAT, ACL policies, and strict switch port security.',
    tags: ['Cisco', 'Packet Tracer', 'VLAN', 'DHCP', 'NAT', 'ACL'],
    size: 'large',
    icon: '🖧',
    images: [projectPic], // Placeholder
  },
  {
    title: 'Field Systems Deployment',
    description: 'End-to-end installation of Hikvision CCTV, NVR systems, biometric HRIS devices, and POS hardware across multi-site government and commercial locations.',
    tags: ['CCTV', 'Hikvision', 'Biometric', 'HRIS', 'POS'],
    size: 'medium',
    icon: '📷',
    images: [projectPic], // Placeholder
  },
]

const CERTS = [
  { name: 'CCNAv7: Introduction to Networks', issuer: 'Cisco / NetAcad', level: 'Foundation', url: 'https://www.credly.com/badges/954e4408-0456-4ddf-96f2-d40faa6d1934', logo: ciscoLogo },
  { name: 'CCNAv7: Switching, Routing & Wireless Essentials', issuer: 'Cisco / NetAcad', level: 'Core', url: 'https://www.credly.com/badges/208730a4-a854-4559-9e1c-b010f5e366ae', logo: ciscoLogo },
  { name: 'CCNAv7: Enterprise Networking, Security & Automation', issuer: 'Cisco / NetAcad', level: 'Advanced', url: 'https://www.credly.com/badges/02e81d17-b100-459f-80cc-76225f1466f4', logo: ciscoLogo },
  { name: 'Overview of Important Protocols', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/0TV1L3BGEM0Z', logo: ciscoLogo  },
  { name: 'Network Management Approaches', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/WXKTWUUPPKRQ', logo: ciscoLogo },
  { name: 'Network Architecture Fundamentals', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/EPG02N069C5S', logo: ciscoLogo },
]

const TOOLS = [
  'AnyDesk', 'Cisco GUI', 'NEC GUI', 'TP-Link Omada OC300 Controller', 'OS Ticketing',
  'Wireshark', 'VMware vSphere', 'PowerShell', 'Zabbix', 'SQL Server Management Studio',
  'Hikvision', 'Secure-Link Pro', 'Bizbox (HIS, FMS, PIS, MMS)', 'Hyper-V & Ubuntu Server',
]

// ─── Color maps ───────────────────────────────────────────────────────────────

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: 'var(--tag-blue-bg)', text: 'var(--tag-blue-txt)', border: 'var(--tag-blue-border)' },
  violet: { bg: 'var(--tag-violet-bg)', text: 'var(--tag-violet-txt)', border: 'var(--tag-violet-border)' },
  teal:   { bg: 'var(--tag-teal-bg)', text: 'var(--tag-teal-txt)', border: 'var(--tag-teal-border)' },
  amber:  { bg: 'var(--tag-amber-bg)', text: 'var(--tag-amber-txt)', border: 'var(--tag-amber-border)' },
}

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Foundation:   { bg: 'var(--tag-blue-bg)', text: 'var(--tag-blue-txt)' },
  Core:         { bg: 'var(--tag-teal-bg)', text: 'var(--tag-teal-txt)' },
  Advanced:     { bg: 'var(--tag-violet-bg)', text: 'var(--tag-violet-txt)' },
  Supplemental: { bg: 'var(--bg-body)', text: 'var(--text-muted)' },
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isSystemDark)
    if (isSystemDark) document.documentElement.classList.add('dark')
  }, [])
  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      return next
    })
  }
  return { isDark, toggleDark }
}

function useScrollSpy(ids: string[]) {
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

function useIntersectionObserver() {
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

function Reveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const { ref, isIntersecting } = useIntersectionObserver()
  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function Pill({ label, color = 'blue' }: { label: string; color?: string }) {
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

function SectionHeading({ label, title }: { label: string; title: string }) {
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

function Nav({ active, isDark, toggleDark }: { active: string, isDark: boolean, toggleDark: () => void }) {
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
              transition: 'transform 0.2s ease'
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
                      transition: 'color 0.15s, background 0.15s',
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
                transition: 'background 0.2s',
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

function Hero() {
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
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--brand-main)', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.15s, transform 0.1s' }} onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-hover)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }} onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
                  View CV ↗
                </a>
                
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Mark_Fernandez_Resume.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid var(--border-main)', transition: 'border-color 0.15s, transform 0.1s' }} onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--brand-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }} onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-main)'; ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
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

function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          pointerEvents: 'none', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.3)',
            backdropFilter: 'blur(12px)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />

        <div 
          style={{
            position: 'relative',
            width: '520px',
            height: '520px',
            maxWidth: 'min(85vw, 80vh)', 
            maxHeight: 'min(85vw, 80vh)',
            borderRadius: '12px',
            border: '2px solid var(--brand-main)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            zIndex: 2,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15)',
          }}
        >
          <img 
            src={volunteerPic1} 
            alt="Volunteering Detailed" 
            loading="lazy"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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
                      padding: '4px 10px',
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

function Experience() {
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

function Projects() {
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
                    <button
                      onClick={() => handleOpenModal(project)}
                      style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--brand-main)', backgroundColor: 'var(--brand-bg)', border: 'none', padding: '0.45rem 0.9rem', borderRadius: '6px', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--border-main)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--brand-bg)' }}
                    >
                      View Project ↗
                    </button>
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

function Skills() {
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

function Certifications() {
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
                    transition: 'border-color 0.15s, box-shadow 0.15s',
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
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--border-main)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--brand-bg)' }}
                    >
                      View Credential ↗
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

function Contact() {
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
                      style={{ fontSize: '1.05rem', color: 'var(--brand-main)', textDecoration: 'none', fontWeight: 600, transition: 'opacity 0.2s' }}
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