import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import Mix from '../components/Mix'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { capabilities, trustPoints } from '../data/hero'
import {
  companyStats,
  differentiators,
  industries,
  processSteps,
  testimonials,
} from '../data/home'
import { servicesData } from '../data/services'
import { worksData } from '../data/works'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* One per service line, so the preview covers the full range of work */
const featuredWorks = worksData.slice(0, 3)

/* Rotated slowly in the hero. Each is a complete positioning statement, one
   per service line, so the cycle walks through the whole offering. */
const heroHeadlines = [
  'We Build Digital Experiences That Drive Business',
  'Engineering Software That Scales With You',
  'Mobile Apps Built For The People Who Use Them',
  'Websites Designed To Convert, Not Just Impress',
  'Marketing That Delivers Measurable Growth',
]

export default function HomePage() {
  const [headlineIndex, setHeadlineIndex] = useState(0)

  useScrollReveal()

  /* Slow rotation — long enough to read a full line twice over before it moves */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % heroHeadlines.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero — hero.png fills the section, copy sits over it */}
      <section className="hero-container">
        <div className="hero-media">
          <img
            src={heroImage}
            alt="Xyfra-built storefront shown on a laptop and phone"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="hero-copy">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>NEXT-GEN DIGITAL ENGINEERING</span>
          </div>

          {/* key remounts the node so the cross-fade replays on every change */}
          <h1 className="hero-headline" key={headlineIndex}>
            {heroHeadlines[headlineIndex]}
          </h1>

          <p className="hero-description">
            From powerful websites to custom web applications, we deliver modern,
            responsive and user-focused solutions that help your business grow.
          </p>

          <ul className="hero-capabilities">
            {capabilities.map((cap) => (
              <li className="capability" key={cap.label}>
                <span className="capability-icon" aria-hidden="true">
                  {cap.icon}
                </span>
                <span className="capability-label">{cap.label}</span>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="hero-cta">
            <span>Let&apos;s Build Something Great</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <ul className="hero-trust">
          {trustPoints.map((point) => (
            <li className="trust-item" key={point.title}>
              <span className="trust-icon" aria-hidden="true">
                {point.icon}
              </span>
              <span className="trust-text">
                <strong>{point.title}</strong>
                <span>{point.sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Rides up over the pinned hero as you scroll */}
      <div className="scroll-panel">
        <section className="section-container">
          <SectionHeader
            tag="WHAT WE DO"
            title={[['Software', 'light'], ['App, Web,', 'green'], ['Marketing & SEO', 'box']]}
            subtitle="End-to-end digital engineering and marketing strategies built for speed, conversion, and market dominance."
          />

          <div className="svc-card-grid">
            {servicesData.map((service, idx) => (
              <Link
                to="/services"
                key={service.id}
                className="svc-card-link"
                data-reveal
                style={{ '--i': idx % 3 } as React.CSSProperties}
              >
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>

        </section>

        {/* Numbers band */}
        <section className="stats-band" data-reveal>
          <div className="stats-band-inner">
            {companyStats.map((stat, idx) => (
              <div className="stat-block" key={stat.label} style={{ '--i': idx } as React.CSSProperties}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-caption">{stat.caption}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section className="section-container">
          <SectionHeader
            tag="SELECTED WORK"
            title={[['Projects', 'light'], ['We Have', 'green'], ['Shipped', 'box']]}
            subtitle="A sample of platforms, apps and campaigns delivered for clients across logistics, finance and retail."
          />

          <div className="works-grid asymmetrical">
            {featuredWorks.map((work, idx) => (
              <Link
                to="/works"
                key={work.id}
                className="work-card"
                data-reveal
                style={{ '--i': idx % 3 } as React.CSSProperties}
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
                  <div className="work-card-footer">
                    <span className="work-action-text">View Case Study</span>
                    <svg className="work-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-cta" data-reveal>
            <Link to="/works" className="btn btn-secondary">
              See All Projects
            </Link>
          </div>
        </section>

        {/* How we work */}
        <section className="section-container">
          <SectionHeader
            tag="HOW WE WORK"
            title={[['From Brief', 'light'], ['To Launch', 'green'], ['In Four Steps', 'box']]}
            subtitle="A predictable delivery process with a working demo in your hands every two weeks."
          />

          <ol className="process-grid">
            {processSteps.map((step, idx) => (
              <li
                className="process-step"
                key={step.step}
                data-reveal
                style={{ '--i': idx } as React.CSSProperties}
              >
                <span className="step-num">{step.step}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Why us */}
        <section className="section-container">
          <SectionHeader
            tag="WHY XYFRA"
            title={[['Built By', 'light'], ['Engineers', 'green'], ['Who Stay', 'box']]}
            subtitle="The commitments we make on every engagement, written down before you sign anything."
          />

          <div className="reasons-grid">
            {differentiators.map((item, idx) => (
              <div
                className="reason-card"
                key={item.title}
                data-reveal
                style={{ '--i': idx % 2 } as React.CSSProperties}
              >
                <span className="reason-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="industry-panel" data-reveal>
            <h3>
              <Mix parts={[['Industries', 'light'], ['We Serve', 'green']]} />
            </h3>
            <ul className="industry-row">
              {industries.map((industry) => (
                <li className="industry-chip" key={industry}>
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Client words */}
        <section className="section-container">
          <SectionHeader
            tag="CLIENT FEEDBACK"
            title={[['What Our', 'light'], ['Clients', 'green'], ['Say', 'box']]}
            subtitle="Results and working relationships, described by the people who signed off on them."
          />

          <div className="testimonial-grid">
            {testimonials.map((item, idx) => (
              <figure
                className="testimonial-card"
                key={item.name}
                data-reveal
                style={{ '--i': idx } as React.CSSProperties}
              >
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{item.quote}</blockquote>
                <figcaption className="testimonial-author">
                  <span className="author-avatar" aria-hidden="true">{item.initials}</span>
                  <span className="author-meta">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-container">
          <div className="global-reach-box" data-reveal>
            <div className="reach-content">
              <h3>
                <Mix parts={[['Ready to', 'light'], ['Start Building', 'green']]} />
              </h3>
              <p>Tell us about your project and we&apos;ll map out the fastest route to launch.</p>
            </div>
            <div className="reach-hubs">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
