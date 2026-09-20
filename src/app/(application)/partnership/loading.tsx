import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /partnership/ stack: hero, an intro column beside four ecosystem
// cards, an intro column beside five partnership-route cards, the split
// benefits/stat-banner row, the centred partner logo strip, then the CTA band.
export default function PartnershipLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* A Collaborative Ecosystem — intro column + four cards */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,395px)_minmax(0,1fr)] gap-10 lg:gap-[109px]">
          <div className="flex flex-col gap-4">
            <Shimmer className="h-4 w-40" rounded="rounded-md" />
            <Shimmer className="h-8 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-16 w-full" rounded="rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
            {[0, 1, 2, 3].map((i) => (
              <Shimmer key={i} className="h-[259px] w-full" rounded="rounded-[8px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build What's Next — tinted band, intro column + five cards */}
      <section className="bg-[#f4f7fb] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,313px)_minmax(0,1fr)] gap-10 lg:gap-8">
          <div className="flex flex-col gap-3">
            <Shimmer className="h-4 w-40" rounded="rounded-md" />
            <Shimmer className="h-8 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-16 w-full" rounded="rounded-md" />
            <Shimmer className="h-10 w-44" rounded="rounded-[10px]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <Shimmer key={i} className="h-[175px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      {/* More Than a Partnership — benefits list beside the stat banner */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Shimmer className="h-4 w-48" rounded="rounded-md" />
            <Shimmer className="h-16 w-full" rounded="rounded-lg" />
            <Shimmer className="h-12 w-full" rounded="rounded-md" />
            {[0, 1, 2, 3].map((i) => (
              <Shimmer key={i} className="h-5 w-4/5" rounded="rounded-md" />
            ))}
            <Shimmer className="h-10 w-36" rounded="rounded-[8px]" />
          </div>
          <Shimmer className="lg:col-span-7 aspect-[738/380] min-h-[280px] w-full" rounded="rounded-[12px]" />
        </div>
      </section>

      {/* Trusted by Industry Leaders — centred heading and logo strip */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-16">
        <SkeletonSectionHeading centered={true} />
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Shimmer key={i} className="h-7 w-28" rounded="rounded-md" />
          ))}
        </div>
      </section>

      {/* Let's Create Impact Together — full-bleed CTA band */}
      <Shimmer className="h-[427px] w-full" rounded="rounded-none" />

      <SkeletonFooter />
    </div>
  );
}
