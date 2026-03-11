import CaseStudySection from "@/app/components/CaseStudySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Matthew Antolin",
  description: "Case studies in regulated enterprise healthcare and pharma SaaS.",
};

const studies = [
  {
    slug: "swoop-piper-ai-agent",

    logoSrc: "/images/logos/swoop.svg",
    logoAlt: "Swoop",
    title: "Conversational Analytics Agent for Pharma Brand Teams",
    description:
      "Pharma brand teams were locked out of their own agent data, buried in monthly analyst-assembled reports. Built a conversational analytics product that lets brand managers query first-party conversation data on-demand, moving from lag reporting to real-time decision support.",
    imageSrc: "/images/case-studies/swoop-analytics.png",
    imageAlt: "Swoop Piper conversational analytics interface",
    invertLayout: false,
  },
  {
    slug: "swoop-deployment-system",

    logoSrc: "/images/logos/conversationhealth.svg",
    logoAlt: "conversationHEALTH",
    title: "Regulated AI at Scale: GTM Positioning, Trust Architecture & Deployment Standards",
    description:
      "No standard for 'launch-ready' existed across pharma brand deployments. Built the compliance boundary, intake process, and release discipline that cut deployment time from 90 days to 3 weeks, and became the trust infrastructure that supported the acquisition.",
    imageSrc: "/images/case-studies/swoop-deployment.png",
    imageAlt: "Regulated AI at scale: deployment system",
    invertLayout: false,
    divider: true,
  },
  {
    slug: "pomelo-vaccine-platform",

    logoSrc: "/images/logos/pomelo.svg",
    logoAlt: "Pomelo Health",
    title: "COVID-19 Vaccine Booking Platform: Canada & US Launch",
    description:
      "A clinic scheduling platform built for single appointments had to support mass multi-dose vaccine deployment. Sequenced the build around patient safety, dose adherence, and compliance reporting, delivering across 6M patients, 2,200+ facilities, and two countries under pandemic conditions.",
    imageSrc: "/images/case-studies/pomelo-vaccine.png",
    imageAlt: "Pomelo vaccine booking platform",
    invertLayout: false,
    divider: true,
  },
  {
    slug: "pomelo-product-org",

    logoSrc: "/images/logos/pomelo.svg",
    logoAlt: "Pomelo Health",
    title: "Building the Product Organization: First Hire to Full Org, Series A Through Acquisition",
    description:
      "Joined as the first product hire with no PM practice and a founder-led roadmap. Over six years built the team, operating cadence, and architecture decisions that took the company from Series A ($3.5M) to Series B ($20M) to acquisition by TELUS Health.",
    imageSrc: "/images/case-studies/pomelo-product-org.png",
    imageAlt: "Pomelo Health product organization",
    invertLayout: false,
    divider: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen font-sans">

      {/* Page header */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
            Work
          </p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl">
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
