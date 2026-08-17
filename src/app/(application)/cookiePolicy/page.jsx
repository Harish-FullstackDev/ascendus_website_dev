"use client";

import CookiePolicy from "@/components/CookiePolicy/Content";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookiePolicy />
      <Footer />
    </div>
  );
};

export default page;
