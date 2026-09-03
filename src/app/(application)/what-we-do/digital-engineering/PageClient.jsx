"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Digital Engineering/webp/Digital_CTA.webp";

import Hero from "@/components/WhatWeDo/DigitalEngineering/Hero";
import HeroText from "@/components/WhatWeDo/DigitalEngineering/HeroText";
import IntroSection from "@/components/WhatWeDo/DigitalEngineering/IntroSection";
import EnterpriseApplicationDevelopment from "@/components/WhatWeDo/DigitalEngineering/EnterpriseApplicationDevelopment";
import TechnologyFocus from "@/components/WhatWeDo/DigitalEngineering/TechnologyFocus";
import MobileApplications from "@/components/WhatWeDo/DigitalEngineering/MobileApplications";
import APIDevelopment from "@/components/WhatWeDo/DigitalEngineering/APIDevelopment";
import MicroservicesArchitecture from "@/components/WhatWeDo/DigitalEngineering/MicroservicesArchitecture";
import CorePhilosophy from "@/components/WhatWeDo/DigitalEngineering/CorePhilosophy";
import InternalDeveloperPlatforms from "@/components/WhatWeDo/DigitalEngineering/DevOpsSection";
import ApplicationModernization from "@/components/WhatWeDo/DigitalEngineering/ApplicationModernization";
import DevOpsSection from "@/components/WhatWeDo/DigitalEngineering/DevOpsSection";
import LegacyModernization from "@/components/WhatWeDo/DigitalEngineering/LegacyModernization";
import TechnologyStack from "@/components/WhatWeDo/DigitalEngineering/TechnologyStack";
import EnterpriseSoftware from "@/components/WhatWeDo/DigitalEngineering/EnterpriseSoftware";
import LongevityLegacyRefactoring from "@/components/WhatWeDo/DigitalEngineering/LongevityLegacyRefactoring";
import ModernStackAPIEngineering from "@/components/WhatWeDo/DigitalEngineering/ModernStackAPIEngineering";
import SoftwareScalability from "@/components/WhatWeDo/DigitalEngineering/SoftwareScalability";
import QualityPerformanceEngineering from "@/components/WhatWeDo/DigitalEngineering/QualityPerformanceEngineering";
import ProductPlatformEngineering from "@/components/WhatWeDo/DigitalEngineering/ProductPlatformEngineering";

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
                {/* <IntroSection /> */}
                <SoftwareScalability />
                <EnterpriseSoftware />
            </div>
            {/* <LegacyModernization /> */}
            {/* <TechnologyFocus /> */}
            {/* <MobileApplications /> */}
            {/* <APIDevelopment /> */}
            {/* <MicroservicesArchitecture /> */}
            <QualityPerformanceEngineering />
            <LongevityLegacyRefactoring />
            <ProductPlatformEngineering />
            <ModernStackAPIEngineering />
            <CorePhilosophy />
            {/* <DevOpsSection /> */}
            {/* <ApplicationModernization /> */}
            {/* <EnterpriseApplicationDevelopment /> */}
            {/* <FutureFocusedInsights /> */}
            <ReadyToTransform
                title="Ready to build software that scales with your business?"
                description="Talk to our engineering team about your next application or modernization initiative."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
