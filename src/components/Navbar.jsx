import { Menu, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <div className="text-left">
              <div className="text-white font-semibold leading-tight">Concrete Ops Consulting</div>
              <div className="text-xs text-blue-200/70">Kenya • East Africa</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-blue-100 hover:text-white">Services</a>
            <a href="#insights" className="text-blue-100 hover:text-white">Industry Insights</a>
            <a href="#stories" className="text-blue-100 hover:text-white">Success Stories</a>
            <a href="#about" className="text-blue-100 hover:text-white">About</a>
            <Link to="/contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Linkedin size={20} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Facebook size={20} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Instagram size={20} /></a>
            <button onClick={() => setOpen(!open)} className="md:hidden text-blue-100 hover:text-white"><Menu /></button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-slate-900/95">
            <a href="#services" onClick={() => setOpen(false)} className="block text-blue-100">Services</a>
            <a href="#insights" onClick={() => setOpen(false)} className="block text-blue-100">Industry Insights</a>
            <a href="#stories" onClick={() => setOpen(false)} className="block text-blue-100">Success Stories</a>
            <a href="#about" onClick={() => setOpen(false)} className="block text-blue-100">About</a>
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg"><Phone size={16}/> Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
