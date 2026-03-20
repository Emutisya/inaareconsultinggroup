import { Link } from 'react-router-dom'
import {
  services,
  founderProfile,
  whoWeWorkWith,
  whatWeDeliver,
  testimonials
} from '../data/siteContent'
import ServiceCard from '../components/ServiceCard'
import AnimatedCounter from '../components/AnimatedCounter'
import RevealOnScroll from '../components/RevealOnScroll'
import { useSiteContent } from '../context/SiteContentContext'

const HomePage = () => {
  const { content } = useSiteContent()

  return (
    <>
      <section className="hero-cinematic overflow-hidden border-b border-gold/10">
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-84px)] flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Inaare Consulting Group</p>
          <h1 className="hero-headline mt-5 max-w-5xl animate-fadeUp font-serif text-4xl font-bold text-ivory md:text-7xl">
            {content.home?.headline || 'Rebirthing Lives. Building Generational Greatness.'}
          </h1>
          <p className="text-measure mt-7 animate-fadeUp text-lg text-muted md:text-xl" style={{ animationDelay: '140ms' }}>
            {content.home?.subtext ||
              'We reshape leaders, rebuild systems, and restore value—transforming individuals and organizations into scalable, resilient engines of measurable impact across diverse markets.'}
          </p>
          <div className="mt-12 flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: '260ms' }}>
            <Link
              to="/booking"
              className="premium-btn-primary"
            >
              Schedule a Strategic Consultation
            </Link>
            <a
              href="#what-we-do"
              className="premium-btn-secondary"
            >
              Explore Strategic Services
            </a>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section-shell">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl font-bold text-ivory md:text-6xl">What We Do</h2>
          <p className="text-measure mt-4 text-lg text-muted">
            From personal leadership renewal to enterprise transformation, we deliver integrated
            advisory and development solutions.
          </p>
        </RevealOnScroll>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <RevealOnScroll key={service.title}>
              <ServiceCard title={service.title} description={service.description} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="premium-card h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Who We Work With</p>
              <h3 className="mt-3 font-serif text-3xl text-ivory">Trusted by Decision-Makers</h3>
              <ul className="mt-6 space-y-3 text-muted">
                {whoWeWorkWith.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <div className="premium-card h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">What We Deliver</p>
              <h3 className="mt-3 font-serif text-3xl text-ivory">Outcomes That Endure</h3>
              <ul className="mt-6 space-y-3 text-muted">
                {whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <RevealOnScroll>
            <div className="flex h-full items-center rounded-3xl border border-gold/30 bg-charcoal/60 px-8 py-10 shadow-soft md:px-10 md:py-12">
              <p className="font-serif text-3xl leading-tight text-ivory md:text-5xl">
                Making people GREAT, WEALTHY & IMPACTFUL across diverse markets.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4">
            <RevealOnScroll delay={80}>
              <div className="h-full">
                <AnimatedCounter end={25} suffix="+" label="Years Experience" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <article className="premium-card h-full text-center">
                <p className="font-serif text-3xl font-bold text-gold md:text-4xl">Diverse Markets</p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Working with leaders and organizations across Africa and globally.
                </p>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-shell triangle-bg pt-8">
        <div className="grid gap-8 rounded-3xl border border-gold/20 bg-charcoal/55 p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
          <RevealOnScroll>
            <div className="gold-ring mx-auto w-fit self-start overflow-hidden rounded-2xl border border-gold/25 bg-ink/70 p-4 sm:p-5">
              <img
                src="/ekyengo1.jpg"
                alt="Inaare Consulting Group founder"
                className="mx-auto h-[320px] w-auto object-contain sm:h-[360px] md:h-[420px]"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Founder Highlight</p>
            <h3 className="mt-3 font-serif text-4xl font-bold text-ivory">{founderProfile.name}</h3>
            <p className="mt-4 text-lg text-muted">{founderProfile.summary}</p>
            <blockquote className="mt-6 border-l-2 border-gold/60 pl-4 font-serif text-2xl italic text-ivory/95 md:sticky md:top-28">
              “{founderProfile.quote}”
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-shell pt-0">
        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Executive Testimonials</p>
          <h3 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">What Leaders Say</h3>
        </RevealOnScroll>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.attribution} delay={index * 90}>
              <article className="premium-card h-full">
                <p className="text-lg italic text-ivory/95">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.12em] text-muted">{item.attribution}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-r from-charcoal to-ink px-8 py-14 text-center">
          <h3 className="font-serif text-3xl font-bold text-ivory md:text-5xl">
            Begin Your Transformation Journey
          </h3>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted">
            Strategic advisory excellence.
          </p>
          <Link
            to="/booking"
            className="premium-btn-primary mt-8"
          >
            Schedule a Strategic Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
