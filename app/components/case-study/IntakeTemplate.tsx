import type { IntakeTemplateVisual } from "@/lib/case-study-data";

export default function IntakeTemplate({ visual }: { visual: IntakeTemplateVisual }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111213" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-xs font-mono tracking-widest text-amber uppercase">
          {visual.sectionTitle}
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Company + stamp */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            {visual.company}
          </p>
          <span className="text-[10px] font-mono tracking-wider text-amber border border-amber/30 rounded px-2 py-0.5 uppercase">
            {visual.stamp}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-white/40 leading-relaxed mb-8 italic max-w-xl">
          {visual.description}
        </p>

        {/* Template sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {visual.sections.map((section) => (
            <div
              key={section.number}
              className="rounded-lg border border-white/10 p-5"
              style={{ backgroundColor: "#1c1c1e" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-amber">{section.number}</span>
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                  {section.label}
                </span>
              </div>
              <ul className="space-y-3">
                {section.fields.map((field) => (
                  <li key={field} className="flex items-center justify-between gap-4">
                    <span className="text-xs text-white/60">{field}</span>
                    <span className="text-[10px] font-mono text-white/20 shrink-0">required</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Triage flow */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-4">
            Intake Triage Flow
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {visual.flow.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="rounded border border-white/10 px-3 py-2"
                  style={{ backgroundColor: "#0d0d0f" }}
                >
                  {f.tier && (
                    <span className="text-[10px] font-mono text-amber mr-1.5">{f.tier}</span>
                  )}
                  <span className="text-xs text-white/60">{f.label}</span>
                  <span className="text-xs text-white/25 ml-1.5">→ {f.action}</span>
                </div>
                {i < visual.flow.length - 1 && (
                  <span className="text-white/15 text-sm">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
