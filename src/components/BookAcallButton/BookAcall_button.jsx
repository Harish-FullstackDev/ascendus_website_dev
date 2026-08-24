"use client";

import { Calendar } from "lucide-react";

const BookAcallButton = ({
  floating = false,
  isNavbarLight,
  setShowCalendly,
}) => {
  // Mirrors LanguageSelector's trigger button exactly — same glass
  // background, border, radius, and hover/active motion — so the two
  // navbar controls read as one family.
  const themeClass = isNavbarLight
    ? "bg-white/80 border-gray-200/30 text-gray-800 shadow-md backdrop-blur-md"
    : "bg-white/10 border-white/20 text-white backdrop-blur-md";

  return (
    <button
      type="button"
      onClick={() => setShowCalendly(true)}
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-none
        border transition-all duration-300 ease-in-out
        ${themeClass}
        hover:scale-105 active:scale-95
        hover:shadow-lg
        ${floating ? "fixed bottom-10 right-6 z-50" : ""}
      `}
    >
      <Calendar className="h-4 w-4" />
      <span className="text-sm whitespace-nowrap">Book a Call</span>
    </button>
  );
};

export default BookAcallButton;