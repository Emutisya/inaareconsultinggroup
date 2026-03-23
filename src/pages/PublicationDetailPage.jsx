import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import { getPublications, resolvePublicationDate } from '../lib/publications'

const formatDate = (value) => {
  if (!value) {
    return ''
  }

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return ''
  }

  return parsed.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const PublicationDetailPage = () => {
  const { id } = useParams()
  const [publications, setPublications] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadPublications = async () => {
      const data = await getPublications()
      setPublications(data)
      setLoaded(true)
    }

    loadPublications()
  }, [])

  const publication = useMemo(
    () => publications.find((item) => item.id === id),
    [publications, id]
  )

  if (!loaded) {
    return (
      <section className="section-shell pt-8">
        <div className="mx-auto h-48 w-full max-w-4xl animate-pulse rounded-[16px] border border-gold/15 bg-charcoal/40" />
      </section>
    )
  }

  if (!publication) {
    return <Navigate to="/publications" replace />
  }

  const paragraphs = publication.content
    ? publication.content
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : []
  const publicationDate = resolvePublicationDate(publication)

  return (
    <section className="section-shell flow-section signature-motif pt-8">
      <div className="mx-auto w-full max-w-5xl">
        <RevealOnScroll>
          <Link
            to="/publications"
            className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-gold transition-colors duration-300 hover:text-ivory"
          >
            ← Back to Publications
          </Link>

          <header className="section-blush mt-8 pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{publication.category}</p>
            <h1 className="mt-4 display-title max-w-4xl">
              {publication.title}
            </h1>
            <div className="accent-divider mt-6 max-w-[220px]" />
            {publicationDate && (
              <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted">
                {formatDate(publicationDate)}
              </p>
            )}
          </header>
        </RevealOnScroll>

        {paragraphs.length > 0 && (
          <RevealOnScroll delay={90}>
            <article className="publication-prose layout-center mt-12 space-y-7 text-xl text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </RevealOnScroll>
        )}

        {paragraphs.length === 0 && publication.pdfUrl && (
          <RevealOnScroll delay={140}>
            <section className="offset-panel mt-12 p-4 md:p-6">
              <h2 className="gold-trace inline-block font-serif text-3xl text-ivory">Publication PDF</h2>
              <iframe
                src={publication.pdfUrl}
                title={`${publication.title} PDF`}
                className="mt-5 h-[70vh] w-full rounded-[12px] border border-gold/15 bg-ink"
              />
            </section>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default PublicationDetailPage
