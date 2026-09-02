"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Data Inteligent/webp/Data_CTA.webp";

import Hero from "@/components/WhatWeDo/DataIntelligence/Hero";
import HeroText from "@/components/WhatWeDo/DataIntelligence/HeroText";
import IntroSection from "@/components/WhatWeDo/DataIntelligence/IntroSection";
import EnterpriseDataFoundations from "@/components/WhatWeDo/DataIntelligence/EnterpriseDataFoundations";
import DataWarehousing from "@/components/WhatWeDo/DataIntelligence/DataWarehousing";
import BusinessIntelligence from "@/components/WhatWeDo/DataIntelligence/BusinessIntelligence";
import DataVisualization from "@/components/WhatWeDo/DataIntelligence/DataVisualization";
import WhyPartnerWithUsMetrix from "@/components/WhatWeDo/DataIntelligence/WhyPartnerWithUsMetrix";
import DataGovernance from "@/components/WhatWeDo/DataIntelligence/DataGovernance";
import RealTimeAnalytics from "@/components/WhatWeDo/DataIntelligence/RealTimeAnalytics";
import GovernanceSAPDataDepth from "@/components/WhatWeDo/DataIntelligence/GovernanceSAPDataDepth";
import HighComplianceIndustrySolutions from "@/components/WhatWeDo/DataIntelligence/HighComplianceIndustrySolutions";
import IndustryImpact from "@/components/WhatWeDo/DataIntelligence/IndustryImpact";
import RealTimeAnalyticsAndMasterDataManagement from "@/components/WhatWeDo/DataIntelligence/RealTimeAnalyticsAndMasterDataManagement";
import DataModernizationIntegration from "@/components/WhatWeDo/DataIntelligence/DataModernizationIntegration";


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
                <EnterpriseDataFoundations />
                <DataModernizationIntegration />
                <GovernanceSAPDataDepth />
            </div>
            {/* <DataWarehousing /> */}
            {/* <BusinessIntelligence /> */}
            {/* <DataVisualization /> */}
            <HighComplianceIndustrySolutions />
            <IndustryImpact />
            <RealTimeAnalyticsAndMasterDataManagement />
            <WhyPartnerWithUsMetrix />
            {/* <DataGovernance /> */}
            {/* <RealTimeAnalytics /> */}

            {/* <FutureFocusedInsights /> */}
            <ReadyToTransform
                title="Ready to trust your data again?"
                description="Talk to our data and analytics team about building a platform your business can rely on."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
