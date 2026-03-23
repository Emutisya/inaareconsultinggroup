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

      <section className="section-shell rhythm-open flow-section signature-motif pt-4">
        <div className="layout-split items-start">
          <RevealOnScroll>
            <div className="form-blush-shell">
              <form className="contact-product-card space-y-7 p-8 md:p-10" onSubmit={onSubmit}>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Confidential Inquiry</p>
                  <h2 className="mt-3 font-serif text-3xl text-ivory">Start a Strategic Conversation</h2>
                  <div className="accent-divider mt-4 max-w-[170px]" />
                </div>

                <div className="field-wrap-soft">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="field-input"
                    placeholder=" "
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                  <label className="field-label" htmlFor="contact-name">Name</label>
                </div>
                <div className="field-wrap-soft">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="field-input"
                    placeholder=" "
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                  <label className="field-label" htmlFor="contact-email">Email</label>
                </div>
                <div className="field-wrap-soft">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="field-input"
                    placeholder=" "
                    value={form.phone}
                    onChange={onChange}
                    required
                  />
                  <label className="field-label" htmlFor="contact-phone">Phone</label>
                </div>
                <div className="field-wrap-soft">
                  <textarea
                    id="message"
                    name="message"
                    className="field-textarea"
                    placeholder=" "
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                  <label className="field-label" htmlFor="message">How can we support your goals?</label>
                </div>

                {feedback.message && (
                  <p className={`text-sm font-medium ${feedback.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
                    {feedback.message}
                  </p>
                )}

                <button type="submit" className="premium-btn-primary" disabled={loading}>
                  {loading ? 'Sending Message...' : 'Send Confidential Message'}
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <aside className="split-visual lg:ml-10">
              <p className="section-kicker">Direct Access</p>
              <h2 className="gold-trace mt-3 inline-block font-serif text-4xl font-bold text-ivory">Reach Us</h2>
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
