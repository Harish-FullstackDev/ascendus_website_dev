"use client";

// Standalone preview page, not linked from the Navbar or Footer per request —
// reachable only by navigating directly to /ascendus.
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/HomePage/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import ProofInNumbers from "@/components/HomePage/ProofInNumbers";
import customBg from "@/assets/HomePage/Homepage_CTA.webp";

import Hero from "@/components/Ascendus/Hero";
import HeroText from "@/components/Ascendus/HeroText";
import AboutPartner from "@/components/Ascendus/AboutPartner";
import Services from "@/components/Ascendus/Services";
import WhyUs from "@/components/Ascendus/WhyUs";
import WhatWeDo from "@/components/Ascendus/WhatWeDo";
import Hiring from "@/components/Ascendus/Hiring";
import Industries from "@/components/Ascendus/Industries";
import HowWeWork from "@/components/Ascendus/HowWeWork";

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
                <AboutPartner />
                <Services />
                <WhyUs />
                <WhatWeDo />
            </div>

            <ProofInNumbers />
            <Hiring />
            <Industries />
            <HowWeWork />
            <FutureFocusedInsights />
            <ReadyToTransform
                title="Ready to Transform Your Business?"
                description="Let's talk about where your technology is holding you back and what it would take to fix it for good."
                bgImage={customBg}
                hasOverlapAbove
            />
            <Footer />
        </div>
    );
};

export default page;
