"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Artificial Intelligence/new/footercta.jpg";

import Hero from "@/components/WhatWeDo/ArtificialIntelligence/Hero";
import HeroText from "@/components/WhatWeDo/ArtificialIntelligence/HeroText";
import WhyAIMatters from "@/components/WhatWeDo/ArtificialIntelligence/WhyAIMatters";
import OurAIServices from "@/components/WhatWeDo/ArtificialIntelligence/OurAIServices";
import AdvancedMachineLearning from "@/components/WhatWeDo/ArtificialIntelligence/AdvancedMachineLearning";
import IntelligentAssistantsCards from "@/components/WhatWeDo/ArtificialIntelligence/IntelligentAssistantsCards";
import AIStrategy from "@/components/WhatWeDo/ArtificialIntelligence/AIStrategy";
import IntelligentAssistantsBanner from "@/components/WhatWeDo/ArtificialIntelligence/IntelligentAssistantsBanner";
import ScalableAIDeployment from "@/components/WhatWeDo/ArtificialIntelligence/ScalableAIDeployment";
import PredictiveIntelligence from "@/components/WhatWeDo/ArtificialIntelligence/PredictiveIntelligence";
import ConversationalAI from "@/components/WhatWeDo/ArtificialIntelligence/ConversationalAI";
import IndustryImpact from "@/components/WhatWeDo/ArtificialIntelligence/IndustryImpact";
import AIGovernance from "@/components/WhatWeDo/ArtificialIntelligence/AIGovernance";
import AILifecycle from "@/components/WhatWeDo/ArtificialIntelligence/AILifecycle";
import WhyPartnerWithUs from "@/components/WhatWeDo/ArtificialIntelligence/WhyPartnerWithUs";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                {/* <WhyAIMatters /> */}
                <OurAIServices />
                <ScalableAIDeployment />
            </div>
            {/* <IntelligentAssistantsCards /> */}
            {/* <AIStrategy /> */}
            {/* <PredictiveIntelligence /> */}
            {/* <ConversationalAI /> */}
            <IndustryImpact />
            {/* <AIGovernance /> */}
            {/* <AILifecycle /> */}
            <AdvancedMachineLearning />
            {/* <IntelligentAssistantsBanner /> */}
            <WhyPartnerWithUs />
            {/* <FutureFocusedInsights /> */}
            <ReadyToTransform
                title="Ready to build infrastructure that scales with you?"
                description="Talk to our infrastructure team about the environment your business actually needs."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;

