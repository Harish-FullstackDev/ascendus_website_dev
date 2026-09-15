"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Scroll budget (px) for the card1→2→3 scroll-driven switching, shared by the
// ScrollTrigger setup and the recenter() effect below so neither drifts out
// of sync with the other.
const INTERACTIVE_DISTANCE = 2400;

// Minimum gap kept between the active card's bottom edge (where the next
// card's divider line sits) and the top of any fixed bottom overlay.
const DIVIDER_CLEARANCE = 24;

// Drives the Capabilities section's scroll-pinned card stack: on desktop,
// scrolling through a fixed 2400px budget switches the active card between
// the three CAPABILITIES entries while the whole stack stays pinned and
// recentred in the viewport; on mobile every card renders open in normal
// flow with no pin. Returns everything the section and its cards need to
// wire up refs and read the current active/desktop state.
export function useCapabilitiesScrollPin() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Below lg (Tailwind's own mobile/desktop split for this section — see the
    // card's own `lg:flex-row` layout swap), the scroll-driven pin/reveal is
    // skipped entirely and every card renders open. Defaults to desktop so the
    // server render and first paint match; corrected right after mount.
    const [isDesktop, setIsDesktop] = useState(true);
    // Divider thickness in CSS px, chosen so it covers a whole number of device
    // pixels: 1 device px at dpr 1, 2 device px at any fractional/hi-dpi ratio
    // (1.6px at dpr 1.25, 1.333px at 1.5, 1px at 2). Starts at 1 so the server
    // render and first paint match, then corrects on mount. `resize` fires on
    // browser zoom changes in Chrome, which is also how dpr changes.
    const [hairline, setHairline] = useState(1);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const computeHairline = () => {
            const dpr = window.devicePixelRatio || 1;
            setHairline(Math.ceil(dpr) / dpr);
        };
        computeHairline();
        window.addEventListener("resize", computeHairline);
        return () => window.removeEventListener("resize", computeHairline);
    }, []);

    // windowRef is the pinned stage — always naturally sized, never clipped.
    // trackRef (the card stack) is what gets shifted to keep the active card
    // centered.
    const windowRef = useRef(null);
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const activeIndexRef = useRef(activeIndex);
    // True only while ScrollTrigger is actively pinned.
    const pinnedRef = useRef(false);
    // The live ScrollTrigger instance, or null when there is no pin (mobile, or
    // mid-teardown). Everything that mutates the pin-spacer gates on this:
    // ctx.revert() tears the pin down WITHOUT firing onToggle, so the flags
    // below keep whatever mid-pin values they had. Reading them afterwards is
    // what made a resize across the lg breakpoint centre the track against a
    // pin that no longer existed and collapse the spacer under it.
    const triggerRef = useRef(null);
    // Index recenter() last targeted — detects the exact moment activeIndex
    // switches, as opposed to a merely large per-frame scroll delta.
    const lastRecenteredIndexRef = useRef(activeIndex);
    // performance.now() timestamp until which recenter() should tween toward
    // its target instead of snapping instantly — set on each activeIndex
    // switch, held for roughly the card's own open/close duration.
    const transitionUntilRef = useRef(0);
    // True once the pin has been scrolled all the way through and released at
    // its end (as opposed to not yet reached) — the spacer correction in
    // syncSpacerHeight is only valid in that state.
    const pastPinRef = useRef(false);
    const syncSpacerRef = useRef(() => { });
    // Last scrolled-pixels value from onUpdate, reused by ResizeObserver-driven
    // recenter() calls so a mid-scroll accordion animation stays consistent.
    const lastScrolledRef = useRef(0);
    const recenterRef = useRef(() => { });
    // Unwind value frozen at the instant an index transition starts, so it
    // doesn't oscillate against the centering tween as cards resize mid-animation.
    const frozenUnwindRef = useRef(0);

    // Bumped once a resize has settled. Every measurement the pin is built
    // from — where it starts, how tall the spacer must be, how tall each card
    // is — is invalidated by a resize, and correcting them in place is what
    // left stale state behind. Bumping this instead tears the pin down and
    // rebuilds it from clean layout: the same state a reload produces, which is
    // why a reload was the only thing that cleared the broken layout.
    const [resizeEpoch, setResizeEpoch] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;
        let timer;
        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => setResizeEpoch((n) => n + 1), 250);
        };
        window.addEventListener("resize", onResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mql = window.matchMedia("(min-width: 1024px)");
        const update = () => setIsDesktop(mql.matches);
        update();
        mql.addEventListener("change", update);
        return () => mql.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined" || !isDesktop) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // card1→2→3 switching keeps the same 2400px budget, and the pin
            // ends right there — no trailing unwind distance. Cards above the
            // active one collapse to nothing (isPassed), so the active card
            // always sits at offset 0 and needs ~0 shift to center, exactly
            // like card 1 — nothing left to unwind at release.
            const TOTAL_DISTANCE = INTERACTIVE_DISTANCE;

            // Trigger is card 1 itself (not the whole stage), so "center
            // center" engages exactly when card 1's own middle crosses the
            // viewport's middle — not the combined stack's much lower midpoint.
            triggerRef.current = ScrollTrigger.create({
                trigger: cardRefs.current[0],
                pin: windowRef.current,
                start: "center center",
                end: "+=" + TOTAL_DISTANCE,
                pinSpacing: true,
                scrub: true,
                onToggle: (self) => {
                    pinnedRef.current = self.isActive;
                    if (!self.isActive) {
                        pastPinRef.current = self.progress > 0.5;
                        // Run after GSAP restores the released element's own
                        // styles, so we don't measure it mid-handoff.
                        requestAnimationFrame(() => syncSpacerRef.current());
                        // Safety cleanup — by the time GSAP releases, the
                        // unwind has already eased the shift to 0.
                        gsap.killTweensOf(trackRef.current);
                        gsap.set(trackRef.current, { clearProps: "transform" });
                    }
                },
                onUpdate: (self) => {
                    const scrolled = self.progress * TOTAL_DISTANCE;
                    lastScrolledRef.current = scrolled;
                    // Even thirds — card 3's threshold (1600px) isn't rescaled
                    // by TOTAL_DISTANCE, so it lands at the same scroll amount.
                    let newIndex = 0;
                    if (scrolled < INTERACTIVE_DISTANCE / 3) {
                        newIndex = 0;
                    } else if (scrolled < (2 * INTERACTIVE_DISTANCE) / 3) {
                        newIndex = 1;
                    } else {
                        newIndex = 2;
                    }
                    setActiveIndex((prev) => (prev === newIndex ? prev : newIndex));
                    // Called directly, not gated by pinnedRef — onUpdate only
                    // ever fires while GSAP itself considers this in-range.
                    recenterRef.current(scrolled);
                }
            });
        });

        // The rebuild runs after a resize has settled, but the sections above
        // this one may have reflowed too, which moves where the pin starts.
        // Refresh so GSAP re-derives the start from the settled page rather
        // than from whatever the layout looked like mid-drag.
        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
            // ctx.revert() removes the pin silently — onToggle never reports
            // the release — so every piece of pin-derived state has to be reset
            // by hand. Without this, remounting on the way back to desktop
            // reads mid-pin values as current: the track keeps its centring
            // transform (~-880px, which is what dragged the card stack up over
            // the neighbouring sections) and activeIndex stays at 2, holding
            // cards 1 and 2 collapsed at height 0.
            triggerRef.current = null;
            pinnedRef.current = false;
            pastPinRef.current = false;
            lastScrolledRef.current = 0;
            frozenUnwindRef.current = 0;
            transitionUntilRef.current = 0;
            lastRecenteredIndexRef.current = 0;
            if (trackRef.current) {
                gsap.killTweensOf(trackRef.current);
                gsap.set(trackRef.current, { clearProps: "transform" });
            }
            if (windowRef.current) windowRef.current.style.height = "";
            setActiveIndex(0);
        };
    }, [isDesktop, resizeEpoch]);

    // Keeps the active card's vertical center pinned to the viewport's
    // vertical center by translating the whole track. Re-measures continuously
    // (ResizeObserver on every card) because Framer Motion's height animation
    // reflows the stack frame-by-frame for the whole ~800ms open/close.
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!isDesktop) {
            // No pin/recenter on mobile — cards render open in normal flow, so
            // any leftover transform from a desktop->mobile resize must go.
            if (trackRef.current) gsap.set(trackRef.current, { clearProps: "transform" });
            return;
        }

        // Height of any fixed overlay pinned to the viewport's bottom edge —
        // in practice the cookie consent banner (~70px). Centering against the
        // raw innerHeight put the active card's bottom edge, and therefore the
        // next card's top-border divider, underneath that banner on shorter
        // viewports (reproduced at 620px tall: divider at y=564, banner
        // occupying 550-620), which read as the divider vanishing for the whole
        // time card 1 was active. Probed by hit-testing the bottom-centre pixel
        // rather than matching the banner's markup, so this stays decoupled
        // from whatever renders it and self-corrects the moment it's dismissed.
        const readBottomInset = () => {
            if (typeof document.elementsFromPoint !== "function") return 0;
            const stack =
                document.elementsFromPoint(
                    Math.round(window.innerWidth / 2),
                    window.innerHeight - 2
                ) || [];
            for (const el of stack) {
                if (el === document.body || el === document.documentElement) break;
                if (getComputedStyle(el).position !== "fixed") continue;
                const rect = el.getBoundingClientRect();
                // Bottom-anchored, and not so tall that it's really a full-screen
                // overlay (a modal shouldn't shift the centering).
                if (rect.bottom >= window.innerHeight - 2 && rect.height < window.innerHeight * 0.5) {
                    return rect.height;
                }
            }
            return 0;
        };

        const recenter = (scrolled = lastScrolledRef.current) => {
            const win = windowRef.current;
            const track = trackRef.current;
            const activeCard = cardRefs.current[activeIndexRef.current];
            if (!win || !track || !activeCard) return;

            // offsetTop/offsetHeight are transform-immune, unlike
            // getBoundingClientRect, which would reflect track's own
            // in-flight transform.
            const winTop = win.getBoundingClientRect().top;
            const cardOffsetTop = activeCard.offsetTop;
            const cardHeight = activeCard.offsetHeight;
            // Centre within the space actually visible above any bottom overlay,
            // not the whole viewport.
            const availableHeight = window.innerHeight - readBottomInset();
            const cardTopInWindow = winTop + cardOffsetTop;
            const centredTarget = availableHeight / 2 - cardTopInWindow - cardHeight / 2;
            // The next card's divider sits exactly on the active card's bottom
            // edge, so that edge must never fall below the visible area. While the
            // card is shorter than the available space, centring already satisfies
            // this and the clamp is inert (centredTarget <= bottomLimit whenever
            // availableHeight >= cardHeight). Once it's taller — short viewport,
            // browser zoom, or a consent banner wrapped onto two lines — centring
            // alone pushes that bottom edge, and the divider with it, back under
            // the overlay; pinning the card to the bottom of the visible area
            // keeps the divider on screen instead.
            // DIVIDER_CLEARANCE keeps the edge a few pixels clear of the overlay
            // rather than flush against it — landing it exactly on the boundary
            // still leaves the 1px line sitting under the overlay's first pixel.
            const bottomLimit =
                availableHeight - DIVIDER_CLEARANCE - cardTopInWindow - cardHeight;
            const centeredY = Math.min(centredTarget, bottomLimit);

            // Linear, additive unwind: past INTERACTIVE_DISTANCE, the shift
            // moves toward 0 at exactly 1px per 1px of extra scroll, matching
            // natural scroll's own rate by construction.
            const extra = Math.max(0, scrolled - INTERACTIVE_DISTANCE);
            const unwind = Math.min(extra, Math.abs(centeredY));

            const now = performance.now();
            if (lastRecenteredIndexRef.current !== activeIndexRef.current) {
                lastRecenteredIndexRef.current = activeIndexRef.current;
                transitionUntilRef.current = now + 900;
                // Freeze the unwind value so it doesn't fight the centering
                // tween while the card is animating open/closed.
                frozenUnwindRef.current = unwind;
            }

            const inTransition = now < transitionUntilRef.current;
            const effectiveUnwind = inTransition ? frozenUnwindRef.current : unwind;
            const rawShift = centeredY - Math.sign(centeredY) * effectiveUnwind;
            // Snap so the active card's BOTTOM EDGE — where the next card's 1px
            // border-t divider sits — lands on a whole device pixel.
            //
            // Rounding the transform to a whole CSS pixel (what this used to do)
            // isn't enough: the edge's own layout position is fractional
            // (617.65625px here, coming from the image's aspect-ratio-derived
            // height), and on a fractional-DPR display — 125% Windows scaling,
            // dpr 1.25 — that lands the hairline at 772.07 device pixels. Once
            // the track is composited by a transform, a border straddling device
            // rows like that gets anti-aliased away entirely under GPU
            // rasterisation, so the divider reads as simply missing for the whole
            // time the card is pinned. Snapping the edge instead of the transform
            // costs under one device pixel of centring accuracy — imperceptible —
            // and puts the line back on the grid.
            const dpr = window.devicePixelRatio || 1;
            const edgeY = winTop + cardOffsetTop + cardHeight + rawShift;
            const shift = rawShift + (Math.round(edgeY * dpr) / dpr - edgeY);

            gsap.killTweensOf(track);
            if (inTransition) {
                gsap.to(track, { y: shift, duration: 0.4, ease: "power2.out" });
            } else {
                gsap.set(track, { y: shift });
            }
        };

        // GSAP freezes the pinned element's own height at pin time, so once
        // cards above the active one collapse (isPassed), the track shrinks
        // but the window doesn't — leaving dead space below the active card.
        // Clearing the inline height lets the window re-hug the track, and the
        // pin-spacer has to be resized to match or the same dead space just
        // reappears one level up.
        const syncSpacerHeight = () => {
            const win = windowRef.current;
            const track = trackRef.current;
            if (!win || !track) return;
            // No live pin means no spacer of ours to correct, and the branches
            // below would be reading stale pin state.
            if (!triggerRef.current) return;
            win.style.height = "";
            const spacer = win.parentElement;
            if (!spacer || !spacer.classList.contains("pin-spacer")) return;
            if (pinnedRef.current) {
                // While pinned the window is position:fixed, so its rect says
                // nothing about where it sits in the spacer's flow — use the
                // nominal size. Any small error is invisible here since the
                // content below the spacer is off-screen during the pin.
                spacer.style.height = `${win.offsetHeight + INTERACTIVE_DISTANCE}px`;
            } else if (pastPinRef.current) {
                // Released, past the pin: size the spacer to end exactly at
                // the window's real position, so only the section's own
                // bottom padding is left below card 3.
                const offsetInSpacer =
                    win.getBoundingClientRect().top - spacer.getBoundingClientRect().top;
                spacer.style.height = `${Math.round(offsetInSpacer + win.offsetHeight)}px`;
            }
            // Before the pin is ever reached, the spacer's extra height is
            // GSAP's reserved scroll room — leave it alone.
        };

        recenterRef.current = recenter;
        syncSpacerRef.current = syncSpacerHeight;
        if (triggerRef.current?.isActive) recenter();

        // Wrapped in a no-arg call: ResizeObserver/`resize` invoke their
        // callback with a truthy first argument, which would otherwise be
        // read as the scroll position.
        const handleChange = () => {
            syncSpacerHeight();
            if (!pinnedRef.current) return;
            recenter();
        };
        // GSAP re-derives the pin from live layout on every refresh (which a
        // resize triggers), and our inline heights are part of that layout — so
        // it would measure our correction and compound it, shrinking the spacer
        // a little more on each resize. Drop them before GSAP measures, put
        // them back once it has.
        const clearForRefresh = () => {
            const win = windowRef.current;
            if (!win) return;
            win.style.height = "";
            const spacer = win.parentElement;
            if (spacer?.classList.contains("pin-spacer")) spacer.style.height = "";
        };

        const ro = new ResizeObserver(handleChange);
        cardRefs.current.forEach((el) => el && ro.observe(el));
        window.addEventListener("resize", handleChange);
        ScrollTrigger.addEventListener("refreshInit", clearForRefresh);
        ScrollTrigger.addEventListener("refresh", syncSpacerHeight);
        syncSpacerHeight();

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", handleChange);
            ScrollTrigger.removeEventListener("refreshInit", clearForRefresh);
            ScrollTrigger.removeEventListener("refresh", syncSpacerHeight);
        };
    }, [activeIndex, isDesktop, resizeEpoch]);

    return { activeIndex, isDesktop, hairline, windowRef, trackRef, cardRefs };
}
