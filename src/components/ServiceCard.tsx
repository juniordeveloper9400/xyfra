import type { ServiceItem } from '../data/services'

/**
 * Service card adapted from the Uiverse.io design by Smit-Prajapati.
 *
 * The top panel is a gradient with a notch cut out of its top-left corner —
 * the notch is a skewed block filled with the card's own background, so the
 * icon sitting in it reads as punched through the gradient.
 */
export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="svc-card">
      <div className="svc-top">
        <div className="svc-notch"></div>

        <div className="svc-icons">
          <span className="svc-logo" aria-hidden="true">
            {service.icon}
          </span>

          <span className="svc-glyphs" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="16 7 21 7 21 12" />
            </svg>
          </span>
        </div>

        <p className="svc-blurb">{service.description}</p>
      </div>

      <div className="svc-bottom">
        <span className="svc-title">{service.title}</span>

        <div className="svc-row">
          {service.stats.map((stat) => (
            <div className="svc-item" key={stat.label}>
              <span className="svc-big">{stat.value}</span>
              <span className="svc-reg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
