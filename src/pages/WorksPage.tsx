import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { workCategories, worksData, type WorkCategory, type WorkItem } from '../data/works'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WorksPage() {
  const [activeTab, setActiveTab] = useState<WorkCategory | 'all'>('all')
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  useScrollReveal([activeTab])

  const filtered =
    activeTab === 'all' ? worksData : worksData.filter((w) => w.category === activeTab)

  return (
    <div className="page">
      <section className="section-container">
        <SectionHeader
          tag="SELECTED CASE STUDIES"
          title={[['Work', 'light'], ['We Have', 'green'], ['Delivered', 'box']]}
          subtitle="Browse by what we built — websites, online stores, web apps, mobile apps and campaigns. Pick the category closest to your own project."
        />

        <div className="filter-bar" data-reveal>
          {workCategories.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="works-grid asymmetrical">
          {filtered.map((work, idx) => (
            <button
              type="button"
              key={work.id}
              className="pcard"
              data-reveal
              style={{ '--i': idx % 3 } as React.CSSProperties}
              onClick={() => setSelectedWork(work)}
            >
              <img className="pcard-shot" src={work.image} alt={`${work.client} ${work.typeLabel}`} loading="lazy" />

              <span className="pcard-type">{work.typeLabel}</span>
              <span className="pcard-metric">{work.metricBadge}</span>

              <div className="pcard-body">
                <span className="pcard-client">{work.client}</span>
                <h3 className="pcard-title">{work.title}</h3>

                <div className="pcard-reveal">
                  <div>
                    <p className="pcard-desc">{work.description}</p>

                    <div className="pcard-tags">
                      {work.highlights.map((h) => (
                        <span key={h} className="pcard-tag">
                          {h}
                        </span>
                      ))}
                    </div>

                    <span className="pcard-cta">
                      View project
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </button>
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

            <div className="modal-header-banner">
              <img
                className="work-shot"
                src={selectedWork.image}
                alt={`${selectedWork.client} ${selectedWork.typeLabel}`}
              />
              <span className="service-tag">{selectedWork.typeLabel}</span>
              <div className="modal-title-box">
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
