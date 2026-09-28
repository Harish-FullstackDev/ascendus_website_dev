"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";
import ctaBgCorridor from "@/assets/CommonComponents/PageCta/cta-bg-corridor.webp";
import CareersPageHero from "@/components/Careers/CareersPageHero";
import CareersPageHeroText from "@/components/Careers/CareersPageHeroText";
import CandidateLoginCard from "@/components/Careers/CandidateLoginCard";
import LifeAtAscendus from "@/components/Careers/LifeAtAscendus";
import OpenPositions from "@/components/Careers/OpenPositions";
import BuildSkills from "@/components/Careers/BuildSkills";
import DontSeeAMatchingRole from "@/components/Careers/DontSeeAMatchingRole";
import StayUpdated from "@/components/Careers/StayUpdated";
import CareersFaq from "@/components/Careers/CareersFaq";

// The hero is the shared sticky curtain, exactly one viewport tall: the image
// stays put while the page content slides up over it.
// Figma (602:2045) floats the candidate login card over the hero; that only
// fits from lg up, so below lg the same card renders in its own band under
// the hero.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero size="screen" background={<CareersPageHero />} overlay={<CareersPageHeroText />}>
                <div className="w-full bg-[#f1f3f5] px-6 py-10 sm:px-[64px] lg:hidden">
                    <CandidateLoginCard className="mx-auto max-w-[438px]" />
                </div>

                <LifeAtAscendus />
                <OpenPositions />
                <BuildSkills />
                <DontSeeAMatchingRole />
                <StayUpdated />
                <CareersFaq />
                <PageCta
                    title={["Let's Build a Better Tomorrow.", "Together."]}
                    description={["Explore opportunities, share your resume or connect", "with us to start your journey at Ascendus."]}
                    ctaLabel="Explore Opportunities"
                    href="#open-positions"
                    titleClassName="lg:w-[445.5px]"
                    descriptionClassName="lg:whitespace-nowrap"
                    backgroundImage={ctaBgCorridor}
                    backgroundPositionClassName="object-center"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
