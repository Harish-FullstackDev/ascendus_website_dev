"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutUsHero from "@/components/About-us/AboutUsHero";
import AboutUsHeroText from "@/components/About-us/AboutUsHeroText";
import AboutUsIntro from "@/components/About-us/AboutUsIntro";
import OurPurpose from "@/components/About-us/OurPurpose";
import VisionMissionBand from "@/components/About-us/VisionMissionBand";
import OurApproach from "@/components/About-us/OurApproach";
import WhyAscendus from "@/components/About-us/WhyAscendus";
import Leadership from "@/components/About-us/Leadership";
import CareersCta from "@/components/About-us/CareersCta";
import AboutUsInsights from "@/components/About-us/AboutUsInsights";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";

// The hero is the shared sticky curtain, the same pattern as /services/ and
// /solutions/: the image stays put while the page content slides up over it.
const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <StickyHero background={<AboutUsHero />} overlay={<AboutUsHeroText />}>
        <AboutUsIntro />
        <OurPurpose />
        <VisionMissionBand />
        <OurApproach />
        <WhyAscendus />
        <Leadership />
        <CareersCta />
        <AboutUsInsights />
        <PageCta
          title={["Partner With Us", "for a Stronger Tomorrow."]}
          description={["Let's connect and explore how we can help you", "transform, innovate and grow."]}
          ctaLabel="CONTACT US"
          href="/contact-us/"
          titleClassName="lg:w-[445.5px]"
          descriptionClassName="lg:whitespace-nowrap"
        />
      </StickyHero>

      <Footer />
    </div>
  );
};

export default page;
