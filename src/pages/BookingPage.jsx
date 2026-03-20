import { useEffect, useMemo, useState } from 'react'
import BookingCalendarUI from '../components/BookingCalendarUI'
import PageIntro from '../components/PageIntro'
import RevealOnScroll from '../components/RevealOnScroll'
import { db } from '@/lib/firebase'
import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp } from 'firebase/firestore'
import { normalizeDateISO, normalizeDateISOArray } from '../lib/dateISO'

const defaultCalendarSettings = {
  availableSlots: ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'],
  blockedDays: [],
  blockedSlots: []
}

const BookingPage = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [selection, setSelection] = useState('No date selected yet')
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', purpose: '' })
  const [calendarSettings, setCalendarSettings] = useState(defaultCalendarSettings)
  const [bookedSlots, setBookedSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  useEffect(() => {
    const loadCalendarState = async () => {
      try {
        const [bookingsSnapshot, availabilitySnap, blockedSlotsSnap] = await Promise.all([
          getDocs(collection(db, 'bookings')),
          getDoc(doc(db, 'availability', 'main')),
          getDoc(doc(db, 'blockedSlots', 'main'))
        ])

        const slots = []
        bookingsSnapshot.forEach((itemDoc) => {
          const item = itemDoc.data()
          const dateISO = normalizeDateISO(item?.dateISO || item?.date)
          if (dateISO && item?.time) {
            slots.push({ dateISO, time: item.time })
          }
        })

        setBookedSlots(slots)
        setCalendarSettings({
          ...defaultCalendarSettings,
          ...(availabilitySnap.exists() ? availabilitySnap.data() : {}),
          ...(blockedSlotsSnap.exists() ? blockedSlotsSnap.data() : {}),
          blockedDays: normalizeDateISOArray(
            (availabilitySnap.exists() ? availabilitySnap.data()?.blockedDays : []) || []
          ),
          blockedSlots: ((blockedSlotsSnap.exists() ? blockedSlotsSnap.data()?.blockedSlots : []) || [])
            .map((slot) => ({ dateISO: normalizeDateISO(slot?.dateISO), time: slot?.time || '' }))
            .filter((slot) => slot.dateISO && slot.time)
        })
      } catch {
        // Fallback to local defaults if loading fails.
      }
    }

    loadCalendarState()
  }, [])

  const blockedIndex = useMemo(
    () =>
      new Set([
        ...(calendarSettings.blockedSlots || []).map((slot) => `${slot.dateISO}__${slot.time}`),
        ...bookedSlots.map((slot) => `${slot.dateISO}__${slot.time}`)
      ]),
    [calendarSettings.blockedSlots, bookedSlots]
  )

  const confirmSelection = ({ dateLabel, isoDate, time }) => {
    setSelectedSlot({ dateLabel, isoDate, time })
    setSelection(`${dateLabel}, ${time}`)
    setOpenCalendar(false)
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBooking = async (formData) => {
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      })

      alert('Booking submitted!')
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setFeedback({ type: '', message: '' })

    if (!selectedSlot) {
      setFeedback({ type: 'error', message: 'Please select a consultation date and time.' })
      return
    }

    const selectedISO = normalizeDateISO(selectedSlot.isoDate)
    const isBlockedDay = normalizeDateISOArray(calendarSettings.blockedDays || []).includes(selectedISO)
    const isBlockedSlot = blockedIndex.has(`${selectedISO}__${selectedSlot.time}`)
    if (isBlockedDay || isBlockedSlot) {
      setFeedback({ type: 'error', message: 'Selected slot is no longer available. Please choose another.' })
      return
    }

    try {
      setLoading(true)
      await handleBooking({
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: selectedSlot.dateLabel,
        dateISO: selectedISO,
        time: selectedSlot.time,
        purpose: form.purpose
      })

      setFeedback({ type: 'success', message: 'Booking submitted successfully. We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', purpose: '' })
      setBookedSlots((prev) => [...prev, { dateISO: selectedISO, time: selectedSlot.time }])
      setSelectedSlot(null)
      setSelection('No date selected yet')
    } catch (submissionError) {
      setFeedback({ type: 'error', message: submissionError.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageIntro
        title="Booking"
        description="Reserve a confidential advisory session with Inaare Consulting Group through our strategic consultation scheduler. Secure your preferred time and we will prepare a focused agenda for your goals."
      />

      <section className="section-shell pt-4">
        <RevealOnScroll>
          <div className="premium-card flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Calendar Integration UI</p>
              <p className="mt-2 text-lg text-muted">Selected slot: {selection}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">Strategic advisory scheduling</p>
            </div>
            <button type="button" className="premium-btn-primary" onClick={() => setOpenCalendar(true)}>
              Schedule a Strategic Consultation
            </button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <form className="premium-card mt-8 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div>
            <label className="mb-2 block text-sm text-muted" htmlFor="name">
              Name
            </label>
              <input
                id="name"
                name="name"
                type="text"
                className="premium-input"
                placeholder="Your full name"
                value={form.name}
                onChange={onChange}
                required
              />
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted" htmlFor="email">
              Email
            </label>
              <input
                id="email"
                name="email"
                type="email"
                className="premium-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
          </div>
          <div>
            <label className="mb-2 block text-sm text-muted" htmlFor="phone">
              Phone
            </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="premium-input"
                placeholder="+254 700 000 000"
                value={form.phone}
                onChange={onChange}
                required
              />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-muted" htmlFor="purpose">
              Purpose of consultation
            </label>
              <textarea
                id="purpose"
                name="purpose"
                rows="4"
                className="premium-textarea"
                placeholder="Tell us what you would like to address"
                value={form.purpose}
                onChange={onChange}
                required
              />
          </div>

          {feedback.message && (
            <div className="md:col-span-2">
              <p className={`text-sm ${feedback.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
                {feedback.message}
              </p>
            </div>
          )}

          <div className="md:col-span-2">
              <button type="submit" className="premium-btn-primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Schedule a Strategic Consultation'}
            </button>
          </div>
        </form>
        </RevealOnScroll>

        {openCalendar && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/75 px-4 backdrop-blur-sm">
            <div className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-gold/30 bg-charcoal p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold text-ivory">Select Consultation Slot</h2>
                <button
                  type="button"
                  className="rounded-[12px] border border-gold/30 px-4 py-2 text-sm text-ivory hover:bg-gold/10"
                  onClick={() => setOpenCalendar(false)}
                >
                  Close
                </button>
              </div>
              <BookingCalendarUI
                onConfirm={confirmSelection}
                bookedSlots={bookedSlots}
                calendarSettings={calendarSettings}
              />
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default BookingPage
