"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors";

// Full-bleed fields — multi-line and file inputs need the whole row rather
// than half of the two-column grid.
const FULL_WIDTH_TYPES = ["textarea", "file"];

function Field({ field, value, onChange }) {
  const { name, label, type, required, options, placeholder } = field;

  const wrapperClass = FULL_WIDTH_TYPES.includes(type) ? "sm:col-span-2" : "";

  const commonLabel = (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );

  if (type === "textarea") {
    return (
      <div className={wrapperClass}>
        {commonLabel}
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={4}
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className={wrapperClass}>
        {commonLabel}
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className={wrapperClass}>
        {commonLabel}
        <input
          id={name}
          name={name}
          type="file"
          required={required}
          onChange={onChange}
          className={`${inputClass} file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200`}
        />
      </div>
    );
  }

  // text / email / tel / date / time all render as a plain <input>
  return (
    <div className={wrapperClass}>
      {commonLabel}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

// Renders one config-driven form. Submission is dummy — no API call — it
// just shows a local success message so the page can be dropped once real
// forms replace it.
export default function DummyForm({ title, description, fields, submitLabel }) {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = field.type === "file" ? null : "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files?.[0] ?? null : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">This is a dummy form — nothing was actually sent.</p>
        <button
          type="button"
          onClick={() => {
            setFormData(initialState);
            setAgreed(false);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Fill out again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col gap-5"
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map((field) => (
          <Field key={field.name} field={field} value={formData[field.name]} onChange={handleChange} />
        ))}
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500/40"
        />
        <span>
          I agree to the Privacy Policy<span className="text-red-500 ml-0.5">*</span>
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 text-white font-medium py-2.5 hover:bg-blue-700 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
