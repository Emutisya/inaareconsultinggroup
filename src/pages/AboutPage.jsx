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

      <section className="section-shell pt-4">
        <div className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <article className="premium-card">
              <h2 className="font-serif text-3xl font-bold text-ivory">Who We Are</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Inaare Consulting Group equips leaders, families, and organizations to evolve into
                resilient engines of progress. We combine strategic discipline, governance clarity,
                and leadership coaching to unlock excellence that compounds over generations.
              </p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <article className="premium-card">
              <h2 className="font-serif text-3xl font-bold text-ivory">Vision</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To make people GREAT, WEALTHY & IMPACTFUL across diverse markets.
              </p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <article className="premium-card">
              <h2 className="font-serif text-3xl font-bold text-ivory">Mission</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To Rebuild broken Links, Reshape Perspectives and Restore Values and Value Systems
                to individuals and organizations.
              </p>
            </article>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <article className="premium-card">
              <h2 className="font-serif text-3xl font-bold text-ivory">Promise</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To Transcend Generations to Transgenerational Greatness through PARADIGM shift.
              </p>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-shell pt-4">
        <RevealOnScroll>
          <div className="premium-card">
            <h2 className="font-serif text-3xl font-bold text-ivory">Core Values</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value) => (
                <div
                  key={value}
                  className="rounded-xl border border-gold/20 bg-ink/40 px-4 py-4 text-center text-ivory"
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
