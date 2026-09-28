"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PartnershipHero from "@/components/Partnership/PartnershipHero";
import PartnershipHeroText from "@/components/Partnership/PartnershipHeroText";
import ACollaborativeEcosystem from "@/components/Partnership/ACollaborativeEcosystem";
import LetsBuildWhatsNext from "@/components/Partnership/LetsBuildWhatsNext";
import MoreThanAPartnership from "@/components/Partnership/MoreThanAPartnership";
import TrustedByIndustryLeaders from "@/components/Partnership/TrustedByIndustryLeaders";
import PageCta from "@/components/CommonComponents/PageCta";

// The hero is a plain full-bleed band, not the sticky curtain the what-we-do
// pages use — Figma shows the content starting straight under an 800px hero with
// nothing pinned behind it. The negative top margin is the shared offset that
// lets the transparent navbar sit over the hero image.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[520px] sm:h-[620px] lg:h-[800px]">
                <PartnershipHero />
                <PartnershipHeroText />
            </div>

            <ACollaborativeEcosystem />
            <LetsBuildWhatsNext />
            <MoreThanAPartnership />
            <TrustedByIndustryLeaders />
            <PageCta
                title={["Let's Create Impact", "Together"]}
                description="Whether you're a technology provider, consulting firm, or industry leader, we'd love to explore how we can collaborate."
                ctaLabel="Talk to an Expert"
                titleClassName="lg:w-[300px]"
                descriptionClassName="lg:w-[474px]"
            />

            <Footer />
        </div>
    );
};

export default page;
