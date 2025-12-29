import React from 'react';
import Link from 'next/link';
import { Home, Package, Users, Mail, ArrowLeft, Search, ShieldAlert } from 'lucide-react';

export const metadata = {
    title: "404 - Page Not Found | Aero Enterprises",
    description: "The page you are looking for does not exist. Navigate back to our industrial steel inventory or contact our Vasai sales desk for assistance.",
};

const popularPages = [
    {
        name: 'Inventory',
        path: '/products',
        icon: <Package className="w-5 h-5" />
    },
    {
        name: 'Our Legacy',
        path: '/about',
        icon: <Users className="w-5 h-5" />
    },
    {
        name: 'Reviews',
        path: '/testimonials',
        icon: <Search className="w-5 h-5" />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <Mail className="w-5 h-5" />
    },
];

export default function NotFound() {
    return (
        <main className="min-h-[80vh] bg-white flex items-center justify-center px-6 py-20 font-sans">
            <div className="max-w-4xl mx-auto text-center">

                {/* 1. VISUAL ERROR INDICATOR */}
                <div className="mb-12 relative inline-block">
                    <h1 className="dark-metal-card text-[120px] md:text-[220px] font-black text-black leading-none select-none">
                        404
                    </h1>
                </div>

                {/* 2. CORE MESSAGE */}
                <div className="mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">
                        Material Not Found
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed font-medium">
                        The specification or page you're looking for isn't here. It may have been moved to our updated inventory.
                    </p>
                </div>

                {/* 3. PRIMARY ACTIONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20" data-aos="fade-up" data-aos-delay="100">
                    <Link href="/" className="dark-metal-card px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs text-white flex items-center justify-center gap-2 hover:scale-105 transition-all">
                        <ArrowLeft size={16} /> Return to Home
                    </Link>
                    <Link href="/contact" className="bg-gray-100 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                        Contact Sales Desk
                    </Link>
                </div>

                {/* 4. TOPICAL RECOVERY LINKS */}
                <div className="pt-12 border-t border-gray-100" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">
                        Quick Navigation Hub
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {popularPages.map((page, index) => (
                            <Link key={index} href={page.path} className="group">
                                <div className="border-2 border-gray-50 rounded-2xl p-6 bg-white hover:border-black hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
                                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                        {page.icon}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black group-hover:text-blue-600">
                                        {page.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}