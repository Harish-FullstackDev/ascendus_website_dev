import React from "react";
import svgPaths from "./svgPaths";

export function AIStrategyIcon() {
  return (
    <svg viewBox="0 0 30 30" fill="none" className="w-7 h-7">
      <path d={svgPaths.p3085b00} fill="black" />
    </svg>
  );
}

export function GenAIIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="black" strokeWidth="2" strokeLinejoin="round" className="w-7 h-7">
      <path d={svgPaths.p498bb00} />
    </svg>
  );
}

export function MLIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className="w-7 h-7"
    >
      <path d={svgPaths.p7a01c00} />
      <path d={svgPaths.p35040600} />
      <path d={svgPaths.p3c708200} />
      <path d={svgPaths.p1866de00} />
    </svg>
  );
}

export function BusinessAIIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className="w-7 h-7"
    >
      <path d={svgPaths.p2df73180} />
    </svg>
  );
}
