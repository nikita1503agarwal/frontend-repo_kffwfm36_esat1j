import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Insights from './components/Insights'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'

function HomePage() {
  return (
    <div className="bg-slate-950">
      <Hero />
      <Services />
      <Insights />
      <SuccessStories />
      <About />
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-sm text-blue-300/80">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="text-white font-semibold">Concrete Ops Consulting</div>
            <div className="text-blue-300/70">Helping ready-mix providers deliver on time and on spec.</div>
          </div>
          <div className="space-x-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#insights" className="hover:text-white">Insights</a>
            <a href="#stories" className="hover:text-white">Success Stories</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </div>
        <div className="mt-6 text-blue-300/60">© {new Date().getFullYear()} Concrete Ops Consulting. All rights reserved.</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
