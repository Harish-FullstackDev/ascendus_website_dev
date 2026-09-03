import React from "react";
import {
  SkeletonNavbar,
  SkeletonForm,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function ContactLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Hero Header Section Area */}
      <div className="pt-16">
        <div className="relative bg-slate-900 text-white min-h-[380px] pb-32 flex items-center justify-start px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl flex flex-col gap-4">
            <Shimmer className="h-4 w-28 bg-slate-700" rounded="rounded-full" />
            <Shimmer className="h-10 w-80 md:w-[480px] bg-slate-700" rounded="rounded-xl" />
            <Shimmer className="h-5 w-72 md:w-[385px] bg-slate-700" rounded="rounded-md" />
          </div>
        </div>
      </div>

      {/* Split Details Container matching structural margins */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Form Column (shows interactive form cards with negative margin) */}
            <div className="relative w-full lg:w-2/3 lg:order-2 -mt-44 md:-mt-48 lg:-mt-52 z-20">
              <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl">
                <SkeletonForm rows={5} />
              </div>
            </div>

            {/* Address Details Column */}
            <div className="w-full lg:w-1/3 lg:order-1 lg:sticky lg:top-4 flex flex-col gap-5 py-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Shimmer className="h-10 w-10 bg-blue-50" rounded="rounded-xl" />
                    <Shimmer className="h-5 w-32" rounded="rounded-md" />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <Shimmer className="h-3.5 w-full" rounded="rounded-md" />
                    <Shimmer className="h-3.5 w-4/5" rounded="rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="mt-12 md:mt-20">
        <SkeletonFooter />
      </div>
    </div>
  );
}
