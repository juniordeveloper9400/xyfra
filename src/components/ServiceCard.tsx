import type { ServiceItem } from '../data/services'

/**
 * Service card adapted from the Uiverse.io design by Smit-Prajapati.
 *
 * The top panel is a gradient with a notch cut out of its top-left corner —
 * a skewed block filled with the card's own background. It held the icon
 * originally; the cards read cleaner without one, so the notch is now purely
 * the shape that gives the card its silhouette.
 */
export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="svc-card">
      <div className="svc-top">
        <div className="svc-notch"></div>

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
