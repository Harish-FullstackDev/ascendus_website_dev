"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
        image: "/blog/default-author.svg",
        name: "Briana Patton",
        role: "Operations Manager",
    },
    {
        text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
        image: "/blog/default-author.svg",
        name: "Bilal Ahmed",
        role: "IT Manager",
    },
    {
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
        image: "/blog/default-author.svg",
        name: "Saman Malik",
        role: "Customer Support Lead",
    },
    {
        text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
        image: "/blog/default-author.svg",
        name: "Omar Raza",
        role: "CEO",
    },
    {
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
        image: "/blog/default-author.svg",
        name: "Zainab Hussain",
        role: "Project Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image: "/blog/default-author.svg",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our business functions improved with a user-friendly design and positive customer feedback.",
        image: "/blog/default-author.svg",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image: "/blog/default-author.svg",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
        image: "/blog/default-author.svg",
        name: "Hassan Ali",
        role: "E-commerce Manager",
    },
    {
        text: "This ERP simplified our daily operations by centralizing data across departments. Reporting is faster, and decision-making has become much easier.",
        image: "/blog/default-author.svg",
        name: "Emily Carter",
        role: "Finance Manager",
    },
    {
        text: "The automation features have saved our team countless hours each week. We now spend more time focusing on growth instead of repetitive tasks.",
        image: "/blog/default-author.svg",
        name: "Daniel Morris",
        role: "Operations Director",
    },
    {
        text: "From inventory tracking to customer management, everything is available in one place. The platform is intuitive and reliable.",
        image: "/blog/default-author.svg",
        name: "Sophia Nguyen",
        role: "Supply Chain Manager",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const fourthColumn = testimonials.slice(9, 12);

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
