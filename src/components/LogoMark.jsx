import { useState } from 'react'

const logoCandidates = ['/InaaReLogos.png', '/InaareLogos.png', '/inaare-logo.png']

const LogoMark = ({ className = 'h-14 w-16' }) => {
  const [logoIndex, setLogoIndex] = useState(0)
  const [imageMissing, setImageMissing] = useState(false)

  const handleImageError = () => {
    if (logoIndex < logoCandidates.length - 1) {
      setLogoIndex((prev) => prev + 1)
      return
    }

    setImageMissing(true)
  }

  if (!imageMissing) {
    return (
      <div
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-transparent p-0 ${className}`}
      >
        <img
          src={logoCandidates[logoIndex]}
          alt="Inaare Consulting Group logo"
          className="h-full w-full object-contain"
          width="80"
          height="56"
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />
      </div>
    )
  }

  return (
    <div
      className={`gold-ring relative flex shrink-0 items-center justify-center rounded-[12px] bg-ivory/90 p-2 ${className}`}
    >
      <div className="absolute left-1/2 top-1 h-6 w-7 -translate-x-1/2 bg-black [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
      <div className="absolute bottom-1 left-1 h-6 w-7 bg-pink [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
      <div className="absolute bottom-1 right-1 h-6 w-7 bg-gold [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
    </div>
  )
}

export default LogoMark
