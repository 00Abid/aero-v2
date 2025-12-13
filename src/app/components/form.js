// src/app/components/UIMatchedMailtoForm.js
'use client';
import React from 'react';

// --- Configuration ---
const YOUR_EMAIL = "aeroenterprises00@gmail.com";
const SUBJECT_LINE = "Quote Request for Sheet Metal - via Website Form";

const Form = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements.name.value;
        const company = form.elements.company.value;
        const phone = form.elements.phone.value;
        const requirement = form.elements.requirement.value;
        
        const emailBody = `
        Name: ${name}
        Company: ${company}
        Contact No: ${phone}
        
        --- Specific Requirements ---
        ${requirement}
        
        --- 
        Sent from AERO ENTERPRISES website.
        `.trim();
        
        const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(SUBJECT_LINE)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    return (
        // Matches the outer shadow and rounded look
        <div className="max-w-xl mx-auto overflow-hidden shadow-xl rounded-lg" data-aos="zoom-in-up"> 
            
            <div className="bg-blue-50 p-6">
                <h3 className="text-2xl font-medium text-[#36566d]">Send Your Requirement</h3>
                <p className="text-gray-600 mt-1">Fill out the details to quickly send us your custom quote request.</p>
            </div>
            
            {/* Form Body */}
            <div className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name" 
                            required
                            className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#36566d] placeholder-gray-500 outline-none transition duration-300 bg-white"
                            placeholder="Your Full Name (Required)"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#36566d] placeholder-gray-500 outline-none transition duration-300 bg-white"
                            placeholder="Company/Firm Name (Optional)"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#36566d] placeholder-gray-500 outline-none transition duration-300 bg-white"
                            placeholder="Contact Number (Required)"
                        />
                    </div>
                    
                    {/* Requirement */}
                    <div>
                        <textarea
                            id="requirement"
                            name="requirement"
                            rows="4"
                            required
                            className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-[#36566d] placeholder-gray-500 outline-none transition duration-300 bg-white"
                            placeholder="Material, Grade, Thickness, Quantity, Destination..."
                        ></textarea>
                    </div>

                    {/* Button: Matches the primary color */}
                    <button
                        type="submit"
                        className="w-full bg-[#36566d] hover:bg-[#2c4759] text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 mt-4"
                    >
                        Send Inquiry & Request Quote
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Form;