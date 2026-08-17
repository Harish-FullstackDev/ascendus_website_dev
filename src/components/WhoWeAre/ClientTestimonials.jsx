"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Briana Patton",
        role: "Operations Manager",
    },
    {
        text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Bilal Ahmed",
        role: "IT Manager",
    },
    {
        text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Saman Malik",
        role: "Customer Support Lead",
    },
    {
        text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Omar Raza",
        role: "CEO",
    },
    {
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Zainab Hussain",
        role: "Project Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our business functions improved with a user-friendly design and positive customer feedback.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Hassan Ali",
        role: "E-commerce Manager",
    },
    {
        text: "This ERP simplified our daily operations by centralizing data across departments. Reporting is faster, and decision-making has become much easier.",
        image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Emily Carter",
        role: "Finance Manager",
    },
    {
        text: "The automation features have saved our team countless hours each week. We now spend more time focusing on growth instead of repetitive tasks.",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Daniel Morris",
        role: "Operations Director",
    },
    {
        text: "From inventory tracking to customer management, everything is available in one place. The platform is intuitive and reliable.",
        image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=150&h=150",
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
                <h2 className="text-2xl font-medium text-[#16171a]">What our Clients Say</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
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
