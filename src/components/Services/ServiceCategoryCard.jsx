"use client";

import Image from "next/image";

// Figma's active card (370:3401) paints a radial gradient anchored on the
// card's top-right corner: 465x414px radii on a 429x160 card. Those radii are
// expressed as percentages of the card's own box so the gradient keeps the same
// shape once the card becomes fluid below 1440.
const ACTIVE_GRADIENT =
    "radial-gradient(ellipse 108% 259% at 100% 0%, #0061AF 0%, #003056 100%)";

// One of the three category tabs in "Three Ways We Create Value". Figma only
// draws two states — the dark active card and the light resting card — so a
// category with no rail content yet (`available: false`) renders in the resting
// state and is not focusable, rather than looking clickable and doing nothing.
export default function ServiceCategoryCard({ category, isActive, onSelect }) {
    const { available, description, icon, iconIsLogo, title, titleLines } = category;
    const lines = titleLines ?? [title];

    return (
        <button
            type="button"
            aria-pressed={isActive}
            disabled={!available}
            onClick={available ? onSelect : undefined}
            title={available ? undefined : `${title} — page content coming soon`}
            className={`flex min-h-[160px] flex-col items-start justify-between rounded-[12px] border border-[rgba(30,58,138,0.6)] p-[25px] text-left shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-[background,box-shadow] duration-500 ease-out ${available ? "cursor-pointer" : "cursor-default"
                } ${isActive ? "" : "bg-white"}`}
            style={isActive ? { backgroundImage: ACTIVE_GRADIENT } : undefined}
        >
            <div className="flex w-full items-start justify-between">
                {/* min-w-0 on both the row and the label: a flex child defaults to
                    min-width:auto, which refuses to shrink below its text and
                    pushes the title out past the card's right edge once the cards
                    narrow. */}
                <div className="flex min-w-0 items-center gap-[14px]">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(96,165,250,0.3)] bg-[rgba(59,130,246,0.2)]">
                        {/* The SAP wordmark fills its tile edge to edge; the two line
                            glyphs sit at Figma's 24px inside the same 40px tile. */}
                        <Image
                            src={icon}
                            alt=""
                            className={iconIsLogo ? "h-[15px] w-[30px]" : "size-6"}
                        />
                    </span>

                    <span
                        className={`min-w-0 text-[18px] font-medium leading-[1.2] ${isActive ? "text-white" : "text-[#0e2b4b]"
                            }`}
                    >
                        {lines.map((line, index) => (
                            <span key={line} className="block">
                                {line}
                                {index < lines.length - 1 ? " " : null}
                            </span>
                        ))}
                    </span>
                </div>

                {/* Figma puts a 28px white/10 disc with a white chevron on the two
                    resting cards. On a white card both are invisible — the design's
                    own render shows nothing there — so nothing is drawn. Raise it
                    with the designer rather than inventing a visible affordance. */}
            </div>

            <p
                className={`text-[14px] font-normal leading-[1.4] ${isActive ? "text-white" : "text-[#0e2b4b]"
                    }`}
            >
                {description}
            </p>
        </button>
    );
}
