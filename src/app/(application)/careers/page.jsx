"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersHero from "@/components/Careers/CareersHero";
import CareersHeroText from "@/components/Careers/CareersHeroText";
import JoinUsPanel from "@/components/Careers/JoinUsPanel";
import JoinUsSocialBand from "@/components/Careers/JoinUsSocialBand";
import JobListingSection from "@/components/Careers/JobListingSection";
import WhatYouWantToDo from "@/components/Careers/WhatYouWantToDo";
import TeamStory from "@/components/Careers/TeamStory";
import LearningDevelopment from "@/components/Careers/LearningDevelopment";
import OurCulture from "@/components/Careers/OurCulture";
import GrowthQuoteBand from "@/components/Careers/GrowthQuoteBand";
import WhatSetsUsApart from "@/components/Careers/WhatSetsUsApart";
import LinkedInCarousel from "@/components/WhoWeAre/LinkedInCarousel";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <CareersHero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <CareersHeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                <JoinUsPanel />
                <JobListingSection />
                <WhatYouWantToDo />
                <TeamStory />
                <LearningDevelopment />
                <GrowthQuoteBand />
                <OurCulture />
                {/* <WhatSetsUsApart /> */}
                <LinkedInCarousel />
                <JoinUsSocialBand />
            </div>

            <Footer />
        </div>
    );
};

export default page;

