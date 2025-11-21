import Spline from '@splinetool/react-spline';

export default function Hero() {
  const backend = import.meta.env.VITE_BACKEND_URL || '';
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Concrete Delivery. Perfected.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-200">
            Consulting for Alliance Concrete Ltd and regional ready-mix providers. We optimize dispatch, pumping, and onsite batching so your projects finish on time and under budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Explore Services</a>
            {backend && (
              <a href={`${backend}/test`} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Backend Status</a>
            )}
          </div>
          <div className="mt-6 text-sm text-blue-300/80">
            Kenya • East Africa • Ready Mix • Pumping • Onsite Batching
          </div>
        </div>
      </div>
    </section>
  );
}
