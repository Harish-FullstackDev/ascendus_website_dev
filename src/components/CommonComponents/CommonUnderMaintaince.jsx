"use client";

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          We're sorry! The site is under maintenance right now.
        </h1>

        {/* Description */}
        <div className="space-y-1 text-gray-600 text-base md:text-lg">
          <p>
            Our website is currently down for scheduled maintenance.
            We'll return shortly. We appreciate your patience.
          </p>

          <p>Contact us for further information.</p>

          <Link
            href="mailto:admin@ascendus.tech"
            className="text-sky-600 hover:text-sky-700 transition-colors font-medium"
          >
            admin@ascendus.tech
          </Link>
        </div>

        {/* Social Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Follow Us!
          </h2>

          <div className="flex justify-center items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0A66C2] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0A66C2] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0A66C2] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaXTwitter size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}