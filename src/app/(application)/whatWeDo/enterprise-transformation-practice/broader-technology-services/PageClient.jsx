"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/ReadyToTransform";
import Hero from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/Hero";
import HeroText from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/HeroText";
import Overview from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/Overview";
import GovernanceSAPDataDepth from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/GovernanceSAPDataDepth";
import WorkSequence from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/WorkSequence";
import WhyItMatters from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/WhyItMatters";
import WhyPartnerWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/WhyPartnerWithUs";
import ProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/BroaderTechnologyServices/ProofInNumbers";

import ctaBg from "@/assets/WhatWeDo/Enterprise Transformation Practice/BroaderTechnologyServices/cta-bg.png";

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
                <GovernanceSAPDataDepth />
                <WorkSequence />
                <WhyItMatters />
                <WhyPartnerWithUs />
                <ProofInNumbers />
            </div>

            <ReadyToTransform
                title="A short technical review shows where integration, data, or security work is quietly adding risk."
                description="A focused technical review of your surrounding landscape — integration, data, and security — shows exactly where the risk sits and what to fix first."
                buttonLabel="Book a Call"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
