export default function SuccessStories() {
  const stories = [
    {
      client: "Alliance Concrete Ltd",
      result: "Reduced average truck turnaround from 95 to 74 minutes across Nairobi corridor.",
    },
    {
      client: "Regional Contractor",
      result: "Implemented onsite batching for high-rise core pours, cutting crane dependency and saving 14% on logistics.",
    },
    {
      client: "Ready-Mix Provider",
      result: "Introduced digital e-ticketing and GPS tracking to improve accountability and QA/QC traceability.",
    },
  ];

  return (
    <section id="stories" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Success Stories</h2>
        <p className="mt-3 text-blue-200 max-w-3xl">Proven results delivering safer, faster, and more cost-effective pours.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.client} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60">
              <div className="text-blue-300 text-sm">{s.client}</div>
              <div className="mt-2 text-white font-medium">{s.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
