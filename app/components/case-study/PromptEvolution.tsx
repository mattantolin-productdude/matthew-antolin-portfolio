import type { PromptEvolutionVisual } from "@/lib/case-study-data";

export default function PromptEvolution({ visual }: { visual: PromptEvolutionVisual }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#111213" }}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-xs font-mono tracking-widest text-amber uppercase">
          {visual.sectionTitle}
        </p>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-6">
          {visual.subtitle}
        </p>

        {/* Prompt versions */}
        <div className="space-y-3 mb-8">
          {visual.versions.map((v) => (
            <div
              key={v.version}
              className={`rounded-lg border p-4 flex items-start gap-4 transition-colors ${
                v.win ? "border-amber/40" : "border-white/8"
              }`}
              style={{ backgroundColor: v.win ? "rgba(154,123,46,0.06)" : "#1c1c1e" }}
            >
              {/* Version label */}
              <div className="shrink-0 w-20 text-right">
                <p className={`text-xs font-mono ${v.win ? "text-amber" : "text-white/30"}`}>
                  {v.version}
                </p>
                <p
                  className={`text-[10px] font-mono tracking-wider ${
                    v.win ? "text-amber/70" : "text-white/20"
                  }`}
                >
                  {v.label}
                </p>
              </div>

              {/* Prompt + why */}
              <div className="flex-1">
                <p
                  className={`text-sm font-mono mb-1 ${
                    v.win ? "text-white" : "text-white/50"
                  }`}
                >
                  {v.prompt}
                </p>
                <p className={`text-xs ${v.win ? "text-amber" : "text-white/25"}`}>{v.why}</p>
              </div>

              {/* Pass / fail indicator */}
              <div
                className={`shrink-0 text-[10px] font-mono tracking-widest mt-0.5 ${
                  v.win ? "text-amber" : "text-white/20"
                }`}
              >
                {v.win ? "WIN" : "FAIL"}
              </div>
            </div>
          ))}
        </div>

        {/* Lesson */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-2">
            The lesson
          </p>
          <p className="text-sm text-white/60 leading-relaxed italic">{visual.lesson}</p>
        </div>
      </div>
    </div>
  );
}
