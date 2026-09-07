import React from "react";
import {
  SkeletonNavbar,
  SkeletonFooter,
  Shimmer,
} from "@/components/skeletons/SkeletonPrimitives";

export default function ErrorsLoading() {
  return (
    <div className="relative w-full bg-white overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Navbar skeleton */}
      <SkeletonNavbar />

      {/* Screen error container */}
      <div className="flex flex-col items-center justify-center flex-grow py-32 px-6 text-center mt-16">
        <div className="max-w-md w-full flex flex-col items-center gap-5">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <Shimmer className="absolute inset-0" rounded="rounded-full" />
            <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin z-10" />
          </div>
          <Shimmer className="h-8 w-60" rounded="rounded-lg" />
          <Shimmer className="h-5 w-80" rounded="rounded-md" />
          <Shimmer className="h-5 w-64" rounded="rounded-md" />
          <div className="flex gap-4 mt-4">
            <Shimmer className="h-11 w-32" rounded="rounded-full" />
            <Shimmer className="h-11 w-32" rounded="rounded-full" />
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <SkeletonFooter />
    </div>
  );
}
