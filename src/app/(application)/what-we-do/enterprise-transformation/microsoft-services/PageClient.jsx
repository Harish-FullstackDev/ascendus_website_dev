"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/ReadyToTransform";

import Hero from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/Hero";
import HeroText from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/HeroText";
import Overview from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/Overview";
import CapabilitiesAccordion from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/CapabilitiesAccordion";
import PlatformsTogether from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/PlatformsTogether";
import WhyItMatters from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/WhyItMatters";
import WhyPartnerWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/WhyPartnerWithUs";
import ProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/MicrosoftServices/ProofInNumbers";

import ctaBg from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/cta-bg.png";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Sticky hero + curtain-reveal content, same pattern used across the
                other WhatWeDo pages. */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                <Overview />
                <CapabilitiesAccordion />
                <PlatformsTogether />
                <WhyItMatters />
                <WhyPartnerWithUs />
                <ProofInNumbers />
            </div>

            <ReadyToTransform
                title="Running Microsoft and SAP side by side?"
                description="We can show you where the two are working against each other, and where they should be working together."
                buttonLabel="Book a Call"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
