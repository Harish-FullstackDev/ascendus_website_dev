import React from "react";
import {
  SkeletonNavbar,
  SkeletonHeroLight,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function TermsOfServiceLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Light Hero Header */}
      <div className="pt-16">
        <SkeletonHeroLight tall={false} />
      </div>

      {/* Terms of Service segments skeleton */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
        {[0, 1, 2, 3, 4].map((section) => (
          <div key={section} className="flex flex-col gap-4">
            <Shimmer className="h-6 w-64 md:w-80" rounded="rounded-lg" />
            <Shimmer className="h-4 w-full" rounded="rounded-md" />
            <Shimmer className="h-4 w-full" rounded="rounded-md" />
            <Shimmer className="h-4 w-5/6" rounded="rounded-md" />
          </div>
        ))}
      </main>

      {/* Footer is not explicitly inside termsOfService/page.jsx, but standard layouts has it */}
      <SkeletonFooter />
    </div>
  );
}
