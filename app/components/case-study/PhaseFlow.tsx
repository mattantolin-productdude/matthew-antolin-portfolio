import type { PhaseFlowVisual } from "@/lib/case-study-data";

export default function PhaseFlow({ visual }: { visual: PhaseFlowVisual }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111213" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-xs font-mono tracking-widest text-amber uppercase">
          {visual.sectionTitle}
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
          {visual.phases.map((phase, i) => (
            <div key={phase.number} className="flex">
              {/* Phase card */}
              <div className="flex-1 px-0 md:px-4 py-4 first:pl-0 last:pr-0">
                <p className="text-[10px] font-mono tracking-widest text-amber/70 uppercase mb-1">
                  {phase.number} · {phase.period}
                </p>
                <h3 className="text-white font-semibold text-sm mb-3">{phase.name}</h3>
                <ul className="space-y-2 mb-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-white/50">
                      <span className="text-white/20 shrink-0 mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-[10px] font-mono tracking-wider text-amber border border-amber/30 rounded px-2 py-0.5">
                  {phase.badge}
                </span>
              </div>
              {/* Arrow between phases */}
              {i < visual.phases.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 shrink-0 text-white/20 text-lg">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {visual.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-bold text-white tracking-tight">{m.value}</div>
              <div className="text-[10px] font-mono text-white/40 tracking-wider mt-1.5 uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
