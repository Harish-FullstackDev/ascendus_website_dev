import React, { useState } from "react";
import Image from "next/image";
import call from "../../assets/bookacall/call.svg";
import msg from "../../assets/bookacall/msg.svg";
import people from "../../assets/bookacall/people.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";


const Bookacall = () => {

  const [showCalendly, setShowCalendly] = useState(false);
  const handleScheduleCall = () => { setShowCalendly(true); };

  return (
    <>
      <div className=" py-16 px-4 pt-0 overflow-x-hidden overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Email us */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className=" flex items-center justify-center">
                  <Image src={msg} alt="Email" className="w-12 h-12 rounded-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email us</h3>
              <p className="text-gray-600 text-md mb-4 leading-relaxed">
                Email us for general queries, including<br />
                marketing and partnership opportunities.
              </p>
              <a
                href="mailto:info@ascendus.tech"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                info@ascendus.tech
              </a>
            </div>

            {/* Call us */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className=" flex items-center justify-center">
                  <Image src={call} alt="Phone" className="w-12 h-12 rounded-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call us</h3>
              <p className="text-gray-600 text-md mb-4 leading-relaxed">
                Call us to speak to a member of our team.<br />
                We are always happy to help.
              </p>
              <a
                href="tel:+04132191301"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                0413-2191301
              </a>
            </div>

            {/* Schedule a Call */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="  flex items-center justify-center">
                  <Image src={people} alt="Support" className="w-12 h-12 rounded-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a call</h3>
              <p className="text-gray-600 text-md mb-4 leading-relaxed">
                Schedule a call with our team to discuss your needs and how we can help you.
              </p>
              <button type="button" onClick={handleScheduleCall} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors border border-blue-200 hover:border-blue-300 rounded-lg px-4 py-2" >
                Book a call
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{ backgroundColor: "ffffff", primaryColor: "#0061af", textColor: "#2E3033", }} />
    </>
  );
};

export default Bookacall;