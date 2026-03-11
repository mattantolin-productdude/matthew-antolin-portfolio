import type { DecisionForkVisual } from "@/lib/case-study-data";

export default function DecisionFork({ visual }: { visual: DecisionForkVisual }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111213" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-xs font-mono tracking-widest text-amber uppercase">
          {visual.sectionTitle}
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Question */}
        <div className="mb-8 text-center">
          <p className="text-xl font-semibold text-white mb-2">{visual.question}</p>
          <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            {visual.subtitle}
          </p>
        </div>

        {/* Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Path A */}
          <div
            className="rounded-lg border border-white/10 p-5"
            style={{ backgroundColor: "#1c1c1e" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">
              Path A
            </p>
            <h3 className="text-white font-semibold mb-4 text-sm">{visual.pathA.label}</h3>
            <ul className="space-y-2 mb-5">
              {visual.pathA.items.map((item) => (
                <li key={item} className="flex gap-2 text-xs text-white/50">
                  <span className="text-white/20 shrink-0 mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600/70 text-xs">⚠</span>
              <p className="text-xs text-white/30 font-mono">{visual.pathA.signal}</p>
            </div>
          </div>

          {/* Path B — Chosen */}
          <div
            className="rounded-lg border border-amber/40 p-5"
            style={{ backgroundColor: "#1c1c1e" }}
          >
            <p className="text-[10px] font-mono tracking-widest text-amber uppercase mb-1">
              Path B: Chosen
            </p>
            <h3 className="text-white font-semibold mb-4 text-sm">{visual.pathB.label}</h3>
            <ul className="space-y-2 mb-5">
              {visual.pathB.items.map((item) => (
                <li key={item} className="flex gap-2 text-xs text-white/70">
                  <span className="text-amber/50 shrink-0 mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-amber text-xs">✓</span>
              <p className="text-xs text-amber font-mono">{visual.pathB.signal}</p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div
          className="rounded-lg border border-white/10 p-5"
          style={{ backgroundColor: "#0d0d0f" }}
        >
          <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">
            Result
          </p>
          <p className="text-sm text-white/60 leading-relaxed">{visual.result}</p>
        </div>
      </div>
    </div>
  );
}
