// src/app/privacy/page.js

import React from 'react';
import Link from 'next/link'; // Corrected import
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import CTA from '../components/CTA'; // Assuming CTA is a Client or Server Component

// 1. --- Next.js SEO Metadata Export (SSR) ---
export const metadata = {
    title: "Privacy Policy | AERO ENTERPRISES Data Protection",
    description: "Read AERO ENTERPRISES' Privacy Policy regarding the collection, use, and protection of your personal information. Last updated January 4, 2025.",
    keywords: ["privacy policy", "data protection", "AERO ENTERPRISES privacy"],
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/privacy',
    },
};


// --- Data remains unchanged, but placed here for clarity ---
const sections = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Information We Collect",
        content: "We collect information you provide directly, including name, email, phone number, and company details when you request quotes or contact us. We also collect usage data through cookies and analytics to improve our services."
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "How We Use Your Information",
        content: "Your information is used to process inquiries, provide quotes, improve our services, and communicate updates. We never sell your personal data to third parties."
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Data Security",
        content: "We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. Your information is stored securely and accessed only by authorized personnel."
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Your Rights",
        content: "You have the right to access, correct, or delete your personal data. You can opt-out of marketing communications at any time. Contact us to exercise your rights."
    }
];


// 2. --- Main Privacy Page Server Component ---
export default function PrivacyPage() {
    return (
        <>
            <div className="bg-white">
                {/* Title Section */}
                <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                    <div className='ml-4'>
                        <h1 className="text-4xl text-white pb-4">
                            Privacy Policy
                        </h1>
                        <p className=' text-white text-lg'>
                            Your privacy is important to us. Protecting your data is our priority.
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
                            AERO ENTERPRISES ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </div>

                    {/* Key Sections */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                                data-aos="fade-up"
                            >
                                <div className="text-[#36566d] mb-4">{section.icon}</div>
                                <h3 className="text-lg font-semibold text-black mb-2">
                                    {section.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Sections */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">1. Information Collection</h2>
                            <div className="text-gray-700 space-y-3">
                                <p><strong>Personal Information:</strong> Name, email address, phone number, company name, and address when you contact us or request quotes.</p>
                                <p><strong>Technical Information:</strong> IP address, browser type, device information, and pages visited through cookies and analytics tools.</p>
                                <p><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or WhatsApp.</p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">2. Use of Information</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Process and respond to your inquiries and quote requests</li>
                                <li>Provide customer support and technical assistance</li>
                                <li>Send product updates and promotional materials (with consent)</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                                <li>Prevent fraud and enhance security</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">3. Information Sharing</h2>
                            <p className="text-gray-700 mb-3">
                                We do not sell, trade, or rent your personal information. We may share information with:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist in operations (e.g., email services, analytics)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">4. Cookies and Tracking</h2>
                            <p className="text-gray-700 mb-3">
                                We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more details, see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">5. Data Security</h2>
                            <p className="text-gray-700">
                                We implement appropriate technical and organizational measures to protect your data, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">6. Your Rights</h2>
                            <p className="text-gray-700 mb-3">You have the right to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing</li>
                                <li>Withdraw consent</li>
                                <li>Data portability</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                To exercise these rights, contact us at <a href="mailto:aeroenterprises00@gmail.com" className="text-blue-600 hover:underline">aeroenterprises00@gmail.com</a>
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">7. Data Retention</h2>
                            <p className="text-gray-700">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-700">
                                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">9. Changes to This Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-black mb-4">10. Contact Us</h2>
                            <div className="text-gray-700">
                                <p className="mb-2">If you have questions about this Privacy Policy, contact us:</p>
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
                        primaryButtonLink="/products" // Added missing link prop
                        secondaryButtonText="Contact Us"
                        secondaryButtonLink="/contact" // Added missing link prop
                    />
                </div>
            </div>
        </>
    );
}