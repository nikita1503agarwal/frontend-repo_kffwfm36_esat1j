export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Industry Insights</h2>
        <p className="mt-3 text-blue-200 max-w-3xl">Practical takeaways from regional projects and data-driven operations.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[ 
            {
              title: "Cutting cycle time",
              desc: "Dynamic dispatch windows can reduce idle time 12–18% in Nairobi traffic, improving pour consistency and reducing cold joints.",
            },
            {
              title: "Onsite batching ROI",
              desc: "For high-rise or remote sites, an onsite plant can reduce logistics costs by 10–20% and stabilize quality under tight schedules.",
            },
            {
              title: "Pump utilization",
              desc: "Scheduling boom pumps across multiple pours can save 8–15% on pump costs while raising safety compliance.",
            },
            {
              title: "Telemetry + maintenance",
              desc: "Mixer telemetry predicts breakdowns and keeps fleet available during peak pour windows.",
            }
          ].map((card) => (
            <div key={card.title} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
              <h3 className="text-white font-semibold">{card.title}</h3>
              <p className="mt-2 text-blue-200/90 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
