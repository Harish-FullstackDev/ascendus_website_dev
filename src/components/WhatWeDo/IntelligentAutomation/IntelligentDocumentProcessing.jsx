"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import invoiceIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/iconamoon_invoice-thin.svg";
import contractIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/gala_data.svg";
import classificationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/document-new_svgrepo.com.svg";
import ocrIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/ocr_svgrepo.com.svg";
import validationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Vector.svg";
import workflowIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/hugeicons_workflow-square-04.svg";

const ITEMS = [
    { icon: invoiceIcon, title: "Invoice Processing", desc: "Automatically capture line items, totals, and vendor details from invoices in any format." },
    { icon: contractIcon, title: "Contract Data Extraction", desc: "Pull key terms, dates, and obligations out of contracts without manual review." },
    { icon: classificationIcon, title: "Document Classification", desc: "Automatically sort incoming documents by type so they route to the right process." },
    { icon: ocrIcon, title: "OCR Solutions", desc: "Convert scanned documents and images into structured, searchable data." },
    { icon: validationIcon, title: "Data Validation", desc: "Cross-check extracted data against business rules to catch errors before they propagate." },
    { icon: workflowIcon, title: "Automated Document Workflows", desc: "Route documents through approval and processing steps automatically, end to end." },
];

export default function IntelligentDocumentProcessing() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col lg:flex-row gap-10 lg:gap-[83px] items-center max-w-[1280px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:w-[518px] shrink-0"
            >
                <h2 className="text-black text-2xl sm:text-[32px] font-normal">Intelligent Document Processing</h2>
                <p className="text-black text-lg font-normal">Extract Insights from Business Documents</p>
                <p className="text-[#6c6c6c] text-lg font-light">
                    Use AI and Optical Character Recognition (OCR) to automatically capture, classify, and process
                    structured and unstructured documents.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-10 flex-1">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-4"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <p className="text-black text-lg font-semibold">{item.title}</p>
                        <p className="text-[#6c6c6c] text-sm font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
