import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudyBySlug, getAllSlugs } from "@/lib/case-study-data";
import type { Visual } from "@/lib/case-study-data";
import PhaseFlow from "@/app/components/case-study/PhaseFlow";
import OrgTimeline from "@/app/components/case-study/OrgTimeline";
import DecisionFork from "@/app/components/case-study/DecisionFork";
import PromptEvolution from "@/app/components/case-study/PromptEvolution";
import IntakeTemplate from "@/app/components/case-study/IntakeTemplate";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Not Found" };
  return { title: `${study.title} - Matthew Antolin` };
}

function VisualBlock({ visual }: { visual: Visual }) {
  switch (visual.type) {
    case "phase-flow":
      return <PhaseFlow visual={visual} />;
    case "org-timeline":
      return <OrgTimeline visual={visual} />;
    case "decision-fork":
      return <DecisionFork visual={visual} />;
    case "prompt-evolution":
      return <PromptEvolution visual={visual} />;
    case "intake-template":
      return <IntakeTemplate visual={visual} />;
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#f7f6f3" }}>

      {/* ── Dark header ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14">
          <Link
            href="/case-studies"
            className="mb-10 inline-block text-xs font-mono tracking-widest text-white/30 hover:text-white/60 transition-colors uppercase"
          >
            ← All work
          </Link>

          <h1
            className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
          >
            {study.title}
          </h1>

          <p className="text-sm text-white/40 font-mono">{study.role}</p>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-14">

        {/* Lede */}
        <div className="mb-12 pb-12 border-b border-zinc-200">
          <p className="text-lg leading-relaxed text-zinc-500 mb-3">{study.lede}</p>
          <p className="text-lg leading-relaxed font-semibold text-zinc-800">{study.ledeBold}</p>
        </div>

        {/* What I Did */}
        <div className="mb-14">
          <p className="mb-6 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            What I Did
          </p>
          <div className="space-y-7">
            {study.bullets.map((b) => (
              <div key={b.bold} className="flex gap-5">
                <span
                  className="mt-1 font-bold shrink-0 select-none"
                  style={{ color: "#9A7B2E" }}
                >
                  ·
                </span>
                <p className="text-base leading-relaxed text-zinc-500">
                  <strong className="text-zinc-800 font-semibold">{b.bold}</strong>{" "}
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual section */}
        <div className="mb-14">
          <VisualBlock visual={study.visual} />
        </div>

        {/* Outcome */}
        <div className="mb-10 pt-10 border-t border-zinc-200">
          <p className="mb-3 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            Outcome
          </p>
          <p className="text-base leading-relaxed text-zinc-600">{study.outcome}</p>
        </div>

        {/* AI Reflection */}
        <div className="mb-12 rounded-xl p-6 border border-zinc-200 bg-white">
          <p
            className="mb-3 text-xs font-mono tracking-widest uppercase"
            style={{ color: "#9A7B2E" }}
          >
            If I were doing this today with AI
          </p>
          <p className="text-base leading-relaxed text-zinc-500">{study.aiReflection}</p>
        </div>

        {/* Tags */}
        <div className="mb-14 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-zinc-200 pt-10">
          <Link
            href="/case-studies"
            className="text-sm font-mono text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            ← All work
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium text-white transition-colors hover:opacity-80"
            style={{ backgroundColor: "#9A7B2E" }}
          >
            Get in touch
          </Link>
        </div>
      </section>

    </main>
  );
}
