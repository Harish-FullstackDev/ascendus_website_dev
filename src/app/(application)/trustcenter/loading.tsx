import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonSplitSection,
  SkeletonTrustBadge,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function TrustCenterLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Hero Header */}
      <div className="pt-16">
        <SkeletonHeroLight tall={true} />
      </div>

      {/* Trust & Security Practices Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkeletonTrustBadge />
          <SkeletonTrustBadge />
          <SkeletonTrustBadge />
          <SkeletonTrustBadge />
        </div>
      </section>

      {/* Our Commitment split section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSplitSection imageRight={true} />
        </div>
      </section>

      {/* Security Architecture Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={false} />
      </section>

      {/* Privacy and Data Protection Grid */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSectionHeading />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
                <Shimmer className="h-10 w-10 bg-teal-50" rounded="rounded-xl" />
                <Shimmer className="h-6 w-36" rounded="rounded-lg" />
                <Shimmer className="h-4 w-full" rounded="rounded-md" />
                <Shimmer className="h-4 w-4/5" rounded="rounded-md" />
                <div className="flex flex-col gap-2 mt-2">
                  <Shimmer className="h-3 w-5/6" rounded="rounded-md" />
                  <Shimmer className="h-3 w-4/5" rounded="rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={true} />
      </section>

      {/* Quick Resources / Downloads List */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SkeletonSectionHeading />
          <div className="flex flex-col gap-4 mt-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Shimmer className="h-10 w-10 flex-shrink-0" rounded="rounded-lg" />
                  <div className="flex flex-col gap-1.5">
                    <Shimmer className="h-4 w-48" rounded="rounded-md" />
                    <Shimmer className="h-3.5 w-16" rounded="rounded-md" />
                  </div>
                </div>
                <Shimmer className="h-9 w-24 flex-shrink-0" rounded="rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
