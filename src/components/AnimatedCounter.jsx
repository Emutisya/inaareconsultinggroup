import { useEffect, useState } from 'react'

const AnimatedCounter = ({ end, suffix = '', label }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1400
    const stepTime = Math.max(18, Math.floor(duration / end))

    const timer = setInterval(() => {
      start += 1
      setValue(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end])

  return (
    <article className="premium-card text-center">
      <p className="font-serif text-5xl font-bold text-gold">{value}{suffix}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted">{label}</p>
    </article>
  )
}

export default AnimatedCounter
