import { useEffect, useMemo, useState } from 'react'
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

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

const isSameDay = (left, right) =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate()

const formatDateLabel = (date) =>
  date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

const getMonthGrid = (visibleMonth) => {
  const year = visibleMonth.getFullYear()
  const month = visibleMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []

  for (let index = 0; index < firstDay.getDay(); index += 1) {
    cells.push(null)
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day))
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

const BookingPage = () => {
  const [openFlow, setOpenFlow] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [visibleMonth, setVisibleMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [selection, setSelection] = useState('No date selected yet')
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

  const today = useMemo(() => startOfDay(new Date()), [])

  const monthCells = useMemo(() => getMonthGrid(visibleMonth), [visibleMonth])

  const monthLabel = visibleMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  const availableSlots = calendarSettings?.availableSlots?.length
    ? calendarSettings.availableSlots
    : defaultCalendarSettings.availableSlots

  const blockedDaysSet = useMemo(
    () => new Set(normalizeDateISOArray(calendarSettings?.blockedDays || [])),
    [calendarSettings?.blockedDays]
  )

  const isTimeBlocked = (dateISO, slot) => {
    if (blockedDaysSet.has(dateISO)) {
      return true
    }

    if (blockedIndex.has(`${dateISO}__${slot}`)) {
      return true
    }

    return false
  }

  const canContinueStepOne = Boolean(selectedDate)
  const canContinueStepTwo = Boolean(selectedDate && selectedTime)

  const startGuidedFlow = () => {
    setOpenFlow(true)
    setCurrentStep(1)
  }

  const closeGuidedFlow = () => {
    setOpenFlow(false)
    setCurrentStep(1)
  }

  const moveMonth = (offset) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1))
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
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setFeedback({ type: '', message: '' })

    if (!selectedDate || !selectedTime) {
      setFeedback({ type: 'error', message: 'Please select a consultation date and time.' })
      return
    }

    const selectedISO = normalizeDateISO(selectedDate)
    const isBlockedDay = normalizeDateISOArray(calendarSettings.blockedDays || []).includes(selectedISO)
    const isBlockedSlot = blockedIndex.has(`${selectedISO}__${selectedTime}`)
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
        date: formatDateLabel(selectedDate),
        dateISO: selectedISO,
        time: selectedTime,
        purpose: form.purpose
      })

      setFeedback({ type: 'success', message: 'Booking submitted successfully. We will contact you shortly.' })
      setForm({ name: '', email: '', phone: '', purpose: '' })
      setBookedSlots((prev) => [...prev, { dateISO: selectedISO, time: selectedTime }])
      setSelection(`${formatDateLabel(selectedDate)}, ${selectedTime}`)
      setCurrentStep(3)
      setTimeout(() => {
        closeGuidedFlow()
      }, 1200)
    } catch (submissionError) {
      setFeedback({ type: 'error', message: submissionError.message })
    } finally {
      setLoading(false)
    }
  }

  const goToStepTwo = () => {
    if (!canContinueStepOne) {
      return
    }
    setCurrentStep(2)
  }

  const goToStepThree = () => {
    if (!canContinueStepTwo) {
      return
    }
    setCurrentStep(3)
    setFeedback({ type: '', message: '' })
  }

  return (
    <>
      <PageIntro
        title="Booking"
        description="Reserve a confidential advisory session with Inaare Consulting Group through our strategic consultation scheduler. Secure your preferred time and we will prepare a focused agenda for your goals."
      />

      <section className="section-shell rhythm-open flow-section signature-motif pt-4">
        <div className="layout-split items-center">
          <RevealOnScroll>
            <div className="split-visual">
              <p className="section-kicker">Consultation Calendar</p>
              <h2 className="gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory">Reserve Your Strategic Session</h2>
              <p className="mt-4 text-lg text-muted">Selected slot: {selection}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">Guided booking experience</p>
              <button type="button" className="premium-btn-primary mt-7" onClick={startGuidedFlow}>
                Start Guided Booking
              </button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="offset-panel lg:ml-8">
              <p className="section-kicker">Booking Flow</p>
              <p className="mt-4 text-lg text-muted">
                Choose your date, select a suitable time, and submit your brief in one focused product-style flow.
              </p>
              <div className="accent-divider mt-6 max-w-[210px]" />
            </div>
          </RevealOnScroll>
        </div>

        {openFlow && (
          <div className="booking-overlay">
            <div className="booking-modal-panel">
              <div className="booking-modal-grid">
                <aside className="stepper-rail">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Booking Journey</p>
                  <div className="accent-divider mt-4 mb-6 max-w-[130px]" />

                  <div className="stepper-item">
                    <span className={`stepper-dot ${currentStep === 1 ? 'stepper-dot-active' : ''} ${currentStep > 1 ? 'stepper-dot-done' : ''}`}>1</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-gold">Step 1</p>
                      <p className="mt-1 text-sm text-ivory">Select Date</p>
                    </div>
                    <span className={`stepper-line ${currentStep > 1 ? 'stepper-line-active' : ''}`} />
                  </div>

                  <div className="stepper-item">
                    <span className={`stepper-dot ${currentStep === 2 ? 'stepper-dot-active' : ''} ${currentStep > 2 ? 'stepper-dot-done' : ''}`}>2</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-gold">Step 2</p>
                      <p className="mt-1 text-sm text-ivory">Select Time</p>
                    </div>
                    <span className={`stepper-line ${currentStep > 2 ? 'stepper-line-active' : ''}`} />
                  </div>

                  <div className="stepper-item pb-0">
                    <span className={`stepper-dot ${currentStep === 3 ? 'stepper-dot-active' : ''}`}>3</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-gold">Step 3</p>
                      <p className="mt-1 text-sm text-ivory">Enter Details</p>
                    </div>
                  </div>
                </aside>

                <div className="p-5 md:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">Premium Booking Flow</p>
                      <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Schedule Your Consultation</h2>
                      <div className="accent-divider mt-4 max-w-[180px]" />
                    </div>
                    <button
                      type="button"
                      className="rounded-xl border border-gold/30 px-4 py-2 text-sm text-ivory hover:bg-gold/10"
                      onClick={closeGuidedFlow}
                    >
                      Close
                    </button>
                  </div>

                  {currentStep === 1 && (
                    <div className="rounded-2xl bg-[radial-gradient(circle_at_88%_12%,rgba(247,214,224,0.2),transparent_42%)] p-2">
                      <div className="mb-5 flex items-center justify-between">
                        <p className="font-serif text-2xl text-ivory md:text-3xl">{monthLabel}</p>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory hover:bg-gold/10"
                            onClick={() => moveMonth(-1)}
                          >
                            Prev
                          </button>
                          <button
                            type="button"
                            className="rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory hover:bg-gold/10"
                            onClick={() => moveMonth(1)}
                          >
                            Next
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-3 text-center">
                        {weekDays.map((day) => (
                          <p key={day} className="pb-2 text-xs uppercase tracking-[0.16em] text-muted">
                            {day}
                          </p>
                        ))}

                        {monthCells.map((date, index) => {
                          if (!date) {
                            return <div key={`empty-${index}`} className="h-12" aria-hidden="true" />
                          }

                          const normalized = startOfDay(date)
                          const isPast = normalized < today
                          const isSelected = selectedDate ? isSameDay(normalized, selectedDate) : false
                          const dateISO = normalizeDateISO(normalized)
                          const allSlotsBlocked = availableSlots.every((slot) => isTimeBlocked(dateISO, slot))
                          const isDisabled = isPast || allSlotsBlocked

                          return (
                            <button
                              key={normalized.toISOString()}
                              type="button"
                              disabled={isDisabled}
                              onClick={() => {
                                setSelectedDate(normalized)
                                setSelectedTime('')
                              }}
                              className={`calendar-pill h-11 text-sm font-medium transition ${
                                isSelected
                                  ? 'calendar-pill-selected'
                                  : isDisabled
                                    ? 'cursor-not-allowed border-gold/10 text-muted/40'
                                    : 'text-muted'
                              }`}
                            >
                              {normalized.getDate()}
                            </button>
                          )
                        })}
                      </div>

                      <div className="mt-7 flex justify-end">
                        <button type="button" className="premium-btn-primary" disabled={!canContinueStepOne} onClick={goToStepTwo}>
                          Continue to Time
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="rounded-2xl bg-[radial-gradient(circle_at_10%_15%,rgba(247,214,224,0.2),transparent_44%)] p-2">
                      <p className="text-sm uppercase tracking-[0.16em] text-gold">
                        {selectedDate ? formatDateLabel(selectedDate) : 'Select a date first'}
                      </p>
                      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {availableSlots.map((slot) => {
                          const dateISO = selectedDate ? normalizeDateISO(selectedDate) : ''
                          const blocked = selectedDate ? isTimeBlocked(dateISO, slot) : false
                          const active = selectedTime === slot
                          return (
                            <button
                              key={slot}
                              type="button"
                              disabled={!selectedDate || blocked}
                              onClick={() => setSelectedTime(slot)}
                              className={`time-chip min-h-[56px] rounded-xl px-4 py-3 text-sm transition ${
                                active
                                  ? 'time-chip-selected text-ivory'
                                  : !selectedDate || blocked
                                    ? 'cursor-not-allowed border-gold/10 text-muted/40'
                                    : 'text-muted'
                              }`}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>

                      <div className="mt-6 flex flex-wrap justify-between gap-3">
                        <button type="button" className="premium-btn-secondary" onClick={() => setCurrentStep(1)}>
                          Back to Date
                        </button>
                        <button type="button" className="premium-btn-primary" disabled={!canContinueStepTwo} onClick={goToStepThree}>
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <form className="rounded-2xl bg-[radial-gradient(circle_at_82%_10%,rgba(247,214,224,0.2),transparent_44%)] p-2" onSubmit={onSubmit}>
                      <div className="mb-5 rounded-xl border border-gold/20 bg-white/80 p-4 text-sm text-muted">
                        <span className="font-medium text-ivory">Selected:</span>{' '}
                        {selectedDate && selectedTime
                          ? `${formatDateLabel(selectedDate)}, ${selectedTime}`
                          : 'Please go back and complete date/time selection.'}
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="field-wrap-soft">
                          <input
                            id="book-name"
                            name="name"
                            type="text"
                            className="field-input"
                            placeholder=" "
                            value={form.name}
                            onChange={onChange}
                            required
                          />
                          <label className="field-label" htmlFor="book-name">Full Name</label>
                        </div>

                        <div className="field-wrap-soft">
                          <input
                            id="book-email"
                            name="email"
                            type="email"
                            className="field-input"
                            placeholder=" "
                            value={form.email}
                            onChange={onChange}
                            required
                          />
                          <label className="field-label" htmlFor="book-email">Email</label>
                        </div>

                        <div className="field-wrap-soft md:col-span-2">
                          <input
                            id="book-phone"
                            name="phone"
                            type="tel"
                            className="field-input"
                            placeholder=" "
                            value={form.phone}
                            onChange={onChange}
                            required
                          />
                          <label className="field-label" htmlFor="book-phone">Phone Number</label>
                        </div>

                        <div className="field-wrap-soft md:col-span-2">
                          <textarea
                            id="book-purpose"
                            name="purpose"
                            className="field-textarea"
                            placeholder=" "
                            value={form.purpose}
                            onChange={onChange}
                            required
                          />
                          <label className="field-label" htmlFor="book-purpose">Purpose of Consultation</label>
                        </div>
                      </div>

                      {feedback.message && (
                        <p className={`mt-4 text-sm font-medium ${feedback.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
                          {feedback.message}
                        </p>
                      )}

                      <div className="mt-6 flex flex-wrap justify-between gap-3">
                        <button type="button" className="premium-btn-secondary" onClick={() => setCurrentStep(2)}>
                          Back to Time
                        </button>
                        <button type="submit" className="premium-btn-primary" disabled={loading}>
                          {loading ? 'Submitting Booking...' : 'Confirm Strategic Consultation'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default BookingPage
