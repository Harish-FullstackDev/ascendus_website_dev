import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /solutions/ stack: hero band, an intro block over ten SAP
// solution tiles, the dark four-pillar band, then the full-bleed CTA.
export default function SolutionsLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* Comprehensive SAP Solutions — intro block plus ten tiles */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="flex max-w-[900px] flex-col gap-4">
          <Shimmer className="h-4 w-40" rounded="rounded-md" />
          <Shimmer className="h-8 w-4/5" rounded="rounded-lg" />
          <Shimmer className="h-12 w-full" rounded="rounded-md" />
        </div>
        <div className="mt-10 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 lg:gap-x-10 lg:gap-y-[51px] xl:gap-x-[53px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Shimmer key={i} className="h-[260px] w-full" rounded="rounded-[12px]" />
          ))}
        </div>
      </section>

      {/* More Than Implementation. A True Partner. — dark band, four pillars */}
      <section className="bg-[#00223d] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full flex-col gap-4 lg:w-[436px] lg:shrink-0">
            <Shimmer className="h-4 w-48" rounded="rounded-md" />
            <Shimmer className="h-24 w-4/5" rounded="rounded-lg" />
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

      {/* Ready to Unlock More with SAP? — full-bleed CTA band */}
      <Shimmer className="h-[420px] w-full" rounded="rounded-none" />

      <SkeletonFooter />
    </div>
  );
}
