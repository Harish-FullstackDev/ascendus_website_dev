// The sticky-curtain hero the homepage and what-we-do pages use: the hero
// image pins to the viewport while the hero text scrolls away with the page,
// and the content below slides up over the still background.
//
// How it works: the wrapper is twice the hero's height, so the sticky layer has
// one hero-height of travel to stay pinned through. The content is pulled back
// up by one hero-height to start where the hero ends, and sits above both
// layers so it covers the image as it rises.
//
// Every hero is one full viewport tall, same as /careers/ — "default" and
// "tall" are kept as distinct names only so each page's intent still reads at
// the call site (tall = industries, which carries a stats row under its copy),
// but both resolve to the same screen-height box as "screen" (careers) itself.
const SCREEN = {
    wrapper: "h-[200vh]",
    layer: "h-screen",
    content: "-mt-[100vh]",
};

const SIZES = {
    default: SCREEN, // services, solutions, about-us, partnership, contact-us
    tall: SCREEN, // industries
    screen: SCREEN, // careers
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
