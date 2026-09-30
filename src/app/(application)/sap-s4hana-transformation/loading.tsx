import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

// Mirrors the /sap-s4hana-transformation/ stack: hero, the benefits grid, the
// challenge cards over the starfield band, the sticky capability list, the team
// photo, the four stages, the dark route band, integration, then testing.
export default function SapS4HanaTransformationLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroLight tall={true} />

      {/* One Live View of the Business — copy left, 2x2 cards right */}
      <section className="bg-[#f8f8f8] px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <div className="flex gap-8 max-lg:flex-col">
          <div className="flex w-full flex-col gap-4 lg:w-[495px] lg:shrink-0">
            <Shimmer className="h-4 w-48" rounded="rounded-md" />
            <Shimmer className="h-20 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-24 w-full" rounded="rounded-md" />
            <Shimmer className="h-10 w-56" rounded="rounded-[8px]" />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <Shimmer key={i} className="h-[197px] w-full" rounded="rounded-[16px]" />
            ))}
          </div>
        </div>
      </section>

      {/* What Stands Between You and a Modern Core — five cards over a dark band */}
      <section className="bg-[#f1f3f5] pt-10 sm:pt-[64px]">
        <div className="flex flex-col gap-4 px-6 sm:px-[64px]">
          <Shimmer className="h-4 w-44" rounded="rounded-md" />
          <Shimmer className="h-16 w-2/5" rounded="rounded-lg" />
        </div>
        <div className="relative mt-16 pb-[105px]">
          <div className="absolute inset-x-0 bottom-0 top-[103px] bg-[#0b1220]" />
          <div className="relative grid grid-cols-1 gap-6 px-6 pt-[23px] sm:grid-cols-2 sm:px-8 lg:grid-cols-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Shimmer key={i} className="h-[212px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      {/* One Team From First Assessment — sticky intro, capability list */}
      <section className="px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <div className="flex justify-between gap-12 max-lg:flex-col">
          <div className="flex w-full flex-col gap-4 lg:w-[497px]">
            <Shimmer className="h-4 w-44" rounded="rounded-md" />
            <Shimmer className="h-20 w-4/5" rounded="rounded-lg" />
            <Shimmer className="h-12 w-full" rounded="rounded-md" />
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-[605px]">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Shimmer key={i} className="h-[104px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Team photo band */}
      <Shimmer className="aspect-[3/2] w-full md:aspect-[1440/557]" rounded="rounded-none" />

      {/* Four stages */}
      <section className="px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <Shimmer className="h-16 w-2/5" rounded="rounded-lg" />
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-6">
              <Shimmer className="size-[72px]" rounded="rounded-[12px]" />
              <Shimmer className="h-7 w-28" rounded="rounded-md" />
              <Shimmer className="h-20 w-48" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Pick the route — dark band */}
      <section className="bg-[#00223d] px-6 sm:px-[64px] py-10 sm:py-[64px]">
        <Shimmer className="h-16 w-1/2" rounded="rounded-lg" />
        <div className="mt-16 flex justify-between gap-10 max-lg:flex-col">
          <Shimmer className="h-[219px] w-full lg:w-[669px]" rounded="rounded-lg" />
          <Shimmer className="h-[200px] w-[300px]" rounded="rounded-[24px]" />
        </div>
      </section>

      {/* Integration — image panel plus six points */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-[64px] sm:pb-[32px]">
        <div className="flex gap-12 max-xl:flex-col">
          <Shimmer className="h-[470px] w-full xl:w-[438px] xl:shrink-0" rounded="rounded-[28px]" />
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Shimmer key={i} className="h-[96px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Go live with confidence — copy, photo, five checks */}
      <section className="px-6 sm:px-[64px] pt-10 pb-10 sm:pt-[32px] sm:pb-[64px]">
        <div className="flex gap-12 max-xl:flex-col">
          <Shimmer className="h-[200px] w-full xl:h-[678px] xl:w-[382px]" rounded="rounded-lg" />
          <Shimmer className="h-[678px] w-full xl:w-[345px]" rounded="rounded-[24px]" />
          <div className="flex flex-1 flex-col gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Shimmer key={i} className="h-[129px] w-full" rounded="rounded-[12px]" />
            ))}
          </div>
        </div>
      </section>

      <SkeletonFooter />
    </div>
  );
}
