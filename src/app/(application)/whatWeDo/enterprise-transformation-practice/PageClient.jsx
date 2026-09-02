"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/WhatWeDo/EnterpriseTransformationPractice/ReadyToTransform";

import Hero from "@/components/WhatWeDo/EnterpriseTransformationPractice/Hero";
import HeroText from "@/components/WhatWeDo/EnterpriseTransformationPractice/HeroText";
import ProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/ProofInNumbers";
import CoreServices from "@/components/WhatWeDo/EnterpriseTransformationPractice/CoreServices";
import ChooseHowYouWantToWorkWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/ChooseHowYouWantToWorkWithUs";
import Capabilities from "@/components/WhatWeDo/EnterpriseTransformationPractice/Capabilities";
import EngagementModelsComparison from "@/components/WhatWeDo/EnterpriseTransformationPractice/EngagementModelsComparison";
import WhyEnterprisePartnerWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/WhyEnterprisePartnerWithUs";
import WhyPartnerProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/WhyPartnerProofInNumbers";
import IndustriesWeServe from "@/components/WhatWeDo/EnterpriseTransformationPractice/IndustriesWeServe";
import TrustedByBand from "@/components/WhatWeDo/EnterpriseTransformationPractice/TrustedByBand";

import ctaBg from "@/assets/WhatWeDo/Enterprise Transformation Practice/CTA/cta-bg.png";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[calc(200vh-142px)]">
                <div className="sticky top-0 h-[340px] sm:h-[calc(100vh-71px)] z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-[calc(100vh-71px)] z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[calc(100vh-71px)] bg-white">
                <ProofInNumbers />
                <CoreServices />
                <ChooseHowYouWantToWorkWithUs />
                <Capabilities />
                <TrustedByBand />
                <EngagementModelsComparison />
                <IndustriesWeServe />
                <WhyEnterprisePartnerWithUs />
                {/* <WhyPartnerProofInNumbers /> */}
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
