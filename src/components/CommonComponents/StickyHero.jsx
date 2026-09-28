// The sticky-curtain hero the homepage and what-we-do pages use: the hero
// image pins to the viewport while the hero text scrolls away with the page,
// and the content below slides up over the still background.
//
// How it works: the wrapper is twice the hero's height, so the sticky layer has
// one hero-height of travel to stay pinned through. The content is pulled back
// up by one hero-height to start where the hero ends, and sits above both
// layers so it covers the image as it rises.
//
// Tailwind needs literal class names, hence one preset per hero height rather
// than a computed height.
const SIZES = {
    // 520 / 620 / 800 — services, solutions, about-us, partnership, contact-us
    default: {
        wrapper: "h-[1040px] sm:h-[1240px] lg:h-[1600px]",
        layer: "h-[520px] sm:h-[620px] lg:h-[800px]",
        content: "-mt-[520px] sm:-mt-[620px] lg:-mt-[800px]",
    },
    // 560 / 660 / 800 — industries, which carries a stats row under its copy
    tall: {
        wrapper: "h-[1120px] sm:h-[1320px] lg:h-[1600px]",
        layer: "h-[560px] sm:h-[660px] lg:h-[800px]",
        content: "-mt-[560px] sm:-mt-[660px] lg:-mt-[800px]",
    },
    // exactly one viewport — home, careers
    screen: {
        wrapper: "h-[200vh]",
        layer: "h-screen",
        content: "-mt-[100vh]",
    },
};

export default function StickyHero({ background, overlay, size = "default", children }) {
    const { wrapper, layer, content } = SIZES[size];

    return (
        <>
            {/* The negative top margin is the shared offset that lets the
                transparent navbar sit over the hero image. */}
            <div className={`relative -mt-[64px] lg:-mt-[68px] w-full ${wrapper}`}>
                <div className={`sticky top-0 z-0 w-full ${layer}`}>{background}</div>
                <div className={`absolute inset-x-0 top-0 z-[5] ${layer}`}>{overlay}</div>
            </div>

            <div className={`relative z-10 bg-white ${content}`}>{children}</div>
        </>
    );
}
