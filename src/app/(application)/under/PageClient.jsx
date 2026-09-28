"use client";

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b] mb-6">
          We're sorry! The site is under maintenance right now.
        </h1>

        {/* Description */}
        <div className="space-y-1 text-[#415773] text-base md:text-lg">
          <p>
            Our website is currently down for scheduled maintenance.
            We'll return shortly. We appreciate your patience.
          </p>

          <p>Contact us for further information.</p>

          <Link
            href="mailto:admin@ascendus.sa"
            className="text-[#0061af] hover:text-[#00509a] transition-colors font-medium"
          >
            admin@ascendus.sa
          </Link>
        </div>

        {/* Social Section */}
        <div className="mt-20">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b] mb-8">
            Follow Us!
          </h2>

          <div className="flex justify-center items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0061af] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/ascendus.ksa"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0061af] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://x.com/ascendus_ksa"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0061af] hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
            >
              <FaXTwitter size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}