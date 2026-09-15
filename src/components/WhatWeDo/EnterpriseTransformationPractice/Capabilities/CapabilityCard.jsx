"use client";

import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const REVEAL_EASE = [0.22, 1, 0.36, 1];

const CapabilityCard = forwardRef(function CapabilityCard(
    { number, title, description, image, href, isActive, isPassed, showDivider, hairline },
    ref
) {
    return (
        // isPassed cards (scrolled past, above the active one) collapse to zero
        // height. That keeps the active card always at offset 0 in the stack —
        // exactly like card 1, which is what makes its centering shift ~0 and
        // its pin release seamless with no unwind needed.
        <motion.div
            ref={ref}
            initial={false}
            animate={{ height: isPassed ? 0 : "auto", opacity: isPassed ? 0 : 1 }}
            transition={{ duration: 0.8, ease: REVEAL_EASE }}
            className="w-full overflow-hidden"
        >
            {/* The divider is a real element at the very top of the card (every
                card but the first), not a `border-t`, and its height is an exact
                whole number of DEVICE pixels rather than a 1px CSS hairline.
                A 1px CSS border is 1.25 device pixels on a 125%-scaled display,
                so it can never align to the device grid — and once this track is
                composited (it carries a GSAP transform) that misalignment lets the
                rasteriser anti-alias the line away completely, which is what made
                it vanish for the whole time a card was pinned. Sizing it in whole
                device pixels means it always covers full device rows and cannot be
                rounded out of existence.
                It stays at the TOP of the card for the same reason the border did:
                the fold animation's overflow:hidden clips from the bottom, so a
                bottom-edge line would be cut the moment a card starts closing. */}
            {showDivider && (
                <div
                    aria-hidden="true"
                    className="w-full shrink-0 bg-[#8794a3]"
                    style={{ height: `${hairline}px` }}
                />
            )}
            <div
                className="flex flex-col lg:flex-row w-full items-start lg:justify-between gap-6 lg:gap-10 py-6"
            >
                {/* Mobile-only duplicate of the number+title below (hidden below lg) —
                    on mobile the image sits below the number/title rather than above. */}
                <div className="flex flex-col gap-5 lg:hidden">
                    <span className="text-[#73A8D3] text-2xl font-medium leading-[1.5]">{number}</span>
                    <h2 className="text-[#2E3033] text-lg font-semibold leading-[1.5]">{title}</h2>
                </div>

                {/* 272x459 in Figma, kept as an aspect ratio on a responsive width
                    so it scales with the viewport instead of distorting. */}
                <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: REVEAL_EASE }}
                    className="overflow-hidden w-[200px] sm:w-[240px] lg:w-[272px] shrink-0 self-start"
                >
                    <div
                        className={`relative w-full aspect-[272/459] transition-[transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "duration-[800ms] delay-[100ms] scale-100" : "duration-[400ms] scale-[0.97]"
                            }`}
                    >
                        <Image src={image} alt={`${title} capability`} fill className="object-cover" />
                    </div>
                </motion.div>

                <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[773px]">
                    {/* Number and title stay outside the collapsible — a closed card
                        still reads as "02 Microsoft Services"; only the description
                        and button fold away. */}
                    <span className="hidden lg:inline text-[#73A8D3] text-2xl sm:text-[28px] font-medium leading-[1.5]">
                        {number}
                    </span>
                    <h2 className="hidden lg:block mt-5 text-[#2E3033] text-2xl font-semibold leading-[1.5]">{title}</h2>

                    <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: REVEAL_EASE }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-8 pt-2.5">
                            <div className="text-[#55595E] text-lg font-light leading-normal">
                                {description.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            <Link
                                href={href}
                                onClick={(event) => event.stopPropagation()}
                                className="inline-flex h-11 w-[175px] shrink-0 items-center justify-center border border-[#d0d0d0] bg-[#002C4F] px-6 text-lg font-light text-white text-center transition-colors hover:bg-white hover:text-[#0a3a52]"
                            >
                                View More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
});

export default CapabilityCard;
