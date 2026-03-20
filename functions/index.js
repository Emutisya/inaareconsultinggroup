const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const { onSchedule } = require('firebase-functions/v2/scheduler')
const { defineSecret } = require('firebase-functions/params')
const logger = require('firebase-functions/logger')
const admin = require('firebase-admin')
const { Resend } = require('resend')

const RESEND_API_KEY = defineSecret('RESEND_API_KEY')

const admins = ['elizabeth.waeni.m@gmail.com', 'ndaizeek@gmail.com']

if (!admin.apps.length) {
  admin.initializeApp()
}

const getMissingSecrets = (resendKey) => {
  const missing = []
  if (!resendKey) missing.push('RESEND_API_KEY')
  return missing
}

const sendNotification = async ({ subject, text, html, resendKey }) => {
  const missing = getMissingSecrets(resendKey)
  if (missing.length > 0) {
    logger.error(`Email not sent. Missing secrets: ${missing.join(', ')}`)
    return
  }

  try {
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Inaare Consulting <info@inaareconsultinggroup.org>',
      to: admins,
      subject,
      text,
      html
    })
  } catch (error) {
    logger.error('Email delivery failed', error)
  }
}

const dayDiffFromNow = (dateValue) => {
  if (!dateValue) return null
  const expiry = new Date(dateValue)
  if (Number.isNaN(expiry.getTime())) return null

  const now = new Date()
  const startNow = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const startExpiry = new Date(expiry.getFullYear(), expiry.getMonth(), expiry.getDate()).getTime()
  return Math.round((startExpiry - startNow) / (1000 * 60 * 60 * 24))
}

const fetchAdminPushTokens = async () => {
  const db = admin.firestore()
  const adminUsersSnap = await db.collection('adminUsers').where('isAdmin', '==', true).get()
  const tokens = new Set()

  for (const adminDoc of adminUsersSnap.docs) {
    const uid = adminDoc.id
    try {
      const userRecord = await admin.auth().getUser(uid)
      const userEmail = (userRecord.email || '').toLowerCase()
      if (!admins.map((email) => email.toLowerCase()).includes(userEmail)) {
        continue
      }

      const tokenSnap = await db.collection('adminUsers').doc(uid).collection('fcmTokens').get()
      tokenSnap.forEach((tokenDoc) => {
        const token = tokenDoc.data()?.token
        if (token) tokens.add(token)
      })
    } catch (error) {
      logger.warn(`Skipping admin token lookup for uid ${uid}`, error)
    }
  }

  return Array.from(tokens)
}

const sendPushToAdmins = async ({ body, url = '/admin/dashboard', data = {} }) => {
  const tokens = await fetchAdminPushTokens()
  if (tokens.length === 0) {
    logger.info('No admin FCM tokens available for push notification.')
    return
  }

  const message = {
    tokens,
    notification: {
      title: 'Inaare Admin Portal',
      body
    },
    data: {
      url,
      ...Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = String(value)
        return acc
      }, {})
    },
    webpush: {
      fcmOptions: {
        link: url
      }
    }
  }

  const result = await admin.messaging().sendEachForMulticast(message)
  logger.info('Push send result', {
    successCount: result.successCount,
    failureCount: result.failureCount
  })

  if (result.failureCount > 0) {
    const db = admin.firestore()
    const tokenDocs = await db.collectionGroup('fcmTokens').get()
    const tokenToDocRef = new Map()
    tokenDocs.forEach((tokenDoc) => {
      const token = tokenDoc.data()?.token
      if (token) tokenToDocRef.set(token, tokenDoc.ref)
    })

    await Promise.all(
      result.responses.map(async (response, index) => {
        if (response.success) return
        const code = response.error?.code || ''
        const token = tokens[index]
        if (code.includes('registration-token-not-registered') || code.includes('invalid-registration-token')) {
          const ref = tokenToDocRef.get(token)
          if (ref) {
            await ref.delete().catch(() => null)
          }
        }
      })
    )
  }
}

exports.notifyOnNewBooking = onDocumentCreated(
  {
    document: 'bookings/{bookingId}',
    region: 'us-central1',
    secrets: [RESEND_API_KEY]
  },
  async (event) => {
    const data = event.data?.data() || {}

    const name = data.name || 'N/A'
    const email = data.email || 'N/A'
    const phone = data.phone || 'N/A'
    const date = data.date || 'N/A'
    const time = data.time || 'N/A'
    const purpose = data.purpose || 'N/A'

    const subject = 'New Consultation Booking'
    const text = [
      'A new consultation booking was submitted.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Purpose: ${purpose}`
    ].join('\n')

    const html = `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Purpose:</strong> ${purpose}</p>
    `

    await sendNotification({
      subject,
      text,
      html,
      resendKey: RESEND_API_KEY.value()
    })

    await sendPushToAdmins({
      body: 'New consultation booking received',
      url: '/admin/dashboard',
      data: { type: 'booking' }
    })
  }
)

exports.notifyOnNewMessage = onDocumentCreated(
  {
    document: 'messages/{messageId}',
    region: 'us-central1',
    secrets: [RESEND_API_KEY]
  },
  async (event) => {
    const data = event.data?.data() || {}

    const name = data.name || 'N/A'
    const email = data.email || 'N/A'
    const phone = data.phone || 'N/A'
    const message = data.message || 'N/A'

    const subject = 'New Contact Message'
    const text = [
      'A new contact message was submitted.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Message: ${message}`
    ].join('\n')

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `

    await sendNotification({
      subject,
      text,
      html,
      resendKey: RESEND_API_KEY.value()
    })

    await sendPushToAdmins({
      body: 'New message from website',
      url: '/admin/dashboard',
      data: { type: 'message' }
    })
  }
)

exports.notifyOnWebsiteExpiry = onSchedule(
  {
    schedule: 'every day 08:00',
    timeZone: 'Africa/Nairobi',
    region: 'us-central1'
  },
  async () => {
    const websiteDoc = await admin.firestore().doc('websiteDetails/main').get()
    if (!websiteDoc.exists) {
      logger.info('websiteDetails/main not found; skipping expiry push checks.')
      return
    }

    const details = websiteDoc.data() || {}
    const domainDays = dayDiffFromNow(details.domainExpiration)
    const hostingDays = dayDiffFromNow(details.hostingExpiration)

    if (domainDays !== null && domainDays >= 0 && domainDays <= 30) {
      await sendPushToAdmins({
        body: `⚠️ Domain expires in ${domainDays} days`,
        url: '/admin/dashboard',
        data: { type: 'domain-expiry', days: domainDays }
      })
    }

    if (hostingDays !== null && hostingDays >= 0 && hostingDays <= 30) {
      await sendPushToAdmins({
        body: `⚠️ Hosting expires in ${hostingDays} days`,
        url: '/admin/dashboard',
        data: { type: 'hosting-expiry', days: hostingDays }
      })
    }
  }
)
