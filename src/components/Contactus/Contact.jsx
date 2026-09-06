"use client";
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Footer/Footer';
import ContactInfo from './Address';
import ContactForm from './Form';
import ContactHeader from './Header';

const HERO_LEFT_INSET_PX = 64;

const ContactUs = () => {
  const infoColRef = useRef(null);
  const [infoColShift, setInfoColShift] = useState(0);

  useEffect(() => {
    const alignInfoColToHero = () => {
      if (!infoColRef.current) return;
      if (window.innerWidth < 1024) {
        setInfoColShift(0);
        return;
      }
      const currentLeft = infoColRef.current.getBoundingClientRect().left;
      setInfoColShift(HERO_LEFT_INSET_PX - currentLeft);
    };

    alignInfoColToHero();
    window.addEventListener('resize', alignInfoColToHero);
    return () => window.removeEventListener('resize', alignInfoColToHero);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden overflow-hidden">
      {/* Header Section with Hero */}
      <ContactHeader />

      {/* Main Content Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
            {/* Contact Form - Shows first on mobile, second on desktop */}
            <div className="relative w-full lg:w-2/3 lg:pl-4 lg:order-2 -mt-40 sm:-mt-40 md:-mt-48 lg:-mt-50 xl:-mt-50 z-30">
              <ContactForm />
            </div>

            {/* Contact Information - Shows second on mobile, first on desktop */}
            <div
              ref={infoColRef}
              className="w-full lg:w-1/3 lg:pr-4 lg:order-1"
              style={{ position: 'relative', left: infoColShift }}
            >
              <div className="lg:sticky lg:top-4">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-10 lg:mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
