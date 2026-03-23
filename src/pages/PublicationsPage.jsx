import { useEffect, useState } from 'react'
import PageIntro from '../components/PageIntro'
import RevealOnScroll from '../components/RevealOnScroll'
import { Link } from 'react-router-dom'
import { getPublications } from '../lib/publications'

const PublicationsPage = () => {
  const [publications, setPublications] = useState([])

  useEffect(() => {
    const loadPublications = async () => {
      const data = await getPublications()
      setPublications(data)
    }

    loadPublications()
  }, [])

  return (
    <>
      <PageIntro
        title="Publications"
        description="Thought leadership publications shaping governance, character, and enterprise continuity."
      />

      <section className="section-shell rhythm-open flow-section signature-motif pt-4">
        <div className="layout-split items-start">
          <RevealOnScroll>
            <div className="split-visual lg:sticky lg:top-24">
              <p className="section-kicker">Thought Leadership Library</p>
              <h2 className="gold-trace mt-4 inline-block font-serif text-4xl font-semibold text-ivory md:text-5xl">
                Ideas that shape governance, continuity, and strategic resilience.
              </h2>
              <p className="mt-5 text-muted">
                Explore concise executive perspectives built for boardrooms, institutions, and transformation leaders.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-7">
            {publications.map((publication, index) => (
              <RevealOnScroll key={publication.id} delay={index * 80}>
                <article className={`offset-panel ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'} transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.09)]`}>
                  <Link
                    to={`/publications/${publication.id}`}
                    className="block"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{publication.category}</p>
                    <h3 className="gold-trace mt-4 inline-block font-serif text-3xl font-bold text-ivory">{publication.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted">{publication.description}</p>
                    <p className="link-underline mt-6 inline-block text-xs uppercase tracking-[0.16em] text-gold/80">
                      Explore Perspective
                    </p>
                  </Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PublicationsPage
