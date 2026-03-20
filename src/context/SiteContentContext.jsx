import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

const defaultContent = {
  home: {
    headline: 'Rebirthing Lives. Building Generational Greatness.',
    subtext:
      'We reshape leaders, rebuild systems, and restore value—transforming individuals and organizations into scalable, resilient engines of measurable impact across diverse markets.'
  },
  about: {
    description:
      'We are a leadership and transformation advisory firm committed to restoring value, shaping perspective, and building enduring systems across diverse markets.'
  },
  services: {
    description:
      'Outcome-focused advisory and development services designed to strengthen leadership, institutions, and execution excellence.'
  }
}

const SiteContentContext = createContext(null)

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent)
  const [loading, setLoading] = useState(false)

  const refreshContent = async () => {
    try {
      setLoading(true)
      const docSnap = await getDoc(doc(db, 'content', 'homepage'))
      const data = docSnap.data()

      const [aboutSnap, servicesSnap] = await Promise.all([
        getDoc(doc(db, 'content', 'about')),
        getDoc(doc(db, 'content', 'services'))
      ])

      setContent({
        home: {
          ...defaultContent.home,
          ...(docSnap.exists() ? data : {})
        },
        about: {
          ...defaultContent.about,
          ...(aboutSnap.exists() ? aboutSnap.data() : {})
        },
        services: {
          ...defaultContent.services,
          ...(servicesSnap.exists() ? servicesSnap.data() : {})
        }
      })
    } catch {
      // Keep fallback content when API is unavailable
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshContent()
  }, [])

  const value = useMemo(
    () => ({ content, setContent, refreshContent, loading }),
    [content, loading]
  )

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
}

export const useSiteContent = () => {
  const context = useContext(SiteContentContext)
  if (!context) {
    throw new Error('useSiteContent must be used within SiteContentProvider')
  }
  return context
}
