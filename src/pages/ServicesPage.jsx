import PageIntro from '../components/PageIntro'
import { services } from '../data/siteContent'
import RevealOnScroll from '../components/RevealOnScroll'
import { useSiteContent } from '../context/SiteContentContext'

const ServicesPage = () => {
  const { content } = useSiteContent()

  return (
    <>
      <PageIntro
        title="Services"
        description={
          content.services?.description ||
          'Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence.'
        }
      />

      <section className="section-shell rhythm-open flow-section signature-motif pt-6">
        <div className="layout-split items-start">
          <RevealOnScroll>
            <div className="split-visual lg:sticky lg:top-24">
              <p className="section-kicker">Strategic Service Lines</p>
              <h2 className="gold-trace mt-4 inline-block font-serif text-4xl font-semibold text-ivory md:text-5xl">
                Advisory services designed for measurable transformation.
              </h2>
              <p className="mt-5 text-muted">
                Each service is intentionally structured to strengthen leadership behavior, governance discipline, and execution quality.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title} delay={index * 70}>
                <article className={`open-feature ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'}`}>
                  <p className="section-kicker">Service {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="gold-trace mt-3 inline-block font-serif text-3xl font-semibold text-ivory md:text-4xl">{service.title}</h3>
                  <p className="mt-4 text-lg text-muted">{service.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
