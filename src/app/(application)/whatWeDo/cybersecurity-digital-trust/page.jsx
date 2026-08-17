"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/new/footercta.jpg";

import Hero from "@/components/WhatWeDo/CyberSecurityDigitalTrust/Hero";
import HeroText from "@/components/WhatWeDo/CyberSecurityDigitalTrust/HeroText";
import IdentityManagementContinuousOperations from "@/components/WhatWeDo/CyberSecurityDigitalTrust/IdentityManagementContinuousOperations";
import SecurityChallenges from "@/components/WhatWeDo/CyberSecurityDigitalTrust/SecurityChallenges";
import IdentityAccessManagement from "@/components/WhatWeDo/CyberSecurityDigitalTrust/IdentityAccessManagement";
import SecurityOperations from "@/components/WhatWeDo/CyberSecurityDigitalTrust/SecurityOperations";
import SecurityAssessmentCloudDefense from "@/components/WhatWeDo/CyberSecurityDigitalTrust/SecurityAssessmentCloudDefense";
import PenetrationTesting from "@/components/WhatWeDo/CyberSecurityDigitalTrust/PenetrationTesting";
import GovernanceRiskCompliance from "@/components/WhatWeDo/CyberSecurityDigitalTrust/GovernanceRiskCompliance";
import CloudSecurity from "@/components/WhatWeDo/CyberSecurityDigitalTrust/CloudSecurity";
import ZeroTrustArchitecture from "@/components/WhatWeDo/CyberSecurityDigitalTrust/ZeroTrustArchitecture";
import CybersecurityDeliveryFramework from "@/components/WhatWeDo/CyberSecurityDigitalTrust/CybersecurityDeliveryFramework";
import BusinessEnablementThroughSecurity from "@/components/WhatWeDo/CyberSecurityDigitalTrust/BusinessEnablementThroughSecurity";
import AccessControlSimulatedAttacks from "@/components/WhatWeDo/CyberSecurityDigitalTrust/AccessControlSimulatedAttacks";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/*
              Navbar must live outside the sticky wrapper below: position:sticky always
              creates its own stacking context, so anything nested inside it (including a
              fixed-position Navbar) gets trapped and can be painted over by later, higher
              z-index sections. Rendering it here keeps its z-50 fixed nav dominant over the
              whole page. Its own layout spacer is cancelled by the negative margin on the
              hero wrapper immediately below so the background still starts flush at the top.
            */}
            <Navbar />

            {/* Fixed hero reveal: background stays pinned while text scrolls normally and
                "Why Cybersecurity Matters" curtains over the whole thing */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>
                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>
            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] min-h-[300px] sm:min-h-screen bg-white">
                <BusinessEnablementThroughSecurity />
                <IdentityManagementContinuousOperations />
            </div>


            {/* <IdentityAccessManagement /> */}
            {/* <SecurityOperations /> */}
            <AccessControlSimulatedAttacks />
            <SecurityAssessmentCloudDefense />
            {/* <PenetrationTesting /> */}

            {/* Pinned GRC background parallax, then Cloud Security curtains over it */}
            {/* <GovernanceRiskCompliance /> */}
            {/* <div className="relative z-10 -mt-[70vh] sm:-mt-[100vh] min-h-[70vh] sm:min-h-screen bg-white">
                <CloudSecurity />
            </div> */}

            {/* <ZeroTrustArchitecture /> */}
            {/* <CybersecurityDeliveryFramework /> */}

            {/* <FutureFocusedInsights /> */}
            <SecurityChallenges />
            <ReadyToTransform
                title="Ready to strengthen your security posture?"
                description="Talk to our cybersecurity team about protecting what your business is building."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
