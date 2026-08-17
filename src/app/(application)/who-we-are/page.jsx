"use client";

import Footer from "@/components/Footer/Footer";
import WhoWeAreHero from "@/components/WhoWeAre/WhoWeAreHero";
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
      <WhoWeAreHero />
      <AboutUsPanel />
      <StatsCards />
      <TrustedByBand />
      <CleanPrinciples />
      <DiscoverWhatSetsUsApart />
      <MissionVision />
      <OurStrength />
      <ClientTestimonials />
      {/* <FutureFocusedInsights /> */}
      <ReadyToTransform />
      <Footer />
    </div>
  );
};

export default page;

