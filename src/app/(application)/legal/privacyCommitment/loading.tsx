import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function PrivacyPolicyCommitmentLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Light Hero Header */}
      <div className="pt-16">
        <SkeletonHeroLight tall={false} />
      </div>

      {/* Privacy Commitment Text skeleton */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
        {[0, 1].map((section) => (
          <div key={section} className="flex flex-col gap-4">
            <Shimmer className="h-6 w-64 md:w-80" rounded="rounded-lg" />
            <Shimmer className="h-4 w-full" rounded="rounded-md" />
            <Shimmer className="h-4 w-full" rounded="rounded-md" />
            <Shimmer className="h-4 w-5/6" rounded="rounded-md" />
            <div className="flex flex-col gap-2 pl-4 mt-2">
              <div className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <Shimmer className="h-3.5 w-4/5" rounded="rounded-md" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <Shimmer className="h-3.5 w-3/4" rounded="rounded-md" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <Shimmer className="h-3.5 w-5/6" rounded="rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
