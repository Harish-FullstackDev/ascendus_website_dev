"use client";

import Image from "next/image";

import teamPhoto from "@/assets/SAP-S4HanaTransformation/team-collaboration.webp";

// Section 5 — a full-bleed photo band with no copy (Figma 828:1122, 1440x557).
// It keeps Figma's proportion from md up and goes taller on phones, where
// 1440:557 would shrink it to a strip. The next section's rounded top is
// pulled up over its bottom edge, so the photo shows in those two corners.
export default function TeamCollaborationBanner() {
    return (
        <section className="relative aspect-[3/2] w-full overflow-hidden border-t border-[#8695a7] bg-white md:aspect-[1440/557]">
            <Image src={teamPhoto} alt="" fill sizes="100vw" className="object-cover object-center" />
        </section>
    );
}
