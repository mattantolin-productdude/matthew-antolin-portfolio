import CaseStudySection from "@/app/components/CaseStudySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Matthew Antolin",
  description: "Case studies in regulated enterprise healthcare and pharma SaaS.",
};

const studies = [
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

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen font-sans">

      {/* Page header */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
            Work
          </p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl">
            Selected case studies
          </h1>
        </div>
      </section>

      {/* Case study sections */}
      {studies.map((s) => (
        <CaseStudySection key={s.slug} {...s} />
      ))}

    </main>
  );
}
