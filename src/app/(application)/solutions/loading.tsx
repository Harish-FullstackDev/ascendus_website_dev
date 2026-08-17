import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonFeatureCard,
  SkeletonSplitSection,
  SkeletonLogoStrip,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function SolutionsLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Solutions Header Hero */}
      <div className="pt-16">
        <SkeletonHeroLight tall={true} />
      </div>

      {/* Animated Solutions Card Grid (6 solution cards) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex flex-col gap-4">
              <Shimmer className="h-12 w-12" rounded="rounded-2xl" />
              <Shimmer className="h-6 w-32" rounded="rounded-lg" />
              <Shimmer className="h-4 w-full" rounded="rounded-md" />
              <Shimmer className="h-4 w-5/6" rounded="rounded-md" />
              <div className="flex flex-col gap-2 mt-2">
                <Shimmer className="h-3 w-5/6" rounded="rounded-md" />
                <Shimmer className="h-3 w-4/5" rounded="rounded-md" />
              </div>
              <Shimmer className="h-10 w-full mt-4" rounded="rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Solution Card list */}
      <SkeletonLogoStrip />

      {/* Optimization Split Details Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSplitSection imageRight={true} />
        </div>
      </section>

      {/* Research and Integration Details Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={false} />
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
