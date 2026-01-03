"use client";
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center p-12 blue-metal-card rounded-3xl text-center shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">RFQ Received</h3>
                <p className="text-white/70 mt-3 max-w-xs leading-relaxed">
                    Our technical sales desk will contact you with a formal quote within <span className="text-white font-bold">120 minutes</span>.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/20"
                >
                    New Inquiry
                </button>
            </div>
        );
    }

    const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400 text-slate-900";
    const labelClasses = "block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 ml-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                    <label className={labelClasses}>Contact Person</label>
                    <input
                        type="text" required placeholder="e.g. AERO ENTERPRISES"
                        className={inputClasses}
                    />
                </div>
                {/* Business Email */}
                <div>
                    <label className={labelClasses}>Work Email</label>
                    <input
                        type="email" required placeholder="name@company.com"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                    <label className={labelClasses}>Mobile / WhatsApp</label>
                    <input
                        type="tel" required placeholder="+91 00000 00000"
                        className={inputClasses}
                    />
                </div>
                {/* Estimated Quantity */}
                <div>
                    <label className={labelClasses}>Requirement Quantity</label>
                    <input
                        type="text" required placeholder="e.g. 5 Tons / 500 Nos"
                        className={inputClasses}
                    />
                </div>
            </div>

            {/* Message / Specifications */}
            <div>
                <label className={labelClasses}>Technical Specifications & Grade</label>
                <textarea
                    rows="4"
                    required
                    placeholder="Provide details like Grade (IS 2062, SS 304), Dimensions, or Fabrication requirements..."
                    className={`${inputClasses} resize-none`}
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full dark-metal-card text-white font-black uppercase tracking-[0.25em] py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all active:scale-[0.97] group"
            >
                Submit Request For Quote
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 opacity-60">
                <span className="h-[1px] w-8 bg-slate-300"></span>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                    Enterprise Grade Data Security
                </p>
                <span className="h-[1px] w-8 bg-slate-300"></span>
            </div>
        </form>
    );
};

export default Form;