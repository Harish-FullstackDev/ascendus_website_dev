"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SolutionsHero from "@/components/Solution/SolutionsHero";
import SolutionsHeroText from "@/components/Solution/SolutionsHeroText";
import ComprehensiveSAPSolutions from "@/components/Solution/ComprehensiveSAPSolutions";
import MoreThanImplementation from "@/components/Solution/MoreThanImplementation";
import ReadyToUnlockMoreWithSAP from "@/components/Solution/ReadyToUnlockMoreWithSAP";

// The hero is a plain full-bleed band, not the sticky curtain the what-we-do
// pages use — Figma shows the content starting straight under an 800px hero with
// nothing pinned behind it. The negative top margin is the shared offset that
// lets the transparent navbar sit over the hero image.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[520px] sm:h-[620px] lg:h-[800px]">
                <SolutionsHero />
                <SolutionsHeroText />
            </div>

            <ComprehensiveSAPSolutions />
            <MoreThanImplementation />
            <ReadyToUnlockMoreWithSAP />

            <Footer />
        </div>
    );
};

export default page;
