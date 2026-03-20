import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import authRoutes from './routes/auth.routes.js'
import bookingsRoutes from './routes/bookings.routes.js'
import messagesRoutes from './routes/messages.routes.js'
import contentRoutes from './routes/content.routes.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingsRoutes)
app.use('/api/messages', messagesRoutes)
app.use('/api/content', contentRoutes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running on http://localhost:${PORT}`)
})
