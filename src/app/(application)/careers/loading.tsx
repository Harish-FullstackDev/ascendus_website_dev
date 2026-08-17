import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonSectionHeading,
  SkeletonFeatureCard,
  SkeletonSplitSection,
  SkeletonJobRow,
  SkeletonFAQRow,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function CareerLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Hero Section */}
      <div className="pt-16">
        <SkeletonHeroLight tall={true} />
      </div>

      {/* Why Join Ascendus Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <SkeletonFeatureCard key={i} />
          ))}
        </div>
      </section>

      {/* About Career Split Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSplitSection imageRight={true} />
        </div>
      </section>

      {/* Job Board Opportunities Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        
        {/* Filter Bar placeholder */}
        <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
          <Shimmer className="h-10 w-24" rounded="rounded-full" />
          <Shimmer className="h-10 w-32" rounded="rounded-full" />
          <Shimmer className="h-10 w-28" rounded="rounded-full" />
          <Shimmer className="h-10 w-36" rounded="rounded-full" />
        </div>

        {/* Job Listings rows stack */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto mt-8">
          <SkeletonJobRow />
          <SkeletonJobRow />
          <SkeletonJobRow />
          <SkeletonJobRow />
          <SkeletonJobRow />
        </div>
      </section>

      {/* Joining Ascendus / CTA section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SkeletonSplitSection imageRight={false} />
        </div>
      </section>

      {/* FAQ accordion checklist */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <SkeletonSectionHeading />
        <div className="flex flex-col gap-4 mt-8">
          <SkeletonFAQRow />
          <SkeletonFAQRow />
          <SkeletonFAQRow />
          <SkeletonFAQRow />
          <SkeletonFAQRow />
        </div>
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
