"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IndustriesHero from "@/components/Industries/IndustriesHero";
import IndustriesHeroText from "@/components/Industries/IndustriesHeroText";
import IndustriesHeroStats from "@/components/Industries/IndustriesHeroStats";
import ACollaborativeEcosystem from "@/components/Industries/ACollaborativeEcosystem";
import IndustryExpertiseThatDeliversOutcomes from "@/components/Industries/IndustryExpertiseThatDeliversOutcomes";
import IndustryChallengesRealSolution from "@/components/Industries/IndustryChallengesRealSolution";
import YourIndustryOurExpertise from "@/components/Industries/YourIndustryOurExpertise";

// The hero is a plain full-bleed band, not the sticky curtain the what-we-do
// pages use — Figma shows the content starting straight under an 800px hero with
// nothing pinned behind it. The negative top margin is the shared offset that
// lets the transparent navbar sit over the hero image.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[560px] sm:h-[660px] lg:h-[800px]">
                <IndustriesHero />
                <IndustriesHeroText />
                <IndustriesHeroStats />
            </div>

            <ACollaborativeEcosystem />
            <IndustryExpertiseThatDeliversOutcomes />
            <IndustryChallengesRealSolution />
            <YourIndustryOurExpertise />

            <Footer />
        </div>
    );
};

export default page;
