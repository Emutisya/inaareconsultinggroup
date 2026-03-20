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
      className="premium-card service-tilt h-full"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-ink/70 text-lg text-gold">
        {iconByTitle[title] || '◈'}
      </span>
      <h3 className="mt-5 font-serif text-2xl text-ivory">{title}</h3>
      <p className="text-measure mt-3 leading-relaxed text-muted">{description}</p>
    </article>
  )
}

export default ServiceCard
