import { Router } from 'express'
import { generateId, readDb, writeDb } from '../utils/db.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', async (req, res) => {
  const { name, email, date, time, purpose } = req.body

  if (!name || !email || !date || !time || !purpose) {
    return res.status(400).json({ message: 'Missing required booking fields' })
  }

  const db = await readDb()
  const booking = {
    id: generateId(),
    name,
    email,
    date,
    time,
    purpose,
    status: 'new',
    createdAt: new Date().toISOString()
  }

  db.bookings.unshift(booking)
  await writeDb(db)

  return res.status(201).json({ message: 'Booking submitted successfully', booking })
})

router.get('/', requireAuth, async (_req, res) => {
  const db = await readDb()
  return res.json({ bookings: db.bookings })
})

router.patch('/:id/status', requireAuth, async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  if (!status) {
    return res.status(400).json({ message: 'Status is required' })
  }

  const db = await readDb()
  const booking = db.bookings.find((item) => item.id === id)

  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' })
  }

  booking.status = status
  booking.updatedAt = new Date().toISOString()
  await writeDb(db)

  return res.json({ message: 'Booking status updated', booking })
})

export default router
