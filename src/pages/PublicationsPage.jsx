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

      <section className="section-shell pt-4">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((publication, index) => (
            <RevealOnScroll key={publication.id} delay={index * 80}>
              <article className="premium-card h-full p-0">
                <Link
                  to={`/publications/${publication.id}`}
                  className="block h-full rounded-[16px] p-6 transition duration-500 hover:bg-ink/30"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{publication.category}</p>
                  <h3 className="mt-4 font-serif text-3xl font-bold text-ivory">{publication.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{publication.description}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.16em] text-gold/80">
                    Read Insight
                  </p>
                </Link>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}

export default PublicationsPage
