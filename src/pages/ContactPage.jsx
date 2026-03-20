import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import RevealOnScroll from '../components/RevealOnScroll'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setFeedback({ type: '', message: '' })

    const { name, email, phone, message } = form

    try {
      setLoading(true)
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        phone,
        message,
        createdAt: serverTimestamp()
      })
      setFeedback({ type: 'success', message: 'Message sent successfully. We will respond shortly.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (submissionError) {
      setFeedback({ type: 'error', message: submissionError.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageIntro
        title="Contact"
        description="Connect with Inaare Consulting Group for partnerships, strategic conversations, and transformational engagements. We respond with clarity, discretion, and urgency."
      />

      <section className="section-shell pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <RevealOnScroll>
            <form className="premium-card space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="premium-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="premium-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="contact-phone">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="premium-input"
                  placeholder="+254 700 000 000"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="premium-textarea"
                  placeholder="How can we support your goals?"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              {feedback.message && (
                <p className={`text-sm ${feedback.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
                  {feedback.message}
                </p>
              )}

              <button type="submit" className="premium-btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <aside className="premium-card">
              <h2 className="font-serif text-3xl font-bold text-ivory">Reach Us</h2>
              <p className="text-measure mt-4 text-muted">
                Email: ndaizeek@gmail.com
                <br />
                Phone: +254 721 389696
              </p>
              <p className="text-measure mt-6 text-muted">
                Working with leaders and organizations across Africa and globally, we structure
                advisory experiences for impact, clarity, and sustainable results.
              </p>
            </aside>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

export default ContactPage
