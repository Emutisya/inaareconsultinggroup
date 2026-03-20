import { Router } from 'express'
import { generateId, readDb, writeDb } from '../utils/db.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required message fields' })
  }

  const db = await readDb()
  const contactMessage = {
    id: generateId(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  }

  db.messages.unshift(contactMessage)
  await writeDb(db)

  return res.status(201).json({ message: 'Message submitted successfully', contactMessage })
})

router.get('/', requireAuth, async (_req, res) => {
  const db = await readDb()
  return res.json({ messages: db.messages })
})

export default router
