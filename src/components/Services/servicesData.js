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
        body: "Every implementation starts with how your business runs. We design, integrate and test the solution, then stay through hypercare.",
        ctaEyebrow: "We help you unlock",
        ctaHref: "/contact-us",
        ctaLabel: "Start Your SAP Project",
        eyebrow: "SAP Transformation",
        heading: ["SAP", "Implementation"],
        id: "sap-implementation",
        image: imgS4HanaTransformation,
        outcomes: [
            { icon: iconAccelerateBusinessValue, label: "Design Around Your Business" },
            { icon: iconSimplifyOperations, label: "Deliver On Plan" },
            { icon: iconEnableRealTimeInsights, label: "Go Live With Confidence" },
        ],
        tagline: "From business requirements to go-live, delivered with control.",
        title: "SAP Implementation",
    },
    {
        body: "Convert, migrate selectively or start fresh. The right path depends on your data, custom code and downtime tolerance. We plan, test and support.",
        ctaEyebrow: "Choose your migration path early",
        ctaHref: "/contact-us",
        ctaLabel: "Plan Your Migration with Us",
        eyebrow: "SAP Transformation",
        heading: ["SAP Conversion, Migration", "& Upgrades"],
        id: "conversion-migration-upgrades",
        image: imgS4HanaTransformation,
        outcomes: [
            { icon: iconAccelerateBusinessValue, label: "Choose The Right Path" },
            { icon: iconSimplifyOperations, label: "Protect Business Continuity" },
            { icon: iconEnableRealTimeInsights, label: "Clean Data And Code" },
        ],
        tagline: "Change your SAP foundation without disrupting the business.",
        title: "SAP Conversion, Migration & Upgrades",
    },
    {
        body: "Our functional and technical teams handle incidents, changes and performance under clear SLAs, so your people stay focused on the business.",
        ctaEyebrow: "Get support that answers to SLAs",
        ctaHref: "/contact-us",
        ctaLabel: "Talk to Our Support Team",
        eyebrow: "SAP Transformation",
        heading: ["SAP AMS", "& Support"],
        id: "sap-ams-support",
        image: imgS4HanaTransformation,
        outcomes: [
            { icon: iconAccelerateBusinessValue, label: "Resolve Issues Faster" },
            { icon: iconSimplifyOperations, label: "Stay Within SLAs" },
            { icon: iconEnableRealTimeInsights, label: "Improve Continuously" },
        ],
        tagline: "Stable SAP operations, backed by support you can hold to account.",
        title: "SAP AMS & Support",
    },
    {
        body: "Add functional, technical, development or integration specialists without long hiring cycles. Engage individuals or dedicated teams as long as needed.",
        ctaEyebrow: "Start with a supply chain review",
        ctaHref: "/contact-us",
        ctaLabel: "Discuss Your Resource Needs",
        eyebrow: "SAP Transformation",
        heading: ["SAP T&M", "Services"],
        id: "sap-tm-services",
        image: imgS4HanaTransformation,
        outcomes: [
            { icon: iconAccelerateBusinessValue, label: "Scale Teams On Demand" },
            { icon: iconSimplifyOperations, label: "Add Specialist Skills" },
            { icon: iconEnableRealTimeInsights, label: "Keep Costs Flexible" },
        ],
        tagline: "The right SAP talent, exactly when your project needs it.",
        title: "SAP T&M Services",
    },
];

function buildItems(eyebrow, entries) {
    return entries.map(([title, heading, tagline, body, outcomeLabels, ctaEyebrow, ctaLabel, id]) => ({
        body,
        ctaEyebrow,
        ctaHref: "/contact-us",
        ctaLabel,
        eyebrow,
        heading,
        id,
        image: imgS4HanaTransformation,
        outcomes: outcomeLabels.map((label, index) => ({
            icon: SAP_OUTCOMES[index].icon,
            label,
        })),
        tagline,
        title,
    }));
}

const BUSINESS_TRANSFORMATION_ITEMS = buildItems("Business Transformation", [
    [
        "Supply Chain Transformation",
        ["Supply Chain", "Transformation"],
        "A supply chain that plans ahead and responds faster.",
        "From demand planning to warehousing and logistics, we redesign how goods and information move. Expect lower inventory pressure and fewer surprises.",
        ["Plan With Confidence", "Optimize Inventory", "Automate Execution"],
        "Start with a supply chain review",
        "Talk to Our Supply Chain Experts",
        "supply-chain-transformation",
    ],
    [
        "Procurement Transformation",
        ["Procurement", "Transformation"],
        "Turn procurement into a source of savings and control.",
        "We streamline source-to-contract and procure-to-pay, bring suppliers into one process and show you where every purchase goes.",
        ["Strengthen Supplier Control", "Automate Purchasing", "Reduce Cost"],
        "Find your first procurement savings",
        "Talk to Our Procurement Experts",
        "procurement-transformation",
    ],
    [
        "Finance Transformation",
        ["Finance", "Transformation"],
        "Faster closes, clearer numbers, better decisions.",
        "We modernize record-to-report, order-to-cash and planning so finance spends less time reconciling and more time advising.",
        ["Close Books Faster", "Automate Finance Processes", "See Financials Clearly"],
        "Shorten your close cycle",
        "Talk to Our Finance Experts",
        "finance-transformation",
    ],
    [
        "Spend Management",
        ["Spend", "Management"],
        "Know exactly where your money goes, and control it.",
        "Bring spend data together, analyze it by category and supplier, and enforce compliance at purchase. Maverick spend drops and savings become measurable.",
        ["Gain Spend Visibility", "Enforce Compliance", "Cut Maverick Spend"],
        "See where your spend leaks",
        "Talk to Our Spend Experts",
        "spend-management",
    ],
    [
        "Human Resource Transformation",
        ["Human Resource", "Transformation"],
        "HR processes that work as well for employees as for the business.",
        "We modernize talent, workforce and payroll processes on SuccessFactors, with self-service and analytics that free HR for people.",
        ["Elevate Employee Experience", "Automate HR Operations", "Gain Workforce Insights"],
        "Rethink HR around your people",
        "Talk to Our HR Experts",
        "human-resource-transformation",
    ],
    [
        "CX Transformation",
        ["CX", "Transformation"],
        "Connected customer journeys from first click to repeat order.",
        "We align sales, service and commerce around one view of the customer, so every interaction is more relevant.",
        ["Unify Customer Data", "Personalize Engagement", "Improve Service Journeys"],
        "Build one view of your customer",
        "Talk to Our CX Experts",
        "cx-transformation",
    ],
    [
        "EHS Management",
        ["EHS", "Management"],
        "Safer workplaces and compliance you can prove.",
        "Bring incident, risk, safety and environmental management into one system. Teams report faster and meet regulations with less manual effort.",
        ["Reduce Workplace Risk", "Stay Compliant", "Report With Accuracy"],
        "Make safety and compliance easier",
        "Talk to Our EHS Experts",
        "ehs-management",
    ],
    [
        "Business Process Management",
        ["Business Process", "Management"],
        "Find what slows your processes down, then fix it.",
        "We map how work really gets done, remove friction and standardize what matters. Automation keeps the gains in place.",
        ["Map Real Processes", "Standardize And Automate", "Sustain Improvements"],
        "Let's find your process bottlenecks",
        "Talk to Our Process Experts",
        "business-process-management",
    ],
    [
        "Organizational Change Management",
        ["Organizational Change", "Management"],
        "Change management is embedded across every transformation we deliver.",
        "New systems pay off when people use them. We prepare stakeholders, train users and track adoption after go-live.",
        ["Assess Change Readiness", "Enable Your People", "Drive Lasting Adoption"],
        "Bring your people with the change",
        "Talk to Our Change Experts",
        "organizational-change-management",
    ],
]);

const DIGITAL_TECHNOLOGY_ITEMS = buildItems("Digital & Technology Transformation", [
    [
        "SAP BTP",
        ["SAP", "BTP"],
        "Extend SAP and connect everything around it.",
        "Build applications, integrate SAP and non-SAP systems and automate workflows on one platform, keeping your ERP core clean.",
        ["Extend Without Disruption", "Connect Every System", "Automate Workflows"],
        "Extend SAP without touching the core",
        "Talk to Our BTP Experts",
        "sap-btp",
    ],
    [
        "Cloud Engineering",
        ["Cloud", "Engineering"],
        "Cloud foundations designed for performance and security.",
        "From strategy to migration and operations, we build cloud environments that modernize your applications and stay secure as you scale.",
        ["Modernize Applications", "Secure Your Cloud", "Optimize Performance"],
        "Build cloud that scales safely",
        "Talk to Our Cloud Experts",
        "cloud-engineering",
    ],
    [
        "Product Engineering",
        ["Product", "Engineering"],
        "Enterprise products engineered to last.",
        "We take products from strategy and design through development, testing and deployment, then support them as they evolve.",
        ["Build Cloud-Native Products", "Ship With Quality", "Modernize Existing Products"],
        "Turn your product idea into reality",
        "Talk to Our Engineering Team",
        "product-engineering",
    ],
    [
        "Business Analytics",
        ["Business", "Analytics"],
        "Turn enterprise data into decisions people trust.",
        "We build the data strategy, reporting and dashboards that give leaders one version of the truth, backed by predictive insight.",
        ["Get One Version Of Truth", "Visualize Performance", "Predict What Is Next"],
        "Get data your leaders can trust",
        "Talk to Our Analytics Experts",
        "business-analytics",
    ],
    [
        "Experience Design",
        ["Experience", "Design"],
        "Digital experiences people actually enjoy using.",
        "We design journeys, products and interfaces for customers and employees, tested with real users and built on design systems.",
        ["Design Around Users", "Prototype And Test", "Scale With Design Systems"],
        "Design experiences users prefer",
        "Talk to Our Design Team",
        "experience-design",
    ],
]);

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
        available: true,
        description: "Reimagine processes and unlock new business value.",
        icon: iconBusinessTransformation,
        id: "business-transformation",
        items: BUSINESS_TRANSFORMATION_ITEMS,
        title: "Business Transformation",
    },
    {
        available: true,
        description: "Build a future-ready, intelligent and connected enterprise.",
        icon: iconDigitalTransformation,
        id: "digital-technology-transformation",
        // Figma breaks this title across two lines inside the card.
        titleLines: ["Digital & Technology", "Transformation"],
        items: DIGITAL_TECHNOLOGY_ITEMS,
        title: "Digital & Technology Transformation",
    },
];
