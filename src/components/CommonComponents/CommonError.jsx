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
      <h1 className="text-7xl font-normal tracking-wide text-gray-400 md:text-8xl">
        404
      </h1>

      {/* Main Heading */}
      <h2 className="mt-4 text-xl font-semibold text-gray-900 md:text-2xl">
        Page Not Found
      </h2>

      {/* Description Text */}
      <p className="mt-4  text-sm leading-relaxed text-gray-600 md:text-base">
        The Page you are looking for doesn't exist or an other error occurred.
        <br />
        <span className="block mt-1">
          <a
            href="#"
            onClick={handleGoBack}
            className="cursor-pointer hover:underline"
          >
            Go back
          </a>
          , or head over to{' '}
          <a
            href="https://isupportz.com"
            className="text-blue-500 hover:underline"
          >
            isupportz.com
          </a>{' '}
          to choose a new direction.
        </span>
      </p>
    </div>
  );
}