import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Form from '../components/form';

// 1. --- Core Data for NAP Consistency ---
const companyName = "AERO ENTERPRISES";
const primaryPhone = "+91 8459121717";
const secondaryPhone = "+91 9096105019";
const emailAddress = "aeroenterprises00@gmail.com";
const fullAddress = "Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar, Vasai - 401208, Palghar, Maharashtra, India";
const businessHours = "Mon - Sat, 9:00 AM - 9:00 PM";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1702.541649260675!2d72.8662455519027!3d19.423656964064943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9b747bf5dc7%3A0x25cd218db9d15dc7!2sAERO%20ENTERPRISES%20-%20Your%20Trusted%20Sheet%20Metal%20Supplier!5e1!3m2!1sen!2sin!4v1765626151494!5m2!1sen!2sin";


const items = [
    {
        icon: <MapPin size={20} />,
        description: (
            <>
                Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar, <br />
                Vasai - 401208, Palghar, Maharashtra
            </>
        ),
    },
    {
        icon: <Phone size={20} />,
        description: (
            <>
                <a href={`tel:${primaryPhone}`} className="hover:underline">{primaryPhone}</a> <br />
                <a href={`tel:${secondaryPhone}`} className="hover:underline">{secondaryPhone}</a> <br />
                {businessHours}
            </>
        ),
    },
    {
        icon: <Mail size={20} />,
        description: (
            <>
                <a href={`mailto:${emailAddress}`} className="hover:underline">{emailAddress}</a>
            </>
        ),
    },
];

// 2. --- Next.js SEO Metadata Export ---
export const metadata = {
    title: "Contact AERO ENTERPRISES | Sheet Metal Supplier in Vasai, Palghar",
    description: "Contact AERO ENTERPRISES in Vasai, Palghar for quotes on CRC, HR, GI, and SS sheets. Get our address, phone numbers, and location map for seamless industrial service.",
    keywords: ["contact sheet metal supplier Vasai", "AERO ENTERPRISES phone number", "sheet metal quote Mumbai"],
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/contact',
    },
};

// 3. --- LocalBusiness Schema Generation (Crucial for Local SEO) ---
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyName,
    "image": "https://www.aeroenterprises.shop/logo.webp", // Replace with actual logo URL
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gala No. 1, Khan Compound, Near Gausiya Weight Kata, Dhumal Nagar",
        "addressLocality": "Vasai",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "IN"
    },
    "telephone": primaryPhone,
    "email": emailAddress,
    "openingHours": "Mo-Sa 09:00-21:00",
    "priceRange": "$$"
};


// 4. --- Main Server Component ---
export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <div className='bg-white'>
                {/* Hero Section */}
                <section className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                    <div className='md:text-center px-4'>
                        <h1 className="text-4xl text-white pb-4">
                            Contact AERO ENTERPRISES
                        </h1>
                        <p className=' text-white'>
                            Get in touch with our team for inquiries, quotes, and technical consultations on sheet metals in the Mumbai region.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className='max-w-6xl mx-auto px-4'>
                        <div className='grid gap-8 md:grid-cols-2'>

                            {/* 1. NAP Details Card (Left Column) */}
                            <div className="overflow-hidden shadow-xl rounded-lg flex flex-col w-full h-full" data-aos="zoom-in-up">
                                <div className="bg-blue-50 p-6">
                                    <h2 className="text-2xl font-medium text-[#36566d]">Talk to Our Specialists</h2>
                                    <p className='text-gray-600 mt-1'>We serve the industrial sheet metal</p>
                                </div>
                                <div className="p-6 grow flex flex-col justify-between space-y-6">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-b-0">
                                            <div className="my-auto flex items-center justify-center text-[#36566d] shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div data-aos="zoom-in-up">
                                <Form />
                            </div>
                        </div>
                    </div>
                </section>





                {/* Map Section (Critical for Local SEO) */}
                <section className="bg-white py-16" >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in-up">
                        <div className="overflow-hidden shadow-lg rounded-lg  w-full">
                            <div className="bg-blue-50 p-6">
                                <h2 className="text-2xl font-medium text-[#36566d]">Find Our Vasai Location</h2>
                            </div>
                            <div className="h-[450px]">
                                <iframe
                                    // 🛑 Use the correct Google Maps embed URL here
                                    src={mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${companyName} - Location in Vasai, Palghar`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}