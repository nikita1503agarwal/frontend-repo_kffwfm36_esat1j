import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          company: payload.company,
          service_interest: payload.service_interest,
          message: payload.message,
          preferred_contact: payload.preferred_contact || 'email',
          source: 'website'
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We\'ll be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Could not submit right now. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="mt-2 text-blue-200">Let\'s discuss how to boost productivity and cut costs on your next project.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-2xl border border-white/10 bg-slate-900/60">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" placeholder="Name" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
                <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone / WhatsApp" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
                <input name="company" placeholder="Company" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
              </div>
              <input name="service_interest" placeholder="Service of interest (e.g., pumping, onsite batching)" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
              <textarea required name="message" placeholder="Tell us about your needs" rows="5" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder-blue-300/50"/>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-blue-200/90 text-sm">
                  <input type="radio" name="preferred_contact" value="email" defaultChecked className="accent-blue-600"/>
                  Email
                </label>
                <label className="inline-flex items-center gap-2 text-blue-200/90 text-sm">
                  <input type="radio" name="preferred_contact" value="phone" className="accent-blue-600"/>
                  Phone/WhatsApp
                </label>
              </div>
              <button disabled={loading} className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60">{loading ? 'Sending...' : 'Send Inquiry'}</button>
              {status && <div className="text-sm text-blue-200 mt-2">{status}</div>}
            </form>
          </div>

          <div className="space-y-4">
            <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:border-blue-400/40">WhatsApp: +254 700 000 000</a>
            <a href="mailto:consult@concreteops.africa" className="block p-4 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:border-blue-400/40">Email: consult@concreteops.africa</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:border-blue-400/40">LinkedIn</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:border-blue-400/40">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-white/10 bg-slate-900/60 text-white hover:border-blue-400/40">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}
