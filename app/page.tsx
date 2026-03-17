import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";


const impactCards = [
  {
    slug: "swoop-deployment-system",
    tag: "Regulated AI · Pharma",
    headline: "Bespoke to repeatable. Deployment time cut from 90 days to 3 weeks.",
    body: "conversationHEALTH's NLP/NLU platform required a full implementation team for every pharma brand deployment. I led the platform generation shift to self-serve — therapeutic area templating, compliance guardrails, and deployment intake discipline — turning 90-day engagements into 3-week launches.",
    hasStudy: true,
  },
  {
    slug: "pomelo-product-org",
    tag: "0→1 Org Build · Series A → Acquisition",
    headline: "First product hire. $3.5M to $20M to acquired.",
    body: "Joined as the first product hire — one legacy platform, a handful of people, no PM practice. Over six years, helped grow the team from one to ten, through two funding rounds and an eventual acquisition by TELUS Health. Clinics still use the products today.",
    hasStudy: true,
  },
  {
    slug: "pomelo-vaccine-platform",
    tag: "0→1 · Canada & US Launch",
    headline: "Walmart Canada. Government contracts. US county health. Shipped under pandemic conditions.",
    body: "The scheduling platform wasn't built for mass vaccine deployment. I sequenced the build around three non-negotiable constraints: patient safety, dose adherence, and compliance reporting, and deferred everything else. Walmart Canada (337 locations), government contracts in Newfoundland & Labrador and Quebec, and US county health deployments followed.",
    hasStudy: true,
  },
];



export default function Home() {
  return (
    <main className="min-h-screen font-sans text-primary">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-2xl px-6 pt-24 pb-24 sm:pt-32 sm:pb-32">
          <h1
            className="mb-6 text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
          >
            Outcomes over outputs.<br />
            Designed for users.<br />
            Built for the business.
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            UX roots, product leadership discipline. I work at the intersection of user obsession and business delivery — building ICP clarity, compliance guardrails, and adoption architecture in regulated healthcare and pharma.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex h-11 items-center justify-center rounded-md bg-amber px-6 text-sm font-medium text-white transition-colors hover:opacity-80"
            >
              View work
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Impact & Work ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-primary font-display">
            Impact &amp; Work
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactCards.map((card) => (
              <div
                key={card.slug}
                className="flex flex-col rounded-xl border border-zinc-200 p-6 shadow-sm"
              >
                {/* Headline */}
                <h3 className="mb-2 font-bold text-primary">{card.headline}</h3>
                {/* Body */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">
                  {card.body}
                </p>
                {/* CTA */}
                {card.hasStudy ? (
                  <Link
                    href={`/case-studies/${card.slug}`}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-amber px-4 text-sm font-medium text-white transition-colors hover:opacity-80"
                  >
                    Read case study →
                  </Link>
                ) : (
                  <span className="text-sm italic text-secondary">Coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Me ──────────────────────────────────────────── */}
      <section className="bg-tertiary py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-left text-4xl font-bold tracking-tight text-primary font-display">
            About Me
          </h2>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <p className="mb-4 text-base leading-relaxed text-secondary">
                I operate at the intersection of strategy and execution, not one or the other. I think clearly in complexity, lead people as much as product, and get things done when the environment is messy.
              </p>
              <p className="mb-6 text-base leading-relaxed text-secondary">
                Outside of work: softball coach, golfer, devoted owner of Biggie Smalls the French Bulldog, and an 18-year JDRF fundraiser living with Type 1 diabetes.
              </p>
              <Link
                href="/about"
                className="inline-flex h-11 items-center justify-center rounded-md bg-amber px-6 text-sm font-medium text-white transition-colors hover:opacity-80"
              >
                Learn more
              </Link>
            </div>
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-full p-[4px]" style={{ background: "#9A7B2E" }}>
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src="/Matt-Pic.png"
                    alt="Matthew Antolin"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kind Words ────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-primary font-display">
            Kind Words from Teammates &amp; Partners
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="mb-4 flex-1 text-sm italic leading-relaxed text-secondary">
                  &ldquo;{t.quote.length > 280 ? t.quote.slice(0, 280) + "\u2026" : t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-primary">{t.name}</p>
                  <p className="mt-0.5 text-xs text-secondary">
                    {t.title}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/matthew-antolin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-amber hover:underline"
                  >
                    View on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Let's Connect ─────────────────────────────────────── */}
      <section className="py-24 text-center" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
            Let&rsquo;s connect
          </h2>
          <p className="mb-8 text-base text-white/60">
            Let&rsquo;s connect about collaboration, hiring, or swapping ideas.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-amber px-8 text-sm font-medium text-white transition-colors hover:opacity-80"
          >
            Reach out
          </Link>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-8 text-center">
        <p className="text-xs text-secondary">
          &copy; 2026 Matthew Antolin. All rights reserved. Website created with Claude Code and Cursor.
        </p>
      </footer>

    </main>
  );
}
