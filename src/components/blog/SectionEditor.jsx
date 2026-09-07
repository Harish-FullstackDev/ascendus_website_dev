"use client";

import { ArrowDown, ArrowUp, ImageIcon, Plus, Trash2, X } from "lucide-react";

export default function SectionEditor({ sec, idx, sections, setSections }) {
    return (
        <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-4 bg-slate-50/50 dark:bg-neutral-800/10 relative">

            {/* Section Header with Actions */}
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-blue-500">
                    Section #{idx + 1}
                </span>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => {
                            if (idx === 0) return;
                            const updated = [...sections];
                            const temp = updated[idx];
                            updated[idx] = updated[idx - 1];
                            updated[idx - 1] = temp;
                            setSections(updated);
                        }}
                        className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 disabled:opacity-30 transition-all cursor-pointer"
                        title="Move Up"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        disabled={idx === sections.length - 1}
                        onClick={() => {
                            if (idx === sections.length - 1) return;
                            const updated = [...sections];
                            const temp = updated[idx];
                            updated[idx] = updated[idx + 1];
                            updated[idx + 1] = temp;
                            setSections(updated);
                        }}
                        className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 disabled:opacity-30 transition-all cursor-pointer"
                        title="Move Down"
                    >
                        <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        disabled={sections.length === 1}
                        onClick={() => {
                            if (sections.length === 1) return;
                            setSections(sections.filter(s => s.id !== sec.id));
                        }}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 disabled:opacity-30 transition-all ml-1 cursor-pointer"
                        title="Delete Section"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Heading Input */}
            <div>
                <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
                    Heading / Topic Title
                </label>
                <input
                    type="text"
                    value={sec.heading}
                    onChange={(e) => {
                        const updated = [...sections];
                        updated[idx].heading = e.target.value;
                        setSections(updated);
                    }}
                    placeholder="e.g. Introduction or Clean Core"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Content Textarea */}
            <div>
                <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
                    Content / Paragraph
                </label>
                <textarea
                    value={sec.content}
                    onChange={(e) => {
                        const updated = [...sections];
                        updated[idx].content = e.target.value;
                        setSections(updated);
                    }}
                    placeholder="Enter paragraph text..."
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
            </div>

            {/* Optional Image Area */}
            {sec.showImage ? (
                <div className="space-y-3 p-4 bg-neutral-100/50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800 rounded-xl relative">
                    <button
                        type="button"
                        onClick={() => {
                            const updated = [...sections];
                            updated[idx].showImage = false;
                            updated[idx].imageFile = null;
                            updated[idx].imagePreview = null;
                            updated[idx].caption = "";
                            setSections(updated);
                        }}
                        className="absolute top-2 right-2 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                        Section Image (optional)
                    </label>
                    <div className="relative border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 cursor-pointer hover:border-blue-500 transition-colors">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const updated = [...sections];
                                    updated[idx].imageFile = file;
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        updated[idx].imagePreview = reader.result;
                                        setSections(updated);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        {sec.imagePreview ? (
                            <div className="relative w-full h-32 rounded-lg overflow-hidden shadow-inner">
                                <img src={sec.imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const updated = [...sections];
                                        updated[idx].imageFile = null;
                                        updated[idx].imagePreview = null;
                                        setSections(updated);
                                    }}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-650 text-white shadow-md transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-2">
                                <ImageIcon className="w-8 h-8 text-neutral-400 mx-auto mb-1" />
                                <span className="text-xs text-neutral-500 dark:text-neutral-450 block font-medium">
                                    Click to upload section image
                                </span>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-neutral-500 mb-1">
                            Image Caption (optional)
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Figure 1: SAP Clean Core Architecture"
                            value={sec.caption}
                            onChange={(e) => {
                                const updated = [...sections];
                                updated[idx].caption = e.target.value;
                                setSections(updated);
                            }}
                            className="w-full px-3 py-2 rounded-xl border border-neutral-350 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        const updated = [...sections];
                        updated[idx].showImage = true;
                        setSections(updated);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-355 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                    <Plus className="w-3.5 h-3.5" /> Add Image (optional)
                </button>
            )}
        </div>
    );
}
