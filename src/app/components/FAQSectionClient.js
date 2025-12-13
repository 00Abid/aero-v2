"use client";
import React, { useState } from 'react';

// --- Aero Enterprises FAQ Data (10 Items) ---
const AERO_ENTERPRISES_FAQS = [
  {
    question: "What types of sheet metal products does Aero Enterprises specialize in?",
    answer: "We specialize in the supply of Standard Sheet Metal, Sheet Coil, and Secondhand/Secondary Sheets. Our primary focus is on quality and consistency across various grades and specifications to meet industrial demands."
  },
  {
    question: "Where is Aero Enterprises located, and what areas do you serve?",
    answer: "Our main operations are based in Vasai, Mumbai, Maharashtra. However, we are fully equipped and committed to supplying and delivering our sheet metal products to clients across all major industrial hubs in India."
  },
  {
    question: "Can I order custom sizes or grades of sheet metal?",
    answer: "Yes, we handle custom requirements. Depending on the volume and specific material (CRC, HR, GI, SS), we can process orders for specialized cuts and unique grade specifications. Please contact our sales team for detailed feasibility."
  },
  {
    question: "What is the primary benefit of choosing your Secondary Sheet Metal?",
    answer: "Secondary (Secondhand) sheets offer a significant cost advantage while still maintaining usable quality for non-critical applications like fabrication, temporary structures, and general engineering. It's a highly economical choice for large projects."
  },
  {
    question: "Do you supply Sheet Coils, and what is the typical coil size?",
    answer: "Yes, we supply sheet coils. The typical size and width vary widely based on the material (e.g., Cold Rolled or Hot Rolled). We recommend checking with our inventory team for the precise gauge and weight specifications currently available."
  },
  {
    question: "How long does delivery take for sheet metal orders across India?",
    answer: "Delivery time varies based on the destination and order volume. For locations within Maharashtra, delivery is typically faster. For pan-India delivery, we use reliable logistics partners and provide estimated delivery timelines upon order confirmation."
  },
  {
    question: "What are Core Web Vitals, and how do they affect my website's SEO?",
    answer: "Core Web Vitals (CWV) are a set of metrics defined by Google that measure user experience, including loading speed (LCP), interactivity (FID/INP), and visual stability (CLS). Improving CWV is critical for boosting search rankings and retention. (This is a sample technical question for a manufacturing client's SEO page)."
  },
  {
    question: "Are your sheet metal products certified for quality assurance?",
    answer: "All our primary (standard) sheet metal products are sourced from reputable mills and come with quality assurance documentation. Secondary sheets are inspected visually for usability. Certification details are available upon request."
  },
  {
    question: "How does the single-open (accordion) behavior work?",
    answer: "In this structure, when you click to open one question, all other currently open answers will automatically close. This ensures a clean interface, prevents vertical sprawl, and keeps the user focused on the current answer."
  },
  {
    question: "What is the process for placing a bulk order?",
    answer: "Please initiate the process by contacting our sales team via phone or email. We will discuss your material specification, required quantity, and delivery timeline, then provide a formal, customized quotation and payment schedule."
  },
];

// Component for a single FAQ item (Now manages its own open/close state)
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden" data-aos="fade-up">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
        onClick={onClick} // Use the parent's onClick handler
      >
        <h3 className="text-sm font-semibold text-black">{question}</h3>
        <span className="text-gray-600">{isOpen ? '−' : '+'}</span>
      </button>
      {/* Conditional Rendering for Answer */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <div className="dark-metal-card m-4 rounded-lg">
          <p className="text-sm text-white p-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component (Implements the single-open logic)
export default function FAQSectionClient() {
  // State to track which item is currently open (stores the index)
  const [openIndex, setOpenIndex] = useState(null);

  // Handler to toggle an item open/closed (implementing the single-open logic)
  const handleToggle = (index) => {
    // If the same item is clicked, close it (set to null)
    // Otherwise, open the new item (set to the new index)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl md:text-center py-5 px-4 mb-2">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {AERO_ENTERPRISES_FAQS.map((f, i) => (
          <FAQItem
            key={i}
            question={f.question}
            answer={f.answer}
            isOpen={openIndex === i} // Pass the state to the child
            onClick={() => handleToggle(i)} // Pass the handler to the child
          />
        ))}
      </div>
    </section>
  );
}