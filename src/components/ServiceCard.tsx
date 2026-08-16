import type { ServiceItem } from '../data/services'

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="svc-card">
      <div className="svc-media">
        <img src={service.image} alt={service.title} className="svc-media-img" loading="lazy" />
        <span className="svc-badge">{service.badge}</span>
        <div className="svc-media-scrim" />
      </div>

      <div className="svc-content">
        <div className="svc-header">
          <h3 className="svc-title">{service.title}</h3>
        </div>

        <p className="svc-desc">{service.description}</p>

        <div className="svc-stats">
          {service.stats.map((stat) => (
            <div className="svc-stat-box" key={stat.label}>
              <span className="svc-stat-val">{stat.value}</span>
              <span className="svc-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="svc-cta">
          <span>Explore Service</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  )
}
