"use client";

import IdeasThatInspire from "@/components/Services/IdeasThatInspire";
import insightImage from "@/assets/Services/Ideas_That_Inspire.webp";

// Figma (370:3707) gives the three tiles their own titles, copy and CTA labels
// but reuses one photograph — the same control-room export the Services page
// ships, so it is shared rather than duplicated. There are no per-topic
// insight pages yet, so every tile points at /blog like the Services tiles.
// The section and card are the shared ones (Figma 695:435), so Solutions,
// Services and About Us stay identical.
const INSIGHTS = [
    {
        ctaLabel: "Discover More",
        description: "Transform Your Business with Cloud Solutions",
        href: "/blog",
        image: insightImage,
        title: "Oracle Cloud",
    },
    {
        ctaLabel: "Explore Now",
        description: "Building a Smarter Enterprise with SAP S/4HANA",
        href: "/blog",
        image: insightImage,
        title: "SAP ARIBA",
    },
    {
        ctaLabel: "Learn More",
        description: "Empower Your Team with Integrated Business Applications",
        href: "/blog",
        image: insightImage,
        title: "Microsoft Dynamics 365",
    },
];

// Section 4 — white band between the dark "More Than Implementation" band and
// the dark CTA photo band, so it keeps the full 64px on both edges.
export default function SolutionInsights() {
    return <IdeasThatInspire insights={INSIGHTS} />;
}
