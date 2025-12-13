import React from 'react';
import Link from 'next/link'; // Corrected import from 'react-router-dom'
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import CTA from '../components/CTA';
export const metadata = {
    title: "Terms of Service | AERO ENTERPRISES",
    description: "Terms and conditions for using AERO ENTERPRISES sheet metal supply services. Read our service agreement, warranties, and legal terms. Last Updated: January 4, 2025.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/terms',
    },
};


const highlights = [
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Service Agreement",
        content: "Terms governing the use of our sheet metal supply and fabrication services."
    },
    {
        icon: <Scale className="w-8 h-8" />,
        title: "Legal Compliance",
        content: "All services comply with Indian laws and industry regulations."
    },
    {
        icon: <AlertCircle className="w-8 h-8" />,
        title: "Liability Terms",
        content: "Clear definition of responsibilities and limitations."
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Quality Guarantee",
        content: "Our commitment to delivering quality products and services."
    }
];


// 2. --- Main Terms Page Server Component ---
export default function TermsPage() {
    return (
        <div className="bg-white">

            {/* Title Section */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h1 className="text-4xl text-white pb-4">
                        Terms of Service
                    </h1>
                    <p className=' text-white text-lg'>
                        Comprehensive terms and conditions for using AERO ENTERPRISES
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <p className="text-gray-700 mb-4">
                        Last Updated: January 4, 2025
                    </p>
                    <p className="text-gray-700 mb-4">
                        These Terms of Service ("Terms") govern your use of AERO ENTERPRISES' website and services. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use immediately.
                    </p>
                </div>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                            data-aos="fade-up"
                        >
                            <div className="text-[#36566d] mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-black mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Terms */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-700">
                            By accessing our website at www.aeroenterprises.shop or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">2. Services Provided</h2>
                        <p className="text-gray-700 mb-3">
                            AERO ENTERPRISES provides:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Supply of sheet metal products (CRC, HR, GI, SS, Pickle sheets)</li>
                            <li>Custom cutting and fabrication services</li>
                            <li>Technical consultation and support</li>
                            <li>Delivery and logistics services</li>
                            <li>Quality assurance and testing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">3. Orders and Quotes</h2>
                        <div className="text-gray-700 space-y-3">
                            <p><strong>3.1 Quotations:</strong> All quotes are valid for 30 days unless otherwise specified. Prices are subject to change based on market conditions.</p>
                            <p><strong>3.2 Order Acceptance:</strong> Orders are subject to acceptance by AERO ENTERPRISES. We reserve the right to refuse any order.</p>
                            <p><strong>3.3 Minimum Orders:</strong> Minimum order quantities may apply depending on product type and specifications.</p>
                            <p><strong>3.4 Custom Orders:</strong> Custom specifications require written confirmation and may involve additional lead time and costs.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">4. Pricing and Payment</h2>
                        <div className="text-gray-700 space-y-3">
                            <p><strong>4.1 Pricing:</strong> All prices are in Indian Rupees (INR) and exclude applicable taxes unless stated otherwise.</p>
                            <p><strong>4.2 Payment Terms:</strong> Payment terms are Net 30 days for approved credit customers. New customers may require advance payment or cash on delivery.</p>
                            <p><strong>4.3 Late Payment:</strong> Late payments may incur interest charges at 2% per month or the maximum rate permitted by law.</p>
                            <p><strong>4.4 Payment Methods:</strong> We accept bank transfers, credit cards, cash, and UPI payments.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">5. Delivery and Shipping</h2>
                        <div className="text-gray-700 space-y-3">
                            <p><strong>5.1 Delivery Times:</strong> Estimated delivery times are provided in good faith but are not guaranteed. Delays due to circumstances beyond our control are not our responsibility.</p>
                            <p><strong>5.2 Shipping Costs:</strong> Shipping costs are additional unless otherwise agreed in writing.</p>
                            <p><strong>5.3 Risk of Loss:</strong> Risk of loss passes to the buyer upon delivery to the carrier.</p>
                            <p><strong>5.4 Inspection:</strong> Buyers must inspect goods upon delivery and report any discrepancies within 48 hours.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">6. Quality and Warranties</h2>
                        <div className="text-gray-700 space-y-3">
                            <p><strong>6.1 Quality Standards:</strong> All products meet industry standards and specifications as agreed upon order.</p>
                            <p><strong>6.2 Limited Warranty:</strong> We warrant that products will be free from defects in material and workmanship for 90 days from delivery.</p>
                            <p><strong>6.3 Warranty Claims:</strong> Claims must be made in writing within the warranty period with supporting documentation.</p>
                            <p><strong>6.4 Exclusions:</strong> Warranty does not cover damage from misuse, improper storage, or normal wear and tear.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">7. Returns and Refunds</h2>
                        <div className="text-gray-700 space-y-3">
                            <p><strong>7.1 Return Policy:</strong> Returns are accepted within 7 days of delivery for defective or incorrect products only.</p>
                            <p><strong>7.2 Return Conditions:</strong> Products must be unused, in original packaging, with all documentation.</p>
                            <p><strong>7.3 Custom Orders:</strong> Custom-cut or fabricated products are non-returnable unless defective.</p>
                            <p><strong>7.4 Refund Process:</strong> Approved refunds will be processed within 14 business days.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">8. Intellectual Property</h2>
                        <p className="text-gray-700">
                            All content on our website, including text, graphics, logos, and images, is the property of AERO ENTERPRISES and protected by copyright laws. Unauthorized use is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-700 mb-3">
                            To the maximum extent permitted by law:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Our liability is limited to the purchase price of the products</li>
                            <li>We are not liable for indirect, consequential, or incidental damages</li>
                            <li>We are not liable for delays or failures due to force majeure events</li>
                            <li>Claims must be made within 6 months of the incident</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">10. Indemnification</h2>
                        <p className="text-gray-700">
                            You agree to indemnify and hold AERO ENTERPRISES harmless from any claims, damages, or expenses arising from your use of our products or services, or violation of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">11. Governing Law</h2>
                        <p className="text-gray-700">
                            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">12. Modifications</h2>
                        <p className="text-gray-700">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use constitutes acceptance of modified Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-black mb-4">13. Contact Information</h2>
                        <div className="text-gray-700">
                            <p className="mb-2">For questions about these Terms, contact us:</p>
                            <p><strong>AERO ENTERPRISES</strong></p>
                            <p>Gala No. 1, Khan Compound, Near Gausiya Weight Kata</p>
                            <p>Dhumal Nagar, Vasai - 401208, Maharashtra, India</p>
                            <p>Email: <a href="mailto:aeroenterprises00@gmail.com" className="text-blue-600 hover:underline">aeroenterprises00@gmail.com</a></p>
                            <p>Phone: <a href="tel:+918459121717" className="text-blue-600 hover:underline">+91 8459121717</a></p>
                        </div>
                    </section>
                </div>

                {/* CTA - FIXING THE MISSING HREF PROP */}
                <CTA
                    title="Ready to Experience the AERO ENTERPRISES Difference?"
                    description="Contact us today for quotes, technical consultation, or to learn more about our products and services."
                    primaryButtonText="View Products"
                    primaryButtonLink="/products" // Added link prop
                    secondaryButtonText="Contact Us"
                    secondaryButtonLink="/contact" // Added link prop
                />
            </div>
        </div>
    );
}