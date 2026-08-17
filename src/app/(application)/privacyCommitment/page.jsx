"use client";

import PrivacyPolicyCommitment from "@/components/PrivacyPolicyCommitment/Content";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyCommitment />
      <Footer />
    </div>
  );
};

export default page;
