"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import SubServicePage from "@/components/Services/ServiceTemplate1/SubService/SubServicePage";
import { dataIntelligenceSubServices } from "@/components/Constants/Service/subServices/dataIntelligenceSubServices";

export default function Page() {
  const params = useParams();
  const subService = params?.subService;
  const data = dataIntelligenceSubServices[subService];

  if (!data) {
    notFound();
  }

  return <SubServicePage data={data} />;
}
