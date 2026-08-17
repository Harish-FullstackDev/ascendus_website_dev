import React from "react";
import svgPaths from "./svgPaths";

export function IconOperations() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p37c5ac80} fill="white" />
      <path d={svgPaths.p21a07380} fill="white" />
    </svg>
  );
}

export function IconBusiness() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p3b697720} fill="white" />
      <path d={svgPaths.p1d2f6280} fill="white" />
      <path d={svgPaths.p3c385900} fill="white" />
    </svg>
  );
}

export function IconCustomer() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p1dc31000} fill="white" />
    </svg>
  );
}

export function IconWorkforce() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p28691880} fill="white" />
    </svg>
  );
}

export function IconAcceleration() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p38166400} fill="white" />
    </svg>
  );
}

export function IconGrowth() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
      <path d={svgPaths.p2ba92300} fill="white" />
    </svg>
  );
}

export function IconVision() {
  return (
    <svg viewBox="0 0 65 62" fill="none" className="w-full h-full">
      <rect width="65" height="62" rx="10" fill="white" fillOpacity="0.2" />
      <path d={svgPaths.p281899f0} fill="white" />
    </svg>
  );
}

export function IconOpportunity() {
  return (
    <svg viewBox="0 0 65 62" fill="none" className="w-full h-full">
      <rect width="65" height="62" rx="10" fill="white" fillOpacity="0.2" />
      <path d={svgPaths.p5f4d80} fill="white" />
    </svg>
  );
}

export function IconRoadmap() {
  return (
    <svg viewBox="0 0 35 35" fill="none" className="w-full h-full">
      <path d={svgPaths.p909c100} fill="white" />
    </svg>
  );
}

export function IconProcess() {
  return (
    <svg viewBox="0 0 34 34" fill="none" className="w-full h-full">
      <path d={svgPaths.p45fc100} fill="white" />
    </svg>
  );
}

export function IconAI() {
  return (
    <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
      <path clipRule="evenodd" fillRule="evenodd" d={svgPaths.p11f3f280} fill="white" />
    </svg>
  );
}

export function IconEvolution() {
  return (
    <svg viewBox="0 0 35 35" fill="none" className="w-full h-full">
      <path d={svgPaths.p2770f680} fill="white" />
    </svg>
  );
}

export function BulletArrow({ color = "#0061AF" }) {
  return (
    <svg viewBox="0 0 16.481 14.74" fill="none" className="w-[14px] h-[13px] shrink-0 mt-[14px]">
      <path d={svgPaths.p2e20b700} fill={color} fillOpacity="0.5" />
    </svg>
  );
}

export function ImpactIconGlobe() {
  return (
    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
      <path d={svgPaths.p356b80} fill="white" />
      <path d={svgPaths.p4719000} fill="white" />
      <path d={svgPaths.p22402900} fill="white" />
    </svg>
  );
}

export function ImpactIconInvestments() {
  const paths = [
    svgPaths.p3d570470,
    svgPaths.p1ed9de70,
    svgPaths.p3c6f9600,
    svgPaths.p241b4a00,
    svgPaths.p2b246400,
    svgPaths.p12cbde00,
    svgPaths.p2102b400,
    svgPaths.pbe58880,
    svgPaths.p3b192e00,
    svgPaths.p1a758000,
    svgPaths.p14d7c080,
    svgPaths.p32192c80,
    svgPaths.p2b17b932,
    svgPaths.p2b9f2b80,
    svgPaths.p1e1d9300,
    svgPaths.p2884ff00,
  ];
  return (
    <svg viewBox="0 0 52.9374 60.0001" fill="none" className="w-full h-full">
      {paths.map((d, i) => (
        <path key={i} d={d} fill="white" />
      ))}
    </svg>
  );
}

export function ImpactIconRisk() {
  return (
    <svg viewBox="0 0 53 53" fill="none" className="w-full h-full">
      <path d={svgPaths.p3b625f00} fill="white" />
    </svg>
  );
}

export function ImpactIconData() {
  return (
    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
      <path d={svgPaths.p39a12500} fill="white" />
    </svg>
  );
}

export function ImpactIconUsers() {
  return (
    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
      <path d={svgPaths.p1e758b00} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p1ac6a080} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p175ff50} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p92c0d00} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImpactIconStream() {
  return (
    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
      <path d={svgPaths.p28bc5700} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p30678680} stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.pdfd9500} stroke="white" strokeWidth="3.75" />
    </svg>
  );
}
