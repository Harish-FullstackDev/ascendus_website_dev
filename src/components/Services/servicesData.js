// Single source of truth for the /services/ page's category tabs (section 2)
// and the service explorer beneath them (section 3).
//
// Figma (frames 370:3392 and 370:3972) only specifies one category in full —
// SAP Transformation — and, inside it, only the SAP S/4HANA Transformation
// detail panel. Everything the design does not supply is marked `available:
// false` or `contentPending: true` rather than invented, so the gaps stay
// visible here instead of being buried in markup.

import sapLogo from "@/assets/Services/icons/sap-logo.svg";
import iconBusinessTransformation from "@/assets/Services/icons/business-transformation-24.svg";
import iconDigitalTransformation from "@/assets/Services/icons/digital-technology-transformation-24.svg";

import iconAccelerateBusinessValue from "@/assets/Services/icons/accelerate-business-value-32.svg";
import iconSimplifyOperations from "@/assets/Services/icons/simplify-operations-32.svg";
import iconEnableRealTimeInsights from "@/assets/Services/icons/enable-real-time-insights-32.svg";

import imgS4HanaTransformation from "@/assets/Services/SAP_S4HANA_Transformation.webp";

// The three outcome glyphs under the detail copy are the same trio on every
// SAP Transformation service in Figma, so they live here once.
const SAP_OUTCOMES = [
    { icon: iconAccelerateBusinessValue, label: "Accelerate Business Value" },
    { icon: iconSimplifyOperations, label: "Simplify Operations" },
    { icon: iconEnableRealTimeInsights, label: "Enable Real-Time Insights" },
];

// TODO(content): Figma only draws the detail panel for SAP S/4HANA
// Transformation (370:4001). The other four rail items reuse its copy and
// photograph until the real eyebrow / heading / tagline / body / image for each
// arrives — replace the `contentPending` entries below, nothing else.
const SAP_TRANSFORMATION_ITEMS = [
    {
        body: "We help you unlock the full potential of SAP S/4HANA with a structured, value-driven approach enabling real time insights, simplified processes and a resilient, future-ready business.",
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our SAP Experts",
        eyebrow: "SAP Transformation",
        heading: ["SAP S/4HANA", "Transformation"],
        id: "sap-s4hana-transformation",
        image: imgS4HanaTransformation,
        outcomes: SAP_OUTCOMES,
        tagline: "Intelligent ERP for a simpler, faster and more agile enterprise.",
        title: "SAP S/4HANA Transformation",
    },
    {
        body: "We help you unlock the full potential of SAP S/4HANA with a structured, value-driven approach enabling real time insights, simplified processes and a resilient, future-ready business.",
        contentPending: true,
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our SAP Experts",
        eyebrow: "SAP Transformation",
        heading: ["SAP", "Implementation"],
        id: "sap-implementation",
        image: imgS4HanaTransformation,
        outcomes: SAP_OUTCOMES,
        tagline: "Intelligent ERP for a simpler, faster and more agile enterprise.",
        title: "SAP Implementation",
    },
    {
        body: "We help you unlock the full potential of SAP S/4HANA with a structured, value-driven approach enabling real time insights, simplified processes and a resilient, future-ready business.",
        contentPending: true,
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our SAP Experts",
        eyebrow: "SAP Transformation",
        heading: ["Conversion, Migration", "& Upgrades"],
        id: "conversion-migration-upgrades",
        image: imgS4HanaTransformation,
        outcomes: SAP_OUTCOMES,
        tagline: "Intelligent ERP for a simpler, faster and more agile enterprise.",
        title: "Conversion, Migration & Upgrades",
    },
    {
        body: "We help you unlock the full potential of SAP S/4HANA with a structured, value-driven approach enabling real time insights, simplified processes and a resilient, future-ready business.",
        contentPending: true,
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our SAP Experts",
        eyebrow: "SAP Transformation",
        heading: ["SAP AMS", "& Support"],
        id: "sap-ams-support",
        image: imgS4HanaTransformation,
        outcomes: SAP_OUTCOMES,
        tagline: "Intelligent ERP for a simpler, faster and more agile enterprise.",
        title: "SAP AMS & Support",
    },
    {
        body: "We help you unlock the full potential of SAP S/4HANA with a structured, value-driven approach enabling real time insights, simplified processes and a resilient, future-ready business.",
        contentPending: true,
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our SAP Experts",
        eyebrow: "SAP Transformation",
        heading: ["SAP T&M", "Services"],
        id: "sap-tm-services",
        image: imgS4HanaTransformation,
        outcomes: SAP_OUTCOMES,
        tagline: "Intelligent ERP for a simpler, faster and more agile enterprise.",
        title: "SAP T&M Services",
    },
];

// `available: false` renders the card in Figma's resting (light) state and
// leaves it non-interactive — there is no rail content to switch to yet.
export const SERVICE_CATEGORIES = [
    {
        available: true,
        description: "Modernize, simplify and get more value from your SAP landscape.",
        icon: sapLogo,
        // The SAP wordmark is a logo, not a line icon, so it sits in the tinted
        // tile unpadded rather than at the 24px the other two glyphs use.
        iconIsLogo: true,
        id: "sap-transformation",
        items: SAP_TRANSFORMATION_ITEMS,
        title: "SAP Transformation",
    },
    {
        available: false,
        description: "Reimagine processes and unlock new business value.",
        icon: iconBusinessTransformation,
        id: "business-transformation",
        items: [],
        title: "Business Transformation",
    },
    {
        available: false,
        description: "Build a future-ready, intelligent and connected enterprise.",
        icon: iconDigitalTransformation,
        id: "digital-technology-transformation",
        // Figma breaks this title across two lines inside the card.
        titleLines: ["Digital & Technology", "Transformation"],
        items: [],
        title: "Digital & Technology Transformation",
    },
];
