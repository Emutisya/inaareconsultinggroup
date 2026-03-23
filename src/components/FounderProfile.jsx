import { founderProfile } from '../data/siteContent'
import RevealOnScroll from './RevealOnScroll'

const FounderProfile = () => {
  return (
    <section className="section-shell flow-section signature-motif">
      <div className="relative grid gap-10 overflow-hidden rounded-3xl bg-[radial-gradient(70%_90%_at_15%_25%,rgba(247,214,224,0.22),transparent_72%),radial-gradient(65%_90%_at_80%_10%,rgba(198,167,94,0.1),transparent_70%)] p-4 md:grid-cols-[1fr_1.15fr] md:p-6">
        <div className="pointer-events-none absolute -top-10 left-4 h-24 w-24 border border-gold/30 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
        <div className="pointer-events-none absolute -bottom-10 right-6 h-28 w-28 border border-gold/20 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />

        <RevealOnScroll className="self-start overflow-hidden rounded-2xl bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
          <div className="gold-ring overflow-hidden rounded-xl bg-white">
            <img
              src="/ekyengo.JPG"
              alt={`${founderProfile.name} portrait`}
              className="h-full min-h-[360px] w-full object-cover object-top"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <h2 className="gold-trace inline-block font-serif text-3xl font-bold text-ivory md:text-6xl">
            Leadership that Builds Legacy
          </h2>
          <p className="text-measure mt-6 text-lg text-muted">{founderProfile.summary}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {founderProfile.certifications?.map((credential) => (
              <span
                key={credential}
                className="rounded-[14px] bg-white px-4 py-3 text-xs uppercase tracking-[0.15em] text-gold shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
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
          <blockquote className="mt-10 rounded-r-[16px] border-l-2 border-gold/70 bg-[radial-gradient(circle_at_10%_50%,rgba(247,214,224,0.22),transparent_62%)] px-5 py-7 font-serif text-3xl italic leading-tight text-ivory/95 md:sticky md:top-28">
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
