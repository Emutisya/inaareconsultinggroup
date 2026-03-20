import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { getToken, isSupported, onMessage } from 'firebase/messaging'
import { db } from './firebase'

const normalizeDocId = (value) => encodeURIComponent(value)

export const initializeAdminPushNotifications = async ({ firebaseUser, messaging, vapidKey, onForegroundMessage }) => {
  if (!firebaseUser || !messaging) {
    return { ok: false, reason: 'missing-context' }
  }

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') {
    return { ok: false, reason: 'permission-denied' }
  }

  if (!vapidKey) {
    return { ok: false, reason: 'missing-vapid-key' }
  }

  const swRegistration = await navigator.serviceWorker.ready
  const token = await getToken(messaging, {
    vapidKey,
    serviceWorkerRegistration: swRegistration
  })

  if (!token) {
    return { ok: false, reason: 'missing-token' }
  }

  const adminRef = doc(db, 'adminUsers', firebaseUser.uid)
  await setDoc(
    adminRef,
    {
      uid: firebaseUser.uid,
      email: firebaseUser.email || '',
      isAdmin: true,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  )

  await setDoc(
    doc(db, 'adminUsers', firebaseUser.uid, 'fcmTokens', normalizeDocId(token)),
    {
      token,
      userAgent: navigator.userAgent,
      platform: navigator.platform || '',
      updatedAt: serverTimestamp()
    },
    { merge: true }
  )

  const unsubscribeForeground = onMessage(messaging, (payload) => {
    onForegroundMessage?.(payload)
  })

  return {
    ok: true,
    permission,
    token,
    unsubscribeForeground
  }
}

export const watchPushPermission = (onChange) => {
  if (!('permissions' in navigator) || !navigator.permissions?.query) {
    onChange?.(Notification.permission)
    return () => {}
  }

  let mounted = true
  let permissionStatus

  navigator.permissions
    .query({ name: 'notifications' })
    .then((status) => {
      if (!mounted) return
      permissionStatus = status
      onChange?.(status.state)
      status.onchange = () => onChange?.(status.state)
    })
    .catch(() => onChange?.(Notification.permission))

  return () => {
    mounted = false
    if (permissionStatus) permissionStatus.onchange = null
  }
}

export const canUseMessaging = async () => {
  const supported = await isSupported()
  return supported && typeof Notification !== 'undefined'
}
