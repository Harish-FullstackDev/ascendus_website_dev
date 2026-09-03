"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Customer Experience/webp/Customer_CTA.webp";
import Hero from "@/components/WhatWeDo/CustomerExperience/Hero";
import HeroText from "@/components/WhatWeDo/CustomerExperience/HeroText";
import CRMStrategy from "@/components/WhatWeDo/CustomerExperience/CRMStrategy";
import SalesAutomation from "@/components/WhatWeDo/CustomerExperience/SalesAutomation";
import CustomerServiceSolutions from "@/components/WhatWeDo/CustomerExperience/CustomerServiceSolutions";
import MarketingAutomation from "@/components/WhatWeDo/CustomerExperience/MarketingAutomation";
import SalesforceConsulting from "@/components/WhatWeDo/CustomerExperience/SalesforceConsulting";
import ConnectedCRMAndOmnichannelStrategy from "@/components/WhatWeDo/CustomerExperience/ConnectedCRMAndOmnichannelStrategy";
import OmnichannelExperience from "@/components/WhatWeDo/CustomerExperience/OmnichannelExperience";
import CustomerAnalytics from "@/components/WhatWeDo/CustomerExperience/CustomerAnalytics";
import LoyaltySolutions from "@/components/WhatWeDo/CustomerExperience/LoyaltySolutions";
import SingleCustomerView from "@/components/WhatWeDo/CustomerExperience/SingleCustomerView";
import SpecializedCXAutomationAnalytics from "@/components/WhatWeDo/CustomerExperience/SpecializedCXAutomationAnalytics";
import TeamAdoption from "@/components/WhatWeDo/CustomerExperience/TeamAdoption";
import CustomerPersonalizationEngagement from "@/components/WhatWeDo/CustomerExperience/CustomerPersonalizationEngagement";

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
                <ConnectedCRMAndOmnichannelStrategy />
                <SingleCustomerView />
            </div>
            {/* <CustomerServiceSolutions /> */}
            <TeamAdoption />
            <CustomerPersonalizationEngagement />
            <SalesforceConsulting />
            <SpecializedCXAutomationAnalytics />
            <ReadyToTransform
                title="Ready to design a customer experience that earns loyalty?"
                description="Talk to our CX team about connecting every customer touchpoint that matters."
                bgImage={customBg}
            />
            <Footer />
            {/* <CRMStrategy />
            <SalesAutomation />
            <div className="relative"> */}
            {/* Grey bar spans from the top of Marketing Automation, behind its Services
                    image, down through Salesforce Consulting until the Salesforce
                    Implementation card begins (mirrors CloudModernization's grey-bar pattern). */}
            {/* <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
                    <div className="absolute right-[350px] top-0 h-[770px] w-[178px] bg-[#e8e8e8]" />
                </div>
                <MarketingAutomation />
            </div>
            <OmnichannelExperience />
            <CustomerAnalytics />
            <LoyaltySolutions />
            <FutureFocusedInsights /> */}
        </div>
    );
};

export default page;

