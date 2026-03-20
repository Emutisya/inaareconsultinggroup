const CACHE_NAME = 'inaare-admin-pwa-v1'
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/pwa-icon-192x192.png',
  '/pwa-icon-512x512.png'
]

importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAUjtOS3DdjsRxzZqxCidu3dGm4aOfPY1E',
  authDomain: 'inaare-consulting.firebaseapp.com',
  projectId: 'inaare-consulting',
  storageBucket: 'inaare-consulting.firebasestorage.app',
  messagingSenderId: '55649247758',
  appId: '1:55649247758:web:24d97244b7790cd722125f'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || 'Inaare Admin Portal'
  const body = payload?.notification?.body || 'You have a new admin alert.'
  const url = payload?.data?.url || '/admin/dashboard'

  self.registration.showNotification(title, {
    body,
    icon: '/pwa-icon-192x192.png',
    badge: '/pwa-icon-192x192.png',
    data: { url }
  })
})

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone))
          return response
        })
        .catch(() => caches.match('/index.html'))
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const targetUrl = event.notification?.data?.url || '/admin/dashboard'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      const matchingClient = windowClients.find((client) => client.url.includes('/admin'))
      if (matchingClient) {
        matchingClient.focus()
        matchingClient.navigate(targetUrl)
        return
      }

      return clients.openWindow(targetUrl)
    })
  )
})
