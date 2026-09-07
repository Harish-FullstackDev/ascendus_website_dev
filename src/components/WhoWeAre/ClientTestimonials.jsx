"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Migrating our core ERP to S/4HANA felt like a massive risk, but the Ascendus team handled the heavy lifting seamlessly. Downtime during the go-live weekend was minimal, and our finance team was up and running by Monday morning without major hiccups.",
        image: "/blog/default-author.svg",
        name: "David Vance",
        role: "VP of IT Operations",
    },
    {
        text: "Our legacy portal was customer-facing and badly needed a modern UX refresh. The Ascendus design team ran great stakeholder workshops, got straight to the root of our user friction points, and delivered a slick UI that our users actually enjoy navigating now.",
        image: "/blog/default-author.svg",
        name: "Elena Rostova",
        role: "Director of Digital Product",
    },
    {
        text: "Working with Ascendus has been a game changer for our day-to-day operations. Their team actually takes the time to listen, understand our bottlenecks, and deliver practical solutions rather than pushing cookie-cutter frameworks. Highly recommend them.",
        image: "/blog/default-author.svg",
        name: "Rachel Bennett",
        role: "Director of Strategy",
    },
    {
        text: "Honestly, what stood out the most was their adaptability. Midway through the project, our internal priorities shifted unexpectedly, and instead of pushing back with endless change orders, the Ascendus team pivoted smoothly with us. They felt less like an external vendor and more like an extension of our own team.",
        image: "/blog/default-author.svg",
        name: "Sarah Jenkins",
        role: "Chief Operating Officer",
    },
    {
        text: "Excellent technical expertise and great project delivery overall. Would definitely collaborate with Ascendus again on future initiatives.",
        image: "/blog/default-author.svg",
        name: "Anita Patel",
        role: "VP of Enterprise Solutions",
    },
    {
        text: "Ascendus helped us make sense of a complicated SAP transformation. They understood both the technology and the business side, which made the entire process much easier for our team.",
        image: "/blog/default-author.svg",
        name: "Michael Turner",
        role: "VP, Enterprise Applications",
    },
    {
        text: "The difference was noticeable almost immediately. The new experience feels simpler, more intuitive, and much closer to what our customers actually expect.",
        image: "/blog/default-author.svg",
        name: "Daniel Foster",
        role: "Product Director",
    },
    {
        text: "We've worked with a number of technology partners over the years, and Ascendus stood out for how well they understood the bigger picture. They didn't just focus on the immediate task.",
        image: "/blog/default-author.svg",
        name: "Jennifer Moore",
        role: "VP, Technology",
    },
    {
        text: "I'd happily work with them again. They listened, understood the challenges we were facing, and delivered without making the process harder than it needed to be.",
        image: "/blog/default-author.svg",
        name: "Jonathan Reed",
        role: "VP, Business Transformation",
    },
    {
        text: "Our customer journey had become fragmented over time. Ascendus helped us step back, understand where the real friction was, and create a much more consistent experience.",
        image: "/blog/default-author.svg",
        name: "Sophie Anderson",
        role: "Customer Experience Director",
    },
    {
        text: "The transition was far smoother than we anticipated. Our teams barely noticed the change, and we now have a much more scalable infrastructure to build on.",
        image: "/blog/default-author.svg",
        name: "Arjun Mehta",
        role: "Head of Infrastructure",
    },
    {
        text: "A surprisingly straightforward experience for something as significant as an ERP implementation. The team kept us focused on the essentials and avoided overcomplicating the solution.",
        image: "/blog/default-author.svg",
        name: "Sarah Bennett",
        role: "Head of Business Systems",
    },
    {
        text: "Starting fresh gave us an opportunity to do things differently. Ascendus helped us make the most of that rather than simply recreating what we already had.",
        image: "/blog/default-author.svg",
        name: "Daniel Wilson",
        role: "COO",
    },
    {
        text: "We wanted to avoid carrying years of unnecessary customization into a new environment. The team helped us stay focused on the standard capabilities and rethink some of our existing processes along the way.",
        image: "/blog/default-author.svg",
        name: "Laura Mitchell",
        role: "Business Transformation Lead",
    },
    {
        text: "RISE was a significant change for us, and there were plenty of questions at the beginning. Ascendus helped us work through those decisions without making the process feel overwhelming.",
        image: "/blog/default-author.svg",
        name: "Priya Nair",
        role: "Director of IT",
    },
    {
        text: "We were concerned about the disruption an ECC migration could cause to the business. The planning around our cutover window was excellent, and the transition was much smoother than we expected.",
        image: "/blog/default-author.svg",
        name: "Anita Sharma",
        role: "Head of Enterprise Applications",
    },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);
const fourthColumn = testimonials.slice(12, 16);

function TestimonialsColumn({ className, testimonials, duration = 10 }) {
    return (
        <div className={className}>
            <motion.ul
                animate={{ translateY: "-50%" }}
                transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                className="flex flex-col gap-6 pb-6 bg-transp   arent list-none m-0 p-0"
            >
                {new Array(2).fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {testimonials.map(({ text, image, name, role }, i) => (
                            <motion.li
                                key={`${index}-${i}`}
                                aria-hidden={index === 1}
                                tabIndex={index === 1 ? -1 : 0}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,.12),0 10px 10px -5px rgba(0,0,0,.04)",
                                }}
                                whileFocus={{
                                    scale: 1.03,
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,.12),0 10px 10px -5px rgba(0,0,0,.04)",
                                }}
                                className="p-10 border border-neutral-200 max-w-xs w-full transition-all duration-300"
                            >
                                <blockquote>
                                    <p className="text-neutral-600">{text}</p>
                                    <footer className="flex items-center gap-3 mt-6">
                                        <img
                                            src={image}
                                            alt={name}
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <cite className="not-italic font-semibold">{name}</cite>
                                            <div className="text-sm text-neutral-500">{role}</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </motion.li>
                        ))}
                    </React.Fragment>
                ))}
            </motion.ul>
        </div>
    );
}

export default function ClientTestimonials() {
    return (
        <section className="w-full py-16 sm:pb-20 sm:pt-1 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h2 className="text-2xl font-semibold text-[#2E3033]">What our Clients Say</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    We are passionate about empowering individuals and businesses to take control of their finances
                    and achieve their financial goals.
                </p>
            </motion.div>

            <div
                className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)] max-h-[540px] overflow-hidden"
                role="region"
                aria-label="Scrolling Testimonials"
            >
                <TestimonialsColumn testimonials={firstColumn} duration={15} />
                <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                <TestimonialsColumn testimonials={fourthColumn} className="hidden lg:block" duration={21} />
            </div>
        </section>
    );
}
