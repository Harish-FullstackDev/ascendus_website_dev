"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StickyHero from "@/components/CommonComponents/StickyHero";
import CareersPageHero from "@/components/Careers/CareersPageHero";
import CareersPageHeroText from "@/components/Careers/CareersPageHeroText";
import GreatTransformations from "@/components/Careers/GreatTransformations";
import LifeAtAscendus from "@/components/Careers/LifeAtAscendus";
import BuildSkills from "@/components/Careers/BuildSkills";
import LifeAtAscendusHighlights from "@/components/Careers/LifeAtAscendusHighlights";
import CareersBenefits from "@/components/Careers/CareersBenefits";
import StayUpdated from "@/components/Careers/StayUpdated";
import CareersFaq from "@/components/Careers/CareersFaq";

// The hero is the shared sticky curtain, exactly one viewport tall: the image
// stays put while the page content slides up over it.
// Section order follows Figma 1619:10951: the login card, the benefits
// at-a-glance band and the closing CTA are gone, so the FAQ meets the footer.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero size="screen" background={<CareersPageHero />} overlay={<CareersPageHeroText />}>
                <GreatTransformations />
                <LifeAtAscendus />
                <BuildSkills />
                <LifeAtAscendusHighlights />
                <CareersBenefits />
                <StayUpdated />
                <CareersFaq />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
