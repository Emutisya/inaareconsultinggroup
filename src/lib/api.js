const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const withAuth = (token) =>
  token
    ? {
        Authorization: `Bearer ${token}`
      }
    : {}

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export const api = {
  login: (payload) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

  submitBooking: (payload) =>
    request('/bookings', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

  submitMessage: (payload) =>
    request('/messages', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

  getContent: () => request('/content'),

  updateContent: (content, token) =>
    request('/content', {
      method: 'PUT',
      headers: withAuth(token),
      body: JSON.stringify({ content })
    }),

  getBookings: (token) =>
    request('/bookings', {
      headers: withAuth(token)
    }),

  updateBookingStatus: (id, status, token) =>
    request(`/bookings/${id}/status`, {
      method: 'PATCH',
      headers: withAuth(token),
      body: JSON.stringify({ status })
    }),

  getMessages: (token) =>
    request('/messages', {
      headers: withAuth(token)
    })
}
