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
import StickyHero from "@/components/CommonComponents/StickyHero";

// The hero is the shared sticky curtain: the image stays put while the page
// content slides up over it.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero background={<PartnershipHero />} overlay={<PartnershipHeroText />}>
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
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
