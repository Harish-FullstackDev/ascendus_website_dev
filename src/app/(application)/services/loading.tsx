import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /services/ stack: hero band, the three category cards, the
// service explorer, the dark four-pillar band, the About Us split, the pale
// highlights strip, then the insights row.
export default function ServicesLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* Three Ways We Create Value — intro block plus three category cards */}
      <section className="px-6 sm:px-[64px] pt-10 pb-8 sm:pt-[64px] sm:pb-[32px]">
        <div className="flex max-w-[811px] flex-col gap-4">
          <Shimmer className="h-4 w-40" rounded="rounded-md" />
          <Shimmer className="h-8 w-3/5" rounded="rounded-lg" />
          <Shimmer className="h-12 w-full" rounded="rounded-md" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Shimmer key={i} className="h-[160px] w-full" rounded="rounded-[12px]" />
          ))}
        </div>
      </section>

      {/* Service explorer — left rail plus detail panel */}
      <section className="px-6 sm:px-[64px] pt-8 pb-10 sm:pt-[32px] sm:pb-[64px]">
        <div className="flex gap-8 max-lg:flex-col">
          <Shimmer className="h-[620px] w-full lg:w-[430px] lg:shrink-0" rounded="rounded-[24px]" />
          <Shimmer className="h-[620px] w-full flex-1" rounded="rounded-[24px]" />
        </div>
      </section>

      {/* More Than Services. A True Partner. — dark band, four pillars */}
      <section className="bg-[#00223d] px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full flex-col gap-4 lg:w-[300px] lg:shrink-0">
            <Shimmer className="h-4 w-44" rounded="rounded-md" />
            <Shimmer className="h-20 w-4/5" rounded="rounded-lg" />
          </div>
          <div className="grid w-full grid-cols-2 gap-y-10 lg:flex lg:flex-1 lg:gap-y-0">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2 px-2">
                <Shimmer className="size-16" rounded="rounded-[10px]" />
                <Shimmer className="h-10 w-28" rounded="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than Expertise. — copy left, photograph bleeding off the right */}
      <section className="py-10 pl-6 sm:py-[64px] sm:pl-[64px] max-lg:pr-6 sm:max-lg:pr-[64px]">
        <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <div className="flex w-full flex-col gap-4 lg:w-[529px] lg:shrink-0">
            <Shimmer className="h-4 w-28" rounded="rounded-md" />
            <Shimmer className="h-20 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-16 w-full" rounded="rounded-md" />
            <Shimmer className="h-12 w-52" rounded="rounded-[8px]" />
          </div>
          <Shimmer
            className="aspect-[667/412] w-full lg:w-[667px] lg:shrink-0"
            rounded="rounded-none"
          />
        </div>
      </section>

      {/* Pale highlights strip */}
      <section className="bg-[#ecf2f9] px-6 py-8 sm:px-0 sm:py-[17px]">
        <div className="grid grid-cols-2 gap-y-8 sm:flex sm:justify-center sm:gap-y-0">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2 px-2">
              <Shimmer className="size-16" rounded="rounded-[10px]" />
              <Shimmer className="h-10 w-32" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Ideas That Inspire. — copy left, three insight tiles right */}
      <section className="px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <div className="flex w-full flex-col gap-4 lg:w-[448px] lg:shrink-0">
            <Shimmer className="h-4 w-36" rounded="rounded-md" />
            <Shimmer className="h-20 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-16 w-full" rounded="rounded-md" />
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:w-[850px] lg:shrink-0 lg:gap-[46px]">
            {[0, 1, 2].map((i) => (
              <Shimmer key={i} className="h-[338px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      <SkeletonFooter />
    </div>
  );
}
