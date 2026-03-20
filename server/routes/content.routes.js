import { Router } from 'express'
import { readDb, writeDb } from '../utils/db.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', async (_req, res) => {
  const db = await readDb()
  return res.json({ content: db.content })
})

router.put('/', requireAuth, async (req, res) => {
  const { content } = req.body

  if (!content || typeof content !== 'object') {
    return res.status(400).json({ message: 'Content payload is required' })
  }

  const db = await readDb()
  db.content = content
  await writeDb(db)

  return res.json({ message: 'Content updated successfully', content: db.content })
})

export default router
