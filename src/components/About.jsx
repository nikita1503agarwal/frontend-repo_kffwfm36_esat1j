export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About the Consultant</h2>
          <p className="mt-4 text-blue-200">
            With years of field operations experience across Kenya and East Africa, we help ready-mix providers and contractors align people, technology, and process. From dispatch to pumping to onsite batching, we engineer reliable workflows that keep projects moving.
          </p>
          <ul className="mt-6 space-y-2 text-blue-200/90 text-sm list-disc pl-5">
            <li>Specialized in ready-mix concrete delivery and pump operations</li>
            <li>Safety-first methodology with measurable KPIs</li>
            <li>Trusted partner to regional suppliers and tier-1 contractors</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
          <div className="text-white font-semibold">What we bring</div>
          <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm text-blue-200/90">
            <div className="p-4 rounded-xl bg-slate-800/60">Logistics coordination</div>
            <div className="p-4 rounded-xl bg-slate-800/60">Technology integration</div>
            <div className="p-4 rounded-xl bg-slate-800/60">Safety training & audits</div>
            <div className="p-4 rounded-xl bg-slate-800/60">Business growth strategies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
