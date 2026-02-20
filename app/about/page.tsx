import Link from "next/link";

export const metadata = {
  title: "About — Matthew Antolin",
  description:
    "Product Director building regulated enterprise products in health and pharma SaaS.",
};

const pillars = [
  {
    n: "01",
    label: "ICP discipline",
    body: "I start by narrowing the target. Not 'enterprise healthcare' but a specific buyer, stack, and motion. Loose ICP produces deployment chaos — too many one-offs, no replicable playbook. Tight ICP is the highest-leverage PM decision made before the first sprint.",
  },
  {
    n: "02",
    label: "Guardrails",
    body: "Before sprint one: define what the product will and won't do, what regulatory constraints apply, and where the failure modes are. In HIPAA-adjacent, formulary-governed, or regulated-content contexts, guardrails aren't bureaucracy — they're the product.",
  },
  {
    n: "03",
    label: "Integrations",
    body: "EHR, identity, and data integrations are where enterprise deals are won or stalled. I treat integration design as a first-class PM responsibility: defining the sync contract, sequencing dependencies, aligning stakeholders, and documenting edge cases before engineering starts.",
  },
  {
    n: "04",
    label: "Measurable adoption",
    body: "A feature shipped is not a feature adopted. I instrument from day one — activation events, engagement signals, outcome metrics — and define what 'working' looks like before we build it. Success is behavior change, not a release note.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Narrative */}
      <section className="mx-auto max-w-2xl px-6 pt-24 pb-16">
        <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h1 className="mb-10 text-3xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-4xl">
              Regulated enterprise builder.<br />
              Systems thinker. Execution discipline.
            </h1>

            <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-600">
              <p>
                I&rsquo;m a Product Director based in Montreal, currently leading
                Swoop Agents — a conversational AI product for pharma brand
                websites. Before that I led product at conversationHEALTH and
                Pomelo Health, across EHR integrations, patient scheduling, and
                analytics infrastructure.
              </p>
              <p>
                I work best at the intersection of enterprise complexity and
                execution discipline. Regulated environments — healthcare, pharma,
                life sciences — have constraints most products don&rsquo;t: compliance
                guardrails, fragmented EHR ecosystems, enterprise procurement cycles,
                and buyers who&rsquo;ve been burned before. I treat those constraints as
                product design inputs, not obstacles.
              </p>
              <p>
                My track record is in 0&rarr;1 and scale-up contexts: turning
                ambiguous mandates into shipped systems that hold up after launch.
                Not feature-factory output — durable product work with measurable
                adoption and the operational infrastructure to expand.
              </p>
              <p>
                I&rsquo;m targeting VP Product or Director Product roles in regulated
                enterprise SaaS — health IT, pharma digital enablement, or adjacent.
                Based in Montreal; open to Canada/US remote and willing to relocate
                for the right fit.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0 sm:w-52">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/matt.png"
              alt="Matthew Antolin"
              className="w-full rounded-xl grayscale object-cover object-top aspect-square"
            />
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="mx-auto max-w-2xl px-6 pb-16">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          How I work
        </h2>
        <div className="flex flex-col gap-px border border-zinc-100 rounded-lg overflow-hidden">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="flex gap-6 bg-white px-6 py-5 border-b border-zinc-100 last:border-b-0"
            >
              <span className="mt-0.5 shrink-0 text-xs font-semibold tabular-nums text-zinc-300">
                {p.n}
              </span>
              <div>
                <p className="mb-1.5 text-sm font-semibold text-zinc-900">
                  {p.label}
                </p>
                <p className="text-sm leading-relaxed text-zinc-500">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mx-auto max-w-2xl px-6 pb-28">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Links
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://linkedin.com/in/matthewantolin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-white transition-colors hover:opacity-80"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Download resume
          </a>
          <a
            href="/positioning-brief.pdf"
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Positioning brief
          </a>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            ← Back
          </Link>
        </div>
      </section>
    </main>
  );
}
