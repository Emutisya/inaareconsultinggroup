import { useMemo, useState } from 'react'
import { normalizeDateISO, normalizeDateISOArray } from '../lib/dateISO'

const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM']
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

const BookingCalendarUI = ({ onConfirm, bookedSlots = [], calendarSettings }) => {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [visibleMonth, setVisibleMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')

  const availableSlots = calendarSettings?.availableSlots?.length
    ? calendarSettings.availableSlots
    : timeSlots

  const monthCells = useMemo(() => getMonthGrid(visibleMonth), [visibleMonth])

  const bookedSlotSet = useMemo(
    () =>
      new Set(
        bookedSlots
          .filter((slot) => slot?.dateISO && slot?.time)
          .map((slot) => `${slot.dateISO}__${slot.time}`)
      ),
    [bookedSlots]
  )

  const blockedDaysSet = useMemo(
    () => new Set(normalizeDateISOArray(calendarSettings?.blockedDays || [])),
    [calendarSettings?.blockedDays]
  )

  const blockedSlotSet = useMemo(
    () =>
      new Set(
        (calendarSettings?.blockedSlots || [])
          .filter((slot) => slot?.dateISO && slot?.time)
          .map((slot) => `${slot.dateISO}__${slot.time}`)
      ),
    [calendarSettings?.blockedSlots]
  )

  const monthLabel = visibleMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  const selectedSummary =
    selectedDate && selectedTime ? `${formatDateLabel(selectedDate)}, ${selectedTime}` : 'No date selected yet'

  const canConfirm = Boolean(selectedDate && selectedTime)

  const moveMonth = (offset) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1))
  }

  const onSelectDate = (date) => {
    setSelectedDate(date)
    setSelectedTime('')
  }

  const isTimeBlocked = (dateISO, slot) => {
    if (blockedDaysSet.has(dateISO)) {
      return true
    }

    if (blockedSlotSet.has(`${dateISO}__${slot}`)) {
      return true
    }

    if (bookedSlotSet.has(`${dateISO}__${slot}`)) {
      return true
    }

    return false
  }

  const onConfirmSelection = () => {
    if (!canConfirm) {
      return
    }

    onConfirm?.({
      date: selectedDate,
      dateLabel: formatDateLabel(selectedDate),
      isoDate: normalizeDateISO(selectedDate),
      time: selectedTime
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
      <div className="premium-card">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Step 1</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">Select Date</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory transition hover:bg-gold/10"
              onClick={() => moveMonth(-1)}
              aria-label="Previous month"
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-lg border border-gold/30 px-3 py-2 text-sm text-ivory transition hover:bg-gold/10"
              onClick={() => moveMonth(1)}
              aria-label="Next month"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mb-4 rounded-xl border border-gold/20 bg-ink/35 px-4 py-3 text-center">
          <p className="font-serif text-xl text-ivory">{monthLabel}</p>
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center sm:gap-2">
          {weekDays.map((day) => (
            <p key={day} className="pb-1 text-xs uppercase tracking-[0.16em] text-muted">
              {day}
            </p>
          ))}

          {monthCells.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="h-12 rounded-lg" aria-hidden="true" />
            }

            const normalized = startOfDay(date)
            const isPast = normalized < today
            const isToday = isSameDay(normalized, today)
            const isSelected = selectedDate ? isSameDay(normalized, selectedDate) : false
            const dateISO = normalizeDateISO(normalized)
            const allSlotsBlocked = availableSlots.every((slot) => isTimeBlocked(dateISO, slot))
            const isDisabled = isPast || allSlotsBlocked

            return (
              <button
                key={normalized.toISOString()}
                type="button"
                disabled={isDisabled}
                onClick={() => onSelectDate(normalized)}
                className={`h-11 rounded-lg border text-sm font-medium transition sm:h-12 ${
                  isSelected
                    ? 'border-gold bg-gold/20 text-ivory shadow-lg shadow-gold/10'
                    : isDisabled
                      ? 'cursor-not-allowed border-gold/10 text-muted/40'
                      : 'border-gold/20 text-muted hover:border-gold/60 hover:bg-gold/10 hover:text-ivory'
                } ${isToday ? 'ring-1 ring-gold/60' : ''}`}
              >
                {normalized.getDate()}
              </button>
            )
          })}
        </div>
      </div>

      <div className="premium-card">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Step 2</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">Select Time</p>
        </div>

        {!selectedDate && (
          <p className="mt-4 rounded-xl border border-gold/20 bg-ink/35 px-4 py-3 text-sm text-muted">
            Select a date first to view available time slots.
          </p>
        )}

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {availableSlots.map((slot) => {
            const active = selectedTime === slot
            const dateISO = selectedDate ? normalizeDateISO(selectedDate) : ''
            const blocked = selectedDate ? isTimeBlocked(dateISO, slot) : false
            return (
              <button
                key={slot}
                type="button"
                disabled={!selectedDate || blocked}
                onClick={() => setSelectedTime(slot)}
                className={`min-h-[48px] rounded-lg border px-4 py-3 text-sm transition ${
                  active
                    ? 'border-gold bg-gold/20 text-ivory shadow-lg shadow-gold/10'
                    : !selectedDate || blocked
                      ? 'cursor-not-allowed border-gold/10 text-muted/40'
                      : 'border-gold/20 text-muted hover:border-gold/60 hover:bg-gold/10 hover:text-ivory'
                }`}
              >
                {slot}
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Step 3</p>
          <div className="mt-2 rounded-xl border border-gold/20 bg-ink/40 p-4 text-sm text-muted transition">
            Selected: {selectedSummary}
          </div>
        </div>

        <button type="button" className="premium-btn-primary mt-5 w-full" disabled={!canConfirm} onClick={onConfirmSelection}>
          Confirm Date & Time
        </button>
      </div>
    </div>
  )
}

export default BookingCalendarUI
