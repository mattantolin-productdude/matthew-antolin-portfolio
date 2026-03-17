import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F2F1EF] text-[#1a1a1a]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-5xl px-10 md:px-16 pt-28 pb-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left - text */}
          <div className="flex-1 flex flex-col gap-6">
            <span
              className="text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: "#9A7B2E" }}
            >
              About
            </span>

            <h1
              className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Regulated Enterprise Builder. Systems Thinker. Execution Discipline.
            </h1>

          </div>

        </div>
      </section>

      {/* ── ABOUT CONTENT ────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 md:px-8 py-24 flex flex-col gap-8">

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          I treat compliance constraints, fragmented EHR ecosystems, and enterprise procurement
          cycles as product design inputs, not obstacles. Most regulated environments have been
          burned by products that shipped but didn&rsquo;t stick. My track record is in the other
          direction: 0&rarr;1 and scale-up contexts where ambiguous mandates become durable systems
          with measurable adoption and the operational infrastructure to expand.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          I&rsquo;ve led product at Swoop, conversationHEALTH, and Pomelo Health, across
          conversational AI, EHR integrations, patient scheduling, and analytics infrastructure.
          A decade in healthcare, pharma, and life sciences.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          I&rsquo;m based in Montreal, targeting VP Product or Director Product roles in regulated
          enterprise SaaS. Open to Canada/US remote; willing to relocate for the right fit.
        </p>
      </section>

      {/* ── HOW I WORK ───────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <span
            className="block text-xs tracking-[0.25em] uppercase font-medium mb-12"
            style={{ color: "#9A7B2E" }}
          >
            How I Work
          </span>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[
              {
                num: "01",
                title: "ICP Discipline",
                body:
                  "I start by narrowing the target. Not 'enterprise healthcare' but a specific buyer, stack, and motion. Loose ICP produces deployment chaos: too many one-offs, no replicable playbook. Tight ICP is the highest-leverage PM decision made before the first sprint.",
              },
              {
                num: "02",
                title: "Guardrails",
                body:
                  "Before sprint one: define what the product will and won't do, what regulatory constraints apply, and where the failure modes are. In HIPAA-adjacent, formulary-governed, or regulated-content contexts, guardrails aren't bureaucracy; they're the product.",
              },
              {
                num: "03",
                title: "Deployment Architecture",
                body:
                  "Enterprise products fail in the gap between signed contract and live deployment. I design the onboarding motion, integration contracts, and rollout gates before sprint one, so the first deployment becomes the template, not the exception.",
              },
              {
                num: "04",
                title: "Measurable Adoption",
                body:
                  "A feature shipped is not a feature adopted. I instrument from day one: activation events, engagement signals, outcome metrics, and define what 'working' looks like before we build it. Success is behavior change, not a release note.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="rounded-2xl p-8 flex flex-col gap-4 border border-white/10 hover:border-[#9A7B2E]/40 transition-colors duration-300"
                style={{ backgroundColor: "#242424" }}
              >
                <span className="text-xs font-mono text-[#9A7B2E] tracking-widest">
                  {card.num}
                </span>
                <h3 className="text-white text-xl font-bold">{card.title}</h3>
                <p className="text-[#aaa] leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F1EF] py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-start gap-6">
          <span className="text-xs tracking-[0.25em] uppercase font-medium text-[#9A7B2E]">
            Links
          </span>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/matthew-antolin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#9A7B2E" }}
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
            >
              Download resume
            </a>
            <a
              href="/positioning-brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200"
            >
              Positioning brief
            </a>
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-[#ccc] text-[#888] hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors duration-200"
            >
              ← Back to Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
