"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";

import Hero from "@/components/WhatWeDo/EnterpriseTransformationPractice/Hero";
import HeroText from "@/components/WhatWeDo/EnterpriseTransformationPractice/HeroText";
import ProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/ProofInNumbers";
import CoreServices from "@/components/WhatWeDo/EnterpriseTransformationPractice/CoreServices";
import EngagementModelsOverview from "@/components/WhatWeDo/EnterpriseTransformationPractice/EngagementModelsOverview";
import Capabilities from "@/components/WhatWeDo/EnterpriseTransformationPractice/Capabilities";
import EngagementModelsComparison from "@/components/WhatWeDo/EnterpriseTransformationPractice/EngagementModelsComparison";
import WhyEnterprisePartnerWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/WhyEnterprisePartnerWithUs";
import IndustriesWeServe from "@/components/WhatWeDo/EnterpriseTransformationPractice/IndustriesWeServe";

import ctaBg from "@/assets/WhatWeDo/Enterprise Transformation Practice/CTA/cta-bg.png";
import closingBand from "@/assets/WhatWeDo/Enterprise Transformation Practice/CTA/closing-band.png";

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
                <ProofInNumbers />
                <CoreServices />
                <EngagementModelsOverview />
                <Capabilities />
                <EngagementModelsComparison />
                <IndustriesWeServe />
                <WhyEnterprisePartnerWithUs />
            </div>

            <ReadyToTransform
                title="Let's find the right engagement model for your transformation."
                description="Talk to our team about the SAP and Microsoft environment your business actually needs."
                buttonLabel="Schedule a Consultation"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
