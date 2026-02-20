import Link from "next/link";
import Image from "next/image";
import CaseStudySection from "@/app/components/CaseStudySection";

const caseStudies = [
  {
    slug: "swoop-piper-ai-agent",
    year: "2024",
    logoSrc: "/images/logos/swoop.svg",
    logoAlt: "Swoop",
    title: "Conversational Analytics for Pharma Brand Teams",
    description:
      "Built an analytics layer on first-party conversations to surface demand signals, content gaps, and adoption insights for regulated brand teams.",
    imageSrc: "/images/case-studies/swoop-analytics.svg",
    imageAlt: "Swoop Analytics — conversational analytics interface",
    invertLayout: false,
    background: "white" as const,
  },
  {
    slug: "swoop-deployment-system",
    year: "2023",
    logoSrc: "/images/logos/conversationhealth.svg",
    logoAlt: "conversationHEALTH",
    title: "Enterprise Deployment System — Regulated AI at Scale",
    description:
      "Productized enterprise deployments with guardrails, integration patterns, rollout gates, and measurable adoption—reducing variability and improving time-to-value.",
    imageSrc: "/images/case-studies/swoop-deployment.svg",
    imageAlt: "Enterprise deployment system architecture diagram",
    invertLayout: true,
    background: "tertiary" as const,
  },
  {
    slug: "pomelo-oab-us-launch",
    year: "2022",
    logoSrc: "/images/logos/pomelo.svg",
    logoAlt: "Pomelo Health",
    title: "Patient Scheduling & Notifications — US Market Launch",
    description:
      "Led 0→1 US expansion of online appointment booking, adapting workflows for US EHR ecosystems and insurance eligibility while enabling a repeatable rollout motion.",
    imageSrc: "/images/case-studies/pomelo-us-launch.svg",
    imageAlt: "Pomelo Health patient scheduling platform",
    invertLayout: false,
    background: "white" as const,
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
        <div className="relative mx-auto max-w-2xl px-6 pt-32 pb-32 sm:pt-40 sm:pb-40">
          <p className="mb-7 text-xs font-semibold uppercase tracking-widest text-white/60">
            Matthew Antolin &middot; Product Director
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
            Productizing enterprise deployments in regulated healthcare &amp; pharma.
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            ICP discipline &nbsp;&bull;&nbsp; guardrails &nbsp;&bull;&nbsp; integrations &nbsp;&bull;&nbsp; measurable adoption
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-white/90"
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

      {/* ── Work — section label ──────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Work
          </p>
        </div>
      </section>

      {/* ── Work — case study spotlights ─────────────────────── */}
      {caseStudies.map((cs) => (
        <CaseStudySection key={cs.slug} {...cs} compact />
      ))}

      {/* ── View all link ─────────────────────────────────────── */}
      <section className="bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            View all case studies →
          </Link>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 pb-24 border-t border-zinc-100 pt-16">
        <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
              About
            </p>
            <p className="text-lg leading-relaxed text-secondary">
              I&rsquo;m a Product Director based in Montreal specializing in regulated
              enterprise SaaS — healthcare, pharma, and life sciences. I turn messy
              0&rarr;1 mandates and scale-up environments into shipped product systems:
              tight ICP, guardrails before sprint one, integration patterns that hold,
              and adoption metrics that prove value.{" "}
              <Link href="/about" className="text-primary underline underline-offset-2 hover:text-indigo-600 transition-colors">
                More about me →
              </Link>
            </p>
          </div>
          {/* Photo */}
          <div className="shrink-0 sm:w-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/matt.png"
              alt="Matthew Antolin"
              className="w-full rounded-xl grayscale object-cover object-top aspect-square"
            />
          </div>
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 pb-28 border-t border-zinc-100 pt-16">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
          Contact
        </p>
        <p className="mb-8 text-lg leading-relaxed text-secondary">
          Open to VP Product and Director Product conversations in regulated
          enterprise SaaS.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white transition-colors hover:opacity-80"
        >
          Get in touch
        </Link>
      </section>

    </main>
  );
}
