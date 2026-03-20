import PageIntro from '../components/PageIntro'
import { programs } from '../data/siteContent'
import RevealOnScroll from '../components/RevealOnScroll'

const ProgramsPage = () => {
  return (
    <>
      <PageIntro
        title="Transformational Programs"
        description="Signature programs engineered to reshape character, strengthen families, and expand cross-generational prosperity."
      />

      <section className="section-shell pt-4">
        <div className="relative pl-10">
          <div className="timeline-line" />
          <div className="space-y-6">
            {programs.map((program, index) => (
              <RevealOnScroll key={program} delay={index * 100}>
                <article className="premium-card relative ml-2">
                  <span className="absolute -left-[38px] top-7 h-4 w-4 rounded-full border-2 border-gold bg-ink" />
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Program {index + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-ivory">{program}</h3>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center">
          <p className="font-serif text-3xl text-ivory md:text-4xl">
            Advancing cross-generational wealth capability at scale.
          </p>
        </div>
      </section>
    </>
  )
}

export default ProgramsPage
