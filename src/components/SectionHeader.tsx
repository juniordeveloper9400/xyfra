import Mix, { type Tone } from './Mix'

/* The tag + title + subtitle block that opens every section */
export default function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string
  title: [string, Tone?][]
  subtitle: string
}) {
  return (
    <div className="section-header" data-reveal>
      <div className="section-tag">
        <span className="badge-dot"></span>
        <span>{tag}</span>
      </div>
      <h2 className="section-title">
        <Mix parts={title} />
      </h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}
