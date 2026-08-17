import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";



// --- Data ---
const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
    rating: 5,
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager",
    rating: 4.5,
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Customer Support Lead",
    rating: 3.5,
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
    rating: 5,
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
    rating: 4.5,
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
    rating: 4.5,
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
    rating: 5,
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
    rating: 4.5,
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
    rating: 5,
  },
  {
    text: "This ERP simplified our daily operations by centralizing data across departments. Reporting is faster, and decision-making has become much easier.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emily Carter",
    role: "Finance Manager",
    rating: 5,
  },
  {
    text: "The automation features have saved our team countless hours each week. We now spend more time focusing on growth instead of repetitive tasks.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Daniel Morris",
    role: "Operations Director",
    rating: 4.5,
  },
  {
    text: "From inventory tracking to customer management, everything is available in one place. The platform is intuitive and reliable.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sophia Nguyen",
    role: "Supply Chain Manager",
    rating: 5,
  },
  {
    text: "The implementation process was well organized, and the onboarding team made the transition seamless. Our employees adapted quickly.",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Brooks",
    role: "HR Manager",
    rating: 4.5,
  },
  {
    text: "Real-time analytics have given us much better visibility into our operations. We can identify issues before they become major problems.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Jessica Turner",
    role: "Business Intelligence Lead",
    rating: 5,
  },
  {
    text: "Our sales and finance teams now work from the same data, reducing errors and improving collaboration across departments.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ryan Cooper",
    role: "Sales Director",
    rating: 4.5,
  },
  {
    text: "The customizable dashboards allow every department to track the metrics that matter most. It's become an essential part of our workflow.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Olivia Bennett",
    role: "Operations Analyst",
    rating: 5,
  },
  {
    text: "Excellent performance and outstanding customer support. Every question we've had has been answered promptly and professionally.",
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Nathan Reed",
    role: "Customer Success Manager",
    rating: 5,
  },
  {
    text: "This ERP has helped us improve inventory accuracy and reduce operational costs. The return on investment has been impressive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Grace Wilson",
    role: "Warehouse Manager",
    rating: 4.5,
  },
  {
    text: "The software integrates smoothly with our existing systems and has significantly improved productivity across the organization.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ethan Walker",
    role: "Technology Director",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const fourthColumn = testimonials.slice(9, 12);

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

//----Star Rating Component----
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <motion.span
        key={i}
        variants={starVariants}
        initial="hidden"
        animate="visible"
        custom={i}
        className="inline-block"
      >
        <FaStar className="text-neutral-400" size={16} />
      </motion.span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <motion.span
        key={fullStars}
        variants={starVariants}
        initial="hidden"
        animate="visible"
        custom={fullStars}
        className="inline-block"
      >
        <FaStarHalfAlt className="text-neutral-400" size={16} />
      </motion.span>
    );
  }

  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <motion.span
        key={fullStars + (hasHalfStar ? 1 : 0) + i}
        variants={starVariants}
        initial="hidden"
        animate="visible"
        custom={fullStars + (hasHalfStar ? 1 : 0) + i}
        className="inline-block"
      >
        <FaRegStar className="text-neutral-400" size={16} />
      </motion.span>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

const starVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 10,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

// --- Sub-Components ---
const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role, rating }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,.12),0 10px 10px -5px rgba(0,0,0,.04)",
                }}
                whileFocus={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,.12),0 10px 10px -5px rgba(0,0,0,.04)",
                }}
                className="p-10 border border-neutral-200 dark:border-neutral-800 max-w-xs w-full  dark:bg-neutral-900 transition-all duration-300"
              >
                <blockquote>


                  <p className="text-neutral-600 dark:text-neutral-400">
                    {text}
                  </p>

                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      src={image}
                      alt={name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      {/* <StarRating rating={rating} /> */}
                      <cite className="not-italic font-semibold">
                        {name}
                      </cite>

                      <div className="text-sm text-neutral-500">
                        {role}

                      </div>
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
};

const TestimonialsSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={textVariants}
          >
            <span className="text-blue-500 text-base sm:text-lg">✦</span>
            <p className="text-xs sm:text-sm font-medium  tracking-[0.2em] uppercase">
              TESTIMONIALS
            </p>
          </motion.div>

          <h1 id="testimonials-heading" variants={itemVariants}
            className="text-4xl lg:text-6xl xl:text-4xl font-normal leading-tight">
            What our clients say
          </h1>
          <p className="text-center mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed  transition-colors">
            From innovative marketing strategies to operational excellence, we
            provide expert solutions that drive success.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)] max-h-[540px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          <TestimonialsColumn testimonials={fourthColumn} className="hidden lg:block" duration={21} />
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App Component ---
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col justify-center relative selection:bg-primary selection:text-white">
      {/* Dark Mode Toggle */}
      {/* <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}

      <TestimonialsSection />
    </div>
  );
}
