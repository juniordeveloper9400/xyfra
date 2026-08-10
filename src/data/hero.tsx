/* Hero capability row. Labels break onto two lines exactly as designed, so the
   line break is part of the copy rather than left to the wrap. */
export const capabilities = [
  {
    label: 'Web\nDevelopment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <polyline points="9 8 7 10 9 12" />
        <polyline points="15 8 17 10 15 12" />
      </svg>
    ),
  },
  {
    label: 'Mobile App\nDevelopment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <line x1="10" y1="5.5" x2="14" y2="5.5" />
        <circle cx="12" cy="18.2" r="1" />
      </svg>
    ),
  },
  {
    label: 'Software\nDevelopment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: 'Digital Marketing\n& SEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21" />
        <rect x="4" y="12" width="3.6" height="6" rx="1" />
        <rect x="10.2" y="9" width="3.6" height="9" rx="1" />
        <rect x="16.4" y="14" width="3.6" height="4" rx="1" />
        <polyline points="5 8 10 4 14 6.5 21 2.5" />
        <polyline points="17.6 2.5 21 2.5 21 5.6" />
      </svg>
    ),
  },
]

/* Reassurance bar pinned under the hero */
export const trustPoints = [
  {
    title: 'Modern & Secure',
    sub: 'Solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5.5l-8-3.2-8 3.2V12c0 6 8 10 8 10z" />
        <polyline points="8.6 11.8 11.2 14.4 15.6 10" />
      </svg>
    ),
  },
  {
    title: 'Responsive',
    sub: 'Across All Devices',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="13" height="10" rx="1.8" />
        <path d="M5.5 18h6" />
        <rect x="16.5" y="9" width="5.5" height="11" rx="1.6" />
      </svg>
    ),
  },
  {
    title: 'High Performance',
    sub: '& Scalable',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 18a9 9 0 1 1 17 0" />
        <line x1="12" y1="14" x2="16" y2="9.5" />
        <circle cx="12" cy="14" r="1.3" />
      </svg>
    ),
  },
  {
    title: 'Support',
    sub: 'You Can Rely On',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
        <path d="M20 16.5a2.5 2.5 0 0 1-2.5 2.5H17v-5h.5A2.5 2.5 0 0 1 20 16.5z" />
        <path d="M4 16.5A2.5 2.5 0 0 0 6.5 19H7v-5h-.5A2.5 2.5 0 0 0 4 16.5z" />
        <path d="M12 21h2.5" />
      </svg>
    ),
  },
]
