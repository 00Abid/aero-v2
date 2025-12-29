"use client";
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Integration logic for EmailJS or your API would go here
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-black text-black uppercase">RFQ Received</h3>
                <p className="text-gray-600 mt-2">Our technical sales desk will contact you with a formal quote within 120 minutes.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-black uppercase tracking-widest text-blue-600 underline"
                >
                    Send another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 ml-1">Company Contact Name</label>
                    <input
                        type="text" required placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all"
                    />
                </div>
                {/* Business Email */}
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 ml-1">Work Email</label>
                    <input
                        type="email" required placeholder="name@company.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Material Selection */}
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 ml-1">Material Required</label>
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                        <option>HR Sheet (Hot Rolled)</option>
                        <option>CR Sheet (Cold Rolled)</option>
                        <option>SS Coil (Stainless Steel)</option>
                        <option>MS Chequered Plate</option>
                        <option>GI / GP Sheet</option>
                        <option>Other / Custom Grade</option>
                    </select>
                </div>
                {/* Estimated Quantity */}
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 ml-1">Estimated Tonnage / Kgs</label>
                    <input
                        type="text" placeholder="e.g. 5 Tons"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all"
                    />
                </div>
            </div>

            {/* Message / Specifications */}
            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 ml-1">Detailed Specifications (Size/Grade)</label>
                <textarea
                    rows="4" placeholder="Mention specific grades like IS 2062 E250 or SS 304, and required dimensions..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-all resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full dark-metal-card text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-[0.98]"
            >
                Submit RFQ <Send size={16} />
            </button>

            <p className="text-[9px] text-gray-400 text-center font-bold uppercase tracking-widest">
                By submitting, you agree to Aero Enterprises privacy & commercial terms.
            </p>
        </form>
    );
};

export default Form;