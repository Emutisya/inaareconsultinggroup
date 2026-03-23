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

      <section className="section-shell rhythm-open flow-section signature-motif pt-4">
        <div className="relative pl-10 md:pl-14">
          <div className="timeline-line" />
          <div className="space-y-10">
            {programs.map((program, index) => (
              <RevealOnScroll key={program} delay={index * 100}>
                <article className={`open-feature relative ml-2 ${index % 2 === 0 ? 'md:ml-4' : 'md:ml-10'}`}>
                  <span className="absolute -left-[38px] top-7 h-4 w-4 rounded-full border-2 border-gold bg-ink" />
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Program {index + 1}</p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-ivory md:text-4xl">{program}</h3>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="wow-panel mt-12 text-center">
          <p className="section-kicker relative z-10">Program Impact</p>
          <p className="relative z-10 font-serif text-3xl text-ivory md:text-4xl">
            Advancing cross-generational wealth capability at scale.
          </p>
        </div>
      </section>
    </>
  )
}

export default ProgramsPage
