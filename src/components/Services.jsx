import { Truck, Timer, Factory, Workflow, Shield, Cpu, LineChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Delivery Workflow Optimization",
      desc: "Dispatch planning, route optimization, and cycle time reduction for Nairobi and regional traffic patterns.",
      icon: Truck,
    },
    {
      title: "Concrete Pumping Solutions",
      desc: "Boom and line pump selection, setup planning, crew training, and utilization analytics.",
      icon: Timer,
    },
    {
      title: "Onsite Batching Plants",
      desc: "Feasibility, setup, QA/QC controls, and integration with central dispatch systems.",
      icon: Factory,
    },
    {
      title: "Logistics Coordination",
      desc: "End-to-end scheduling across suppliers, mixers, cranes, and site teams.",
      icon: Workflow,
    },
    {
      title: "Safety & Compliance",
      desc: "Toolbox talks, pump safety, PPE standards, and site audits aligned to local regulations.",
      icon: Shield,
    },
    {
      title: "Technology Integration",
      desc: "Telematics, e-ticketing, GPS, and IoT sensors to track performance in real time.",
      icon: Cpu,
    },
    {
      title: "Performance Dashboards",
      desc: "KPIs for utilization, yield, and on-time delivery with weekly executive reporting.",
      icon: LineChart,
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Consulting Services</h2>
        <p className="mt-3 text-blue-200 max-w-3xl">
          Tailored for Alliance Concrete Ltd and similar ready-mix providers across Kenya and East Africa. Save money, boost productivity, and deliver high-quality concrete on time.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 hover:border-blue-400/40 transition shadow-lg shadow-black/30">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600/30">
                <Icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-200/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
