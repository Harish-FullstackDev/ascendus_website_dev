"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import SubServicePage from "@/components/Services/ServiceTemplate1/SubService/SubServicePage";
import { businessAdvisorySubServices } from "@/components/Constants/Service/subServices/businessAdvisorySubServices";

export default function Page() {
  const params = useParams();
  const subService = params?.subService;
  const data = businessAdvisorySubServices[subService];

  if (!data) {
    notFound();
  }

  return <SubServicePage data={data} />;
}
