import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { categoryTabs, servicesData, type ServiceCategory } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>('all')

  /* Re-scan when the filter swaps in cards that were never observed */
  useScrollReveal([activeTab])

  const filtered =
    activeTab === 'all' ? servicesData : servicesData.filter((s) => s.category === activeTab)

  return (
    <div className="page">
      <section className="section-container">
        <SectionHeader
          tag="CORE SERVICES"
          title={[['Software', 'light'], ['App, Web,', 'green'], ['Marketing & SEO', 'box']]}
          subtitle="End-to-end digital engineering and marketing strategies built for speed, conversion, and market dominance."
        />

        <div className="filter-bar" data-reveal>
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id === 'all' ? 'All Services' : tab.label}
            </button>
          ))}
        </div>

        <div className="services-grid asymmetrical">
          {filtered.map((service, idx) => (
            <div
              key={service.id}
              className="service-card"
              data-reveal
              style={{ '--i': idx % 3 } as React.CSSProperties}
            >
              <div className="service-card-head">
                <span className="service-icon">{service.icon}</span>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-capabilities">
                <span className="cap-label">Capabilities:</span>
                <ul>
                  {service.capabilities.map((cap, i) => (
                    <li key={i}>
                      <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="service-link">
                <span>Start Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
