"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import SubServicePage from "@/components/Services/ServiceTemplate2/SubService/SubServicePage";
import { managedServicesSubServices } from "@/components/Constants/Service/subServices/managedServicesSubServices";

export default function Page() {
  const params = useParams();
  const subService = params?.subService;
  const data = managedServicesSubServices[subService];

  if (!data) {
    notFound();
  }

  return <SubServicePage data={data} />;
}
