import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPseoPaths, getPseoData } from '../../../../utils/pseo-utils';
import CTA from '../../../../components/CTA';
import { CheckCircle, Truck, DollarSign } from 'lucide-react';

// ----------------------------------------------------
// A. Next.js Static Path Generation (Runs at Build Time)
// ----------------------------------------------------
/**
 * Next.js function to pre-render all possible PSEO pages (SSG).
 * It calls the utility to get all product/location combinations.
 */
export function generateStaticParams() {
    console.log("Generating static paths for PSEO supplier pages...");
    // Fetches the array of { location: 'slug', product: 'slug' } objects
    return getAllPseoPaths();
}


// ----------------------------------------------------
// B. Dynamic Metadata (Title, Description, Canonical)
// ----------------------------------------------------
/**
 * Creates unique, SEO-optimized metadata for each generated page.
 */
export async function generateMetadata({ params }) {
    // 1. Fetch the data for the current URL slugs
    const data = getPseoData(params.location, params.product);

    if (!data) return { title: 'Not Found' };

    // 2. Define SEO variables
    const title = `${data.material_name} Supplier & Dealer in ${data.name} | AERO ENTERPRISES`;
    const description = `Need high-quality ${data.material_name} in the ${data.name} area? We offer grades like ${data.material_keywords.split(', ')[0]}, fast delivery, and competitive pricing. Pin Code: ${data.pin}. Request a quote now.`;

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `https://aeroenterprises.shop/suppliers/${data.slug}/${data.material_slug}`,
        },
    };
}


// ----------------------------------------------------
// C. Main Page Component (Renders the Content)
// ----------------------------------------------------
/**
 * The main component that renders the PSEO landing page content.
 */
export default async function PseoLandingPage({ params }) {
    const { location, product } = params;

    // Fetch the specific data for this page
    const data = getPseoData(location, product);

    if (!data) {
        return notFound();
    }

    // Prepare readable variables for the UI
    const primaryTitle = `Leading Supplier of ${data.material_name} in ${data.name}`;

    // --- Dynamic Schema Generation for Local SEO ---
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AERO ENTERPRISES",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": data.name, // Dynamic Location
            "postalCode": data.pin,     // Dynamic Pin Code
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "description": `Sheet metal supplier specializing in ${data.material_name} serving the ${data.name} area.`,
        "areaServed": data.name,
        "url": `https://aeroenterprises.shop/suppliers/${data.slug}/${data.material_slug}`,
        "telephone": "+91 8459121717"
    };

    return (
        <section className="bg-white">

            {/* 1. JSON-LD Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* 2. Hero Section */}
            <div className='blue-metal w-full py-20 px-4 text-center'>
                {/* H1 Tag with Dynamic Keywords - CRITICAL for SEO */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {primaryTitle}
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    AERO ENTERPRISES is your trusted partner for industrial materials in **{data.name}**, offering competitive rates and guaranteed quality for all your **{data.material_name}** needs.
                </p>
            </div>

            {/* 3. Main Content Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Unique Selling Proposition (USP) & Specs */}
                    <div className="md:col-span-1 border-r pr-6">
                        <h2 className="text-2xl font-semibold text-[#36566d] mb-4 border-b pb-2">Why Choose Us in {data.name}?</h2>

                        <ul className="list-none space-y-3 text-gray-700">
                            <li className="flex items-start"><Truck className="w-5 h-5 text-[#36566d] mr-2 mt-1 flex-shrink-0" /> **Rapid Delivery:** Guaranteed scheduling to all {data.name} pincodes (like {data.pin}).</li>
                            <li className="flex items-start"><DollarSign className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" /> **Competitive Price:** Approx. starting from ₹{data.price_avg_inr} per ton.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> **Stock Guaranteed:** {data.stock_status} for immediate dispatch.</li>
                            <li className="mt-4 pt-4 border-t border-gray-200">
                                **Specs:** {data.min_thickness_mm}mm to {data.max_thickness_mm}mm thickness available.
                            </li>
                        </ul>
                    </div>

                    {/* Dynamic PSEO Content Block */}
                    <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3 border-b pb-2">Detailed {data.material_name} Information for {data.name} Projects</h3>

                        <p className='text-gray-700 space-y-4'>
                            As the dedicated **{data.material_name}** supplier for **{data.name}** and surrounding industrial zones, AERO ENTERPRISES provides only certified materials. Our {data.material_name} boasts key features like **{data.usp_short}** and is ideal for projects requiring high-grade materials like {data.material_keywords}.
                        </p>
                        <p className='text-gray-700 mt-4'>
                            Our local logistics network ensures we can fulfill high-volume orders quickly across the {data.name} and Mumbai region. Use our dedicated product page for a technical deep-dive:
                            <Link href={`/products/${data.material_slug}`} className='text-blue-600 hover:underline font-semibold'> View Full {data.material_name} Specifications</Link>.
                        </p>
                        <p className='mt-6 text-sm text-gray-500'>*Note: Market prices fluctuate. Please contact our {data.name} sales team for a precise quote today.</p>
                    </div>
                </div>
            </div>

            {/* 4. Final CTA */}
            <CTA
                title={`Get the Best Price for ${data.material_name} in ${data.name}`}
                description="Contact us now for competitive pricing and rapid delivery scheduling for your industrial project today."
                primaryButtonText="Request Quote Now"
                primaryButtonLink="/contact"
                secondaryButtonText="Call Us: +91 8459121717"
                secondaryButtonLink="tel:+918459121717"
            />
        </section>
    );
}