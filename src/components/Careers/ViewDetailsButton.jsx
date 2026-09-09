import Link from "next/link";

// 18x18 solid square + white chevron, taken verbatim from the Figma "Who We
// Are Button" component (Frame 2147240592) used across the job listing and
// job description "View Details" links.
const ChevronIcon = ({ className = "" }) => (
    <svg viewBox="0 0 18 18" fill="none" className={className}>
        <rect width="18" height="18" fill="#1C5F85" />
        <path d="M6.7657 13.7202L11.6748 8.81113L6.7657 3.90203" stroke="white" strokeWidth="1.22728" />
    </svg>
);

// Chevron exits right and reappears from the left on hover, matching the
// Figma spec direction; hover-out reverses it (exits left, re-enters right).
export default function ViewDetailsButton({ href, label = "View Details", className = "" }) {
    return (
        <Link
            href={href}
            className={`group inline-flex shrink-0 items-center gap-[7.8px] whitespace-nowrap text-[#1c5f85] text-sm font-light ${className}`}
        >
            <span>{label}</span>
            <span className="relative size-[18px] shrink-0 overflow-hidden">
                <ChevronIcon className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:translate-x-full" />
                <ChevronIcon className="absolute inset-0 size-full -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </span>
        </Link>
    );
}
