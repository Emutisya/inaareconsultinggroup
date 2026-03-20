import { founderProfile } from '../data/siteContent'
import RevealOnScroll from './RevealOnScroll'

const FounderProfile = () => {
  return (
    <section className="section-shell">
      <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/50 p-8 md:grid-cols-[1fr_1.15fr] md:p-12">
        <div className="pointer-events-none absolute -top-10 left-4 h-24 w-24 border border-gold/30 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
        <div className="pointer-events-none absolute -bottom-10 right-6 h-28 w-28 border border-gold/20 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />

        <RevealOnScroll className="self-start overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-charcoal to-ink p-3">
          <div className="gold-ring overflow-hidden rounded-xl border border-gold/25 bg-ink/60">
            <img
              src="/ekyengo.JPG"
              alt={`${founderProfile.name} portrait`}
              className="h-full min-h-[360px] w-full object-cover object-top"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <h2 className="font-serif text-3xl font-bold text-ivory md:text-6xl">
            Leadership that Builds Legacy
          </h2>
          <p className="text-measure mt-6 text-lg text-muted">{founderProfile.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {founderProfile.certifications?.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-gold/35 bg-ink/50 px-3 py-1 text-xs uppercase tracking-[0.16em] text-gold"
              >
                {credential}
              </span>
            ))}
          </div>
          <ul className="mt-8 space-y-3 text-muted">
            {founderProfile.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 rounded-r-[16px] border-l-2 border-gold/70 bg-ink/45 px-5 py-6 font-serif text-2xl italic text-ivory/95 md:sticky md:top-28">
            <span className="mr-1 text-4xl leading-none text-gold/80">“</span>
            {founderProfile.quote}
            <span className="ml-1 text-4xl leading-none text-gold/80">”</span>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default FounderProfile
