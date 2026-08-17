"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import CMUIntroHeader from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/CMUIntroHeader";
import CMUTabSelector from "@/components/Services/EnterpriseTransformation/SAPCMU/CMUTabSelector";
import { TAB_INTRO } from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/tabContent";
import ConversionContent from "@/components/Services/EnterpriseTransformation/SAPCMU/Conversion/ConversionContent";
import MigrationContent from "@/components/Services/EnterpriseTransformation/SAPCMU/Migration/MigrationContent";
import UpgradationContent from "@/components/Services/EnterpriseTransformation/SAPCMU/Upgradation/UpgradationContent";

const TAB_CONTENT = {
  conversion: ConversionContent,
  migration: MigrationContent,
  upgradation: UpgradationContent,
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("conversion");
  const intro = TAB_INTRO[activeTab];
  const ActiveContent = TAB_CONTENT[activeTab];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <EnterprisePageHeader
        crumbs={[
          { label: "Enterprise Transformation", href: "/services/enterpriseTransformation" },
          { label: "SAP CMU" },
          { label: intro.label },
        ]}
      />
      <CMUIntroHeader
        tabId={activeTab}
        title={intro.title}
        subtitle={intro.subtitle}
        description={intro.description}
      />
      <CMUTabSelector active={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <ActiveContent />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Page;
