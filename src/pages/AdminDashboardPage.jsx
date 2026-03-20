import { useEffect, useMemo, useState } from 'react'
import { updatePassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { app, auth, db, storage } from '@/lib/firebase'
import { useAuth } from '../context/AuthContext'
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getMessaging } from 'firebase/messaging'
import { normalizeDateISO, normalizeDateISOArray } from '../lib/dateISO'
import {
  canUseMessaging,
  initializeAdminPushNotifications,
  watchPushPermission
} from '../lib/pushNotifications'

const VIEWS = [
  { key: 'dashboard', label: 'Dashboards' },
  { key: 'bookings', label: 'Bookings' },
  { key: 'messages', label: 'Messages' },
  { key: 'calendar', label: 'My Calender' },
  { key: 'website-details', label: 'Website Details' },
  { key: 'admin-profile', label: 'Admin Profile' }
]

const STATUS_OPTIONS = ['pending', 'contacted', 'scheduled', 'completed']
const DEFAULT_PUBLICATION = { title: '', description: '', category: '', content: '', pdfUrl: '', date: '' }
const DEFAULT_WEBSITE_DETAILS = {
  githubRepoUrl: '',
  hostingProvider: '',
  hostingExpiration: '',
  domainName: '',
  domainHost: '',
  domainExpiration: ''
}
const DEFAULT_CALENDAR = {
  availableSlots: ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'],
  blockedDays: [],
  blockedSlots: []
}

const DEFAULT_SLOT_ACTION = {
  dateISO: '',
  time: '',
  type: 'personal',
  email: '',
  phone: '',
  summary: ''
}

const toJsDate = (value) => {
  if (!value) return null
  if (typeof value?.toDate === 'function') return value.toDate()
  if (typeof value === 'string') return new Date(value)
  return null
}

const prettyDate = (value) => {
  const parsed = toJsDate(value)
  return parsed && !Number.isNaN(parsed.getTime()) ? parsed.toLocaleString() : 'N/A'
}

const monthCells = (monthDate) => {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const days = new Date(year, month + 1, 0).getDate()
  const cells = []

  for (let index = 0; index < firstDay.getDay(); index += 1) cells.push(null)
  for (let day = 1; day <= days; day += 1) cells.push(new Date(year, month, day))
  while (cells.length % 7 !== 0) cells.push(null)

  return cells
}

const isWithin30Days = (value) => {
  if (!value) return false
  const expiry = new Date(value)
  if (Number.isNaN(expiry.getTime())) return false
  const days = (expiry.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  return days >= 0 && days <= 30
}

const SkeletonList = ({ rows = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, index) => (
      <div key={index} className="h-20 animate-pulse rounded-[12px] border border-gold/15 bg-charcoal/40" />
    ))}
  </div>
)

const AdminDashboardPage = () => {
  const { logout, firebaseUser } = useAuth()

  const [activeView, setActiveView] = useState('dashboard')
  const [bookings, setBookings] = useState([])
  const [messages, setMessages] = useState([])
  const [publications, setPublications] = useState([])
  const [websiteDetails, setWebsiteDetails] = useState(DEFAULT_WEBSITE_DETAILS)
  const [calendarSettings, setCalendarSettings] = useState(DEFAULT_CALENDAR)

  const [publicationForm, setPublicationForm] = useState(DEFAULT_PUBLICATION)
  const [selectedPublicationId, setSelectedPublicationId] = useState('')
  const [publicationPdfFile, setPublicationPdfFile] = useState(null)

  const [bookingSearch, setBookingSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [bookingsPage, setBookingsPage] = useState(1)
  const [messagesPage, setMessagesPage] = useState(1)

  const [selectedBooking, setSelectedBooking] = useState(null)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [publicationToDelete, setPublicationToDelete] = useState(null)
  const [bookingToDelete, setBookingToDelete] = useState(null)
  const [messageToDelete, setMessageToDelete] = useState(null)

  const [availabilityInput, setAvailabilityInput] = useState(DEFAULT_CALENDAR.availableSlots.join(', '))
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  const [selectedDatePanel, setSelectedDatePanel] = useState('')
  const [slotAction, setSlotAction] = useState(DEFAULT_SLOT_ACTION)

  const [profileForm, setProfileForm] = useState({ newPassword: '', confirmPassword: '' })
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isIosSafari, setIsIosSafari] = useState(false)
  const [installBusy, setInstallBusy] = useState(false)
  const [pushPermission, setPushPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  )
  const [pushBusy, setPushBusy] = useState(false)

  const [loading, setLoading] = useState({
    bookings: true,
    messages: true,
    publications: true,
    websiteDetails: true,
    calendar: true
  })
  const [busy, setBusy] = useState({
    publication: false,
    websiteDetails: false,
    calendar: false,
    profile: false,
    deletePublication: false,
    deleteBooking: false,
    deleteMessage: false
  })
  const [error, setError] = useState('')
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 2600)
  }

  const fetchAllDashboardData = async () => {
    try {
      setError('')
      const [bookingsSnap, messagesSnap, publicationsSnap, websiteSnap, availabilitySnap, blockedSlotsSnap] = await Promise.all([
        getDocs(collection(db, 'bookings')),
        getDocs(collection(db, 'messages')),
        getDocs(collection(db, 'publications')),
        getDoc(doc(db, 'websiteDetails', 'main')),
        getDoc(doc(db, 'availability', 'main')),
        getDoc(doc(db, 'blockedSlots', 'main'))
      ])

      const bookingsData = []
      bookingsSnap.forEach((d) => {
        const booking = d.data() || {}
        bookingsData.push({
          id: d.id,
          ...booking,
          dateISO: normalizeDateISO(booking.dateISO || booking.date)
        })
      })
      bookingsData.sort((a, b) => (toJsDate(b.createdAt)?.getTime() || 0) - (toJsDate(a.createdAt)?.getTime() || 0))

      const messagesData = []
      messagesSnap.forEach((d) => messagesData.push({ id: d.id, ...d.data() }))
      messagesData.sort((a, b) => (toJsDate(b.createdAt)?.getTime() || 0) - (toJsDate(a.createdAt)?.getTime() || 0))

      const publicationsData = []
      publicationsSnap.forEach((d) => publicationsData.push({ id: d.id, ...d.data() }))
      publicationsData.sort((a, b) => (toJsDate(b.createdAt)?.getTime() || 0) - (toJsDate(a.createdAt)?.getTime() || 0))

      setBookings(bookingsData)
      setMessages(messagesData)
      setPublications(publicationsData)
      setWebsiteDetails(websiteSnap.exists() ? { ...DEFAULT_WEBSITE_DETAILS, ...websiteSnap.data() } : DEFAULT_WEBSITE_DETAILS)

      const mergedCalendar = {
        ...DEFAULT_CALENDAR,
        ...(availabilitySnap.exists() ? availabilitySnap.data() : {}),
        ...(blockedSlotsSnap.exists() ? blockedSlotsSnap.data() : {})
      }
      const nextCalendar = {
        ...mergedCalendar,
        blockedDays: normalizeDateISOArray(mergedCalendar.blockedDays || []),
        blockedSlots: (mergedCalendar.blockedSlots || [])
          .map((slot) => ({
            dateISO: normalizeDateISO(slot?.dateISO),
            time: slot?.time || '',
            type: slot?.type === 'client' ? 'client' : 'personal',
            email: slot?.email || '',
            phone: slot?.phone || '',
            summary: slot?.summary || ''
          }))
          .filter((slot) => slot.dateISO && slot.time)
      }
      setCalendarSettings(nextCalendar)
      setAvailabilityInput((nextCalendar.availableSlots || []).join(', '))
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setLoading({ bookings: false, messages: false, publications: false, websiteDetails: false, calendar: false })
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchAllDashboardData()
      } else {
        console.log('Not authenticated')
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const stopWatching = watchPushPermission((nextPermission) => {
      setPushPermission(nextPermission)
    })

    return () => {
      stopWatching()
    }
  }, [])

  useEffect(() => {
    const standalone = window.matchMedia?.('(display-mode: standalone)')?.matches || window.navigator.standalone
    setIsStandalone(Boolean(standalone))

    const ua = window.navigator.userAgent || ''
    const ios = /iPad|iPhone|iPod/.test(ua)
    const safari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)
    setIsIosSafari(ios && safari)

    const onBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredInstallPrompt(event)
    }

    const onInstalled = () => {
      setDeferredInstallPrompt(null)
      setIsStandalone(true)
      showToast('success', 'Inaare Admin Portal installed.')
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const installAdminApp = async () => {
    if (!deferredInstallPrompt) {
      showToast('error', 'Install prompt not available yet. Use supported browser and reload once.')
      return
    }

    try {
      setInstallBusy(true)
      deferredInstallPrompt.prompt()
      await deferredInstallPrompt.userChoice
      setDeferredInstallPrompt(null)
    } catch (installError) {
      showToast('error', installError.message)
    } finally {
      setInstallBusy(false)
    }
  }

  const enablePushNotifications = async () => {
    if (!firebaseUser) {
      showToast('error', 'Admin session not found.')
      return
    }

    try {
      setPushBusy(true)
      const supported = await canUseMessaging()
      if (!supported) {
        showToast('error', 'Push notifications are not supported on this browser/device.')
        return
      }

      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY
      const messaging = getMessaging(app)
      const result = await initializeAdminPushNotifications({
        firebaseUser,
        messaging,
        vapidKey,
        onForegroundMessage: (payload) => {
          const title = payload?.notification?.title || 'Inaare Admin Portal'
          const body = payload?.notification?.body || 'New update received.'
          showToast('success', `${title}: ${body}`)
        }
      })

      if (!result.ok) {
        if (result.reason === 'permission-denied') {
          showToast('error', 'Notification permission denied.')
          return
        }
        if (result.reason === 'missing-vapid-key') {
          showToast('error', 'Missing VITE_FIREBASE_VAPID_KEY for FCM setup.')
          return
        }
        showToast('error', 'Unable to initialize push notifications.')
        return
      }

      showToast('success', 'Push notifications enabled for this admin device.')
    } catch (pushError) {
      showToast('error', pushError.message)
    } finally {
      setPushBusy(false)
    }
  }

  const filteredBookings = useMemo(() => {
    const search = bookingSearch.trim().toLowerCase()
    return bookings.filter((booking) => {
      const text = `${booking.name || ''} ${booking.email || ''} ${booking.phone || ''}`.toLowerCase()
      const status = (booking.status || 'pending').toLowerCase()
      return (!search || text.includes(search)) && (statusFilter === 'all' || status === statusFilter)
    })
  }, [bookings, bookingSearch, statusFilter])

  const bookingsPages = Math.max(1, Math.ceil(filteredBookings.length / 10))
  const bookingsRows = filteredBookings.slice((bookingsPage - 1) * 10, bookingsPage * 10)

  const messagesPages = Math.max(1, Math.ceil(messages.length / 10))
  const messagesRows = messages.slice((messagesPage - 1) * 10, messagesPage * 10)

  const latestBookings = bookings.slice(0, 5)
  const latestMessages = messages.slice(0, 5)

  const expiring = [
    isWithin30Days(websiteDetails.hostingExpiration) ? `Hosting expires ${prettyDate(websiteDetails.hostingExpiration)}` : '',
    isWithin30Days(websiteDetails.domainExpiration) ? `Domain expires ${prettyDate(websiteDetails.domainExpiration)}` : ''
  ].filter(Boolean)

  const calendarCells = monthCells(visibleMonth)

  const calendarByDate = useMemo(() => {
    const map = {}
    bookings.forEach((booking) => {
      const key = normalizeDateISO(booking.dateISO || booking.date)
      if (!key) return
      map[key] = map[key] || { booked: 0, blocked: 0 }
      map[key].booked += 1
    })
    ;normalizeDateISOArray(calendarSettings.blockedDays || []).forEach((day) => {
      map[day] = map[day] || { booked: 0, blocked: 0 }
      map[day].blocked = (calendarSettings.availableSlots || []).length || 1
    })
    ;(calendarSettings.blockedSlots || []).forEach((slot) => {
      const key = normalizeDateISO(slot?.dateISO)
      if (!key || !slot?.time) return
      map[key] = map[key] || { booked: 0, blocked: 0 }
      map[key].blocked += 1
    })
    return map
  }, [bookings, calendarSettings])

  const bookedSlotSet = useMemo(
    () =>
      new Set(
        bookings
          .map((booking) => {
            const dateISO = normalizeDateISO(booking.dateISO || booking.date)
            const time = booking.time || ''
            return dateISO && time ? `${dateISO}__${time}` : ''
          })
          .filter(Boolean)
      ),
    [bookings]
  )

  const blockedSlotSet = useMemo(
    () =>
      new Set(
        (calendarSettings.blockedSlots || [])
          .map((slot) => {
            const dateISO = normalizeDateISO(slot?.dateISO)
            const time = slot?.time || ''
            return dateISO && time ? `${dateISO}__${time}` : ''
          })
          .filter(Boolean)
      ),
    [calendarSettings.blockedSlots]
  )

  const bookingBySlot = useMemo(() => {
    const map = {}

    bookings.forEach((booking) => {
      const dateISO = normalizeDateISO(booking.dateISO || booking.date)
      const time = booking.time || ''
      if (!dateISO || !time) {
        return
      }

      const key = `${dateISO}__${time}`
      if (!map[key]) {
        map[key] = []
      }

      map[key].push(booking)
    })

    return map
  }, [bookings])

  const updateBookingStatus = async (booking, status) => {
    await updateDoc(doc(db, 'bookings', booking.id), { status, updatedAt: serverTimestamp() })
    setBookings((prev) => prev.map((item) => (item.id === booking.id ? { ...item, status } : item)))
  }

  const savePublication = async (event) => {
    event.preventDefault()
    const title = publicationForm.title.trim()
    const description = publicationForm.description.trim()
    const category = publicationForm.category.trim()
    const content = publicationForm.content.trim()

    if (!title || !description || !category) {
      showToast('error', 'Title, description, and category are required.')
      return
    }

    if (!content && !publicationForm.pdfUrl && !publicationPdfFile) {
      showToast('error', 'Add article content or upload a PDF.')
      return
    }

    try {
      setBusy((prev) => ({ ...prev, publication: true }))
      const isEditing = Boolean(selectedPublicationId)
      const publicationRef = isEditing ? doc(db, 'publications', selectedPublicationId) : doc(collection(db, 'publications'))

      let pdfUrl = publicationForm.pdfUrl || ''
      if (publicationPdfFile) {
        const storageRef = ref(storage, `publications/${publicationRef.id}/${Date.now()}-${publicationPdfFile.name}`)
        await uploadBytes(storageRef, publicationPdfFile)
        pdfUrl = await getDownloadURL(storageRef)
      }

      const payload = {
        id: publicationRef.id,
        title,
        description,
        category,
        content,
        pdfUrl,
        date: publicationForm.date || '',
        updatedAt: serverTimestamp()
      }

      if (isEditing) {
        await updateDoc(publicationRef, payload)
      } else {
        await setDoc(publicationRef, { ...payload, createdAt: serverTimestamp() })
      }

      showToast('success', isEditing ? 'Publication updated.' : 'Publication created.')
      setPublicationForm(DEFAULT_PUBLICATION)
      setSelectedPublicationId('')
      setPublicationPdfFile(null)
      await fetchAllDashboardData()
    } catch (saveError) {
      setError(saveError.message)
      showToast('error', saveError.message)
    } finally {
      setBusy((prev) => ({ ...prev, publication: false }))
    }
  }

  const editPublication = (publication) => {
    setSelectedPublicationId(publication.id)
    setPublicationPdfFile(null)
    setPublicationForm({
      title: publication.title || '',
      description: publication.description || '',
      category: publication.category || '',
      content: publication.content || '',
      pdfUrl: publication.pdfUrl || '',
      date: publication.date || ''
    })
    setActiveView('publications')
  }

  const confirmDeletePublication = async () => {
    if (!publicationToDelete?.id) return
    try {
      setBusy((prev) => ({ ...prev, deletePublication: true }))
      await deleteDoc(doc(db, 'publications', publicationToDelete.id))
      setPublications((prev) => prev.filter((item) => item.id !== publicationToDelete.id))
      setPublicationToDelete(null)
      showToast('success', 'Publication deleted.')
    } catch (deleteError) {
      setError(deleteError.message)
      showToast('error', deleteError.message)
    } finally {
      setBusy((prev) => ({ ...prev, deletePublication: false }))
    }
  }

  const saveWebsiteDetails = async (event) => {
    event.preventDefault()
    try {
      setBusy((prev) => ({ ...prev, websiteDetails: true }))
      await setDoc(doc(db, 'websiteDetails', 'main'), { ...websiteDetails, updatedAt: serverTimestamp() }, { merge: true })
      showToast('success', 'Website details saved.')
    } catch (saveError) {
      setError(saveError.message)
      showToast('error', saveError.message)
    } finally {
      setBusy((prev) => ({ ...prev, websiteDetails: false }))
    }
  }

  const saveCalendarSettings = async (nextCalendar) => {
    try {
      setBusy((prev) => ({ ...prev, calendar: true }))
      await Promise.all([
        setDoc(
          doc(db, 'availability', 'main'),
          {
            availableSlots: nextCalendar.availableSlots || [],
            blockedDays: normalizeDateISOArray(nextCalendar.blockedDays || []),
            updatedAt: serverTimestamp()
          },
          { merge: true }
        ),
        setDoc(
          doc(db, 'blockedSlots', 'main'),
          {
            blockedSlots: (nextCalendar.blockedSlots || [])
              .map((slot) => ({
                dateISO: normalizeDateISO(slot?.dateISO),
                time: slot?.time || '',
                type: slot?.type === 'client' ? 'client' : 'personal',
                email: slot?.email || '',
                phone: slot?.phone || '',
                summary: slot?.summary || ''
              }))
              .filter((slot) => slot.dateISO && slot.time),
            updatedAt: serverTimestamp()
          },
          { merge: true }
        )
      ])
      setCalendarSettings(nextCalendar)
      showToast('success', 'Calendar updated.')
    } catch (saveError) {
      setError(saveError.message)
      showToast('error', saveError.message)
    } finally {
      setBusy((prev) => ({ ...prev, calendar: false }))
    }
  }

  const applyAvailability = async () => {
    const slots = availabilityInput.split(',').map((s) => s.trim()).filter(Boolean)
    if (slots.length === 0) {
      showToast('error', 'Add at least one slot.')
      return
    }
    await saveCalendarSettings({ ...calendarSettings, availableSlots: slots })
  }

  const toggleBlockedDay = async (dateISO) => {
    const normalizedDateISO = normalizeDateISO(dateISO)
    const set = new Set(normalizeDateISOArray(calendarSettings.blockedDays || []))
    if (set.has(normalizedDateISO)) set.delete(normalizedDateISO)
    else set.add(normalizedDateISO)
    await saveCalendarSettings({ ...calendarSettings, blockedDays: Array.from(set) })
  }

  const openSlotAction = (dateISO, time) => {
    const normalizedDateISO = normalizeDateISO(dateISO)
    const existing = (calendarSettings.blockedSlots || []).find(
      (slot) => normalizeDateISO(slot.dateISO) === normalizedDateISO && slot.time === time
    )

    setSlotAction({
      dateISO: normalizedDateISO,
      time,
      type: existing?.type === 'client' ? 'client' : 'personal',
      email: existing?.email || '',
      phone: existing?.phone || '',
      summary: existing?.summary || ''
    })
  }

  const saveSlotAction = async () => {
    if (!slotAction.dateISO || !slotAction.time) {
      showToast('error', 'Choose a slot first.')
      return
    }

    if (slotAction.type === 'client') {
      if (!slotAction.email.trim() || !slotAction.phone.trim() || !slotAction.summary.trim()) {
        showToast('error', 'Email, number, and consultation summary are required for client holds.')
        return
      }
    }

    const existingSlots = calendarSettings.blockedSlots || []
    const withoutCurrent = existingSlots.filter(
      (slot) => !(normalizeDateISO(slot.dateISO) === slotAction.dateISO && slot.time === slotAction.time)
    )

    const nextSlots = [
      ...withoutCurrent,
      {
        dateISO: slotAction.dateISO,
        time: slotAction.time,
        type: slotAction.type,
        email: slotAction.type === 'client' ? slotAction.email.trim() : '',
        phone: slotAction.type === 'client' ? slotAction.phone.trim() : '',
        summary: slotAction.type === 'client' ? slotAction.summary.trim() : ''
      }
    ]

    await saveCalendarSettings({ ...calendarSettings, blockedSlots: nextSlots })
    setSlotAction(DEFAULT_SLOT_ACTION)
  }

  const removeSlotAction = async () => {
    if (!slotAction.dateISO || !slotAction.time) return

    const nextSlots = (calendarSettings.blockedSlots || []).filter(
      (slot) => !(normalizeDateISO(slot.dateISO) === slotAction.dateISO && slot.time === slotAction.time)
    )
    await saveCalendarSettings({ ...calendarSettings, blockedSlots: nextSlots })
    setSlotAction(DEFAULT_SLOT_ACTION)
  }

  const updateMessageResponded = async (message, responded) => {
    await updateDoc(doc(db, 'messages', message.id), { responded, updatedAt: serverTimestamp() })
    setMessages((prev) => prev.map((item) => (item.id === message.id ? { ...item, responded } : item)))
    showToast('success', responded ? 'Marked as responded.' : 'Marked as pending.')
  }

  const confirmDeleteBooking = async () => {
    if (!bookingToDelete?.id) return
    try {
      setBusy((prev) => ({ ...prev, deleteBooking: true }))
      await deleteDoc(doc(db, 'bookings', bookingToDelete.id))
      setBookings((prev) => prev.filter((item) => item.id !== bookingToDelete.id))
      setBookingToDelete(null)
      showToast('success', 'Booking deleted.')
    } catch (deleteError) {
      setError(deleteError.message)
      showToast('error', deleteError.message)
    } finally {
      setBusy((prev) => ({ ...prev, deleteBooking: false }))
    }
  }

  const confirmDeleteMessage = async () => {
    if (!messageToDelete?.id) return
    try {
      setBusy((prev) => ({ ...prev, deleteMessage: true }))
      await deleteDoc(doc(db, 'messages', messageToDelete.id))
      setMessages((prev) => prev.filter((item) => item.id !== messageToDelete.id))
      setMessageToDelete(null)
      showToast('success', 'Message deleted.')
    } catch (deleteError) {
      setError(deleteError.message)
      showToast('error', deleteError.message)
    } finally {
      setBusy((prev) => ({ ...prev, deleteMessage: false }))
    }
  }

  const updateProfilePassword = async (event) => {
    event.preventDefault()
    if (profileForm.newPassword.length < 8) {
      showToast('error', 'Password must be at least 8 characters.')
      return
    }
    if (profileForm.newPassword !== profileForm.confirmPassword) {
      showToast('error', 'Passwords do not match.')
      return
    }
    if (!firebaseUser) {
      showToast('error', 'Admin session not found.')
      return
    }

    try {
      setBusy((prev) => ({ ...prev, profile: true }))
      await updatePassword(firebaseUser, profileForm.newPassword)
      setProfileForm({ newPassword: '', confirmPassword: '' })
      showToast('success', 'Password updated successfully.')
    } catch (passwordError) {
      setError(passwordError.message)
      showToast('error', passwordError.message)
    } finally {
      setBusy((prev) => ({ ...prev, profile: false }))
    }
  }

  return (
    <section className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="premium-card h-fit lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Admin</p>
          <h2 className="mt-2 font-serif text-3xl text-ivory">Dashboard</h2>
          <nav className="mt-6 space-y-2">
            {VIEWS.map((view) => (
              <button
                key={view.key}
                type="button"
                className={`w-full rounded-[12px] border px-4 py-3 text-left text-sm uppercase tracking-[0.12em] transition ${
                  activeView === view.key
                    ? 'border-gold bg-gold/20 text-gold'
                    : 'border-gold/20 text-muted hover:border-gold/45 hover:text-ivory'
                }`}
                onClick={() => setActiveView(view.key)}
              >
                {view.label}
              </button>
            ))}
          </nav>
          <button type="button" className="premium-btn-secondary mt-6 w-full" onClick={logout}>
            Logout
          </button>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Internal Tool</p>
              <h1 className="mt-2 font-serif text-4xl text-ivory">Operations Console</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {pushPermission !== 'granted' && (
                <button
                  type="button"
                  className="premium-btn-secondary"
                  onClick={enablePushNotifications}
                  disabled={pushBusy}
                >
                  {pushBusy ? 'Enabling...' : 'Enable Push Notifications'}
                </button>
              )}
              {!isStandalone && deferredInstallPrompt && (
                <button
                  type="button"
                  className="premium-btn-secondary"
                  onClick={installAdminApp}
                  disabled={installBusy}
                >
                  {installBusy ? 'Preparing...' : 'Download Inaare Admin Portal'}
                </button>
              )}
            </div>
          </div>

          {!isStandalone && isIosSafari && !deferredInstallPrompt && (
            <article className="rounded-[12px] border border-gold/25 bg-gold/10 px-4 py-3 text-ivory">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Install on iPhone</p>
              <p className="mt-1 text-sm text-muted">
                In Safari, tap Share, then choose Add to Home Screen to install the Inaare Admin Portal.
              </p>
            </article>
          )}

          {expiring.length > 0 && (
            <article className="rounded-[12px] border border-red-300/35 bg-red-400/10 px-4 py-3 text-red-200">
              <p className="text-xs uppercase tracking-[0.14em]">Expiry Alert</p>
              <p className="mt-1 text-sm">{expiring.join(' • ')}</p>
            </article>
          )}

          {error && <p className="text-sm text-red-300">{error}</p>}

          {activeView === 'dashboard' && (
            <>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <article className="premium-card"><p className="text-xs uppercase tracking-[0.12em] text-muted">Total Bookings</p><p className="mt-3 font-serif text-4xl text-ivory">{bookings.length}</p></article>
                <article className="premium-card"><p className="text-xs uppercase tracking-[0.12em] text-muted">New Bookings</p><p className="mt-3 font-serif text-4xl text-gold">{bookings.filter((b) => (b.status || 'pending') === 'pending').length}</p></article>
                <article className="premium-card"><p className="text-xs uppercase tracking-[0.12em] text-muted">Messages</p><p className="mt-3 font-serif text-4xl text-ivory">{messages.length}</p></article>
              </div>
              <div className="grid gap-6 xl:grid-cols-2">
                <article className="premium-card">
                  <div className="mb-3 flex items-center justify-between"><h3 className="font-serif text-2xl text-ivory">Latest Bookings</h3><button type="button" className="text-xs uppercase tracking-[0.12em] text-gold" onClick={() => setActiveView('bookings')}>View All</button></div>
                  {latestBookings.map((item) => <div key={item.id} className="mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted">{item.name} • {item.date} • {item.time}</div>)}
                </article>
                <article className="premium-card">
                  <div className="mb-3 flex items-center justify-between"><h3 className="font-serif text-2xl text-ivory">Latest Messages</h3><button type="button" className="text-xs uppercase tracking-[0.12em] text-gold" onClick={() => setActiveView('messages')}>View All</button></div>
                  {latestMessages.map((item) => <div key={item.id} className="mb-2 rounded-[10px] border border-gold/20 px-3 py-2 text-sm text-muted">{item.name} • {item.email}</div>)}
                </article>
              </div>
            </>
          )}

          {activeView === 'bookings' && (
            <div className="space-y-4">
              <article className="premium-card grid gap-3 md:grid-cols-[1.5fr_1fr]">
                <input className="premium-input" placeholder="Search name, email, phone" value={bookingSearch} onChange={(e) => setBookingSearch(e.target.value)} />
                <select className="premium-input" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="all">All Statuses</option>
                  {STATUS_OPTIONS.map((status) => <option key={status} value={status}>{status}</option>)}
                </select>
              </article>

              <article className="premium-card overflow-x-auto">
                {loading.bookings ? <SkeletonList rows={5} /> : (
                  <table className="w-full min-w-[820px] text-left text-sm">
                    <thead className="text-xs uppercase tracking-[0.12em] text-muted"><tr><th className="px-3 py-2">Client</th><th className="px-3 py-2">Session</th><th className="px-3 py-2">Status</th><th className="px-3 py-2">Actions</th></tr></thead>
                    <tbody>
                      {bookingsRows.map((item) => (
                        <tr key={item.id} className="border-t border-gold/10 text-muted">
                          <td className="px-3 py-3"><p className="font-semibold text-ivory">{item.name}</p><p>{item.email}</p><p>{item.phone}</p></td>
                          <td className="px-3 py-3">{item.date}<br />{item.time}</td>
                          <td className="px-3 py-3">
                            <select className="rounded-[10px] border border-gold/30 bg-ink px-2 py-1 text-xs text-ivory" value={(item.status || 'pending').toLowerCase()} onChange={(e) => updateBookingStatus(item, e.target.value)}>
                              {STATUS_OPTIONS.map((status) => <option key={status} value={status}>{status}</option>)}
                            </select>
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex gap-2">
                              <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-1 text-xs text-ivory" onClick={() => setSelectedBooking(item)}>View</button>
                              <button type="button" className="rounded-[10px] border border-red-300/35 px-3 py-1 text-xs text-red-200" onClick={() => setBookingToDelete(item)}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </article>

              <article className="premium-card flex items-center justify-between py-3 text-sm text-muted">
                <p>Page {bookingsPage} of {bookingsPages}</p>
                <div className="flex gap-2">
                  <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-1" disabled={bookingsPage === 1} onClick={() => setBookingsPage((p) => Math.max(1, p - 1))}>Prev</button>
                  <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-1" disabled={bookingsPage === bookingsPages} onClick={() => setBookingsPage((p) => Math.min(bookingsPages, p + 1))}>Next</button>
                </div>
              </article>
            </div>
          )}

          {activeView === 'messages' && (
            <div className="space-y-4">
              {loading.messages && <SkeletonList rows={5} />}
              {!loading.messages && messagesRows.map((item) => (
                <article key={item.id} className="premium-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2"><h3 className="font-serif text-2xl text-ivory">{item.name}</h3><span className={`rounded-full border px-2 py-1 text-[10px] uppercase ${item.responded ? 'border-emerald-300/35 text-emerald-200' : 'border-gold/30 text-gold'}`}>{item.responded ? 'Responded' : 'Pending'}</span></div>
                      <p className="text-muted">{item.email}</p>
                      <p className="mt-1 text-sm text-muted">Phone: {item.phone || item.number || 'N/A'}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{item.message}</p>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory" onClick={() => setSelectedMessage(item)}>Read</button>
                      <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory" onClick={() => updateMessageResponded(item, !item.responded)}>{item.responded ? 'Mark Pending' : 'Mark Responded'}</button>
                      <button type="button" className="rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200 disabled:opacity-40" disabled={!item.responded} onClick={() => setMessageToDelete(item)}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
              <article className="premium-card flex items-center justify-between py-3 text-sm text-muted">
                <p>Page {messagesPage} of {messagesPages}</p>
                <div className="flex gap-2">
                  <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-1" disabled={messagesPage === 1} onClick={() => setMessagesPage((p) => Math.max(1, p - 1))}>Prev</button>
                  <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-1" disabled={messagesPage === messagesPages} onClick={() => setMessagesPage((p) => Math.min(messagesPages, p + 1))}>Next</button>
                </div>
              </article>
            </div>
          )}

          {activeView === 'publications' && (
            <div className="space-y-6">
              <form className="premium-card space-y-4" onSubmit={savePublication}>
                <h3 className="font-serif text-2xl text-ivory">{selectedPublicationId ? 'Edit Publication' : 'Add Publication'}</h3>
                <input className="premium-input" placeholder="Title" value={publicationForm.title} onChange={(e) => setPublicationForm((p) => ({ ...p, title: e.target.value }))} required />
                <textarea className="premium-textarea" rows="3" placeholder="Description" value={publicationForm.description} onChange={(e) => setPublicationForm((p) => ({ ...p, description: e.target.value }))} required />
                <input className="premium-input" placeholder="Category" value={publicationForm.category} onChange={(e) => setPublicationForm((p) => ({ ...p, category: e.target.value }))} required />
                <textarea className="premium-textarea" rows="8" placeholder="Write content (for in-site reading)" value={publicationForm.content} onChange={(e) => setPublicationForm((p) => ({ ...p, content: e.target.value }))} />
                <input type="date" className="premium-input" value={publicationForm.date} onChange={(e) => setPublicationForm((p) => ({ ...p, date: e.target.value }))} />
                <input type="file" accept="application/pdf" className="premium-input" onChange={(e) => setPublicationPdfFile(e.target.files?.[0] || null)} />
                <button type="submit" className="premium-btn-primary" disabled={busy.publication}>{busy.publication ? 'Saving...' : selectedPublicationId ? 'Update Publication' : 'Create Publication'}</button>
              </form>

              {loading.publications ? <SkeletonList rows={4} /> : publications.map((item) => (
                <article key={item.id} className="premium-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div><h3 className="font-serif text-2xl text-ivory">{item.title}</h3><p className="text-xs uppercase tracking-[0.12em] text-gold">{item.category}</p><p className="text-xs text-muted">{prettyDate(item.date || item.createdAt)}</p></div>
                    <div className="flex gap-2">
                      <button type="button" className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory" onClick={() => editPublication(item)}>Edit</button>
                      <button type="button" className="rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200" onClick={() => setPublicationToDelete(item)}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeView === 'calendar' && (
            <div className="space-y-6">
              <article className="premium-card">
                <h3 className="font-serif text-2xl text-ivory">Availability Rules</h3>
                <div className="mt-3 flex flex-wrap gap-3"><input className="premium-input min-w-[300px] flex-1" value={availabilityInput} onChange={(e) => setAvailabilityInput(e.target.value)} /><button type="button" className="premium-btn-primary" disabled={busy.calendar} onClick={applyAvailability}>{busy.calendar ? 'Saving...' : 'Save Rules'}</button></div>
              </article>
              <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <article className="premium-card">
                  <div className="mb-4 flex items-center justify-between"><h3 className="font-serif text-2xl text-ivory">{visibleMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3><div className="flex gap-2"><button type="button" className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory" onClick={() => setVisibleMonth((p) => new Date(p.getFullYear(), p.getMonth() - 1, 1))}>Prev</button><button type="button" className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory" onClick={() => setVisibleMonth((p) => new Date(p.getFullYear(), p.getMonth() + 1, 1))}>Next</button></div></div>
                  <div className="grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <p key={day} className="text-center text-xs uppercase tracking-[0.12em] text-muted">{day}</p>)}
                    {calendarCells.map((cell, index) => {
                      if (!cell) return <div key={`e-${index}`} className="h-12" />
                      const dateISO = normalizeDateISO(cell)
                      const summary = calendarByDate[dateISO] || { booked: 0, blocked: 0 }
                      const totalSlots = (calendarSettings.availableSlots || []).length || 1
                      const blockedAll = normalizeDateISOArray(calendarSettings.blockedDays || []).includes(dateISO) || summary.blocked >= totalSlots
                      const blockedAny = blockedAll || summary.blocked > 0
                      const booked = summary.booked > 0
                      return <button key={dateISO} type="button" className={`h-12 rounded-[10px] border text-sm ${blockedAll ? 'border-red-300/35 bg-red-400/10 text-red-200' : blockedAny ? 'border-red-300/30 bg-red-400/5 text-red-100 hover:bg-red-400/10' : booked ? 'border-gold/35 bg-gold/15 text-ivory' : 'border-gold/20 text-muted hover:bg-gold/10'}`} onClick={() => setSelectedDatePanel(dateISO)}>{cell.getDate()}</button>
                    })}
                  </div>
                </article>
                <article className="premium-card">
                  <h3 className="font-serif text-2xl text-ivory">Date Panel</h3>
                  {!selectedDatePanel && <p className="mt-3 text-sm text-muted">Select a date to manage day and slot blocks.</p>}
                  {selectedDatePanel && (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs uppercase tracking-[0.12em] text-gold">{selectedDatePanel}</p>
                      <button type="button" className="rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200" onClick={() => toggleBlockedDay(selectedDatePanel)}>{(calendarSettings.blockedDays || []).includes(selectedDatePanel) ? 'Unblock Full Day' : 'Block Full Day'}</button>
                      <div className="grid grid-cols-2 gap-2">
                        {(calendarSettings.availableSlots || []).map((slot) => {
                          const slotKey = `${normalizeDateISO(selectedDatePanel)}__${slot}`
                          const blocked = blockedSlotSet.has(slotKey)
                          const booked = bookedSlotSet.has(slotKey)
                          return <button key={slot} type="button" className={`rounded-[10px] border px-3 py-2 text-xs ${blocked ? 'border-red-300/35 bg-red-400/10 text-red-200' : booked ? 'border-gold/35 bg-gold/15 text-ivory hover:bg-gold/25' : 'border-gold/20 text-muted hover:bg-gold/10'}`} onClick={() => {
                            if (booked) {
                              const [booking] = bookingBySlot[slotKey] || []
                              if (booking) {
                                setSelectedBooking(booking)
                              }
                              return
                            }

                            openSlotAction(selectedDatePanel, slot)
                          }}>{slot}</button>
                        })}
                      </div>
                      {slotAction.dateISO === normalizeDateISO(selectedDatePanel) && slotAction.time && (
                        <div className="mt-3 rounded-[12px] border border-gold/20 bg-ink/35 p-4">
                          <p className="text-xs uppercase tracking-[0.12em] text-gold">Selected Slot</p>
                          <p className="mt-1 text-sm text-ivory">{slotAction.dateISO} • {slotAction.time}</p>

                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            <label className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted">
                              <input
                                type="radio"
                                name="slot-type"
                                checked={slotAction.type === 'personal'}
                                onChange={() => setSlotAction((prev) => ({ ...prev, type: 'personal' }))}
                              />
                              Block no justification (personal time)
                            </label>
                            <label className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-gold/20 px-3 py-2 text-xs text-muted">
                              <input
                                type="radio"
                                name="slot-type"
                                checked={slotAction.type === 'client'}
                                onChange={() => setSlotAction((prev) => ({ ...prev, type: 'client' }))}
                              />
                              Block to book someone in
                            </label>
                          </div>

                          {slotAction.type === 'client' && (
                            <div className="mt-3 grid gap-3">
                              <input
                                type="email"
                                className="premium-input"
                                placeholder="Client email"
                                value={slotAction.email}
                                onChange={(e) => setSlotAction((prev) => ({ ...prev, email: e.target.value }))}
                              />
                              <input
                                type="text"
                                className="premium-input"
                                placeholder="Client number"
                                value={slotAction.phone}
                                onChange={(e) => setSlotAction((prev) => ({ ...prev, phone: e.target.value }))}
                              />
                              <textarea
                                rows="3"
                                className="premium-textarea"
                                placeholder="Consultation summary"
                                value={slotAction.summary}
                                onChange={(e) => setSlotAction((prev) => ({ ...prev, summary: e.target.value }))}
                              />
                            </div>
                          )}

                          <div className="mt-3 flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="premium-btn-primary"
                              disabled={busy.calendar}
                              onClick={saveSlotAction}
                            >
                              {busy.calendar ? 'Saving...' : 'Block Slot'}
                            </button>
                            <button
                              type="button"
                              className="rounded-[10px] border border-red-300/35 px-3 py-2 text-xs text-red-200"
                              disabled={busy.calendar}
                              onClick={removeSlotAction}
                            >
                              Unblock Slot
                            </button>
                            <button
                              type="button"
                              className="rounded-[10px] border border-gold/30 px-3 py-2 text-xs text-ivory"
                              onClick={() => setSlotAction(DEFAULT_SLOT_ACTION)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              </div>
            </div>
          )}

          {activeView === 'website-details' && (
            <form className="premium-card space-y-4" onSubmit={saveWebsiteDetails}>
              <h3 className="font-serif text-3xl text-ivory">Website Details</h3>
              <div>
                <label className="mb-2 block text-sm text-muted">GitHub Repo URL</label>
                <input className="premium-input" value={websiteDetails.githubRepoUrl} onChange={(e) => setWebsiteDetails((p) => ({ ...p, githubRepoUrl: e.target.value }))} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted">Hosting Provider</label>
                  <input className="premium-input" value={websiteDetails.hostingProvider} onChange={(e) => setWebsiteDetails((p) => ({ ...p, hostingProvider: e.target.value }))} />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted">Hosting Expiration</label>
                  <input type="date" className="premium-input" value={websiteDetails.hostingExpiration} onChange={(e) => setWebsiteDetails((p) => ({ ...p, hostingExpiration: e.target.value }))} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted">Domain Name</label>
                  <input className="premium-input" value={websiteDetails.domainName} onChange={(e) => setWebsiteDetails((p) => ({ ...p, domainName: e.target.value }))} />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted">Domain Host</label>
                  <input className="premium-input" value={websiteDetails.domainHost} onChange={(e) => setWebsiteDetails((p) => ({ ...p, domainHost: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted">Domain Expiration</label>
                <input type="date" className="premium-input" value={websiteDetails.domainExpiration} onChange={(e) => setWebsiteDetails((p) => ({ ...p, domainExpiration: e.target.value }))} />
              </div>
              <button type="submit" className="premium-btn-primary" disabled={busy.websiteDetails}>{busy.websiteDetails ? 'Saving...' : 'Save Website Details'}</button>
            </form>
          )}

          {activeView === 'admin-profile' && (
            <form className="premium-card space-y-4" onSubmit={updateProfilePassword}>
              <h3 className="font-serif text-3xl text-ivory">Admin Profile</h3>
              <p className="text-sm text-muted">Change password for the current admin account.</p>
              <input type="password" className="premium-input" placeholder="New Password" value={profileForm.newPassword} onChange={(e) => setProfileForm((p) => ({ ...p, newPassword: e.target.value }))} required />
              <input type="password" className="premium-input" placeholder="Confirm New Password" value={profileForm.confirmPassword} onChange={(e) => setProfileForm((p) => ({ ...p, confirmPassword: e.target.value }))} required />
              <button type="submit" className="premium-btn-primary" disabled={busy.profile}>{busy.profile ? 'Updating...' : 'Update Password'}</button>
            </form>
          )}
        </div>
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 z-[70] flex justify-end bg-ink/70 backdrop-blur-sm">
          <div className="h-full w-full max-w-xl overflow-y-auto border-l border-gold/20 bg-charcoal p-6">
            <div className="flex items-center justify-between"><h3 className="font-serif text-3xl text-ivory">Booking Details</h3><button type="button" className="rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory" onClick={() => setSelectedBooking(null)}>Close</button></div>
            <div className="mt-6 space-y-4"><p className="text-ivory">{selectedBooking.name}</p><p className="text-muted">{selectedBooking.email}</p><p className="text-muted">{selectedBooking.phone}</p><p className="text-muted">{selectedBooking.date} • {selectedBooking.time}</p></div>
          </div>
        </div>
      )}

      {selectedMessage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[16px] border border-gold/20 bg-charcoal p-6">
            <div className="flex items-center justify-between"><h3 className="font-serif text-3xl text-ivory">Message</h3><button type="button" className="rounded-[12px] border border-gold/30 px-3 py-2 text-sm text-ivory" onClick={() => setSelectedMessage(null)}>Close</button></div>
            <div className="mt-5 space-y-3"><p className="text-ivory">{selectedMessage.name}</p><p className="text-sm text-muted">{selectedMessage.email}</p><p className="text-sm text-muted">Phone: {selectedMessage.phone || selectedMessage.number || 'N/A'}</p><p className="rounded-[12px] border border-gold/20 bg-ink/40 px-4 py-4 leading-relaxed text-muted">{selectedMessage.message}</p></div>
          </div>
        </div>
      )}

      {publicationToDelete && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6">
            <h3 className="font-serif text-3xl text-ivory">Delete Publication</h3>
            <p className="mt-3 text-sm text-muted">Delete “{publicationToDelete.title}” permanently?</p>
            <div className="mt-6 flex justify-end gap-3"><button type="button" className="rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory" onClick={() => setPublicationToDelete(null)}>Cancel</button><button type="button" className="rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200" onClick={confirmDeletePublication} disabled={busy.deletePublication}>{busy.deletePublication ? 'Deleting...' : 'Delete'}</button></div>
          </div>
        </div>
      )}

      {bookingToDelete && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6">
            <h3 className="font-serif text-3xl text-ivory">Delete Booking</h3>
            <p className="mt-3 text-sm text-muted">Delete booking for {bookingToDelete.name}?</p>
            <div className="mt-6 flex justify-end gap-3"><button type="button" className="rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory" onClick={() => setBookingToDelete(null)}>Cancel</button><button type="button" className="rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200" onClick={confirmDeleteBooking} disabled={busy.deleteBooking}>{busy.deleteBooking ? 'Deleting...' : 'Delete'}</button></div>
          </div>
        </div>
      )}

      {messageToDelete && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[16px] border border-gold/20 bg-charcoal p-6">
            <h3 className="font-serif text-3xl text-ivory">Delete Message</h3>
            <p className="mt-3 text-sm text-muted">Delete message from {messageToDelete.name}? (Responded only)</p>
            <div className="mt-6 flex justify-end gap-3"><button type="button" className="rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory" onClick={() => setMessageToDelete(null)}>Cancel</button><button type="button" className="rounded-[12px] border border-red-300/35 px-4 py-2 text-sm text-red-200" onClick={confirmDeleteMessage} disabled={busy.deleteMessage}>{busy.deleteMessage ? 'Deleting...' : 'Delete'}</button></div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed right-6 top-6 z-[80]">
          <div className={`rounded-[12px] border px-4 py-3 text-sm shadow-soft ${toast.type === 'success' ? 'border-emerald-300/35 bg-emerald-400/10 text-emerald-200' : 'border-red-300/35 bg-red-400/10 text-red-200'}`}>
            {toast.message}
          </div>
        </div>
      )}
    </section>
  )
}

export default AdminDashboardPage
