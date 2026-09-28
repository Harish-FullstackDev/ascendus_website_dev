"use client"

import React from 'react';

export default function CommonError() {
  const handleGoBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center font-sans antialiased">
      {/* 404 Error Code */}
      <h1 className="text-7xl font-medium tracking-wide text-[#0061af]/30 md:text-8xl">
        404
      </h1>

      {/* Main Heading */}
      <h2 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
        Page Not Found
      </h2>

      {/* Description Text */}
      <p className="mt-4 text-sm leading-relaxed text-[#415773] md:text-base">
        The Page you are looking for doesn't exist or an other error occurred.
        <br />
        <span className="block mt-1">
          <a
            href="#"
            onClick={handleGoBack}
            className="cursor-pointer text-[#0061af] hover:underline"
          >
            Go back
          </a>
          , or head over to{' '}
          <a
            href="https://ascendus.sa"
            className="text-[#0061af] hover:underline"
          >
            ascendus.sa
          </a>{' '}
          to choose a new direction.
        </span>
      </p>
    </div>
  );
}