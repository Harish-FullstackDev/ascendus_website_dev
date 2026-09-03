import React from "react";
import {
  SkeletonNavbar,
  SkeletonForm,
  SkeletonFooter,
  SkeletonHeroDark,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function BookACallLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Header section (Dark Hero) */}
      <div className="pt-16">
        <div className="relative bg-slate-900 text-white min-h-[380px] pb-32 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl flex flex-col items-center gap-4">
            <Shimmer className="h-4 w-28 bg-slate-700" rounded="rounded-full" />
            <Shimmer className="h-10 w-80 md:w-[480px] bg-slate-700" rounded="rounded-xl" />
            <Shimmer className="h-5 w-72 md:w-[385px] bg-slate-700" rounded="rounded-md" />
          </div>
        </div>
      </div>

      {/* Main Content Section - Form with overlaps */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full -mt-24 md:-mt-28 lg:-mt-32 z-20">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl">
              <SkeletonForm rows={5} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional info / Calendly booking layout slot */}
      <section className="py-20 px-6 max-w-4xl mx-auto flex flex-col gap-6 items-center">
        <Shimmer className="h-7 w-48" rounded="rounded-lg" />
        <Shimmer className="h-4.5 w-64" rounded="rounded-md" />
        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl h-80 relative overflow-hidden flex items-center justify-center mt-4">
          <Shimmer className="absolute inset-0" rounded="rounded-2xl" />
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin z-10" />
        </div>
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
