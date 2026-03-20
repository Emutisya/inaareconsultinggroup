import PageIntro from '../components/PageIntro'
import ServiceCard from '../components/ServiceCard'
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

      <section className="section-shell pt-4">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 70}>
              <ServiceCard title={service.title} description={service.description} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
