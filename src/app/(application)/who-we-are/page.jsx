"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhoWeAreHero from "@/components/WhoWeAre/WhoWeAreHero";
import WhoWeAreHeroText from "@/components/WhoWeAre/WhoWeAreHeroText";
import AboutUsPanel from "@/components/WhoWeAre/AboutUsPanel";
import StatsCards from "@/components/WhoWeAre/StatsCards";
import CleanPrinciples from "@/components/WhoWeAre/CleanPrinciples";
import TrustedByBand from "@/components/WhoWeAre/TrustedByBand";
import DiscoverWhatSetsUsApart from "@/components/WhoWeAre/DiscoverWhatSetsUsApart";
import MissionVision from "@/components/WhoWeAre/MissionVision";
import OurStrength from "@/components/WhoWeAre/OurStrength";
import ClientTestimonials from "@/components/WhoWeAre/ClientTestimonials";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
        <div className="sticky top-0 h-[340px] sm:h-screen z-0">
          <WhoWeAreHero />
        </div>

        <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
          <WhoWeAreHeroText />
        </div>
      </div>

      <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
        <AboutUsPanel />
        <StatsCards />
        <CleanPrinciples />
        <TrustedByBand />
        <DiscoverWhatSetsUsApart />
        <MissionVision />
        <OurStrength />
        {/* <ClientTestimonials /> */}
        {/* <FutureFocusedInsights /> */}
        <ReadyToTransform />
      </div>

      <Footer />
    </div>
  );
};

export default page;
