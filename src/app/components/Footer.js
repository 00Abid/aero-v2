import React from 'react';
import { Linkedin, ShoppingBag, Mail, Phone, MapPin } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const companyLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    const productLinks = [
        { name: 'All Products', path: '/products' },
        { name: 'CRC Sheets', path: '/products#crc' },
        { name: 'HR Sheets', path: '/products#hr' },
        { name: 'GI Sheets', path: '/products#gi' },
        { name: 'SS Sheets', path: '/products#ss' },
    ];

    const industriesLinks = [
        { name: 'All Industries', path: '/industries' },
        { name: 'Automotive', path: '/industries/automotive' },
        { name: 'Construction', path: '/industries/construction' },
        { name: 'HVAC', path: '/industries/hvac' },
        { name: 'Aerospace', path: '/industries/aerospace' },
        { name: 'Medical', path: '/industries/medical' },
        { name: 'Energy', path: '/industries/energy' },
    ];

    const resourcesLinks = [
        { name: 'Blog', path: '/blog' },
        { name: 'Sitemap', path: '/sitemap' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookie-Policy' },
    ];

    // --- Component JSX ---
    const renderLinks = (links) => {
        return (
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} className="text-white text-sm hover:text-gray-200 transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <footer className="blue-metal">
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/AE-logo.webp"
                                alt="AERO ENTERPRISES Logo"
                                width={100}
                                height={100}
                                className='w-30 h-30 object-cover mb-4'
                            />
                        </Link>
                        <p className="text-white text-sm mb-4">
                            Your trusted partner for premium sheet metal supply in Vasai, Maharashtra.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/company/aero-enterprisess/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                                <button className="dark-metal-card px-3 py-3 hover:scale-110 transition-transform">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                            </a>
                            {/* ACCESSIBILITY/ROUTING NOTE: Fix placeholder href if possible */}
                            <a href="/products" aria-label="Shop">
                                <button className="dark-metal-card px-3 py-3 hover:scale-110 transition-transform">
                                    <ShoppingBag className="w-5 h-5" />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Company Links (Refactored to use renderLinks function) */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        {renderLinks(companyLinks)}
                    </div>

                    {/* Products Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
                        {renderLinks(productLinks)}
                    </div>

                    {/* Industries Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Industries</h3>
                        {renderLinks(industriesLinks)}
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                        {renderLinks(resourcesLinks)}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='w-[75vw] mx-auto border-t border-white/20 pt-4'>
                    <p className='text-xs text-white text-center md:text-left'>
                        © {new Date().getFullYear()} AERO ENTERPRISES.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;