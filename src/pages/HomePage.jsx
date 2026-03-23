import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  founderProfile,
  whoWeWorkWith,
  whatWeDeliver
} from '../data/siteContent'
import RevealOnScroll from '../components/RevealOnScroll'

const HomePage = () => {
  const slides = [
    {
      image: '/7.jpg',
      label: 'LEADERSHIP DEVELOPMENT',
      title: 'Build Confident Teams',
      desc: 'Shape accountable leadership pipelines that sustain performance'
    },
    {
      image: '/10.jpg',
      label: 'GOVERNANCE ADVISORY',
      title: 'Stewardship with Precision',
      desc: 'Strengthen oversight structures that protect enterprise value'
    },
    {
      image: '/12.jpg',
      label: 'STRATEGY EXECUTION',
      title: 'Move Vision to Results',
      desc: 'Translate direction into measurable momentum across the organization'
    }
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <section className="hero">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="pointer-events-none absolute -left-[120px] top-[-100px] h-[520px] w-[520px] rounded-full bg-pink-200/55 blur-[140px]" />
        <div className="pointer-events-none absolute -right-[80px] top-[8%] h-[520px] w-[520px] rounded-full bg-yellow-200/55 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d49a00]/70 to-transparent md:inset-x-12" />

        <div className="hero-left hero-content">
          <h1 className="max-w-[11ch] font-serif text-[clamp(3.2rem,7.2vw,6rem)] leading-[1.01] text-[#111111]">
            <span className="block whitespace-nowrap opacity-0 animate-[fadeUp_0.8s_ease_forwards]">Rebirthing Lives.</span>
            <span className="block opacity-0 animate-[fadeUp_0.8s_ease_0.18s_forwards]">Building</span>
            <span className="relative mt-1 block opacity-0 animate-[fadeUp_0.8s_ease_0.34s_forwards]">
              <span className="gradient-text block drop-shadow-[0_4px_14px_rgba(212,175,55,0.42)]">
                Generational
              </span>
              <span className="gradient-text block drop-shadow-[0_4px_14px_rgba(212,175,55,0.42)]">
                Greatness
              </span>
            </span>
          </h1>
          <div className="hero-accent" />

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#4f5662] opacity-0 animate-[fadeUp_0.8s_ease_0.5s_forwards] md:text-xl">
            We reshape leaders, rebuild systems, and restore value, transforming individuals and organizations into scalable, enduring institutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_0.8s_ease_0.64s_forwards] md:flex-nowrap">
            <Link to="/booking" className="button-primary whitespace-nowrap rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Schedule Consultation
            </Link>
            <a href="#what-we-do" className="whitespace-nowrap rounded-full border border-[#d49a00]/55 bg-white/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#9a6d00] transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50 hover:text-[#7f5800]">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-inner">
            <div className="hero-carousel group">
              {slides.map((slide, i) => (
                <div
                  key={slide.image}
                  className={`slide ${activeSlide === i ? 'active' : ''}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="hero-slide-image"
                  />

                  <div className="hero-card-content">
                    <div className="mb-2 text-xs tracking-[0.2em] text-yellow-300">
                      {slide.label}
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">
                      {slide.title}
                    </h3>

                    <p className="text-sm text-white/80">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-dots carousel-dots mt-4 flex justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                  className={activeSlide === i ? 'active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        <RevealOnScroll>
          <div className="impact-inner">
            <h2 className="impact-title">
              We don't build strategies.
            </h2>

            <h2 className="impact-title gradient">
              We build systems that outlive leadership.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="glow glow-gold" />
        <div className="glow glow-pink" />
      </section>

      <section id="what-we-do" className="bg-white px-6 py-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-yellow-600">
              What We Do
            </p>

            <h2 className="mb-6 font-serif text-4xl md:text-5xl">
              Strategic Services
            </h2>

            <p className="max-w-xl text-gray-600">
              We don&apos;t offer services. We build systems that create clarity,
              scale impact, and outlive leadership.
            </p>

            <div className="mt-6 h-[2px] w-20 bg-yellow-500" />
          </div>

          <div className="divide-y divide-gray-200">
            {[
              {
                title: 'Coaching & Mentorship',
                desc: 'Develop resilient leaders through high-trust coaching that sharpens decision quality and execution.'
              },
              {
                title: 'Leadership Development',
                desc: 'Build leadership pipelines and systems that sustain performance, accountability, and long-term growth.'
              },
              {
                title: 'Governance Advisory',
                desc: 'Strengthen boards and leadership teams with governance frameworks that protect value and improve oversight.'
              },
              {
                title: 'Strategy Design & Execution',
                desc: 'Translate vision into structured priorities, operating models, and measurable enterprise impact.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col gap-6 py-10 transition-all duration-300 hover:translate-x-2 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-xl text-yellow-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-serif text-2xl transition group-hover:text-yellow-600">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell rhythm-open flow-section pt-0">
        <div className="layout-offset items-start">
          <RevealOnScroll>
            <div>
              <p className="section-kicker">Experience</p>
              <h3 className="mt-3 max-w-2xl font-serif text-5xl leading-[1.04] text-ivory md:text-6xl">
                Making people GREAT, WEALTHY & IMPACTFUL across diverse markets.
              </h3>
              <p className="mt-5 max-w-xl text-lg text-muted">
                We turn leadership intent into systems that produce disciplined execution and measurable outcomes.
              </p>
            </div>
          </RevealOnScroll>
          <div className="space-y-7 lg:ml-16">
            <RevealOnScroll delay={80}>
              <div className="open-feature">
                <p className="font-serif text-6xl text-gold">25+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">Years Experience</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div className="open-feature">
                <p className="font-serif text-5xl text-gold">Global Reach</p>
                <p className="mt-3 text-base leading-relaxed text-muted">Working with leaders and organizations across Africa and globally.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <div className="open-feature">
                <p className="font-serif text-5xl text-gold">Systems Thinking</p>
                <p className="mt-3 text-base leading-relaxed text-muted">Integrating governance, leadership, and execution into one resilient operating model.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#101010] py-[112px] lg:py-[156px]">
        <RevealOnScroll>
          <div className="mx-auto w-full max-w-[1500px] px-8 md:px-16">
            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">Strategic Anchor</p>
              <h3 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#f6f1e8] md:text-6xl">
                Authority is built where <span className="gold-emphasis">governance</span>, character, and execution converge.
              </h3>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#d7d3cb] md:text-lg">
                We help institutions and leaders move from fragmented effort to aligned systems that compound trust, value, and generational progress.
              </p>
              <Link to="/booking" className="premium-btn-primary mt-8">
                Book Strategic Session
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="section-shell rhythm-open flow-section pt-0">
        <div className="layout-offset items-start">
          <RevealOnScroll>
            <div className="gold-ring floating-layer relative mx-auto w-fit self-start overflow-hidden rounded-2xl border border-gold/35 bg-white p-4 shadow-[0_30px_72px_rgba(0,0,0,0.16)] sm:-mt-16 sm:p-5 lg:ml-8">
              <img
                src="/ekyengo1.jpg"
                alt="Inaare Consulting Group founder"
                className="mx-auto h-[360px] w-auto object-contain sm:h-[430px] md:h-[520px]"
              />
              <div className="pointer-events-none absolute left-5 top-5 h-6 w-24 bg-gradient-to-r from-gold/85 to-gold/10" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="section-kicker">Founder Highlight</p>
            <h3 className="gold-trace mt-3 inline-block font-serif text-6xl font-bold text-ivory md:text-7xl">{founderProfile.name}</h3>
            <p className="mt-5 max-w-2xl text-lg text-muted">{founderProfile.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(founderProfile.certifications || []).slice(0, 4).map((item) => (
                <p key={item} className="rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
                  {item}
                </p>
              ))}
            </div>
            <blockquote className="mt-12 border-l-2 border-gold/70 bg-[radial-gradient(circle_at_10%_50%,rgba(247,214,224,0.24),transparent_62%)] pl-6 font-serif text-5xl italic leading-[1.06] text-ivory/95 md:sticky md:top-24">
              “{founderProfile.quote}”
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-shell rhythm-open flow-section pt-0">
        <div className="wow-panel floating-layer text-center md:text-left">
          <p className="relative z-10 text-xs uppercase tracking-[0.24em] text-gold">Next Step</p>
          <h3 className="relative z-10 mt-4 font-serif text-4xl font-bold text-ivory md:text-6xl">
            Begin Your Transformation Journey
          </h3>
          <p className="relative z-10 mt-5 text-base leading-relaxed text-muted md:max-w-3xl md:text-lg">
            Enter a focused advisory partnership that restores clarity, aligns leadership, and
            advances meaningful outcomes with confidence and discretion.
          </p>
          <Link
            to="/booking"
            className="premium-btn-primary relative z-10 mt-8"
          >
            Schedule a Strategic Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
