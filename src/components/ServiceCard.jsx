import { useRef } from 'react'

const iconByTitle = {
  'Coaching and Mentorship': '◉',
  'Leadership Development': '△',
  'Governance Advisory': '▣',
  'Strategy Design & Execution': '◆',
  'Effective Supply Chain': '⬢'
}

const ServiceCard = ({ title, description }) => {
  const cardRef = useRef(null)

  const onMove = (event) => {
    const element = cardRef.current
    if (!element) {
      return
    }

    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -3
    const rotateY = ((x / rect.width) - 0.5) * 3

    element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <article
      ref={cardRef}
      className="group service-tilt h-full rounded-[18px] bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(255,250,252,0.84))] px-5 py-5 shadow-[0_12px_28px_rgba(0,0,0,0.07)]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-[#fff5f7] text-lg text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#c67b8d]/50 group-hover:shadow-[0_6px_20px_rgba(232,175,193,0.28)]">
        {iconByTitle[title] || '◈'}
      </span>
      <h3 className="gold-trace mt-5 inline-block font-serif text-2xl font-semibold text-ivory">{title}</h3>
      <p className="text-measure mt-4 leading-relaxed text-muted">{description}</p>
    </article>
  )
}

export default ServiceCard
