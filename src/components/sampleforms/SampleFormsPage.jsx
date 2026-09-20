"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import DummyForm from "./DummyForm";
import { FORMS } from "./formsConfig";

export default function SampleFormsPage() {
  const [activeId, setActiveId] = useState(null);
  const activeForm = FORMS.find((form) => form.id === activeId) || null;

  return (
    <div>
      <Navbar />

      <section className="bg-gray-50 pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Sample Forms</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Pick a form to preview it — dummy only, nothing is submitted anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FORMS.map((form) => (
              <button
                key={form.id}
                type="button"
                onClick={() => setActiveId(form.id)}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-left hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <h2 className="text-base font-semibold text-gray-900">{form.title}</h2>
                <p className="mt-1 text-sm text-gray-500">{form.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeForm && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-10"
          onClick={() => setActiveId(null)}
        >
          <div className="w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close form"
                className="w-9 h-9 rounded-full bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center shadow"
              >
                ✕
              </button>
            </div>
            <DummyForm
              key={activeForm.id}
              title={activeForm.title}
              description={activeForm.description}
              fields={activeForm.fields}
              submitLabel={activeForm.submitLabel}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
