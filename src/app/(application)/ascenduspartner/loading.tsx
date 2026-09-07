import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonForm,
  SkeletonProgressStep,
  SkeletonServiceCard,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function PartnerLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Hero Header page section */}
      <div className="pt-16">
        <div className="relative bg-slate-900 text-white min-h-[360px] pb-16 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
            <Shimmer className="h-4 w-28 bg-slate-700" rounded="rounded-full" />
            <Shimmer className="h-10 w-80 md:w-[480px] bg-slate-700" rounded="rounded-xl" />
            <Shimmer className="h-5 w-72 md:w-[380px] bg-slate-700" rounded="rounded-md" />
          </div>
        </div>
      </div>

      {/* Floating Bottom Card */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-4 items-center">
              <Shimmer className="h-12 w-12 flex-shrink-0" rounded="rounded-xl" />
              <div className="flex-grow flex flex-col gap-2">
                <Shimmer className="h-4.5 w-24" rounded="rounded-md" />
                <Shimmer className="h-3.5 w-16" rounded="rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Application Form */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <SkeletonSectionHeading />
        <div className="mt-12 bg-white border border-slate-150 rounded-3xl p-8 md:p-12 shadow-sm">
          <SkeletonForm rows={6} />
        </div>
      </section>

      {/* Partnership Progress Milestones */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSectionHeading />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <SkeletonProgressStep />
            <SkeletonProgressStep />
            <SkeletonProgressStep />
            <SkeletonProgressStep />
          </div>
        </div>
      </section>

      {/* Partnership Success / Case Studies */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
        </div>
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
