import type { ServiceCategory } from './services'

export interface WorkItem {
  id: string
  title: string
  category: ServiceCategory
  serviceLabel: string
  client: string
  imageBg: string
  icon: string
  description: string
  highlights: string[]
  metricBadge: string
}

export const worksData: WorkItem[] = [
  {
    id: 'work-software-1',
    title: 'Apex Logistics SaaS & Fleet Software',
    category: 'software',
    serviceLabel: 'Software Development',
    client: 'Apex Global Logistics',
    imageBg: 'linear-gradient(135deg, rgba(0, 151, 110, 0.4) 0%, rgba(10, 30, 24, 0.95) 100%)',
    icon: '💻',
    description: 'Custom enterprise ERP software managing real-time fleet dispatch, route optimization, telemetry, and automated invoicing.',
    highlights: ['Microservices Architecture', 'Automated Dispatch Rules', 'Real-Time Fleet Telemetry'],
    metricBadge: '5,000+ Active Fleet Units',
  },
  {
    id: 'work-app-1',
    title: 'NovaPay Mobile Banking App',
    category: 'app',
    serviceLabel: 'App Development',
    client: 'NovaPay Financial',
    imageBg: 'linear-gradient(135deg, rgba(79, 224, 176, 0.3) 0%, rgba(5, 11, 9, 0.95) 100%)',
    icon: '📱',
    description: 'Sleek iOS & Android mobile app featuring biometric authentication, instant P2P transfers, and multi-currency digital wallet.',
    highlights: ['Cross-Platform Mobile App', 'Biometric Auth & Security', 'Instant Push Notifications'],
    metricBadge: '4.9★ App Store Rating',
  },
  {
    id: 'work-website-1',
    title: 'Velox E-Commerce Web Storefront',
    category: 'website',
    serviceLabel: 'Website Development',
    client: 'Velox Luxury Apparel',
    imageBg: 'linear-gradient(135deg, rgba(0, 179, 121, 0.35) 0%, rgba(12, 43, 34, 0.95) 100%)',
    icon: '🌐',
    description: 'Ultra-fast web storefront with headless CMS integration, 1.1-second page loads, and mobile checkout optimization.',
    highlights: ['Ultra-Fast Modern Web App', '100/100 Core Web Vitals', 'Headless Commerce Engine'],
    metricBadge: '1.1s Page Load Speed',
  },
  {
    id: 'work-marketing-1',
    title: 'GrowthEngine PPC Ad Campaign',
    category: 'marketing',
    serviceLabel: 'Digital Marketing',
    client: 'GrowthEngine B2B',
    imageBg: 'linear-gradient(135deg, rgba(0, 151, 110, 0.45) 0%, rgba(5, 11, 9, 0.95) 100%)',
    icon: '📈',
    description: 'Data-driven Google & Meta paid advertising campaigns driving high-quality B2B lead generation and retargeting automation.',
    highlights: ['Multi-Channel Retargeting', 'High-Converting Landing Pages', 'GA4 Attribution Setup'],
    metricBadge: '4.2x ROAS Delivered',
  },
  {
    id: 'work-seo-1',
    title: 'VaultX Financial SEO Domination',
    category: 'seo',
    serviceLabel: 'SEO Work',
    client: 'VaultX Capital',
    imageBg: 'linear-gradient(135deg, rgba(79, 224, 176, 0.25) 0%, rgba(10, 30, 24, 0.95) 100%)',
    icon: '🔍',
    description: 'Complete technical SEO overhaul, schema markup strategy, and link building that secured #1 positions for high-intent financial keywords.',
    highlights: ['Technical Schema Markup', 'Authority Link Building', '#1 Rank for 40+ Keywords'],
    metricBadge: '+380% Organic Traffic',
  },
  {
    id: 'work-app-2',
    title: 'PulseCare Telehealth Mobile App',
    category: 'app',
    serviceLabel: 'App Development',
    client: 'PulseCare Health Systems',
    imageBg: 'linear-gradient(135deg, rgba(0, 179, 121, 0.35) 0%, rgba(10, 30, 24, 0.95) 100%)',
    icon: '🩺',
    description: 'HIPAA-compliant mobile application providing virtual doctor consultations, electronic prescriptions, and medical record syncing.',
    highlights: ['Encrypted Mobile App', 'HIPAA Consultation Room', 'Digital Prescription Sync'],
    metricBadge: '100k+ App Downloads',
  },
]
