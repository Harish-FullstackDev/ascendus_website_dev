// Local mock data for the SAP Insights page — the same shape as
// industryReportsData.js, so it reuses InsightsListing and InsightDetail as-is.
// TODO: replace with a database-backed fetch (see src/app/api/blog/route.js for the Supabase pattern).

export const sapInsightsData = [
  {
    id: 1,
    slug: "clean-core-strategy-for-s4hana",
    title: "Clean Core Strategy for S/4HANA: A Practical Playbook",
    type: "SAP Insight",
    category: "SAP S/4HANA",
    summary:
      "How to keep custom code out of the core, extend safely on SAP BTP, and avoid the upgrade drag that side-by-side extensibility is meant to solve.",
    cover_image: "/Home/Hero-Section-BG.jpg",
    publish_date: "2026-02-10",
    author: "Ascendus SAP Practice",
    metaLine: "SAP S/4HANA · Clean Core",
    tags: ["SAP S/4HANA", "Clean Core", "SAP BTP"],
    fileInfo: "SAP practice note",
    downloadUrl: "#",
    sections: [
      {
        heading: "Why Clean Core, Why Now",
        content:
          "Custom code written directly against the core is the single biggest cost driver in every S/4HANA upgrade we've run. Clean core moves that customization to the side, on SAP BTP, where it survives an upgrade instead of blocking one.",
      },
      {
        heading: "Where Teams Get It Wrong",
        content:
          "Most clean core efforts stall because 'extension' becomes a label rather than a boundary: teams still call custom ABAP inside standard transactions, and the upgrade risk comes right back. The releases that stay clean draw the line at the API, not the object.",
      },
      {
        heading: "A Practical Starting Point",
        content:
          "Rather than auditing every custom object at once, start with whatever touches the objects SAP is actively changing release over release — finance and logistics extensibility scenarios move fastest, so they pay back the migration effort soonest.",
      },
    ],
  },
  {
    id: 2,
    slug: "rise-with-sap-migration-decision-guide",
    title: "RISE with SAP: A Migration Decision Guide for CIOs",
    type: "SAP Insight",
    category: "RISE with SAP",
    summary:
      "What RISE actually bundles, where it saves real infrastructure effort, and the contract questions enterprises consistently forget to ask.",
    cover_image: "/ServicePage/software-delivery-team.jpg",
    publish_date: "2025-12-18",
    author: "Ascendus SAP Practice",
    metaLine: "RISE with SAP",
    tags: ["RISE with SAP", "Cloud Migration", "SAP S/4HANA"],
    fileInfo: "SAP practice note",
    downloadUrl: "#",
    sections: [
      {
        heading: "What's Actually Bundled",
        content:
          "RISE packages S/4HANA Cloud, infrastructure, and a set of BTP and analytics entitlements into one contract. The infrastructure piece is where most of the operational savings genuinely land; the tooling entitlements are worth less to most enterprises than the sales conversation suggests.",
      },
      {
        heading: "Questions to Ask Before Signing",
        content:
          "Confirm who owns Basis and performance tuning day to day, how credit-based BTP consumption is metered against your actual usage pattern, and what the exit path looks like if you move workloads back on-premise later.",
      },
      {
        heading: "Where It Pays Off Fastest",
        content:
          "Enterprises already running a hyperscaler-hosted landscape see the fastest payback, since RISE mostly consolidates a bill they're already paying rather than introducing new infrastructure spend.",
      },
    ],
  },
  {
    id: 3,
    slug: "sap-btp-integration-patterns-that-scale",
    title: "SAP BTP Integration Patterns That Scale",
    type: "SAP Insight",
    category: "SAP BTP",
    summary:
      "Event-driven versus point-to-point integration on SAP BTP, and how to pick the right pattern before the landscape grows past what either one can support alone.",
    cover_image: "/SolutionPage/BusinessTechnology.png",
    publish_date: "2025-11-05",
    author: "Ascendus SAP Practice",
    metaLine: "SAP BTP · Integration",
    tags: ["SAP BTP", "Integration", "Enterprise Architecture"],
    fileInfo: "SAP practice note",
    downloadUrl: "#",
    sections: [
      {
        heading: "Two Patterns, One Landscape",
        content:
          "Point-to-point integration on SAP Integration Suite is fast to stand up and fine for a handful of connections. Past a dozen or so, the maintenance burden of each connection's own error handling starts to outweigh the speed advantage.",
      },
      {
        heading: "When to Move to Event-Driven",
        content:
          "An event mesh pays off once more than one downstream system needs to react to the same SAP event — order creation, goods receipt, employee onboarding — because publishing once beats maintaining a point-to-point flow per subscriber.",
      },
      {
        heading: "Migrating Without a Big Bang",
        content:
          "The integrations easiest to move first are the ones already failing under point-to-point sprawl, not the newest ones — that's where the event-driven pattern earns its complexity immediately rather than adding it for no near-term benefit.",
      },
    ],
  },
  {
    id: 4,
    slug: "sap-successfactors-adoption-beyond-go-live",
    title: "SAP SuccessFactors: Driving Adoption Beyond Go-Live",
    type: "SAP Insight",
    category: "SAP SuccessFactors",
    summary:
      "Why SuccessFactors rollouts that look successful at go-live often lose adoption within two quarters, and the change management steps that hold it.",
    cover_image: "/SolutionPage/CUSTOMEREXPERIENCE2.png",
    publish_date: "2025-09-22",
    author: "Ascendus SAP Practice",
    metaLine: "SAP SuccessFactors · Change Management",
    tags: ["SAP SuccessFactors", "HR Transformation", "Change Management"],
    fileInfo: "SAP practice note",
    downloadUrl: "#",
    sections: [
      {
        heading: "The Go-Live Cliff",
        content:
          "Adoption metrics look strong in the first month after go-live, driven by mandatory tasks like performance reviews. The real test comes once managers are free to fall back on email and spreadsheets for anything not enforced by the system.",
      },
      {
        heading: "What Sustains Adoption",
        content:
          "Rollouts that hold their adoption rate build manager-facing dashboards into the daily workflow rather than treating reporting as a quarterly HR exercise, so the system stays the easiest place to get an answer, not just the mandated place to enter data.",
      },
      {
        heading: "A 90-Day Check-In Model",
        content:
          "Scheduling a structured adoption review at 30, 60 and 90 days post go-live catches the drop-off early enough to intervene with targeted manager coaching, rather than discovering it a year later in a satisfaction survey.",
      },
    ],
  },
];

export const getSapInsightBySlug = (slug) =>
  sapInsightsData.find((item) => item.slug === slug) || null;
