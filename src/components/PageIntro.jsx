const PageIntro = ({ title, description }) => {
  return (
    <section className="section-shell page-intro-soft pb-6">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Inaare Consulting Group</p>
      <h1 className="font-serif text-4xl font-bold text-ivory md:text-6xl">{title}</h1>
      <p className="text-measure mt-6 text-lg text-muted">{description}</p>
    </section>
  )
}

export default PageIntro
