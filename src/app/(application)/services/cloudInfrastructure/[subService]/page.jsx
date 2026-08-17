"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import SubServicePage from "@/components/Services/ServiceTemplate3/SubService/SubServicePage";
import { cloudInfrastructureSubServices } from "@/components/Constants/Service/subServices/cloudInfrastructureSubServices";

export default function Page() {
  const params = useParams();
  const subService = params?.subService;
  const data = cloudInfrastructureSubServices[subService];

  if (!data) {
    notFound();
  }

  return <SubServicePage data={data} />;
}
