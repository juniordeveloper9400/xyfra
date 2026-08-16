import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { categoryTabs, servicesData, type ServiceCategory } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') as ServiceCategory | null

  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>(
    tabParam && categoryTabs.some((t) => t.id === tabParam) ? tabParam : 'all'
  )

  useEffect(() => {
    if (tabParam && categoryTabs.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam)
    } else if (!tabParam) {
      setActiveTab('all')
    }
  }, [tabParam])

  const handleTabChange = (tabId: ServiceCategory | 'all') => {
    setActiveTab(tabId)
    if (tabId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ tab: tabId })
      window.scrollTo({ top: 160, behavior: 'smooth' })
    }
  }

  useScrollReveal([activeTab])

  const selectedService = servicesData.find((s) => s.category === activeTab)

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
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.id === 'all' ? 'All Services' : tab.label}
            </button>
          ))}
        </div>

        {activeTab !== 'all' && selectedService ? (
          /* Expansive Single Service Feature Section with full uncropped visual */
          <div className="service-feature-view" data-reveal>
            <div className="service-feature-media">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="service-feature-img"
              />
              <span className="service-feature-badge">{selectedService.badge}</span>
              <div className="service-feature-glow" />
            </div>

            <div className="service-feature-content">
              <div className="service-feature-header">
                <div>
                  <span className="service-feature-kicker">{selectedService.badge}</span>
                  <h2 className="service-feature-title">{selectedService.title}</h2>
                </div>
              </div>

              <p className="service-feature-desc">{selectedService.description}</p>

              <div className="service-feature-stats">
                {selectedService.stats.map((st) => (
                  <div className="feature-stat-box" key={st.label}>
                    <span className="feature-stat-val">{st.value}</span>
                    <span className="feature-stat-lbl">{st.label}</span>
                  </div>
                ))}
              </div>

              <div className="service-feature-capabilities">
                <h3>Key Capabilities & Engineering Deliverables</h3>
                <ul className="feature-caps-list">
                  {selectedService.capabilities.map((cap, i) => (
                    <li key={i}>
                      <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-feature-actions">
                <Link to="/contact" className="btn btn-primary">
                  <span>Start Your {selectedService.title} Project</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleTabChange('all')}
                >
                  View All Services
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* All Services Compact Standard Grid View */
          <div className="services-grid">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                className="service-card"
                data-reveal
                style={{ '--i': idx % 3 } as React.CSSProperties}
              >
                <div
                  className="service-card-media"
                  onClick={() => handleTabChange(service.category)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={service.image} alt={service.title} className="service-card-img" loading="lazy" />
                  <span className="service-badge">{service.badge}</span>
                </div>

                <div className="service-card-body">
                  <div className="service-card-head">
                    <h3
                      className="service-card-title clickable"
                      onClick={() => handleTabChange(service.category)}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-card-footer">
                    <button
                      type="button"
                      className="service-view-more-btn"
                      onClick={() => handleTabChange(service.category)}
                    >
                      <span>View More</span>
                      <svg
                        className="view-more-arrow"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <Link to="/contact" className="service-link">
                      <span>Start Project</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
