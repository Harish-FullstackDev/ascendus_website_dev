"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import SubServicePage from "@/components/Services/ServiceTemplate1/SubService/SubServicePage";
import { intelligentAutomationSubServices } from "@/components/Constants/Service/subServices/intelligentAutomationSubServices";

export default function Page() {
  const params = useParams();
  const subService = params?.subService;
  const data = intelligentAutomationSubServices[subService];

  if (!data) {
    notFound();
  }

  return <SubServicePage data={data} />;
}
