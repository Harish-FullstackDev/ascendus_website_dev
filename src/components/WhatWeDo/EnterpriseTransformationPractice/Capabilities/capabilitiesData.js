import sapImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/sap-transformation.png";
import microsoftImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/microsoft-services.png";
import broaderTechImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/Capabilities/broader-technology.png";

// Per Figma nodes 2620:32, 2776:136, 2776:161. Each card is image + number +
// title + description + "View More" — no per-service link list. `description`
// is an array of paragraphs (cards 02/03 carry more than one); Figma sets them
// with no gap between lines, so they render as separate <p> with no spacing.
export const CAPABILITIES = [
    {
        number: "01",
        title: "SAP Transformation",
        description: [
            "We help businesses build, modernize, and manage their SAP landscape across S/4HANA, RISE with SAP, GROW with SAP, BTP, analytics, data, and ongoing support. Our focus is on creating a strong SAP foundation that simplifies operations, improves visibility, and supports business growth. Microsoft, cloud, and adjacent technologies extend that core where they bring additional value keeping your enterprise connected, flexible, and ready for what's next.",
        ],
        image: sapImg,
        href: "/what-we-do/enterprise-transformation/sap-transformation",
    },
    {
        number: "02",
        title: "Microsoft Services",
        description: [
            "Microsoft & Cloud Services",
            "Microsoft extends our SAP core deliberately. We use Microsoft technologies to connect and enhance SAP, helping businesses improve cloud operations, collaboration, automation, customer management, and analytics.",
            "Our capabilities include Microsoft Azure, Microsoft 365, Power Platform, Dynamics 365, and Power BI working together with SAP to create a connected and scalable technology environment.",
        ],
        image: microsoftImg,
        href: "/what-we-do/enterprise-transformation/microsoft-services",
    },
    {
        number: "03",
        title: "Broader Technology Services",
        description: [
            "SAP is our core deliberately. Microsoft and adjacent platforms extend that core. We help businesses modernize infrastructure, manage data, support change, and strengthen security and compliance.",
            "Our services include Cloud & Infrastructure Modernization, Data Migration & Governance, Change Management & Adoption, and Cybersecurity & Compliance helping create a secure, connected, and efficient technology environment.",
        ],
        image: broaderTechImg,
        href: "/what-we-do/enterprise-transformation/broader-technology-services",
    },
];
