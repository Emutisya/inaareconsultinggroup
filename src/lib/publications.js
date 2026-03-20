import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { publications as fallbackPublications } from '../data/siteContent'

const normalizePublication = (raw, id) => ({
  id: raw.id || id,
  title: raw.title || 'Untitled Publication',
  description:
    raw.description ||
    (typeof raw.content === 'string' && raw.content.trim().length > 0
      ? `${raw.content.trim().slice(0, 180)}...`
      : 'Executive insight for leaders building durable character, strategy, and generational value.'),
  category: raw.category || 'Thought Leadership',
  content: raw.content || '',
  pdfUrl: raw.pdfUrl || '',
  date: raw.date || null,
  createdAt: raw.createdAt || null,
  updatedAt: raw.updatedAt || null
})

export const resolvePublicationDate = (publication) => {
  if (publication?.date) {
    return publication.date
  }

  if (publication?.createdAt && typeof publication.createdAt?.toDate === 'function') {
    return publication.createdAt.toDate()
  }

  return publication?.createdAt || null
}

const sortByLatest = (list) => {
  return [...list].sort((a, b) => {
    const aDate = resolvePublicationDate(a)
    const bDate = resolvePublicationDate(b)
    const aTime = new Date(aDate || 0).getTime() || 0
    const bTime = new Date(bDate || 0).getTime() || 0
    return bTime - aTime
  })
}

export const getPublications = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'publications'))
    const fromDb = []

    snapshot.forEach((itemDoc) => {
      fromDb.push(normalizePublication(itemDoc.data() || {}, itemDoc.id))
    })

    if (fromDb.length > 0) {
      return sortByLatest(fromDb)
    }
  } catch {
    // Fall back to bundled content when Firestore is unavailable.
  }

  return fallbackPublications.map((item, index) => {
    if (typeof item === 'string') {
      return normalizePublication({
        id: `publication-${index + 1}`,
        title: item,
        description: 'Executive insight for leaders building durable character, strategy, and generational value.',
        category: 'Thought Leadership'
      })
    }

    return normalizePublication(item, item.id || `publication-${index + 1}`)
  })
}
