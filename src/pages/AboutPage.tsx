import Mix from '../components/Mix'
import SectionHeader from '../components/SectionHeader'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars: { icon: string; title: Parameters<typeof Mix>[0]['parts']; body: string }[] = [
  {
    icon: '💻',
    title: [['Custom', 'light'], ['Software', 'green']],
    body: 'Clean, maintainable, high-speed software and API architectures designed specifically for your business operations.',
  },
  {
    icon: '📱',
    title: [['Native', 'light'], ['Apps & Web', 'box']],
    body: 'Stunning iOS, Android, and web user experiences with sub-second response times and 100/100 performance scores.',
  },
  {
    icon: '📈',
    title: [['Data-Driven', 'light'], ['Marketing', 'green']],
    body: 'Targeted advertising, PPC management, and conversion rate optimization that transforms site visitors into paying clients.',
  },
  {
    icon: '🔍',
    title: [['Dominant', 'light'], ['SEO Work', 'boxLight']],
    body: 'Comprehensive technical SEO, keyword targeting, and backlink strategies that secure long-term #1 search positions.',
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <div className="page">
      <section className="section-container">
        <SectionHeader
          tag="WHY WORK WITH US"
          title={[['Engineering', 'light'], ['& Growth', 'green'], ['Precision', 'box']]}
          subtitle="Combining high-end software development with data-driven marketing for complete digital success."
        />

        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div
              className="about-pillar-card"
              key={pillar.icon}
              data-reveal
              style={{ '--i': idx } as React.CSSProperties}
            >
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>
                <Mix parts={pillar.title} />
              </h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="global-reach-box" data-reveal>
          <div className="reach-content">
            <h3>Full-Service Digital & Software Agency</h3>
            <p>From initial code architecture to top Google rankings and high-converting marketing campaigns.</p>
          </div>
          <div className="reach-hubs">
            <div className="hub-badge">
              <span className="hub-dot green"></span>
              <span>Software Engineering</span>
            </div>
            <div className="hub-badge">
              <span className="hub-dot green"></span>
              <span>App & Web Dev</span>
            </div>
            <div className="hub-badge">
              <span className="hub-dot green"></span>
              <span>Digital Marketing & SEO</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
