"use client";

import SecurityPrivacyPolicy from "@/components/SecurityPrivacyPolicy/Content";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <SecurityPrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
