/* One entry per route. The navbar, the mobile drawer and the footer all read
   from here, so adding a page means touching this list only.

   Labels are single nouns rather than possessives — "Case Studies", not "Our
   Works". A nav is a signpost, and "Our"/"Us" adds nothing a visitor needs. */
export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
