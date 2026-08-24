"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import serverRoomImg from "@/assets/Ascendus/images/server-room.png";

export default function AboutPartner() {
    return (
        // Bordering the hero curtain above (full 64 top); the section below is
        // also white, so the bottom half of that boundary (32) lives here.
        <section className="w-full bg-white pt-10 pb-8 sm:pt-16 sm:pb-8 px-6 sm:px-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 flex flex-col gap-2"
                >
                    <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium leading-[1.4] w-full">
                        A Technology Partner Built for Enterprise Complexity
                    </h2>
                    <p className="mt-4 text-[#4a5568] text-lg font-light leading-[1.5]">
                        Most enterprise technology programs don't fail on strategy  they fail on execution. Systems that don't talk to each other. Projects that lose momentum after go-live. Compliance bolted on instead of built in. We exists to close that gap , we design, build, and run technology that keeps working long after launch day.
                    </p>
                    <Link
                        href="/who-we-are"
                        className="mt-6 self-start rounded-none border border-[#2d8ec5] px-8 py-3 text-lg font-light text-[#10161d] transition-colors hover:bg-[#2d8ec5] hover:text-white"
                    >
                        Who We Are
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[400px] max-w-[400px] aspect-[400/304] shrink-0"
                >
                    <Image
                        src={serverRoomImg}
                        alt="Enterprise technology infrastructure"
                        fill
                        className="object-cover object-bottom"
                    />
                </motion.div>
            </div>
        </section>
    );
}
