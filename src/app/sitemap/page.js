// src/app/sitemap/page.js
// NOTE: Must use Next.js 'Link' component. Using lowercase 'link' from your original code will cause an error.

import React from 'react';
import Link from 'next/link'; // Corrected import: 'link' -> 'next/link'
import { ChevronRight, Package, Factory, Newspaper, Phone } from "lucide-react";
// Assuming CTA is a Client Component (needs 'use client') or a Server Component
import CTA from "../components/CTA";

// 1. --- Next.js SEO Metadata Export (SSR) ---
export const metadata = {
    title: "Sitemap | Complete Site Navigation | AERO ENTERPRISES",
    description: "A complete overview of all pages, products, industries, and resources available on the AERO ENTERPRISES website. Find quick links for easy navigation.",
    keywords: ["HTML sitemap", "site map AERO ENTERPRISES", "product links"],
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/sitemap',
    },
};

const sitemapSections = [
    {
        title: "Main Pages",
        icon: <ChevronRight className="text-white mr-2" size={20} />,
        links: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Why Choose Us", path: "/why" },
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Testimonials", path: "/testimonials" },
        ]
    },
    {
        title: "Industries",
        icon: <Factory className="text-white mr-2" size={20} />,
        links: [
            { name: "All Industries", path: "/industries" },
            { name: "Automotive", path: "/industries/automotive" },
            { name: "Construction", path: "/industries/construction" },
            { name: "HVAC", path: "/industries/hvac" },
            { name: "Aerospace", path: "/industries/aerospace" },
            { name: "Medical", path: "/industries/medical" },
            { name: "Energy", path: "/industries/energy" },
        ]
    },
    {
        title: "Blog & Resources",
        icon: <Newspaper className="text-white mr-2" size={20} />,
        links: [
            { name: "Blog Home", path: "/blog" },
            { name: "Precision Machining in Aerospace", path: "/blog/precision-machining-aerospace-industry" },
            { name: "CNC vs Traditional Methods", path: "/blog/cnc-machining-vs-traditional-methods" },
            { name: "Quality Control in Manufacturing", path: "/blog/quality-control-manufacturing" },
            { name: "Automotive Manufacturing Trends", path: "/blog/automotive-parts-manufacturing-trends" },
            { name: "Material Selection Guide", path: "/blog/material-selection-guide" },
            { name: "Reducing Lead Times", path: "/blog/reducing-lead-times-manufacturing" },
        ]
    },
    {
        title: "Legal & Policies",
        icon: <Phone className="text-white mr-2" size={20} />,
        links: [
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" },
            { name: "Cookie Policy", path: "/cookie-policy" },
        ]
    }
];


// 3. --- Main Sitemap Server Component ---
export default function SitemapPage() {
    return (
        <section className="bg-white">

            {/* Title Section */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h1 className="text-4xl text-white pb-4">
                        Site Navigation (Sitemap)
                    </h1>
                    <p className=' text-white text-lg'>
                        Complete overview of all pages and resources on our website for seamless access.
                    </p>
                </div>
            </div>

            {/* Sitemap Content */}
            <div className="bg-[#F5F7FA] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Adjusted grid to 2 columns on medium, 4 columns on large screens for better flow */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sitemapSections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-start">

                                {/* Section Title */}
                                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#36566d]">
                                    {section.title}
                                </h2>

                                {/* Link List */}
                                <ul className="space-y-3">
                                    {section.links.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.path} // Use href for Next.js Link
                                                className="text-gray-700 hover:text-[#36566d] transition-colors flex items-center group"
                                            >
                                                <ChevronRight className="text-[#36566d] mr-2 group-hover:mr-3 transition-all shrink-0" size={18} />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Access Links (The blue boxes) */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 md:text-center">
                        Quick Access
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Link
                            href="/products"
                            className="bg-linear-to-br from-[#36566d] to-[#4a6f8a] rounded-lg p-6 text-white text-center hover:shadow-xl transition-shadow"
                        >
                            <Package className="mx-auto mb-3 text-white" size={36} />
                            <h3 className="text-xl font-bold">Products</h3>
                        </Link>
                        <Link
                            href="/industries"
                            className="bg-linear-to-br from-[#36566d] to-[#4a6f8a] rounded-lg p-6 text-white text-center hover:shadow-xl transition-shadow"
                        >
                            <Factory className="mx-auto mb-3 text-white" size={36} />
                            <h3 className="text-xl font-bold">Industries</h3>
                        </Link>
                        <Link
                            href="/blog"
                            className="bg-linear-to-br from-[#36566d] to-[#4a6f8a] rounded-lg p-6 text-white text-center hover:shadow-xl transition-shadow"
                        >
                            <Newspaper className="mx-auto mb-3 text-white" size={36} />
                            <h3 className="text-xl font-bold">Blog</h3>
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-linear-to-br from-[#36566d] to-[#4a6f8a] rounded-lg p-6 text-white text-center hover:shadow-xl transition-shadow"
                        >
                            <Phone className="mx-auto mb-3 text-white" size={36} />
                            <h3 className="text-xl font-bold">Contact</h3>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <CTA
                title="Verify Our Quality. Request ISO Specs Today."

                description="Our ISO-certified processes and deep product expertise ensure your project receives only the best sheet metal materials. Contact our specialists now."
                primaryButtonText="Request Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="View All Products"
                secondaryButtonLink="/products"
            />
        </section>
    );
}