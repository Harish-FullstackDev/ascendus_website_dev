"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/CloudInfrastructure/ManagedCloudServices/Breadcrumbs";
import Hero from "@/components/Services/CloudInfrastructure/ManagedCloudServices/Hero";
import TransformSection from "@/components/Services/CloudInfrastructure/ManagedCloudServices/TransformSection";
import ManagedServicesGrid from "@/components/Services/CloudInfrastructure/ManagedCloudServices/ManagedServicesGrid";
import CloudManagementProcess from "@/components/Services/CloudInfrastructure/ManagedCloudServices/CloudManagementProcess";
import WhatWeManage from "@/components/Services/CloudInfrastructure/ManagedCloudServices/WhatWeManage";
import TransformationInsights from "@/components/Services/CloudInfrastructure/ManagedCloudServices/TransformationInsights";
import CTABanner from "@/components/Services/CloudInfrastructure/ManagedCloudServices/CTABanner";

const Page = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <Breadcrumbs />
            <Hero />
            <TransformSection />
            <ManagedServicesGrid />
            <CloudManagementProcess />
            <WhatWeManage />
            <TransformationInsights />
            <CTABanner />
            <Footer />
        </div>
    );
};

export default Page;

