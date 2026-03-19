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
              className="text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
            >
              Two Users, One Product Strategy. Sell to the enterprise. Earn adoption from the patient.
            </h1>

          </div>

        </div>
      </section>

      {/* ── ABOUT CONTENT ────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 md:px-8 py-24 flex flex-col gap-8">

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          In healthcare and pharma, the person who buys the product is rarely the person who uses it. The enterprise team signs the contract. The patient, caregiver, nurse, or HCP actually shows up every day. I&rsquo;ve spent a decade building for both &mdash; winning the business case with one audience, earning daily adoption from the other.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          That&rsquo;s meant owning two completely different product surfaces at the same time. On one side: the platform and data infrastructure that customer teams use to configure, launch, and measure their deployments. On the other: the patient- and HCP-facing products those deployments power. Mobile apps that let patients skip the waiting room. Online booking running at clinical scale. Conversational agents fielding HCP medical information queries on pharma brand sites before most companies had heard of a large language model. And DTC patient engagement tools that capture behavioral signals no one was collecting before.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          The connecting thread is the feedback loop between them. When adoption data from the user-facing product informs how the customer team configures the platform, the whole system gets smarter. I&rsquo;ve always built toward that flywheel.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          I operate at the intersection of strategy and execution &mdash; not one or the other. I think clearly in complexity, lead people as much as product, and get things done when the environment is messy.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          I led product at Swoop, conversationHEALTH, and Pomelo Health &mdash; across conversational AI, EHR integrations, patient scheduling, and analytics infrastructure. A decade in healthcare, pharma, and life sciences. Based in Montreal. Targeting VP Product or Director Product roles in regulated enterprise SaaS. Open to Canada/US remote.
        </p>

        <p className="text-lg leading-relaxed text-[#3a3a3a]">
          Outside of work: I coach U11 girls softball — my two daughters play on the team. Biggie Smalls the French Bulldog runs the house. I&rsquo;ve been fundraising for JDRF for 18 years, which makes sense given that I&rsquo;ve been living with Type 1 diabetes since I was a kid. When I&rsquo;m not on a ball diamond or a hockey rink, I&rsquo;m reading or making art — usually in that order.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                num: "01",
                title: "Sell to the Business, Build for the User",
                body:
                  "The buyer and the end user almost never have the same problem. The enterprise team wants compliance, deployment speed, and measurable ROI. The patient or HCP wants something that fits how they already work. I hold both in the room at the same time — and I don't let one crowd out the other. That's where most regulated products fall apart.",
              },
              {
                num: "02",
                title: "ICP Before Sprint One",
                body:
                  "Not 'enterprise healthcare' — a specific buyer, stack, and motion. Loose ICP produces deployment chaos: too many one-offs, no replicable playbook. Tight ICP is the highest-leverage PM decision made before any code is written.",
              },
              {
                num: "03",
                title: "Guardrails as Product Design",
                body:
                  "Before sprint one: define what the product will and won't do, what regulatory constraints apply, and where the failure modes are. In HIPAA-adjacent, formulary-governed, or regulated-content contexts, guardrails aren't bureaucracy. They're the product.",
              },
              {
                num: "04",
                title: "Deployment Architecture",
                body:
                  "Enterprise products fail in the gap between contract and live deployment. I design the onboarding motion, integration contracts, and rollout gates before sprint one, so the first customer deployment becomes the template — not the exception.",
              },
              {
                num: "05",
                title: "Measurable Adoption",
                body:
                  "A feature shipped is not a feature adopted. I instrument from day one: activation events, engagement signals, outcome metrics. And I define what 'working' looks like before we build it. Success is behavior change, not a release note.",
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

      {/* ── HOW I'M WIRED ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <span
            className="block text-xs tracking-[0.25em] uppercase font-medium mb-12"
            style={{ color: "#9A7B2E" }}
          >
            How I&rsquo;m Wired
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Arranger",
                body: "I naturally see how the pieces fit together. Put 12 stakeholders, 3 product surfaces, and an impossible deadline in a room — that's when I get energized, not anxious. I don't protect plans. I optimize configurations until the path forward becomes obvious.",
              },
              {
                title: "Futuristic",
                body: "I can hold the long-term picture clearly enough that the team doesn't have to. My job is to make the destination vivid enough that daily decisions become easy. People tend to look to me for that picture, especially when the present feels messy.",
              },
              {
                title: "Achiever",
                body: "Every day starts at zero for me. That's not a complaint — it's how I'm built. It means I set the pace, I don't wait for it. It also means I don't coast after a win. The fire just rekindles.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-8 flex flex-col gap-4 border border-zinc-200 hover:border-[#9A7B2E]/60 transition-colors duration-300 bg-white shadow-sm"
              >
                <h3 className="text-[#1a1a1a] text-xl font-bold">{card.title}</h3>
                <p className="text-[#555] leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium" style={{ color: "#999" }}>CliftonStrengths Top 5:</span>
            {["Achiever", "Learner", "Relator", "Arranger", "Futuristic"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-zinc-200 text-[#555]">{s}</span>
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
