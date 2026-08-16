import ahalia from '../assets/ahalia.png'
import cleanmycar from '../assets/cleanmycar.png'
import freshandco from '../assets/freshandco.png'
import hydramech from '../assets/hydramech.mp4'
import pompi from '../assets/pompi.png'
import portfolio from '../assets/portfolio.png'
import tripnix from '../assets/tripnix.png'
import zcafe from '../assets/zcafe.png'

/* Works are classified by what was built — websites, storefronts, mobile apps, animated websites, portfolios
   — not by which service line sold it. A visitor browsing the portfolio is
   looking for something resembling their own project, which is a question
   about the artefact, not the department. */
export type WorkCategory = 'animation' | 'portfolio' | 'website' | 'ecommerce' | 'mobile'

export interface WorkItem {
  id: string
  title: string
  category: WorkCategory
  /* Shown on the card banner — the project type, not the service name */
  typeLabel: string
  client: string
  /* Screenshot or video of the shipped product, imported so Vite fingerprints it */
  image?: string
  video?: string
  isVideo?: boolean
  description: string
  highlights: string[]
  /* Describes what the build is, not a performance claim. These are real
     client projects, so nothing here asserts a number we cannot stand behind. */
  metricBadge: string
}

export const workCategories: { id: WorkCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'animation', label: 'Animation Websites' },
  { id: 'portfolio', label: 'Portfolio Websites' },
  { id: 'website', label: 'Websites' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'mobile', label: 'Mobile Apps' },
]

export const worksData: WorkItem[] = [
  {
    id: 'work-hydramech',
    title: 'HydraMech 3D Animated Platform',
    category: 'animation',
    typeLabel: 'Animation Website',
    client: 'HydraMech',
    video: hydramech,
    isVideo: true,
    description:
      'High-performance 3D animated industrial engineering website featuring real-time motion mechanics, dynamic product visualizers, and structured technical SEO architecture.',
    highlights: ['3D Product Motion Mechanics', 'Technical SEO & Fast Core Web Vitals', 'Interactive Animation Pipeline'],
    metricBadge: '3D Animation & SEO',
  },
  {
    id: 'work-portfolio',
    title: 'Minimalist Creative Portfolio',
    category: 'portfolio',
    typeLabel: 'Portfolio Website',
    client: 'Design Studio',
    image: portfolio,
    description:
      'Bespoke digital portfolio engineered with dark aesthetics, sleek typography, micro-interactions, and showcase galleries designed to highlight high-impact creative work.',
    highlights: ['Interactive Project Showcase', 'Custom Typography & Layouts', 'Dark Minimalist Aesthetic'],
    metricBadge: 'Creative Portfolio',
  },
  {
    id: 'work-ahalia',
    title: 'Ahalia Fashion Storefront',
    category: 'ecommerce',
    typeLabel: 'E-Commerce',
    client: 'Ahalia',
    image: ahalia,
    description:
      'Mobile-first storefront for a contemporary womenswear label, built around collection browsing with a wishlist and bag running through every screen.',
    highlights: ['Wishlist & Bag Flow', 'New Arrival / Best Seller Badges', 'Mobile-First Product Grid'],
    metricBadge: 'Fashion Storefront',
  },
  {
    id: 'work-pompi',
    title: 'Pompi Travels Package Site',
    category: 'website',
    typeLabel: 'Website',
    client: 'Pompi Travels',
    image: pompi,
    description:
      'Tour-package site opening on a full-bleed destination feature, with package search, an itinerary stop slider and customer login.',
    highlights: ['Destination & Package Search', 'Itinerary Stop Slider', 'Customer Login'],
    metricBadge: 'Tour Package Booking',
  },
  {
    id: 'work-tripnix',
    title: 'Tripnix Bus & Car Booking App',
    category: 'mobile',
    typeLabel: 'Mobile App',
    client: 'Tripnix',
    image: tripnix,
    description:
      'Fleet booking app for bus and car operators — date-strip trip search, filtering by travel agency, and an upcoming-journey tracker on the home tab.',
    highlights: ['Date-Strip Trip Search', 'Multi-Agency Filtering', 'Upcoming Trip Tracking'],
    metricBadge: 'Bus & Car Management',
  },
  {
    id: 'work-zcafe',
    title: 'Z Cafe Premix Store',
    category: 'ecommerce',
    typeLabel: 'E-Commerce',
    client: 'Z Cafe',
    image: zcafe,
    description:
      'Storefront for a coffee and tea premix brand, with delivery-area selection, category carousels and a wishlist-to-cart path on a bottom tab layout.',
    highlights: ['Delivery Area Selection', 'Category Carousels', 'Wishlist to Cart'],
    metricBadge: 'Coffee & Tea Premix',
  },
  {
    id: 'work-cleanmycar',
    title: 'CleanMyCar Detailing Site',
    category: 'website',
    typeLabel: 'Website',
    client: 'CleanMyCar',
    image: cleanmycar,
    description:
      'Doorstep car-detailing service site with a full treatment catalogue, per-package pricing and one-tap WhatsApp enquiry from any point on the page.',
    highlights: ['Service & Pricing Catalogue', 'One-Tap WhatsApp Enquiry', 'High-Contrast Brand Theme'],
    metricBadge: 'Doorstep Detailing',
  },
  {
    id: 'work-freshandco',
    title: 'Fresh & Co Brand Site',
    category: 'website',
    typeLabel: 'Website',
    client: 'Fresh & Co',
    image: freshandco,
    description:
      'Product-led site for a half-cooked chapathi and ready-meal brand, built around packshot storytelling and an ingredients-first pitch.',
    highlights: ['Packshot Hero Carousel', 'Ingredient & Benefit Sections', 'Retail Brand Styling'],
    metricBadge: 'Packaged Food Brand',
  },
]
