'use client';
import React from 'react';

const numberwa = "+918459121717";

export default function WhatsappButton({ productType }) {
    const requestWhatsappQuote = () => {
        const message = `Hello AERO ENTERPRISES team,

I’m interested in your product: 
*${productType}*.
Could you please share the price details and availability?

Thank you
Sent from your website: www.aeroenterprises.shop`;

        const url = `https://wa.me/${numberwa}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <button
            className="w-full dark-metal-card hover:scale-101 text-white py-2 px-4 rounded transition"
            onClick={requestWhatsappQuote}
        >
            Request Quote
        </button>
    );
}