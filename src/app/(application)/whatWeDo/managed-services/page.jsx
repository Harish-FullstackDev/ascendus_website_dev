"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Managed Services/webp/CTA.webp";

import Hero from "@/components/WhatWeDo/ManagedServices/Hero";
import HeroText from "@/components/WhatWeDo/ManagedServices/HeroText";
import ApplicationManagementServices from "@/components/WhatWeDo/ManagedServices/ApplicationManagementServices";
import SAPAMSTieredSupport from "@/components/WhatWeDo/ManagedServices/SAPAMSTieredSupport";
import InfrastructureManagement from "@/components/WhatWeDo/ManagedServices/InfrastructureManagement";
import ProcessAwareSupportRootCauseResolution from "@/components/WhatWeDo/ManagedServices/ProcessAwareSupportRootCauseResolution";
import InfrastructureManagementSLAs from "@/components/WhatWeDo/ManagedServices/InfrastructureManagementSLAs";
import MonitoringIncidentManagement from "@/components/WhatWeDo/ManagedServices/MonitoringIncidentManagement";
import DesignToolsTechnologies from "@/components/WhatWeDo/ManagedServices/DesignToolsTechnologies";
import ContinuousImprovement from "@/components/WhatWeDo/ManagedServices/ContinuousImprovement";
import OurManagedCloudServices from "@/components/WhatWeDo/ManagedServices/OurManagedCloudServices";
import WhyPartnerWithUs from "@/components/WhatWeDo/ManagedServices/WhyPartnerWithUs";
import ProactiveSystemOperations from "@/components/WhatWeDo/ManagedServices/ProactiveSystemOperations";

const page = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white flex flex-col font-sans">
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
                {/* <MonitoringIncidentManagement /> */}
                <SAPAMSTieredSupport />
                <ProcessAwareSupportRootCauseResolution />
                <ProactiveSystemOperations />
                {/* <ApplicationManagementServices /> */}
            </div>
            {/* <InfrastructureManagement /> */}
            <InfrastructureManagementSLAs />
            {/* <DesignToolsTechnologies /> */}
            {/* <ContinuousImprovement /> */}
            {/* <OurManagedCloudServices /> */}

            {/* <FutureFocusedInsights /> */}
            <WhyPartnerWithUs />
            <ReadyToTransform
                title="Ready for systems that just keep working?"
                description="Talk to our advisory team about the roadmap your transformation needs."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
