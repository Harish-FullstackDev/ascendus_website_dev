"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const linkedinPosts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7485555091391860736?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7480493125216522240?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7477579270551355392?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7475778249621393408?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7473230546077122561?collapsed=1",
];


export default function LinkedInCarousel() {

    const [loaded, setLoaded] = useState({});

    const handleLoad = (index) => {
        setLoaded((prev) => ({
            ...prev,
            [index]: true,
        }));
    };
    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">

                    <h2 className="text-2xl font-semibold text-[#2E3033]">
                        Follow Us On LinkedIn
                    </h2>


                    {/* Navigation Buttons */}
                    <div className="flex gap-3">

                        <button
                            className="linkedin-prev w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>


                        <button
                            className="linkedin-next w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                    </div>

                </div>


                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}

                    navigation={{
                        prevEl: ".linkedin-prev",
                        nextEl: ".linkedin-next",
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {linkedinPosts.map((post, index) => (
                        <SwiperSlide key={index}>

                            <div className="w-full h-[650px] overflow-hidden rounded-lg">
                                <iframe
                                    src={post}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    scrolling="no"
                                    onLoad={() => handleLoad(index)}
                                />

                                {!loaded[index] && (
                                    <a
                                        href={post.replace("/embed/feed/update/", "/feed/update/")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 flex items-center justify-center bg-gray-100"
                                    >
                                        View on LinkedIn
                                    </a>
                                )}
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </section>
    );
}
