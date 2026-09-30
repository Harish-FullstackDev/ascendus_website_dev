"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StickyHero from "@/components/CommonComponents/StickyHero";
import PageCta from "@/components/CommonComponents/PageCta";
import SapS4HanaHero from "@/components/SAP-S4HanaTransformation/SapS4HanaHero";
import SapS4HanaHeroText from "@/components/SAP-S4HanaTransformation/SapS4HanaHeroText";
import OneLiveViewOfTheBusiness from "@/components/SAP-S4HanaTransformation/OneLiveViewOfTheBusiness";
import WhatStandsBetweenYouAndAModernCore from "@/components/SAP-S4HanaTransformation/WhatStandsBetweenYouAndAModernCore";
import OneTeamFromFirstAssessment from "@/components/SAP-S4HanaTransformation/OneTeamFromFirstAssessment";
import TeamCollaborationBanner from "@/components/SAP-S4HanaTransformation/TeamCollaborationBanner";
import FourStagesYourBusinessInvolved from "@/components/SAP-S4HanaTransformation/FourStagesYourBusinessInvolved";
import PickTheRouteThatFitsYourBusiness from "@/components/SAP-S4HanaTransformation/PickTheRouteThatFitsYourBusiness";
import EverySystemAroundYourCore from "@/components/SAP-S4HanaTransformation/EverySystemAroundYourCore";
import GoLiveWithConfidence from "@/components/SAP-S4HanaTransformation/GoLiveWithConfidence";

// Figma frame 828:919. The hero is the shared sticky curtain; everything else
// slides up over it. The closing band is the shared PageCta with the same copy
// as the home page, which is what Figma 828:1354 draws.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero background={<SapS4HanaHero />} overlay={<SapS4HanaHeroText />}>
                <OneLiveViewOfTheBusiness />
                <WhatStandsBetweenYouAndAModernCore />
                <OneTeamFromFirstAssessment />
                <TeamCollaborationBanner />
                <FourStagesYourBusinessInvolved />
                <PickTheRouteThatFitsYourBusiness />
                <EverySystemAroundYourCore />
                <GoLiveWithConfidence />
                <PageCta
                    title={["Ready to Transform Your", "Enterprise?"]}
                    description="Talk to our experts and explore how Ascendus can help your organization simplify, modernize and grow."
                    ctaLabel="Talk to an Expert"
                    titleClassName="lg:w-[369px]"
                    descriptionClassName="lg:w-[314px]"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
