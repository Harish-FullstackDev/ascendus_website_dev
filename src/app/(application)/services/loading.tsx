import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroDark,
  SkeletonSectionHeading,
  SkeletonServiceCard,
  SkeletonSplitSection,
  SkeletonTimelineStep,
  SkeletonLogoStrip,
  SkeletonCTACard,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function ServicesLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Dark/video Hero Section (matches h-[75vh]) */}
      <div className="relative h-[75vh] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0">
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="flex flex-col gap-4 max-w-2xl">
            <Shimmer className="h-4 w-32 bg-slate-700" rounded="rounded-full" />
            <Shimmer className="h-10 w-full bg-slate-700" rounded="rounded-xl" />
            <Shimmer className="h-10 w-4/5 bg-slate-700" rounded="rounded-xl" />
            <Shimmer className="h-5 w-full bg-slate-700 mt-2" rounded="rounded-md" />
            <Shimmer className="h-5 w-5/6 bg-slate-700" rounded="rounded-md" />
          </div>
        </div>
      </div>

      {/* Our Expertise Service Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
        </div>
      </section>

      {/* Business Ecosystem Section (Split logic) */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSplitSection imageRight={true} />
        </div>
      </section>

      {/* SAP AI Capabilities Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonSplitSection imageRight={false} />
      </section>

      {/* Business Growth Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SkeletonSectionHeading />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3 shadow-sm">
                <Shimmer className="h-10 w-10 bg-blue-50" rounded="rounded-xl" />
                <Shimmer className="h-5 w-28" rounded="rounded-md" />
                <Shimmer className="h-3.5 w-full" rounded="rounded-md" />
                <Shimmer className="h-3.5 w-4/5" rounded="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Timeline Steps Section */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <SkeletonSectionHeading />
        <div className="flex flex-col gap-8 mt-12">
          <SkeletonTimelineStep />
          <SkeletonTimelineStep />
          <SkeletonTimelineStep />
          <SkeletonTimelineStep />
        </div>
      </section>

      {/* Technologies We Master Logo strip */}
      <SkeletonLogoStrip />

      {/* Consultation Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <SkeletonCTACard />
      </section>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
