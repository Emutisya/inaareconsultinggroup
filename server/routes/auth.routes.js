import { Router } from 'express'
import { signToken } from '../middleware/auth.js'

const router = Router()

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@inaareconsulting.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin12345!'

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = signToken({ email, role: 'admin' })
  return res.json({ token, user: { email, role: 'admin' } })
})

export default router
