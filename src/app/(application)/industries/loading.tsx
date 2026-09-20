import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /industries/ stack: hero with three figures, ten industry photo
// tiles under an intro block, the dark four-outcome band, the solution split
// with three more tiles, then the CTA band.
export default function IndustriesLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* A Collaborative Ecosystem — intro block plus ten photo tiles */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="flex max-w-[805px] flex-col gap-4">
          <Shimmer className="h-4 w-40" rounded="rounded-md" />
          <Shimmer className="h-8 w-4/5" rounded="rounded-lg" />
          <Shimmer className="h-12 w-full" rounded="rounded-md" />
        </div>
        <div className="mt-10 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-x-[18px] lg:gap-y-8">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Shimmer key={i} className="aspect-[252/315] w-full" rounded="rounded-[12px]" />
          ))}
        </div>
      </section>

      {/* Industry Expertise That Delivers Outcomes — dark band, four outcomes */}
      <section className="bg-[#00223d] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,436px)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <Shimmer className="h-4 w-36" rounded="rounded-md" />
            <Shimmer className="h-16 w-4/5" rounded="rounded-lg" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2 px-2">
                <Shimmer className="size-16" rounded="rounded-[10px]" />
                <Shimmer className="h-10 w-28" rounded="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges. Real Solution — copy column plus three tiles */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,434px)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <Shimmer className="h-4 w-24" rounded="rounded-md" />
            <Shimmer className="h-16 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-16 w-full" rounded="rounded-md" />
            <Shimmer className="h-12 w-44" rounded="rounded-[4px]" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[0, 1, 2].map((i) => (
              <Shimmer key={i} className="aspect-[252/315] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Your Industry. Our Expertise. — full-bleed CTA band */}
      <Shimmer className="h-[420px] w-full" rounded="rounded-none" />

      <SkeletonFooter />
    </div>
  );
}
