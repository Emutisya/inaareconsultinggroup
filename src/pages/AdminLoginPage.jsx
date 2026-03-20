import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'

const AdminLoginPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loginWithFirebase = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await loginWithFirebase(form.email, form.password)
      login({ user: { email: form.email, role: 'admin' } })
      navigate('/admin/dashboard', { replace: true })
    } catch (submissionError) {
      setError(submissionError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-shell">
      <div className="mx-auto w-full max-w-lg premium-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Admin Portal</p>
        <h1 className="mt-3 font-serif text-4xl text-ivory">Sign In</h1>
        <p className="mt-3 text-muted">Secure access for authorized administrators only.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="premium-input"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-muted">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="premium-input"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>

          {error && <p className="text-sm text-red-300">{error}</p>}

          <button type="submit" className="premium-btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In to Admin'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default AdminLoginPage
