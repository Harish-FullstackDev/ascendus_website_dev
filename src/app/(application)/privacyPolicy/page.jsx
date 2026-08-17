"use client";

import PrivacyPolicy from "@/components/PrivacyPolicy/Content";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
