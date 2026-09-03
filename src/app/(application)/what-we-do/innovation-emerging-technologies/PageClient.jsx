"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Innovation & Emerging Technologies/webp/Innovation_CTA.webp";

import Hero from "@/components/WhatWeDo/InnovationEmergingTechnologies/Hero";
import HeroText from "@/components/WhatWeDo/InnovationEmergingTechnologies/HeroText";
import Intro from "@/components/WhatWeDo/InnovationEmergingTechnologies/Intro";
import IoT from "@/components/WhatWeDo/InnovationEmergingTechnologies/IoT";
import DigitalTwins from "@/components/WhatWeDo/InnovationEmergingTechnologies/DigitalTwins";
import ARVR from "@/components/WhatWeDo/InnovationEmergingTechnologies/ARVR";
import ExtendedReality from "@/components/WhatWeDo/InnovationEmergingTechnologies/ExtendedReality";
import SSTInnovatioEdge from "@/components/WhatWeDo/InnovationEmergingTechnologies/SSTInnovatioEdge";
import QuantumReadiness from "@/components/WhatWeDo/InnovationEmergingTechnologies/QuantumReadiness";
import Industry4 from "@/components/WhatWeDo/InnovationEmergingTechnologies/Industry4";
import SmartEnterpriseSolutions from "@/components/WhatWeDo/InnovationEmergingTechnologies/SmartEnterpriseSolutions";
import OurInnovationFramework from "@/components/WhatWeDo/InnovationEmergingTechnologies/OurInnovationFramework";
import ScalingPilotsSmartOperations from "@/components/WhatWeDo/InnovationEmergingTechnologies/ScalingPilotsSmartOperations";
import IndustryDigitalTwins from "@/components/WhatWeDo/InnovationEmergingTechnologies/IndustryDigitalTwins";
import EmergingTechnologyAssessment from "@/components/WhatWeDo/InnovationEmergingTechnologies/EmergingTechnologyAssessment";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/*
              Navbar lives outside the sticky wrapper below for the same reason as the
              cybersecurity-digital-trust page: position:sticky creates its own stacking
              context, which would trap the Navbar's fixed positioning under later,
              higher z-index sections if nested inside it.
            */}
            <Navbar />

            {/* Fixed hero reveal: background stays pinned while the Intro section curtains
                over it, matching whatWeDo/cybersecurity-digital-trust's hero pattern */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                {/* <Intro /> */}
                {/* <IoT /> */}
                <IndustryDigitalTwins />
            </div>


            {/* <DigitalTwins /> */}
            <SSTInnovatioEdge />
            <EmergingTechnologyAssessment />
            <ARVR />
            <ScalingPilotsSmartOperations />
            {/* <ExtendedReality /> */}
            {/* <QuantumReadiness /> */}
            {/* <Industry4 /> */}
            {/* <SmartEnterpriseSolutions /> */}
            {/* <OurInnovationFramework /> */}

            {/* <FutureFocusedInsights /> */}
            <ReadyToTransform
                title="Ready to explore what's next for your enterprise?"
                description="Talk to our innovation team about the emerging technologies worth your attention."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
