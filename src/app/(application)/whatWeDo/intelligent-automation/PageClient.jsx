"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Intelligent Automation/webp/Intelligent_CTA.webp";

import Hero from "@/components/WhatWeDo/IntelligentAutomation/Hero";
import HeroText from "@/components/WhatWeDo/IntelligentAutomation/HeroText";
import PositioningStatement from "@/components/WhatWeDo/IntelligentAutomation/PositioningStatement";
import ProcessMiningRPAHyperautomation from "@/components/WhatWeDo/IntelligentAutomation/ProcessMiningRPAHyperautomation";
import WhyPartnerWithUs from "@/components/WhatWeDo/IntelligentAutomation/WhyPartnerWithUs";
import IntelligentDocumentProcessing from "@/components/WhatWeDo/IntelligentAutomation/IntelligentDocumentProcessing";
import AdvancedDecisionLogiWorkflow from "@/components/WhatWeDo/IntelligentAutomation/AdvancedDecisionLogiWorkflow";
import BusinessRulesAutomationGrid from "@/components/WhatWeDo/IntelligentAutomation/BusinessRulesAutomationGrid";
import BusinessRulesAutomationZigzag from "@/components/WhatWeDo/IntelligentAutomation/BusinessRulesAutomationZigzag";
import HyperAutomation from "@/components/WhatWeDo/IntelligentAutomation/HyperAutomation";
import AIPoweredAutomation from "@/components/WhatWeDo/IntelligentAutomation/AIPoweredAutomation";
import OurAutomationApproach from "@/components/WhatWeDo/IntelligentAutomation/OurAutomationApproach";
import CostofInefficiency from "@/components/WhatWeDo/IntelligentAutomation/CostofInefficiency";
import AutomationOperationsControl from "@/components/WhatWeDo/IntelligentAutomation/AutomationOperationsControl";

const page = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white flex flex-col font-sans">
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
                <PositioningStatement />
                <ProcessMiningRPAHyperautomation />
            </div>

            {/* <IntelligentDocumentProcessing /> */}
            <AutomationOperationsControl />
            <AdvancedDecisionLogiWorkflow />
            <CostofInefficiency />
            {/* <BusinessRulesAutomationGrid /> */}
            {/* <BusinessRulesAutomationZigzag /> */}
            {/* <HyperAutomation /> */}
            {/* <AIPoweredAutomation /> */}
            {/* <OurAutomationApproach /> */}
            {/* <FutureFocusedInsights /> */}
            <WhyPartnerWithUs />
            <ReadyToTransform
                title="Ready to remove manual work from your business processes?"
                description="Talk to our automation team about where intelligent automation pays off fastest."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
