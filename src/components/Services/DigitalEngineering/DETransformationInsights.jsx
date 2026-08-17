"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import IntegrationImg from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-1.png";
import APIImg from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-2.png";
import DataExchangeImg from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-3.png";


const CARDS = [
  {
    tag: "Service Offering",
    title: "Enterprise Integration",
    description:
      "Connect legacy ERP environments, secure database clusters, and cloud CRMs into a single stream.",
    image: IntegrationImg,

    content: [
      "Modern businesses rely on multiple platforms, applications, and data sources. Enterprise Integration connects these systems into a unified digital ecosystem.",
      "Ascendus helps organizations integrate ERP platforms, databases, cloud applications, and business workflows to improve operational efficiency and enable real-time collaboration.",
    ],

    highlights: [
      "ERP and enterprise system integration",
      "Cloud application connectivity",
      "Secure data synchronization",
    ],
  },

  {
    tag: "Service Offering",
    title: "API Development & Management",
    description:
      "Designing high-volume REST, GraphQL, and gRPC endpoints protected by robust payload gateways.",
    image: APIImg,

    content: [
      "APIs are the foundation of connected digital experiences. Ascendus designs scalable API architectures that enable secure communication between applications.",
      "Our API solutions support modern microservices, third-party integrations, and enterprise application ecosystems.",
    ],

    highlights: [
      "REST, GraphQL, and gRPC API development",
      "Secure API gateways",
      "Scalable microservices communication",
    ],
  },

  {
    tag: "Service Offering",
    title: "Connected Data Exchange",
    description:
      "Routing high-throughput message packages cleanly using secure queue workers and event broker systems.",
    image: DataExchangeImg,

    content: [
      "Connected Data Exchange enables organizations to move information securely across applications, platforms, and environments.",
      "Ascendus builds event-driven architectures that improve reliability, speed, and visibility across business operations.",
    ],

    highlights: [
      "Real-time data exchange",
      "Event-driven architecture",
      "Secure messaging platforms",
    ],
  },
];


const DETransformationInsights = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % CARDS.length);
  };

  const prevCard = () => {
    setActiveCard((prev) =>
      prev === 0 ? CARDS.length - 1 : prev - 1
    );
  };


  const card = CARDS[activeCard];


  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">

      <div className="mx-auto max-w-7xl">


        {/* Heading */}
        <div className="mb-14">

          <p className="text-xs font-semibold uppercase tracking-widest text-[#0061af] mb-3">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#0061af]" />
              Digital Engineering Services
            </span>
          </p>


          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-4">
            Engineering Digital Products for a Connected Future
          </h2>


          <p className="text-slate-500 text-sm max-w-3xl leading-relaxed">
            Deploying next-generation custom applications and microservices.
            Ascendus builds reliable, modular architectures integrated with existing
            business workflows to achieve continuous automation and reliable
            cloud performance.
          </p>

        </div>



        {/* Card */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}

            className="
              relative 
              rounded-[2rem]
              overflow-hidden
              min-h-[380px]
              sm:min-h-[440px]
              flex
              items-center
              shadow-lg
              border
              border-slate-200/50
            "
          >


            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900">

              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />

            </div>



            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/75" />



            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 max-w-3xl">


              <span
                className="
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                tracking-wider
                bg-white/10
                text-white
                mb-6
                border
                border-white/10
                uppercase
                "
              >
                {card.tag}
              </span>



              <h3 className="
                text-xl 
                sm:text-2xl 
                md:text-3xl
                font-extrabold
                text-white
                leading-tight
                mb-4
              ">
                {card.title}
              </h3>



              <p className="
                text-slate-300
                text-sm
                sm:text-base
                leading-relaxed
                mb-8
              ">
                {card.description}
              </p>


              <button
                onClick={() => setSelectedCard(card)}
                className="
    inline-flex
    items-center
    gap-2
    text-sm
    font-bold
    text-white
    hover:text-cyan-300
    transition-colors
    duration-300
    group
  "
              >

                See More

                <ArrowRight
                  className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
                />

              </button>


            </div>




            {/* Navigation Buttons */}

            <div
              className="
              absolute
              right-8
              bottom-8
              flex
              gap-3
              "
            >

              <button
                onClick={prevCard}
                className="
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
                "
              >
                <ChevronLeft size={22} />
              </button>



              <button
                onClick={nextCard}
                className="
                w-11
                h-11
                rounded-full
                bg-white
                text-slate-900
                flex
                items-center
                justify-center
                hover:bg-cyan-100
                transition
                "
              >
                <ChevronRight size={22} />
              </button>


            </div>



          </motion.div>

        </AnimatePresence>



      </div>
      <AnimatePresence>

        {selectedCard && (

          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="
fixed
inset-0
z-50
bg-black/70
flex
items-center
justify-center
px-5
"

            onClick={() => setSelectedCard(null)}

          >


            <motion.div

              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}

              transition={{ duration: 0.3 }}

              onClick={(e) => e.stopPropagation()}

              className="
bg-white
rounded-3xl
max-w-3xl
w-full
overflow-hidden
shadow-2xl
"

            >


              {/* Image */}

              <div className="relative h-64">

                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  fill
                  className="object-cover"
                />

                <div className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"/>


                <h2 className="
absolute
bottom-6
left-8
text-3xl
font-bold
text-white
">
                  {selectedCard.title}
                </h2>

              </div>



              {/* Content */}

              <div className="p-8">


                <span className="
text-xs
font-semibold
uppercase
tracking-widest
text-blue-600
">
                  {selectedCard.tag}
                </span>



                {selectedCard.content.map((item, index) => (

                  <p
                    key={index}
                    className="
mt-4
text-slate-600
leading-relaxed
"
                  >
                    {item}
                  </p>

                ))}



                <h4 className="
mt-6
font-bold
text-slate-900
">
                  Key Capabilities
                </h4>


                <ul className="
mt-3
space-y-2
">

                  {selectedCard.highlights.map((item, index) => (

                    <li
                      key={index}
                      className="
flex
items-center
gap-2
text-slate-600
"
                    >

                      <span className="
w-2
h-2
rounded-full
bg-blue-600
"/>

                      {item}

                    </li>

                  ))}


                </ul>


                <button

                  onClick={() => setSelectedCard(null)}

                  className="
mt-8
px-6
py-3
rounded-full
bg-slate-900
text-white
hover:bg-blue-600
transition
"

                >
                  Close
                </button>


              </div>


            </motion.div>


          </motion.div>

        )}

      </AnimatePresence>
    </section>
  );
};


export default DETransformationInsights;