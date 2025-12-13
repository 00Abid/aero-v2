import React from 'react';
import Link from 'next/link';
import { Truck, Hammer, Thermometer, Airplay, Hospital, Zap, Check } from 'lucide-react';
import CTA from "../components/CTA";

export const metadata = {
    title: "Industries We Serve | AERO ENTERPRISES - Sheet Metal Solutions",
    description: "AERO ENTERPRISES delivers precision sheet metal and fabrication solutions for the Automotive, Construction, HVAC, Aerospace, Medical, and Energy industries in India.",
    keywords: ["sheet metal supplier automotive", "industrial fabrication solutions", "HVAC components India"],
    alternates: {
        canonical: 'https://aeroenterprises.shop/industries',
    },
};

const industries = [
    {
        id: 1,
        name: "Automotive",
        slug: "automotive",
        icon: <Truck size={36} className="text-[#36566d]" />,
        description: "Precision components for automotive manufacturing, from engine parts to transmission systems.",
        features: [
            "Engine Components",
            "Transmission Parts",
            "Brake Systems",
            "Suspension Components"
        ]
    },
    {
        id: 2,
        name: "Construction",
        slug: "construction",
        icon: <Hammer size={36} className="text-[#36566d]" />,
        description: "Heavy-duty parts and equipment for construction machinery and infrastructure projects.",
        features: [
            "Heavy Equipment Parts",
            "Hydraulic Components",
            "Structural Elements",
            "Custom Fabrication"
        ]
    },
    {
        id: 3,
        name: "HVAC",
        slug: "hvac",
        icon: <Thermometer size={36} className="text-[#36566d]" />,
        description: "High-quality components for heating, ventilation, and air conditioning systems.",
        features: [
            "Compressor Parts",
            "Heat Exchanger Components",
            "Valve Assemblies",
            "Control Systems"
        ]
    },
    {
        id: 4,
        name: "Aerospace",
        slug: "aerospace",
        icon: <Airplay size={36} className="text-[#36566d]" />,
        description: "Ultra-precise components meeting the strictest aerospace industry standards.",
        features: [
            "Aircraft Components",
            "Turbine Parts",
            "Landing Gear",
            "Structural Elements"
        ]
    },
    {
        id: 5,
        name: "Medical",
        slug: "medical",
        icon: <Hospital size={36} className="text-[#36566d]" />,
        description: "Sterile, precision-machined components for medical devices and equipment.",
        features: [
            "Surgical Instruments",
            "Implant Components",
            "Diagnostic Equipment",
            "Medical Devices"
        ]
    },
    {
        id: 6,
        name: "Energy",
        slug: "energy",
        icon: <Zap size={36} className="text-[#36566d]" />,
        description: "Durable components for power generation and energy distribution systems.",
        features: [
            "Turbine Components",
            "Generator Parts",
            "Pipeline Equipment",
            "Renewable Energy"
        ]
    }
];

// --- 3. JSON-LD Schema Generation (Runs on Server) ---
function generateIndustrySchema(data) {
    // Generate a simple CollectionPage or Service schema since this is an overview page
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Industries We Serve",
        "description": metadata.description,
        "url": metadata.alternates.canonical,
        "mainEntity": data.map(industry => ({
            "@type": "Service",
            "name": `${industry.name} Industry Solutions`,
            "description": industry.description,
            "url": `${metadata.alternates.canonical}/${industry.slug}`,
            "provider": {
                "@type": "Organization",
                "name": "AERO ENTERPRISES"
            }
        }))
    };
}


// --- 4. Main Server Component ---
export default function IndustriesPage() {
    const schema = generateIndustrySchema(industries);

    // Removed useEffect and SEOHead entirely
    return (
        <section className="bg-white">

            {/* JSON-LD Schema Injection - Renders on Server */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero Section */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4 md:text-center'>
                    <h1 className="text-4xl text-white pb-4">
                        Industries We Serve
                    </h1>
                    <p className='text-white text-lg'>
                        Delivering precision solutions across industries with unmatched quality and expertise
                    </p>
                </div>
            </div>

            {/* Industries Grid */}
            <div className="bg-[#F5F7FA] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry) => (
                            <div
                                key={industry.id}
                                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-4">{industry.icon}</div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                        {industry.name}
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        {industry.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {industry.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <Check className="w-5 h-5 text-green-500 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Link Button */}
                                <Link
                                    href={`/industries/${industry.slug}`} // Use href for Next.js Link
                                    className="inline-block dark-metal-card px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full text-center mt-auto"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* CTA Section - Added missing href props */}
            <CTA
                title="Ready to Discuss Your Project?"
                description="Contact AERO ENTERPRISES today to explore how our precision manufacturing solutions can meet your industry's unique needs."
                primaryButtonText="View Products"
                primaryButtonLink="/products"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
        </section>
    );
}