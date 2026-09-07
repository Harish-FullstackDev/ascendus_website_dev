"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, Plus, X } from "lucide-react";
import SectionEditor from "@/components/blog/SectionEditor";

export default function BlogCreationModal({
    isOpen,
    onClose,
    title,
    setTitle,
    author,
    setAuthor,
    publishDate,
    setPublishDate,
    sections,
    setSections,
    imagePreview,
    setImageFile,
    setImagePreview,
    onImageChange,
    isSubmitting,
    error,
    onSubmit,
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-center items-center p-4 overflow-y-auto"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-450"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                            Post a New Insights Article
                        </h2>

                        {error && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="space-y-5">

                            {/* Upload Section */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Cover Image
                                </label>
                                <div className="relative border-2 border-dashed border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={onImageChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        required
                                    />
                                    {imagePreview ? (
                                        <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-inner">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setImageFile(null);
                                                    setImagePreview(null);
                                                }}
                                                className="absolute top-2 right-2 p-1.5 rounded-full bg-red-650 hover:bg-red-750 text-white shadow-md transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center py-4">
                                            <ImageIcon className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                                            <span className="text-sm text-neutral-500 dark:text-neutral-450 block font-medium">
                                                Click or drag file to upload cover image
                                            </span>
                                            <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 block">
                                                Supports PNG, JPG, JPEG or WEBP
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                                        Blog Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        placeholder="e.g. Navigating SAP S/4HANA Migration"
                                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                                        Author Name
                                    </label>
                                    <input
                                        type="text"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        required
                                        placeholder="e.g. John Doe"
                                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    value={publishDate}
                                    onChange={(e) => setPublishDate(e.target.value)}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 pb-2">
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                        Article Sections
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={() => setSections([...sections, { id: Date.now(), heading: "", content: "", showImage: false, imageFile: null, imagePreview: null, caption: "" }])}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all"
                                    >
                                        <Plus className="w-3.5 h-3.5" /> Add Section
                                    </button>
                                </div>

                                {sections.map((sec, idx) => (
                                    <SectionEditor
                                        key={sec.id}
                                        sec={sec}
                                        idx={idx}
                                        sections={sections}
                                        setSections={setSections}
                                    />
                                ))}

                                <div className="flex justify-center pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setSections([...sections, { id: Date.now(), heading: "", content: "", showImage: false, imageFile: null, imagePreview: null, caption: "" }])}
                                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-bold rounded-xl transition-all border border-blue-200 cursor-pointer"
                                    >
                                        <Plus className="w-4 h-4" /> Add Another Section
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Posting...
                                        </>
                                    ) : (
                                        "Publish Blog"
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
