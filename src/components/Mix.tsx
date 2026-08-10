/* Word-level colour treatment. 'light' is white, 'green' is the brand accent,
   and the box tones are dark ink on a filled chip — the only way near-black
   text stays readable on this dark background. */
export type Tone = 'light' | 'green' | 'box' | 'boxLight' | 'muted'

export default function Mix({ parts }: { parts: [string, Tone?][] }) {
  return (
    <>
      {parts.map(([text, tone = 'light'], i) => (
        <span className={`tone tone-${tone}`} key={i}>
          {text}
        </span>
      ))}
    </>
  )
}
