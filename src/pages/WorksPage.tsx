import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { categoryTabs, type ServiceCategory } from '../data/services'
import { worksData, type WorkItem } from '../data/works'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WorksPage() {
  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>('all')
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  useScrollReveal([activeTab])

  const filtered =
    activeTab === 'all' ? worksData : worksData.filter((w) => w.category === activeTab)

  return (
    <div className="page">
      <section className="section-container">
        <SectionHeader
          tag="PROJECT SHOWCASE"
          title={[['Our', 'light'], ['Delivered', 'green'], ['Works', 'box']]}
          subtitle="Explore real projects engineered by Xyfra Technologies across Software, Mobile Apps, Websites, Marketing, and SEO."
        />

        <div className="filter-bar" data-reveal>
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id === 'all' ? 'All Works' : tab.label}
            </button>
          ))}
        </div>

        <div className="works-grid asymmetrical">
          {filtered.map((work, idx) => (
            <div
              key={work.id}
              className="work-card"
              data-reveal
              style={{ '--i': idx % 3 } as React.CSSProperties}
              onClick={() => setSelectedWork(work)}
            >
              <div className="work-preview-banner" style={{ background: work.imageBg }}>
                <span className="work-badge-top">{work.serviceLabel}</span>
                <div className="work-banner-center">
                  <span className="work-banner-icon">{work.icon}</span>
                  <span className="work-client-name">{work.client}</span>
                </div>
                <span className="work-metric-chip">{work.metricBadge}</span>
              </div>

              <div className="work-card-content">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-desc">{work.description}</p>

                <div className="work-highlights">
                  {work.highlights.map((h, i) => (
                    <span key={i} className="work-highlight-pill">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                <div className="work-card-footer">
                  <span className="work-action-text">Explore Project Details</span>
                  <svg className="work-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project detail modal */}
      {selectedWork && (
        <div className="modal-backdrop" onClick={() => setSelectedWork(null)}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedWork(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header-banner" style={{ background: selectedWork.imageBg }}>
              <span className="service-tag">{selectedWork.serviceLabel}</span>
              <div className="modal-title-box">
                <span className="modal-icon">{selectedWork.icon}</span>
                <h2>{selectedWork.title}</h2>
              </div>
              <span className="modal-metric-badge">{selectedWork.metricBadge}</span>
            </div>

            <div className="modal-body">
              <p className="modal-client"><strong>Client Partner:</strong> {selectedWork.client}</p>
              <p className="modal-desc">{selectedWork.description}</p>

              <div className="modal-highlights-section">
                <h4>Key Accomplishments Delivered:</h4>
                <ul>
                  {selectedWork.highlights.map((h, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer-actions">
                <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedWork(null)}>
                  Request Similar Solution
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
