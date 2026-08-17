// Local mock data for the Case Studies page.
// TODO: replace with a database-backed fetch (see src/app/api/blog/route.js for the Supabase pattern).

export const caseStudiesData = [
  {
    id: 1,
    slug: "global-manufacturer-s4hana-migration",
    title: "Global Manufacturing Leader Cuts Order-to-Cash Cycle by 40% with SAP S/4HANA Migration",
    type: "Case Study",
    category: "Manufacturing",
    summary:
      "A multinational industrial equipment manufacturer partnered with Ascendus to migrate from SAP ECC to S/4HANA, streamlining its order-to-cash process across 14 countries.",
    cover_image: "/ServicePage/software-delivery-team.jpg",
    publish_date: "2026-02-18",
    author: "Ascendus Enterprise Transformation Team",
    metaLine: "Manufacturing · 9-month engagement",
    tags: ["SAP S/4HANA", "ERP Migration", "Manufacturing", "Clean Core"],
    highlights: [
      { label: "Order-to-Cash Cycle", value: "-40%" },
      { label: "Countries Live", value: "14" },
      { label: "Downtime During Cutover", value: "0 hrs" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "The client was running a heavily customized SAP ECC 6.0 landscape that had accumulated over a decade of bespoke code across 14 country instances. Order-to-cash processing was inconsistent between regions, month-end close took up to nine business days, and the IT team was spending most of its time keeping legacy customizations alive rather than enabling new capabilities.",
      },
      {
        heading: "The Approach",
        content:
          "Ascendus ran a six-week Clean Core assessment to classify every custom object as retain, retire, or re-platform to the SAP BTP side-by-side extension model. We then executed a phased brownfield-to-greenfield hybrid migration, standardizing order-to-cash, procure-to-pay, and record-to-report processes on a single global template while preserving the handful of customizations that delivered genuine competitive advantage.",
      },
      {
        heading: "The Results",
        content:
          "Within two quarters of go-live, the order-to-cash cycle time dropped 40% as manual approval steps were replaced with embedded workflow and real-time credit checks. Month-end close fell from nine days to four. The reduction in custom code also cut the client's regression testing effort for future SAP updates by more than half.",
      },
      {
        heading: "Looking Ahead",
        content:
          "With a clean core in place, the client is now piloting SAP's embedded AI recommendations for demand planning and has asked Ascendus to scope a follow-on program to extend the template to two recently acquired subsidiaries.",
      },
    ],
  },
  {
    id: 2,
    slug: "retail-chain-unified-commerce-platform",
    title: "Retail Chain Unifies 200+ Stores on a Single SAP Commerce Platform",
    type: "Case Study",
    category: "Retail & Consumer Goods",
    summary:
      "A regional retail chain consolidated fragmented point-of-sale and e-commerce systems onto SAP Commerce Cloud, enabling a true omnichannel experience.",
    cover_image: "/SolutionPage/CUSTOMEREXPERIENCE2.png",
    publish_date: "2025-11-05",
    author: "Ascendus Customer Experience Team",
    metaLine: "Retail & Consumer Goods · 7-month engagement",
    tags: ["SAP Commerce Cloud", "Omnichannel", "Retail"],
    highlights: [
      { label: "Stores Unified", value: "200+" },
      { label: "Cart Abandonment", value: "-18%" },
      { label: "Time to Launch New Store", value: "-60%" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Following three acquisitions, the retailer was operating four separate point-of-sale systems and two disconnected e-commerce storefronts. Inventory visibility across channels was unreliable, and customers frequently found different prices and promotions online versus in-store.",
      },
      {
        heading: "The Solution",
        content:
          "Ascendus designed and implemented a single SAP Commerce Cloud instance integrated with SAP S/4HANA for real-time inventory and pricing, alongside a unified customer profile service so loyalty points and order history followed the shopper across every channel.",
      },
      {
        heading: "The Results",
        content:
          "Store-level inventory accuracy improved to 98.5%, buy-online-pickup-in-store adoption tripled in the first two quarters, and the marketing team gained the ability to launch consistent promotions across web, mobile, and in-store simultaneously.",
      },
    ],
  },
  {
    id: 3,
    slug: "pharma-distributor-clean-core-traceability",
    title: "Pharmaceutical Distributor Achieves Full Regulatory Traceability with Clean Core SAP Architecture",
    type: "Case Study",
    category: "Life Sciences",
    summary:
      "A national pharmaceutical distributor rebuilt its serialization and batch traceability processes on SAP S/4HANA to meet tightening regulatory requirements.",
    cover_image: "/ServicePage/HANA.png",
    publish_date: "2025-09-22",
    author: "Ascendus Data Intelligence Team",
    metaLine: "Life Sciences · 12-month engagement",
    tags: ["Clean Core", "Compliance", "Life Sciences", "SAP S/4HANA"],
    highlights: [
      { label: "Batch Trace Time", value: "Minutes, not days" },
      { label: "Audit Findings", value: "Zero critical" },
      { label: "SKUs Serialized", value: "45,000+" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "New track-and-trace regulations required the distributor to prove end-to-end chain of custody for every serialized unit within hours of a regulator's request. The existing landscape stored serialization data across three disconnected systems, making audits a multi-week manual exercise.",
      },
      {
        heading: "The Solution",
        content:
          "Ascendus consolidated serialization, batch management, and quality data into SAP S/4HANA using standard SAP Advanced Track and Trace functionality, keeping all customizations on the BTP extension layer to preserve upgradability.",
      },
      {
        heading: "The Results",
        content:
          "The distributor can now produce a complete chain-of-custody report for any batch in minutes. Its most recent regulatory audit closed with zero critical findings, and internal quality teams have reclaimed the equivalent of three full-time roles previously spent reconciling data across systems.",
      },
    ],
  },
  {
    id: 4,
    slug: "logistics-provider-invoice-automation",
    title: "Logistics Provider Automates Freight Invoicing with Intelligent Automation",
    type: "Case Study",
    category: "Logistics & Transportation",
    summary:
      "A freight and logistics operator deployed intelligent automation to eliminate manual invoice matching across thousands of monthly shipments.",
    cover_image: "/ServicePage/GrowthToday5.png",
    publish_date: "2025-08-14",
    author: "Ascendus Intelligent Automation Team",
    metaLine: "Logistics & Transportation · 5-month engagement",
    tags: ["Intelligent Automation", "Finance Operations", "Logistics"],
    highlights: [
      { label: "Invoices Auto-Matched", value: "92%" },
      { label: "Processing Time", value: "-75%" },
      { label: "Disputed Invoices", value: "-30%" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "The finance team manually matched roughly 40,000 freight invoices per month against carrier contracts and shipment records, a process prone to error and routinely causing payment delays that strained carrier relationships.",
      },
      {
        heading: "The Solution",
        content:
          "Ascendus implemented an intelligent automation pipeline combining OCR document extraction, rules-based contract matching, and machine-learning exception scoring, integrated directly with the client's SAP finance module.",
      },
      {
        heading: "The Results",
        content:
          "92% of invoices are now matched and approved without human intervention. Average processing time per invoice fell by 75%, and carrier-disputed invoices dropped 30% as pricing discrepancies are now caught automatically before payment.",
      },
    ],
  },
  {
    id: 5,
    slug: "financial-services-zero-downtime-migration",
    title: "Financial Services Firm Modernizes Legacy ERP with Zero-Downtime Migration",
    type: "Case Study",
    category: "Financial Services",
    summary:
      "A regional financial services firm migrated core finance and treasury operations to SAP S/4HANA Cloud without a single hour of unplanned downtime.",
    cover_image: "/SolutionPage/FINANCECONTROLLING.png",
    publish_date: "2025-06-02",
    author: "Ascendus Enterprise Transformation Team",
    metaLine: "Financial Services · 8-month engagement",
    tags: ["SAP S/4HANA Cloud", "Treasury", "Financial Services"],
    highlights: [
      { label: "Unplanned Downtime", value: "0 hrs" },
      { label: "Close Cycle", value: "-3 days" },
      { label: "Reconciliation Effort", value: "-55%" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "A 20-year-old on-premise ERP system could no longer support the firm's treasury reporting requirements, but any migration downtime risked breaching same-day settlement obligations with regulators and counterparties.",
      },
      {
        heading: "The Approach",
        content:
          "Ascendus designed a parallel-run cutover strategy, running the legacy and new SAP S/4HANA Cloud environments simultaneously for two full closing cycles before decommissioning the old system, with automated reconciliation checks validating every transaction between the two.",
      },
      {
        heading: "The Results",
        content:
          "The firm completed the migration with zero unplanned downtime and no missed settlement windows. Financial close time dropped by three days, and the treasury team now operates from a single, auditable source of truth.",
      },
    ],
  },
  {
    id: 6,
    slug: "energy-utility-field-service-cloud",
    title: "Energy Utility Improves Field Service Efficiency with Cloud-Based Asset Management",
    type: "Case Study",
    category: "Energy & Utilities",
    summary:
      "A regional energy utility moved asset maintenance planning to a cloud-based SAP solution, cutting technician travel time and unplanned outages.",
    cover_image: "/SolutionPage/erpSolution.png",
    publish_date: "2025-04-11",
    author: "Ascendus Cloud Infrastructure Team",
    metaLine: "Energy & Utilities · 6-month engagement",
    tags: ["Cloud Infrastructure", "Asset Management", "Energy & Utilities"],
    highlights: [
      { label: "Technician Travel Time", value: "-22%" },
      { label: "Unplanned Outages", value: "-15%" },
      { label: "Work Orders Digitized", value: "100%" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Field technicians relied on paper work orders and a maintenance planning system that could not account for real-time equipment condition data, leading to inefficient routing and reactive rather than predictive maintenance.",
      },
      {
        heading: "The Solution",
        content:
          "Ascendus deployed a cloud-based SAP Asset Performance Management solution integrated with IoT sensor feeds from substation equipment, alongside a mobile work order app for field crews.",
      },
      {
        heading: "The Results",
        content:
          "Predictive alerts now flag at-risk equipment before failure, contributing to a 15% reduction in unplanned outages. Optimized routing cut technician travel time by 22%, and every work order is now digitized end to end.",
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudiesData.find((item) => item.slug === slug) || null;
