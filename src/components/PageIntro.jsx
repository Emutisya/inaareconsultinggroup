const PageIntro = ({ title, description }) => {
  return (
    <section className="section-shell rhythm-open page-intro-soft signature-motif pb-8">
      <div className="layout-split items-end">
        <div className="max-w-4xl">
        <p className="hero-kicker mb-4 text-xs uppercase tracking-[0.3em] text-gold">Inaare Consulting Group</p>
          <h1 className="gold-trace inline-block display-title">{title}</h1>
        <div className="accent-divider mt-6 max-w-[170px]" />
        </div>
        <p className="text-measure mt-8 text-lg leading-relaxed text-muted lg:mt-0 lg:pl-8">{description}</p>
      </div>
    </section>
  )
}

export default PageIntro
