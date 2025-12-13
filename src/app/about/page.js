import React from 'react';
// Use Next.js Link
import Link from 'next/link';
import Image from 'next/image'; // For optimization
import CTA from '../components/CTA';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

// 🛑 1. Next.js Metadata Export (Replaces SEOHead)
export const metadata = {
    title: "About AERO ENTERPRISES | Trusted Sheet Metal Supplier in Vasai, Mumbai",
    description: "Founded in 2015, AERO ENTERPRISES is a leading supplier of premium CRC, HR, GI, SS, and Pickle sheets across India. Learn about our commitment to quality, team expertise, and ISO certification.",
};


// --- Data remains the same, but remove the unused useState import ---
const values = [
    {
        icon: <Target className="w-10 h-10" />,
        title: "Our Mission",
        description: "To provide high-quality sheet metal products and exceptional service to industries across India, building lasting partnerships through reliability and excellence."
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Expert Team", // SEO enhancement
        description: "Experienced professionals with deep industry knowledge, committed to understanding and meeting your specific sheet metal requirements."
    },
    {
        icon: <Award className="w-10 h-10" />,
        title: "ISO Quality First", // SEO enhancement (use keyword from milestone)
        description: "Rigorous quality control processes, reinforced by our ISO certification, ensure every product meets industry standards and exceeds customer expectations."
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        title: "Market Leadership", // SEO enhancement
        description: "Investing in technology and expertise to stay ahead of industry trends and serve our customers better through continuous growth and product expansion."
    }
];

const milestones = [
    { year: "2015", event: "Company Foundation", description: "AERO ENTERPRISES established in Vasai, Maharashtra." },
    { year: "2017", event: "Product Line Expansion", description: "Added specialized Stainless Steel (SS) and Pickled & Oiled (P&O) sheets to our core offerings." },
    { year: "2019", event: "Facility Upgrade", description: "Moved to a larger, optimized facility in Dhumal Nagar to handle increased inventory and service capacity." },
    { year: "2021", event: "ISO Quality Certification", description: "Achieved recognized quality management certification (e.g., ISO 9001) for rigorous supply processes." },
    { year: "2023", event: "Digital Platform Launch", description: "Launched our online platform for streamlined quoting, technical specifications access, and easier ordering." },
    { year: "2025", event: "Serving 500+ Clients", description: "Proudly serving over 500 satisfied industrial customers across major manufacturing hubs in India." }
];


export default function AboutPage() { // Rename to standard Page function
    return (
        <>


            <div className="bg-white">
                {/* Title Section */}
                <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                    <div className='ml-4'>
                        <h1 className="text-3xl text-white pb-4">
                            About Us
                        </h1>
                        <p className=' text-white'>
                            Your Trusted Partner in Sheet Metal Supply Since 2015
                        </p>
                    </div>
                </div>

                {/* Company Story */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-semibold text-black mb-6">Our Story & Commitment</h2> {/* E-A-T Title */}
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Founded in 2015, AERO ENTERPRISES has grown from a specialized sheet metal supplier to a trusted authority in the industry. Strategically located in Vasai, Maharashtra (near Mumbai), we are positioned to serve diverse heavy industries across all of India with premium quality materials.
                                </p>
                                <p>
                                    Our journey began with a simple vision: to provide reliable, ISO-certified quality sheet metal solutions coupled with expert technical consultation. Today, we focus on delivering comprehensive inventory—from primary sheets and coils to cost-effective secondary options—to ensure your project never stalls.
                                </p>
                                <p>
                                    We specialize across all major grades—**CRC, HR, GI, SS, and Pickled sheets**—and offer precision cutting and reliable logistics to maximize efficiency for our clients.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <video
                                src="/about.mp4"
                                alt="AERO ENTERPRISES facility and team showcasing sheet metal operations"
                                className="rounded-xl shadow-lg w-full object-cover h-full"
                                loading="lazy"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-black md:text-center mb-12">Core Principles & Expertise</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="text-[#36566d] mb-4">{value.icon}</div>
                                    <h3 className="text-lg font-semibold text-black mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-16 bg-[#F5F7FA] py-16 -mx-4 px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-semibold text-black md:text-center mb-12">Our Journey & Milestones</h2>
                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-6 items-start"
                                        data-aos="fade-right"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="shrink-0">
                                            <div className="w-20 h-20 rounded-full dark-metal-card flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">{milestone.year}</span>
                                            </div>
                                        </div>
                                        <div className="grow pt-2">
                                            <h3 className="text-xl font-semibold text-black mb-2">
                                                {milestone.event}
                                            </h3>
                                            <p className="text-gray-700">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us (Stats) */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold text-black md:text-center mb-12">Why AERO ENTERPRISES?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center" data-aos="zoom-in">
                                <div className="text-5xl font-bold text-[#36566d] mb-2">500+</div>
                                <p className="text-gray-700 font-semibold">Satisfied Industrial Customers</p>
                            </div>
                            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                                <div className="text-5xl font-bold text-[#36566d] mb-2">10+</div>
                                <p className="text-gray-700 font-semibold">Years of Sheet Metal Expertise</p>
                            </div>
                            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                                <div className="text-5xl font-bold text-[#36566d] mb-2">3</div>
                                <p className="text-gray-700 font-semibold">Core Product Categories (Coils, Primary, Secondary)</p>
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
                </div>

            </div>
        </>
    );
}