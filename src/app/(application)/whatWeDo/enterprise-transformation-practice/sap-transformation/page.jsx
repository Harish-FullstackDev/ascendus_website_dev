"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";

import Hero from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/Hero";
import HeroText from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/HeroText";
import Overview from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/Overview";
import CapabilitiesAccordion from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/CapabilitiesAccordion";
import MigrationPaths from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/MigrationPaths";
import WhyItMatters from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/WhyItMatters";
import WhyPartnerWithUs from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/WhyPartnerWithUs";
import ProofInNumbers from "@/components/WhatWeDo/EnterpriseTransformationPractice/SapTransformation/ProofInNumbers";

import ctaBg from "@/assets/WhatWeDo/Enterprise Transformation Practice/SapTransformation/cta-bg.png";

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
                <MigrationPaths />
                <WhyItMatters />
                <WhyPartnerWithUs />
                <ProofInNumbers />
            </div>

            <ReadyToTransform
                title="Not sure where your SAP landscape stands?"
                description="A landscape assessment shows exactly what migration path fits, and how much runway you actually have left."
                buttonLabel="Book a Consultation"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
