import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonSplitSection,
  SkeletonFeatureCard,
  SkeletonMap,
  SkeletonCTACard,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function AboutUsLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Light Hero Section */}
      <div className="pt-16">
        <SkeletonHeroLight tall={true} />
      </div>

      {/* Enterprise / Stats Cards Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl flex flex-col gap-3">
              <Shimmer className="h-12 w-12" rounded="rounded-2xl" />
              <Shimmer className="h-6 w-32" rounded="rounded-lg" />
              <Shimmer className="h-4 w-full" rounded="rounded-md" />
              <Shimmer className="h-4 w-4/5" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section (Split text | image) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={true} />
      </section>

      {/* CEO Message Section (Split image | text) */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSplitSection imageRight={false} />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {[0, 1].map((i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
              <Shimmer className="h-10 w-10 animate-pulse bg-blue-100" rounded="rounded-xl" />
              <Shimmer className="h-6 w-40" rounded="rounded-lg" />
              <Shimmer className="h-4 w-full" rounded="rounded-md" />
              <Shimmer className="h-4 w-full" rounded="rounded-md" />
              <Shimmer className="h-4 w-5/6" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSectionHeading />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <SkeletonFeatureCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map placeholder */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="mt-12">
          <SkeletonMap />
        </div>
      </section>

      {/* Common Consultation (CTA demo invitation) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonCTACard />
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
