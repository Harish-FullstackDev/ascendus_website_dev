"use client";

import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import ctaBg from "@/assets/career/Careers hero BG.jpg";

const AboutClosingCTA = () => {
  return (
    <CommonConsultation
      backgroundImage={ctaBg}
      backgroundAlt="City skyline"
      title="Ready to Transform Your Business?"
      description="Let's Build innovative Solution that drive growth efficiency for your Business"
      buttonText="Contact us"
      buttonBgColor="bg-transparent border border-white/70"
      textColor="text-white"
      buttonTextColor="text-white"
      buttonIconColor="text-white"
      buttonIconBgColor="bg-white/10 group-hover:bg-white/20"
      padding="py-20 sm:py-24"
    />
  );
};

export default AboutClosingCTA;
