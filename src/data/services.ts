export type ServiceCategory = 'software' | 'app' | 'website' | 'marketing' | 'seo'

export interface ServiceItem {
  id: string
  title: string
  category: ServiceCategory
  icon: string
  description: string
  capabilities: string[]
  badge: string
  /* Exactly three — the home card renders them as a fixed three-up row */
  stats: { value: string; label: string }[]
}

/* Services page filter bar. The works page has its own set, keyed by project
   type rather than service line — see workCategories in ./works. */
export const categoryTabs: { id: ServiceCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software Dev' },
  { id: 'app', label: 'App Dev' },
  { id: 'website', label: 'Website Dev' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'seo', label: 'SEO Work' },
]

export const servicesData: ServiceItem[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    category: 'software',
    icon: '💻',
    description: 'Custom enterprise software engineering, high-throughput microservices, scalable backends, and robust API integrations.',
    capabilities: ['Microservices & Distributed Systems', 'Enterprise ERP & SaaS Platforms', 'High-Performance API Architecture', 'Database Optimization & Telemetry'],
    badge: 'Enterprise Software',
    stats: [
      { value: '40+', label: 'Platforms' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '12wk', label: 'Avg build' },
    ],
  },
  {
    id: 'app-dev',
    title: 'App Development',
    category: 'app',
    icon: '📱',
    description: 'Native & cross-platform iOS and Android mobile applications built with fluid animations, offline syncing, and enterprise security.',
    capabilities: ['Cross-Platform iOS & Android Apps', 'Fluid UI/UX & Micro-Animations', 'Biometric Security & Offline Sync', 'App Store & Play Store Deployment'],
    badge: 'iOS & Android Native',
    stats: [
      { value: '100k+', label: 'Downloads' },
      { value: '4.9★', label: 'Avg rating' },
      { value: '2', label: 'Platforms' },
    ],
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    category: 'website',
    icon: '🌐',
    description: 'Ultra-fast responsive websites, modern web applications, headless CMS platforms, and high-converting online experiences.',
    capabilities: ['Modern Web Applications', 'Core Web Vitals & Speed Optimization', 'Headless CMS & E-Commerce Integration', 'Glassmorphism & Interactive UI'],
    badge: '100/100 Core Web Vitals',
    stats: [
      { value: '1.1s', label: 'Load time' },
      { value: '100', label: 'Vitals score' },
      { value: '60+', label: 'Sites shipped' },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'marketing',
    icon: '📈',
    description: 'Data-driven digital growth strategies, performance marketing campaigns, conversion rate optimization (CRO), and targeted advertising.',
    capabilities: ['Multi-Channel PPC (Google & Meta Ads)', 'Conversion Rate Optimization (CRO)', 'Content Marketing & Funnel Strategy', 'Automated Analytics & Attribution'],
    badge: '3.8x ROI Average',
    stats: [
      { value: '3.8x', label: 'Avg ROI' },
      { value: '4.2x', label: 'Peak ROAS' },
      { value: '25+', label: 'Campaigns' },
    ],
  },
  {
    id: 'seo-work',
    title: 'SEO & Organic Growth',
    category: 'seo',
    icon: '🔍',
    description: 'Comprehensive Search Engine Optimization, technical site audits, keyword domination, and high-authority link building campaigns.',
    capabilities: ['Technical SEO & Schema Markup', 'Search Intent & Keyword Research', 'High-Authority Backlink Acquisition', 'Local & Global Search Dominance'],
    badge: 'Top 3 Ranking Guarantee',
    stats: [
      { value: '+380%', label: 'Organic traffic' },
      { value: '40+', label: '#1 keywords' },
      { value: '90d', label: 'To rank' },
    ],
  },
]
