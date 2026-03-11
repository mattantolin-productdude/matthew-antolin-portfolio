import type { OrgTimelineVisual } from "@/lib/case-study-data";

export default function OrgTimeline({ visual }: { visual: OrgTimelineVisual }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111213" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-xs font-mono tracking-widest text-amber uppercase">
          {visual.sectionTitle}
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Timeline table — scrollable on mobile */}
        <div className="overflow-x-auto mb-10 -mx-2 px-2">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="w-20 pb-4 text-left" />
                {visual.years.map((year) => (
                  <th
                    key={year}
                    className="pb-4 text-center text-[10px] font-mono tracking-widest text-amber/70 uppercase font-normal"
                  >
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visual.rows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  className={rowIdx < visual.rows.length - 1 ? "border-b border-white/10" : ""}
                >
                  <td className="py-4 pr-4 align-top">
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                      {row.label}
                    </span>
                  </td>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="py-4 px-2 align-top text-center">
                      {cell ? (
                        <span className="text-xs text-white/60 leading-snug">{cell}</span>
                      ) : (
                        <span className="text-white/10 text-xs">·</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
