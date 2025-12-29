'use client';
import React from 'react';
import { MessageSquareText } from 'lucide-react';

const numberwa = "918459121717"; // Removed the '+' for cleaner URL protocol

export default function WhatsappButton({ productType }) {
    const requestWhatsappQuote = () => {
        // ELITE B2B MESSAGE: Uses professional industry terminology
        const message = `*Aero Enterprises | RFQ Inquiry*
--------------------------------
Hello Team, I am interested in sourcing: 
*${productType}*

Please provide:
1. Current market rate per KG/Ton
2. Availability of Mill Test Certificate (MTC)
3. Estimated dispatch time to my location.

Thank you.
(Sent via: aeroenterprises.shop)`;

        const url = `https://wa.me/${numberwa}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <button
            aria-label={`Inquire about ${productType} on WhatsApp`}
            className="w-full flex items-center justify-center gap-3 dark-metal-card  text-white py-3 px-6 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-lg hover:shadow-green-500/20 active:scale-95 group"
            onClick={requestWhatsappQuote}
        >
            <MessageSquareText size={16} className="group-hover:animate-bounce" />
            WhatsApp Quote
        </button>
    );
}