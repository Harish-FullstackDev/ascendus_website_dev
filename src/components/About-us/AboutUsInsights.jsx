"use client";

import IdeasThatInspire from "@/components/Services/IdeasThatInspire";
import insightImage from "@/assets/About-us/insight-cloud-solutions.jpg";

// Figma (695:482) puts the shared "Our Insights" section between the careers
// band and the closing CTA. As on Services, Figma repeats one placeholder tile
// three times. It is transcribed as drawn; swap these entries for real posts
// once they are chosen.
const INSIGHTS = Array.from({ length: 3 }, () => ({
    description: "Transform Your Business with Cloud Solutions",
    href: "/blog",
    image: insightImage,
    title: "Oracle Cloud",
}));

export default function AboutUsInsights() {
    return <IdeasThatInspire insights={INSIGHTS} ctaLabel="Discover More" />;
}
