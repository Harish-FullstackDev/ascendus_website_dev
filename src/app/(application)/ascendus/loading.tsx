import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroDark,
  SkeletonSectionHeading,
  SkeletonServiceCard,
  SkeletonStatCard,
  SkeletonSplitSection,
  SkeletonCTACard,
  SkeletonFooter,
} from "@/components/skeletons/SkeletonPrimitives";

export default function AscendusLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      <SkeletonNavbar />

      <SkeletonHeroDark />

      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={true} />
      </section>

      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonServiceCard key={i} />
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonStatCard key={i} />
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <SkeletonCTACard />
      </section>

      <SkeletonFooter />
    </div>
  );
}
