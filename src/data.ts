import { useState, useEffect, useRef, ReactNode } from 'react'

// ─── Direct Paths from Public Folder (No more imports!) ──────────────────────────
export const resumePdf = '/resume.pdf' 
export const profilePic = '/profile.jpg'
export const volunteerPic1 = '/DICT2.jpg'
export const projectPic = '/cons.png'
export const odcLogo = '/onedoc.jpg' 
export const dictLogo = '/dictlogo.png' 
export const ciscoLogo = '/cisco.jpg'
export const portLogo = '/PORTLOGO.png'

// Project Images
export const ccna1 = '/CCNA1.png'
export const ccna2 = '/CCNA2.png'
export const ccna3 = '/CCNA3.png'
export const ccna4 = '/CCNA4.png'
export const ccna5 = '/CCNA5.png'
export const ccna6 = '/CCNA6.png'
export const ccnaSim = '/ccna_sim.png'
export const omadaPic = '/omadapic.png'
export const ad1 = '/ad1.png'
export const ad2 = '/ad2.png'
export const ad3 = '/ad3.png'
export const dict1 = '/DICT1.jpg'
export const dict2 = '/DICT2.jpg'
export const monitor1 = '/monitor1.png'
export const monitor2 = '/monitor2.png'
export const monitor3 = '/monitor3.png'
export const monitor4 = '/monitor4.png'
export const monitor5 = '/monitor5.png'

// ─── Data ────────────────────────────────────────────────────────────────────
// (Wala ka nang babaguhin sa ibaba nito, tuloy-tuloy na 'yan sa NAV_LINKS, etc.)

export const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

export const EXPERIENCE = [
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

export const SKILL_GROUPS = [
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

export const PROJECTS = [
  {
    title: 'CCNA 200-301 Desktop Simulator',
    description: 'A fully functional desktop application developed in Python (Tkinter & ttkbootstrap) designed to help aspiring network engineers prepare for the Cisco CCNA 200-301 exam. It features a dynamically generated quiz system with 150+ verified questions across all 6 core CCNA topics, real-time grading, anti-cheat validation, history tracking via SQLite, and detailed rationales for every answer.',
    tags: ['Python', 'Tkinter', 'SQLite', 'PyInstaller', 'Antigravity Gemini', 'Desktop App'],
    size: 'large',
    icon: '💻',
    images: [ccna1, ccna2, ccna3, ccna4, ccna5, ccna6],
    downloadLink: '/downloads/CCNA_Simulator.zip',
  },

  {
    title: 'Omada Network Deployment',
    description: 'Designed and deployed an enterprise-grade Omada-based network with VLAN segmentation and ACL policies for a live commercial environment.',
    tags: ['TP-Link Omada', 'VLAN', 'ACL', 'Network Design'],
    size: 'large',
    icon: '🌐',
    images: [omadaPic], // Single Image
  },
  {
    title: 'Centralized Network Monitoring Platform',
    description: 'Developed a custom, real-time infrastructure monitoring platform to track POS terminals, servers, and network devices across a large-scale theme park. Engineered a custom backend using Python and SNMPv3 to poll device telemetry (CPU, RAM, latency, interfaces), storing logs securely in a centralized database. The system features a live dashboard with heartbeat status, resource threshold alerts, and automated activity streams to drastically accelerate root-cause analysis and minimize operational downtime.',
    tags: ['Python', 'SNMPv3', 'Network Monitoring', 'SQLite', 'Codex', 'Claude', 'Dashboard'],
    size: 'large',
    icon: '📊',
    images: [monitor1, monitor2, monitor3, monitor4, monitor5],
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
    description: 'Executed end-to-end VSAT satellite deployments across 6 geographically challenging sites—including 4 remote mountainous terrains, 1 isolated island community, and an educational facility. Managed complex hardware setup, precise antenna alignment, structured cabling, and rigorous connectivity testing to establish reliable network links in off-grid locations.',
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

export const CERTS = [
  { name: 'CCNAv7: Introduction to Networks', issuer: 'Cisco / NetAcad', level: 'Foundation', url: 'https://www.credly.com/badges/954e4408-0456-4ddf-96f2-d40faa6d1934', logo: ciscoLogo },
  { name: 'CCNAv7: Switching, Routing & Wireless Essentials', issuer: 'Cisco / NetAcad', level: 'Core', url: 'https://www.credly.com/badges/208730a4-a854-4559-9e1c-b010f5e366ae', logo: ciscoLogo },
  { name: 'CCNAv7: Enterprise Networking, Security & Automation', issuer: 'Cisco / NetAcad', level: 'Advanced', url: 'https://www.credly.com/badges/02e81d17-b100-459f-80cc-76225f1466f4', logo: ciscoLogo },
  { name: 'Overview of Important Protocols', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/0TV1L3BGEM0Z', logo: ciscoLogo  },
  { name: 'Network Management Approaches', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/WXKTWUUPPKRQ', logo: ciscoLogo },
  { name: 'Network Architecture Fundamentals', issuer: 'Coursera', level: 'Supplemental', url: 'https://www.coursera.org/account/accomplishments/verify/EPG02N069C5S', logo: ciscoLogo },
]

export const TOOLS = [
  'AnyDesk', 'Cisco GUI', 'NEC GUI', 'TP-Link Omada OC300 Controller', 'OS Ticketing',
  'Wireshark', 'VMware vSphere', 'PowerShell', 'Zabbix', 'SQL Server Management Studio',
  'Hikvision', 'Secure-Link Pro', 'Bizbox (HIS, FMS, PIS, MMS)', 'Hyper-V & Ubuntu Server',
]

// ─── Color maps ───────────────────────────────────────────────────────────────

export const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: 'var(--tag-blue-bg)', text: 'var(--tag-blue-txt)', border: 'var(--tag-blue-border)' },
  violet: { bg: 'var(--tag-violet-bg)', text: 'var(--tag-violet-txt)', border: 'var(--tag-violet-border)' },
  teal:   { bg: 'var(--tag-teal-bg)', text: 'var(--tag-teal-txt)', border: 'var(--tag-teal-border)' },
  amber:  { bg: 'var(--tag-amber-bg)', text: 'var(--tag-amber-txt)', border: 'var(--tag-amber-border)' },
}

export const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  Foundation:   { bg: 'var(--tag-blue-bg)', text: 'var(--tag-blue-txt)' },
  Core:         { bg: 'var(--tag-teal-bg)', text: 'var(--tag-teal-txt)' },
  Advanced:     { bg: 'var(--tag-violet-bg)', text: 'var(--tag-violet-txt)' },
  Supplemental: { bg: 'var(--bg-body)', text: 'var(--text-muted)' },
}

// ─── Hooks ────────────────────────────────────────────────────────────────────
