"use client";
import Bookacall from '@/components/BookACall/Bookacall';
import Form from '@/components/BookACall/Form';
import Header from '@/components/BookACall/Header';
import Footer from '@/components/Footer/Footer';
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-hidden">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div className="relative  ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form with negative margin to overlap header */}
          <div className="relative w-full -mt-120 sm:-mt-10 md:-mt-48 lg:-mt-60">
            <Form />
          </div>
        </div>
      </div>

      {/* Book a Call Section */}
      <div className="pt-20 sm:pt-16 md:pt-20">
        <Bookacall />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page