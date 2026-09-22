"use client";

import Image from "next/image";
import Link from "next/link";

import arrowOnPrimary from "@/assets/Solution/icons/arrow-right-on-primary.svg";
import arrowOnLight from "@/assets/Solution/icons/arrow-right-on-light.svg";

// One shared timing for the whole card, so every layer moves as a single
// gesture instead of several elements each doing their own thing.
//
// 900ms with an ease-out-quad curve. The curve matters as much as the length:
// `cubic-bezier(0.32, 0.72, 0, 1)` (Apple's sheet curve) was used at 680ms and
// is too front-loaded to stretch — it covers ~90% of the travel in the first
// third and then crawls, so lengthening it just lengthens the crawl. This curve
// starts immediately, with no ease-in lag on the hover, and spreads the
// remaining distance evenly as it decelerates, which is what makes a slow move
// read as rich rather than sluggish.
const DURATION = "duration-[650ms]";
const CURVE = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";
const MOTION = `${DURATION} ${CURVE}`;

// The photograph is clipped out of the card's top 60% while the curtain is
// down, and un-clipped for the hover. See the note on the <Image> below — this
// is what stops it showing through the top corners at rest.
const PHOTO_CLIP_REST = "[clip-path:inset(60%_0_0_0)]";
const PHOTO_CLIP_HOVER = "group-hover:[clip-path:inset(0%_0_0_0)]";
// No duration, only a delay, and only on the way out: entering, the photo is
// uncovered the instant the pointer arrives (it is still hidden under the
// curtain at that point, so nothing pops); leaving, it waits for the curtain to
// come all the way back down before re-clipping, otherwise the top of the photo
// would vanish while it was still on show.
const PHOTO_CLIP_MOTION = "[transition:clip-path_0s_960ms] group-hover:[transition:clip-path_0s_0s]";

/**
 * One SAP solution tile from "Comprehensive SAP Solutions for Every Business Need."
 *
 * Resting state (Figma 333:239) and hover state (Figma 337:552) are the same
 * node with two different fills, so both live in this one component:
 *
 *  - At rest a solid #f8f8f8 panel covers the top 71% of the card, leaving a
 *    strip of the photograph showing along the bottom. Label, copy and the
 *    round arrow button sit on that panel.
 *  - On hover the panel fades out and lifts away, uncovering the full photo,
 *    and a dark top-down scrim fades in behind the copy. Label and copy turn
 *    white and the arrow button inverts to a white disc with a blue glyph.
 *
 * Both arrow glyphs are real Figma exports that cross-fade — the disc is not
 * recoloured with a filter, because the two states differ in stroke colour as
 * well as background.
 */
export default function SAPSolutionCard({ description, href = "/contact-us/", image, title }) {
    return (
        <Link
            href={href}
            className="group relative flex min-h-[260px] flex-col rounded-[12px] bg-[#f8f8f8] p-[18.7px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0061af]"
        >
            {/* The photo, the scrim, the curtain AND the card's own outline all
                live on this one element. That is not tidiness — it is what
                keeps the rounded corner clean at every zoom level.

                Geometry matches Figma's card exactly (333:249): a 220x260 box
                whose 1px outline is drawn *inside* it, leaving a 218x258
                interior. Hence `inset-px` and the 11px radius — 12px minus the
                1px outline, which is the inner radius a real border produces —
                with the ring's 1px spread then landing its outer edge back on
                the card's own 220x260 bounds at radius 12. The card's padding
                is 18.7px rather than Figma's 17.7px for the same reason: the
                outline takes no space here, so the 1px is folded into the
                padding, giving Figma's 182.6px content column.

                The outline is a `box-shadow` ring, not a `border`. A border
                paints as four separately antialiased edges that overlap right
                where two edges meet on the arc, leaving a visibly heavier
                pixel there — normally a sub-pixel rounding error too small to
                notice, but zooming *out* concentrates that same absolute error
                into a much larger share of the few device pixels left, which
                is why it only shows up zoomed out and reads fine zoomed in. A
                box-shadow is one continuous path with no seam, so the arc
                stays one even weight at every zoom level. An `inset` ring
                would keep the geometry without the inset-px trick, but it
                paints in the element's background layer, underneath its own
                children, so the photo would cover it.

                Putting that ring on this same element — rather than on the
                card, one level up — closes a second, subtler version of the
                same problem: two separate elements each computing their own
                rounded-rect (the card's own outline vs. this wrapper's clip)
                can land their antialiasing on different device pixels
                whenever the card's width isn't a whole number (which it
                usually isn't — a 5-column grid over an odd container width
                divides out to something like 220.67px), and that mismatch is
                exactly as zoom-sensitive as the border seam above. One
                element, one rounded-rect, used for the clip and the ring
                both, cannot disagree with itself.

                No `mask-image` here, ever. A CSS mask clips to the element's
                own box (`mask-clip` defaults to border-box) and an outset ring
                is painted entirely *outside* that box, so a mask silently
                deletes the card's outline on all four straight edges while
                leaving just enough at the corners to look like it is still
                there. A flat mask used to sit on this element to halve the
                photo bleeding through the corner arc; the <Image> clip below
                removes that bleed completely, so the mask is both unnecessary
                and actively harmful. Same trap applies to `clip-path`, which
                also clips an element's own box-shadow — `overflow-hidden` is
                the one clipping mechanism that leaves the ring alone. */}
            <div className="absolute inset-px overflow-hidden rounded-[11px] shadow-[0_0_0_1px_#c9d0d8]">
                {/* Photograph. Figma puts a 20% black fill *behind* this image, not
                    over it — it is the node's fallback fill and the opaque photo
                    hides it entirely. Painting it on top instead both dulls the
                    photo strip and tints the corners.

                    The clip is what finally stops the photo showing through the two
                    top corners at rest. While the curtain is down the photo is only
                    ever visible in the bottom strip, so clipping its top 60% away
                    costs nothing visually and takes it out of the corner arc
                    entirely — leaving the curtain as the only thing the rounded
                    corner has to antialias, exactly as if the card had no photo at
                    all. Measured at 1x on the arc, the corner pixels go from
                    195/207/219 (and visibly tinted by whatever colour that card's
                    photo happens to be — Ariba's blue was the giveaway) to
                    223/232/236, matching a bare ring's own edge, and the pixel grid
                    becomes byte-identical across cards with completely different
                    photographs.

                    60% is chosen to sit well clear of both ends: far below the 12px
                    corner (≈5% of the card) and far above the 71% line where the
                    curtain ends and the photo actually has to be visible. */}
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className={`object-cover ${PHOTO_CLIP_REST} ${PHOTO_CLIP_HOVER} ${PHOTO_CLIP_MOTION}`}
                />

                {/* Hover scrim — Figma runs it from 90% black at 27% of the card
                    height to fully transparent at 78%, so the copy keeps its contrast
                    while the lower half of the photo stays clean. */}
                <div className={`absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_27%,rgba(0,0,0,0)_78%)] opacity-0 transition-opacity ${MOTION} group-hover:opacity-100`} />

                {/* Resting panel, and the curtain that lifts on hover. It travels
                    its own full height (`-translate-y-full`), so the white
                    clears the card completely instead of nudging a fixed 16px
                    and dissolving in place — a fixed offset undershoots on a
                    260px-tall card and reads as an unfinished lift.

                    Translate and opacity run on the exact same duration, curve
                    and start time — no stagger between them. An offset fade
                    (tried: opacity finishing well before the translate) makes
                    the panel go fully solid, or fully invisible, while it is
                    still visibly moving, which is what made hovering off feel
                    like a different, harsher motion than hovering on — the
                    reveal looked "done" before the lift had actually finished.
                    Locking both to one timing makes the two directions mirror
                    each other exactly.

                    The transition names `translate`, not `transform`. Tailwind
                    v4 compiles `-translate-y-full` to the standalone `translate`
                    property, so a transition declared on `transform` matches
                    nothing and the curtain jumps to its end position instantly,
                    leaving only the opacity to animate. `transform-gpu` stays
                    for the compositor promotion so the text recolouring
                    underneath cannot make the lift stutter. */}
                <div className={`absolute -left-px -right-px -top-px h-[71%] transform-gpu bg-[#f8f8f8] transition-[translate,opacity] ${MOTION} group-hover:-translate-y-full group-hover:opacity-0`} />
            </div>

            {/* The copy block is a fixed 154px tall and sits at the top of the
                card rather than filling it, which is what keeps the arrow button
                inside the resting panel instead of drifting onto the photo. */}
            <div className="relative flex min-h-[154px] w-full flex-col justify-between">
                <div className="flex flex-col gap-3">
                    <p className={`text-[14px] leading-[1.4] text-[#0061af] transition-colors ${MOTION} group-hover:text-white`}>
                        {title}
                    </p>
                    <p className={`text-[14px] sm:text-base font-normal leading-[1.5] text-[#0e2b4b] transition-colors ${MOTION} group-hover:text-white`}>
                        {description}
                    </p>
                </div>

                <span className={`relative flex size-6 items-center justify-center rounded-full bg-[#0061af] transition-colors ${MOTION} group-hover:bg-white`}>
                    <Image
                        src={arrowOnPrimary}
                        alt=""
                        className={`absolute size-4 transition-opacity ${MOTION} group-hover:opacity-0`}
                    />
                    <Image
                        src={arrowOnLight}
                        alt=""
                        className={`absolute size-4 opacity-0 transition-opacity ${MOTION} group-hover:opacity-100`}
                    />
                </span>
            </div>
        </Link>
    );
}
