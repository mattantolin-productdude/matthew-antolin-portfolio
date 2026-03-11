export type Bullet = { bold: string; body: string };
export type Metric = { value: string; label: string };

export type PhaseFlowVisual = {
  type: "phase-flow";
  sectionTitle: string;
  phases: {
    number: string;
    period: string;
    name: string;
    items: string[];
    badge: string;
  }[];
  metrics: Metric[];
};

export type OrgTimelineVisual = {
  type: "org-timeline";
  sectionTitle: string;
  years: string[];
  rows: { label: string; cells: string[] }[];
  metrics: Metric[];
};

export type DecisionForkVisual = {
  type: "decision-fork";
  sectionTitle: string;
  question: string;
  subtitle: string;
  pathA: { label: string; items: string[]; signal: string };
  pathB: { label: string; items: string[]; signal: string };
  result: string;
};

export type PromptEvolutionVisual = {
  type: "prompt-evolution";
  sectionTitle: string;
  subtitle: string;
  versions: {
    version: string;
    label: string;
    prompt: string;
    why: string;
    win: boolean;
  }[];
  lesson: string;
};

export type IntakeTemplateVisual = {
  type: "intake-template";
  sectionTitle: string;
  company: string;
  stamp: string;
  description: string;
  sections: { number: string; label: string; fields: string[] }[];
  flow: { tier: string; label: string; action: string }[];
};

export type Visual =
  | PhaseFlowVisual
  | OrgTimelineVisual
  | DecisionForkVisual
  | PromptEvolutionVisual
  | IntakeTemplateVisual;

export type CaseStudy = {
  slug: string;
  number: string;
  company: string;
  period: string;
  title: string;
  role: string;
  lede: string;
  ledeBold: string;
  bullets: Bullet[];
  visual: Visual;
  outcome: string;
  aiReflection: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pomelo-vaccine-platform",
    number: "01",
    company: "Pomelo Health",
    period: "2020–2021",
    title: "COVID-19 Vaccine Booking Platform: Canada & US Launch",
    role: "Director of Product",
    lede: "When the pandemic hit, Pomelo's scheduling platform was built for single-appointment, single-provider clinic workflows. Vaccine deployment broke every assumption: multi-dose scheduling with precise inter-appointment intervals, mass patient volume, provincial and state reporting obligations, social distancing constraints, and government data requirements, all on a timeline no normal product cycle could accommodate.",
    ledeBold:
      "The question wasn't what to build. It was what to build first, and what to defer without creating a compliance or patient safety gap.",
    bullets: [
      {
        bold: "Sequenced the build around three non-negotiable constraints.",
        body: "Patient safety (no crowding, controlled flow), dose adherence (multi-booking with automated second-dose reminders), and post-vaccination compliance (digital proof, adverse reaction capture for VAERS) were locked. Educational content, advanced clinic analytics, and portal enhancements were explicitly deferred and documented, to protect the launch window. Every deferral was a decision, not an omission.",
      },
      {
        bold: "Designed the virtual waiting room as a patient flow problem, not a UX feature.",
        body: "The real risk was physical crowding at clinic sites. Built predictive queue management with geolocation-based SMS updates so patients only entered when their slot was genuinely ready. Controlled throughput without requiring clinic staff to manage it manually.",
      },
      {
        bold: "Built privacy and consent into the architecture before launch.",
        body: "Operating across Canadian provinces and US states with PHI flowing through EMR integrations meant consent, data residency, and access controls had to be structural. Worked through a full Privacy Impact Assessment with EMR partners pre-launch, locking data flow boundaries, consent mechanisms, and audit logging as product requirements, not afterthoughts.",
      },
      {
        bold: "Rebuilt the scheduling engine for multi-dose complexity.",
        body: "21- and 28-day second-dose windows with vaccine-specific eligibility rules, family booking, and inventory tracking, while keeping the patient-facing flow simple enough to work on any device without a download or account.",
      },
      {
        bold: "Secured enterprise and government adoption through delivery credibility.",
        body: "Walmart Canada (337 locations), Newfoundland & Labrador provincial contract, and US county health deployments were won on the back of a platform that demonstrably shipped on time and held up under scale.",
      },
    ],
    visual: {
      type: "phase-flow",
      sectionTitle: "PATIENT JOURNEY: END-TO-END SYSTEM DESIGN",
      phases: [
        {
          number: "PHASE 1",
          period: "PRE-VISIT",
          name: "Book & Prepare",
          items: [
            "Eligibility verification (dose 1 vs 2)",
            "Multi-appointment booking",
            "Family & caretaker booking",
            "Automated SMS/email reminders",
            "Vaccine inventory allocation",
          ],
          badge: "Locked in v1",
        },
        {
          number: "PHASE 2",
          period: "DAY OF",
          name: "Queue & Enter",
          items: [
            "No-download virtual check-in",
            "Geolocation-based queue position",
            "Real-time SMS wait updates",
            "Just-in-time entry notification",
            "Controlled patient flow",
          ],
          badge: "Locked in v1",
        },
        {
          number: "PHASE 3",
          period: "POST-VISIT",
          name: "Follow Through",
          items: [
            "Digital proof of immunization",
            "QR code confirmation",
            "Adverse reaction capture (VAERS)",
            "Government reporting outputs",
            "Second-dose reminder trigger",
          ],
          badge: "Locked in v1",
        },
      ],
      metrics: [
        { value: "6M+", label: "Patients Served" },
        { value: "337", label: "Walmart Locations" },
        { value: "2", label: "Countries" },
        { value: "9", label: "EMR Integrations" },
      ],
    },
    outcome:
      "Launched across Canada and the US during peak pandemic deployment. Platform supported 6M+ patients and 2,200+ healthcare facilities. Delivered digital proof of immunization, adverse reaction reporting, and government-reporting outputs across multiple regulatory jurisdictions, on a timeline that required deliberate scope sequencing at every sprint.",
    aiReflection:
      "The hardest coordination problem was cross-jurisdictional compliance mapping — manually tracking state-by-state and provincial rule variance. Today I'd use an AI-assisted compliance discovery layer to surface rule conflicts early and automatically flag scope implications, compressing what took weeks of manual research into days. On the patient side, conversational triage for eligibility verification would replace the form-heavy intake flow — reducing drop-off and clinic staff burden simultaneously.",
    tags: [
      "Healthcare",
      "Platform Scaling",
      "Enterprise",
      "Government",
      "Privacy by Design",
      "Scope Sequencing",
    ],
  },
  {
    slug: "pomelo-product-org",
    number: "02",
    company: "Pomelo Health",
    period: "2015–2021",
    title:
      "Building the Product Organization: First Hire to Full Org, Series A Through Acquisition",
    role: "Director of Product · First Product Hire",
    lede: "I joined Pomelo in 2015 as the first dedicated product hire when the company was pre-Series A, with a founder-led product process, a single legacy platform, and no PM discipline to speak of. Over six years, the product organization grew to a multi-team structure across three product streams, 9 EMR integrations, and deployments across Canadian provinces and US states.",
    ledeBold:
      "The org build wasn't separate from the product build. They were the same problem.",
    bullets: [
      {
        bold: "Installed product management as a practice, not a title.",
        body: "When I arrived, product decisions were made in sales calls and engineering backlogs. First priority: establish the loop — defined problems before solutions, outcomes over outputs, and a repeatable discovery-to-delivery cycle. Modeled in every planning conversation until it became the team's default operating mode.",
      },
      {
        bold: "Structured the team around product streams, not project queues.",
        body: "As the platform expanded (MagicSeat, Pomelo Platform patient engagement, vaccine/immunization, US market), organized ownership around streams with clear mandates, defined problem spaces, stakeholder sets, and success criteria.",
      },
      {
        bold: "Made the Series B growth case legible through architecture decisions.",
        body: "The Ellkay partnership (75% of the US market through 750+ EHR/PM integrations) only became a business lever because the platform had been built API-first with clean integration boundaries. The product choices that enabled the $20M Series B were deliberate, not accidental.",
      },
      {
        bold: "Ran the org through two simultaneous crises without losing the roadmap.",
        body: "The pandemic arrived while we were mid-expansion into the US market. Triaged in real time: vaccine platform got dedicated focus; US expansion scoped to contractual minimums; MagicSeat optimization deprioritized. Every deferral documented, nothing lost, just sequenced.",
      },
      {
        bold: "Built a team and culture that transferred cleanly through acquisition.",
        body: "When TELUS Health acquired Pomelo, the product org was a coherent unit with defined practices, stream ownership, and a delivery track record that made the integration manageable.",
      },
    ],
    visual: {
      type: "org-timeline",
      sectionTitle: "SIX-YEAR ORG & PRODUCT EVOLUTION: 2015 TO ACQUISITION",
      years: ["2015", "2016–17", "2018", "2019", "2020", "2021"],
      rows: [
        {
          label: "ORG",
          cells: [
            "First PM hire",
            "Discovery–delivery loop installed",
            "Design + QE team added",
            "3 stream owners",
            "Pandemic triage",
            "TELUS Acq.",
          ],
        },
        {
          label: "PRODUCT",
          cells: [
            "MagicSeat inherited",
            "Pomelo Platform: patient engagement",
            "US expansion",
            "Vaccine platform",
            "3 streams in parallel",
            "",
          ],
        },
        {
          label: "BUSINESS",
          cells: [
            "Series A $3.5M",
            "Walmart Canada 337 loc.",
            "Ellkay partnership",
            "Gov contracts QC + NL",
            "Series B $20M",
            "Acquisition",
          ],
        },
      ],
      metrics: [
        { value: "6", label: "Years" },
        { value: "9", label: "EMR Integrations" },
        { value: "6M", label: "Patients at Exit" },
        { value: "$20M", label: "Series B Raised" },
      ],
    },
    outcome:
      "Series A ($3.5M) to Series B ($20M) to acquisition by TELUS Health. Platform reached 6M patients, 16M communications exchanged, and 2,200+ healthcare facilities. The org and product architecture I built were central to the exit thesis.",
    aiReflection:
      "The bottleneck in scaling a product org is synthesis speed — turning customer feedback, usage data, and stakeholder input into clear prioritization signals. Today I'd instrument that loop with AI from day one: automated analysis of support tickets and usage patterns feeding into sprint planning context. For onboarding new PMs, I'd build an AI-powered knowledge base capturing product reasoning and decision history — so new team members inherit the \"why\" behind architecture choices, not just the \"what.\"",
    tags: [
      "Org Building",
      "Product Leadership",
      "Series A–B",
      "Acquisition",
      "Platform Strategy",
    ],
  },
  {
    slug: "swoop-piper-ai-agent",
    number: "04",
    company: "Swoop",
    period: "2024",
    title: "Conversational Analytics Agent for Pharma Brand Teams",
    role: "Director, Product Management",
    lede: "Pharma brand teams were sitting on rich agent conversation data and couldn't use it. Surfacing insights required pulling raw logs, running analyst queries, and assembling monthly PPTX decks by hand, slow, expensive, and always a reporting cycle behind the decisions that needed to be made. The core tension: the people who most needed performance visibility were the least equipped to query raw data.",
    ledeBold:
      "I bet on conversation-first over dashboard-first, and that bet was the product.",
    bullets: [
      {
        bold: "Chose conversation over dashboard, and iterated to find the right prompts.",
        body: 'Brand managers didn\'t want to query data. They wanted to ask follow-up questions. The version that worked led with outcomes ("Is my agent covering the questions patients actually have?") rather than metrics.',
      },
      {
        bold: "Automated the monthly PPTX reporting cycle.",
        body: "Built an automated pipeline that runs monthly by brand and agent pair. Eliminated the analyst reporting cycle for standard monthly reviews, shifting analyst time from assembly to interpretation and action.",
      },
      {
        bold: "Scoped data access strictly per-brand, per-agent.",
        body: "Manufacturer → brand → agent type hierarchy enforced in navigation and access. Prevented cross-brand data governance issues that would have killed enterprise adoption before it started.",
      },
      {
        bold: "Built a model evaluation framework to make AI version decisions repeatable.",
        body: "A multi-step comparator covering prompt collection, topic clustering, gap analysis, and impact scoring, giving the team a documented, repeatable process instead of vibes-based comparisons.",
      },
    ],
    visual: {
      type: "prompt-evolution",
      sectionTitle: "UX ITERATION: FINDING THE PROMPT THAT ACTUALLY WORKS",
      subtitle: "STARTER PROMPT EVOLUTION: THE UX BET THAT DROVE ADOPTION",
      versions: [
        {
          version: "V1",
          label: "ABSTRACT",
          prompt: '"Show me agent performance analytics"',
          why: "Too vague, no action",
          win: false,
        },
        {
          version: "V2",
          label: "METRIC-LED",
          prompt: '"Show me coverage rate for last month"',
          why: "Someone else's question",
          win: false,
        },
        {
          version: "V3",
          label: "SPECIFIC",
          prompt: '"What % of HCP inquiries were unresolved in August?"',
          why: "Too narrow, limits exploration",
          win: false,
        },
        {
          version: "V4",
          label: "OUTCOME-LED",
          prompt: '"Is my agent covering the questions patients actually have?"',
          why: "Drives adoption",
          win: true,
        },
      ],
      lesson:
        "Prompts that lead with the brand manager's outcome, not a metric, drove adoption. The UX insight was the product insight.",
    },
    outcome:
      "Brand teams moved from analyst-mediated monthly reporting to on-demand self-service analytics. Automated pipeline made standard monthly reviews zero-analyst-effort. HVA CTA work opened a direct line from analytics insights to client campaign optimization decisions.",
    aiReflection:
      "The model evaluation framework I built was manual by necessity. Today I'd instrument a continuous evaluation pipeline that runs model comparisons on a representative prompt set automatically on every model update, surfacing regressions before they reach clients. The conversation starter UX iteration loop — which took multiple rounds with real users — could be accelerated with synthetic user testing against representative brand manager personas, compressing weeks of qualitative research into days.",
    tags: ["AI/ML", "Pharma", "Analytics", "Conversational AI", "B2B SaaS"],
  },
  {
    slug: "swoop-deployment-system",
    number: "05",
    company: "ConversationHealth",
    period: "2021–2023",
    title:
      "Regulated AI at Scale: GTM Positioning, Trust Architecture & Deployment Standards",
    role: "Senior Director, Product",
    lede: "ConversationHealth deployed conversational AI on pharma brand websites, answering patient and HCP questions about dosing, insurance coverage, side effects, and access programs. Every deployment was effectively a custom product: different drug, different brand team, different regulatory stakeholder set.",
    ledeBold:
      "The GTM problem and the product problem were the same problem: without a trust architecture that pharma clients could point to, we couldn't sell repeatability. And without repeatability, we couldn't scale.",
    bullets: [
      {
        bold: "Defined what the product would and wouldn't do, and made that a selling point.",
        body: "In regulated AI, guardrails aren't a limitation, they're the product. Codified the compliance boundary: what topics the agent could address, what triggered a fallback, what required MLR review, and what was off-limits. This was the trust infrastructure that made enterprise deals closeable.",
      },
      {
        bold: "Built the deployment intake process from failure patterns backward.",
        body: "Ran a retrospective across recent deployments and found three recurring failure modes: MLR surprises mid-sprint, mid-cycle change requests, and undefined launch criteria. Designed the intake template so every failure mode had a field.",
      },
      {
        bold: "Standardized the release note as the single communication artifact.",
        body: "Defined a standard release note format with a compliance dimension, review-and-approval sequence, and client notification protocol. Reduced the review cycle from ~4 weeks to under 1 week.",
      },
      {
        bold: "Formalized the cross-functional release discipline.",
        body: "Release notes drafted → internal review → CS notified → release proceeds. Removed the calendar negotiation that had previously preceded every non-trivial release.",
      },
    ],
    visual: {
      type: "intake-template",
      sectionTitle: "DEPLOYMENT INTAKE TEMPLATE: BUILT BACKWARDS FROM FAILURE",
      company: "CONVERSATIONHEALTH · PRE-ENGINEERING GATE",
      stamp: "REQUIRED BEFORE ENG CONFIG",
      description:
        "Every field in this template exists because its absence caused a mid-sprint failure. No deployment proceeds to engineering configuration until this document is complete.",
      sections: [
        {
          number: "01",
          label: "BRAND IDENTITY",
          fields: ["Manufacturer", "Brand Name", "Agent Type (DTC / HCP)"],
        },
        {
          number: "02",
          label: "APPROVED SCOPE",
          fields: ["Approved Topics", "Fallback Responses", "Restricted Topics"],
        },
        {
          number: "03",
          label: "REGULATORY",
          fields: [
            "Named MLR Reviewer",
            "MLR Constraints Documented",
            "Review Window Agreed",
            "ISI / PI Version",
          ],
        },
        {
          number: "04",
          label: "STAKEHOLDERS",
          fields: ["Brand Contact", "Regulatory Reviewer", "CS Owner"],
        },
      ],
      flow: [
        { tier: "T1", label: "Minor Update", action: "PM Sign-off" },
        { tier: "T2", label: "Config Change", action: "PM + CS Review" },
        { tier: "T3", label: "MLR Content", action: "Full MLR Cycle" },
        { tier: "", label: "Release", action: "Client Notified per SLA" },
      ],
    },
    outcome:
      "End-to-end deployment time dropped from ~90 days to 3 weeks, without rebuilding the product. The compliance boundary, intake process, and release discipline turned bespoke delivery into a repeatable motion that GTM could sell and ops could execute. MLR review cycle dropped from ~4 weeks to under 1 week. The trust architecture established here became the foundation that supported the acquisition and integration.",
    aiReflection:
      "The compliance boundary work — mapping approved topics, fallback triggers, and MLR implications per drug per brand — was entirely manual. Today I'd build an AI-assisted compliance scoping tool that takes drug labeling documents and brand brief inputs and auto-generates a draft approved topic list, flagging ambiguous areas for human review. This compresses the pre-launch intake process from days to hours and surfaces regulatory edge cases earlier — before they become mid-sprint surprises. The trust architecture doesn't change. The speed at which you instantiate it per deployment does.",
    tags: [
      "Regulated AI",
      "Pharma",
      "GTM",
      "Compliance",
      "Release Management",
      "Enterprise",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((s) => s.slug);
}
