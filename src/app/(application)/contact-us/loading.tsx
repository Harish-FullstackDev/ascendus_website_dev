import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonFeatureCard,
  SkeletonCTACard,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /contact-us/ stack: hero, two segment cards, four interaction
// cards, the assessment band, three support cards, the enquiry form beside the
// contact card, two location bands, four trust pillars, then the CTA.
export default function ContactUsLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* Choose What Fits Your Need — two segment cards */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8">
        <SkeletonSectionHeading centered={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {[0, 1].map((i) => (
            <Shimmer key={i} className="h-[142px] w-full" rounded="rounded-none" />
          ))}
        </div>
      </section>

      {/* The selected segment panel — Start a New Conversation on load, four
          interaction cards. Already an Ascendus Customer takes the same slot
          when the other segment is picked, so only one is skeletoned here. */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
        <SkeletonSectionHeading centered={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonFeatureCard key={i} />
          ))}
        </div>
      </section>

      {/* Solution assessment band */}
      <section className="bg-[#eaf3fa] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Shimmer className="h-4 w-40" rounded="rounded-md" />
            <Shimmer className="h-8 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-4 w-full" rounded="rounded-md" />
            <Shimmer className="h-10 w-48" rounded="rounded-none" />
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <Shimmer key={i} className="h-[140px] w-full" rounded="rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* General enquiry — form beside the visual/contact column */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8">
        <SkeletonSectionHeading centered={false} />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.43fr)_minmax(0,1fr)] gap-10 mt-10 sm:mt-16">
          <div className="flex flex-col gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Shimmer className="h-[61px] w-full" rounded="rounded" />
                <Shimmer className="h-[61px] w-full" rounded="rounded" />
              </div>
            ))}
            <Shimmer className="h-[118px] w-full" rounded="rounded" />
            <Shimmer className="h-[68px] w-full" rounded="rounded" />
            <Shimmer className="h-10 w-40" rounded="rounded" />
          </div>
          <div className="flex flex-col gap-6">
            <Shimmer className="aspect-[490/258] w-full" rounded="rounded-lg" />
            <Shimmer className="h-[156px] w-full" rounded="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our locations — two bands */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-8">
        <SkeletonSectionHeading centered={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-16">
          {[0, 1].map((i) => (
            <Shimmer key={i} className="aspect-[600/202] min-h-[160px] w-full" rounded="rounded-none" />
          ))}
        </div>
      </section>

      {/* Trust & assurance — title block plus four pillars */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,355px)_minmax(0,1fr)] gap-10 lg:gap-[100px]">
          <div className="flex flex-col gap-3">
            <Shimmer className="h-4 w-56" rounded="rounded-md" />
            <Shimmer className="h-6 w-full" rounded="rounded-lg" />
            <Shimmer className="h-4 w-4/5" rounded="rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-3">
                <Shimmer className="h-[30px] w-[30px]" rounded="rounded-md" />
                <Shimmer className="h-6 w-48" rounded="rounded-lg" />
                <Shimmer className="h-4 w-full" rounded="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-[64px] pb-16">
        <SkeletonCTACard />
      </section>

      <SkeletonFooter />
    </div>
  );
}
