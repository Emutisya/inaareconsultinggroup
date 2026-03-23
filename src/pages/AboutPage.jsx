import FounderProfile from '../components/FounderProfile'
import PageIntro from '../components/PageIntro'
import RevealOnScroll from '../components/RevealOnScroll'
import { useSiteContent } from '../context/SiteContentContext'

const coreValues = ['Trust', 'Responsibility', 'Partnerships', 'Accountability']

const AboutPage = () => {
  const { content } = useSiteContent()

  return (
    <>
      <PageIntro
        title="About Inaare Consulting Group"
        description={
          content.about?.description ||
          'We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets.'
        }
      />

      <section className="section-shell flow-section signature-motif pt-4">
        <div className="layout-offset items-start">
          <RevealOnScroll>
            <article className="split-visual lg:sticky lg:top-24">
              <p className="section-kicker">Institutional Identity</p>
              <h2 className="gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory md:text-5xl">Who We Are</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Inaare Consulting Group equips leaders, families, and organizations to evolve into
                resilient engines of progress. We combine strategic discipline, governance clarity,
                and leadership coaching to unlock excellence that compounds over generations.
              </p>
            </article>
          </RevealOnScroll>

          <div className="space-y-8">
            <RevealOnScroll delay={80}>
              <article className="open-feature lg:ml-12">
                <h2 className="gold-trace inline-block font-serif text-3xl font-bold text-ivory">Vision</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  To make people GREAT, WEALTHY & IMPACTFUL across diverse markets.
                </p>
              </article>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <article className="open-feature lg:mr-10">
                <h2 className="gold-trace inline-block font-serif text-3xl font-bold text-ivory">Mission</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  To Rebuild broken Links, Reshape Perspectives and Restore Values and Value Systems
                  to individuals and organizations.
                </p>
              </article>
            </RevealOnScroll>
            <RevealOnScroll delay={160}>
              <article className="open-feature lg:ml-14">
                <h2 className="gold-trace inline-block font-serif text-3xl font-bold text-ivory">Promise</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  To Transcend Generations to Transgenerational Greatness through PARADIGM shift.
                </p>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-shell flow-section pt-6">
        <RevealOnScroll>
          <div className="layout-center section-blush">
            <p className="section-kicker">Core Values</p>
            <h2 className="gold-trace inline-block font-serif text-3xl font-bold text-ivory">Core Values</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value) => (
                <div
                  key={value}
                  className="rounded-xl bg-[radial-gradient(circle_at_top,rgba(247,214,224,0.2),rgba(255,255,255,0.96))] px-4 py-5 text-center text-ivory shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <FounderProfile />
    </>
  )
}

export default AboutPage
