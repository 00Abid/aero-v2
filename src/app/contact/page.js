import React from 'react';
import { MapPin, Phone, Mail, Clock, Factory, Warehouse, ShieldCheck, Truck } from 'lucide-react';
import Form from '../components/form';
import Link from 'next/link';

// 1. --- Core Data for NAP Consistency ---
const companyName = "AERO ENTERPRISES";
const primaryPhone = "+91 8459121717";
const secondaryPhone = "+91 9096105019";
const emailAddress = "aeroenterprises00@gmail.com";
const businessHours = "Mon - Sat: 9:00 AM - 9:00 PM";

// 🛑 IMPORTANT: Update these Google Maps links for Unit and Godown
const unitMapUrl = "https://maps.google.com/?q=Aero+Enterprises+Unit+Vasai";
const godownMapUrl = "https://maps.google.com/?q=Aero+Enterprises+Godown+Vasai";

// 2. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Contact Aero Enterprises | Manufacturing Unit & Godown in Vasai",
    description: "Connect with Aero Enterprises. Visit our Manufacturing Unit in Dhumal Nagar or our Logistics Godown in Khan Compound. Certified steel supply across Mumbai & Palghar.",
    keywords: ["steel supplier Vasai East", "Aero Enterprises Godown address", "sheet metal manufacturing Mumbai", "MSME steel dealer Vasai"],
};

// 3. --- Multi-Location Schema (LocalBusiness + Branch) ---
const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyName,
    "image": "https://www.aeroenterprises.shop/AE-logo.webp",
    "telephone": primaryPhone,
    "email": emailAddress,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar",
        "addressLocality": "Vasai East",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "IN"
    },
    "subOrganization": [
        {
            "@type": "GovernmentOffice",
            "name": "Aero Enterprises - Manufacturing Unit",
            "address": "Dhumal Nagar, Vasai East, Palghar"
        },
        {
            "@type": "Warehouse",
            "name": "Aero Enterprises - Logistics Godown",
            "address": "Khan Compound, Sativali Road, Vasai East"
        }
    ]
};

export default function ContactPage() {
    return (
        <main className='bg-white font-sans'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Hero Section */}
            <section className='blue-metal w-full h-[40vh] flex justify-center items-center text-center px-6'>
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Connect with the Hub
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg font-medium'>
                        Direct access to our Manufacturing Unit and Logistics Godown. Request technical audits or industrial quotes.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid gap-16 lg:grid-cols-2 items-start'>

                        {/* LEFT COLUMN: DUAL FACILITY DETAILS */}
                        <div className="space-y-12" data-aos="fade-right">

                            {/* 1. MANUFACTURING UNIT */}
                            <div className="group p-8 rounded-3xl border-2 border-gray-50 hover:border-black transition-all bg-white shadow-sm">
                                <div className="flex items-center gap-4 mb-6 text-black">
                                    <Factory size={32} />
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Manufacturing Unit</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                                    Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar, Vasai East - 401208.
                                </p>
                                <Link href={unitMapUrl} target="_blank" className="text-xs font-black uppercase tracking-widest text-blue-600 hover:underline">
                                    View on Google Maps →
                                </Link>
                            </div>

                            {/* 2. LOGISTICS GODOWN */}
                            <div className="group p-8 rounded-3xl border-2 border-gray-50 hover:border-black transition-all bg-white shadow-sm">
                                <div className="flex items-center gap-4 mb-6 text-black">
                                    <Warehouse size={32} />
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Logistics Godown</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                                    Sativali Road Hub, Vasai East, Palghar, Maharashtra. (Strategic Access for Heavy Loading & Unloading)
                                </p>
                                <Link href={godownMapUrl} target="_blank" className="text-xs font-black uppercase tracking-widest text-blue-600 hover:underline">
                                    View on Google Maps →
                                </Link>
                            </div>

                            {/* 3. CORE CONTACT CHANNELS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                <div>
                                    <h4 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-gray-400 mb-4">
                                        <Phone size={14} /> Sales & RFQ
                                    </h4>
                                    <a href={`tel:${primaryPhone}`} className="text-lg font-black block">{primaryPhone}</a>
                                    <a href={`tel:${secondaryPhone}`} className="text-lg font-black block">{secondaryPhone}</a>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-gray-400 mb-4">
                                        <Mail size={14} /> Email Dispatch
                                    </h4>
                                    <a href={`mailto:${emailAddress}`} className="text-lg font-black wrap-break-word">{emailAddress}</a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: THE FORM COMPONENT */}
                        <div className="lg:sticky lg:top-24" data-aos="fade-left">
                            <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                                {/* Visual Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full"></div>

                                <div className="mb-10">
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Request a Quote</h2>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mt-2 tracking-widest">
                                        Get Technical Consultation in 120 Minutes
                                    </p>
                                </div>

                                {/* YOUR FORM COMPONENT CALLED HERE */}
                                <Form />

                                <div className="mt-8 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-200 pt-6">
                                    <span className="flex items-center gap-1"><ShieldCheck size={12} /> Mill Certified</span>
                                    <span className="flex items-center gap-1"><Truck size={12} /> Regional Delivery</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* MULTI-MAP LOCAL SEO SECTION */}
            <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* MAP 1 */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-80 relative group">
                            <iframe src={unitMapUrl} width="100%" height="100%" className="grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy"></iframe>
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg font-black text-[10px] uppercase">Unit I: Manufacturing</div>
                        </div>
                        {/* MAP 2 */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-80 relative group">
                            <iframe src={godownMapUrl} width="100%" height="100%" className="grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy"></iframe>
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg font-black text-[10px] uppercase">Godown: Logistics Hub</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}