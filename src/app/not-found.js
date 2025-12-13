import React from 'react';
import Link from 'next/link';
import { Home, Package, Users, Mail, ArrowLeft } from 'lucide-react';


const NotFound = () => {

const popularPages = [
    // Home: Represents the main entrance/dashboard
    { 
        name: 'Home', 
        path: '/', 
        icon: <Home className="w-5 h-5" /> 
    },
    
    // Products: Represents items, inventory, or a package of goods
    { 
        name: 'Products', 
        path: '/products', 
        icon: <Package className="w-5 h-5" /> 
    }, 
    
    // About Us: Represents people, team, or the organization
    { 
        name: 'About Us', 
        path: '/about', 
        icon: <Users className="w-5 h-5" /> // Changed from Home to Users
    }, 
    
    // Contact: Represents communication or sending mail
    { 
        name: 'Contact', 
        path: '/contact', 
        icon: <Mail className="w-5 h-5" /> // Changed from Home to Mail
    },

];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 my-5">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <div className="mb-8" data-aos="zoom-in">
                    <h1 className="text-9xl md:text-[200px] font-bold text-[#36566d] leading-none">
                        404
                    </h1>
                </div>

                {/* Message */}
                <div className="mb-8" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-700 text-lg mb-2">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <p className="text-gray-600">
                        It might have been moved or deleted, or you may have mistyped the URL.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
                    <Link href="/">
                        <button className="dark-metal-card px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                            Contact Support
                        </button>
                    </Link>
                </div>

                {/* Popular Pages */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Popular Pages
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {popularPages.map((page, index) => (
                            <Link key={index} href={page.path}>
                                <div className="border border-gray-200 rounded-lg p-4 hover:border-[#36566d] hover:shadow-md transition-all">
                                    <div className="text-[#36566d] mb-2 flex justify-center">
                                        {page.icon}
                                    </div>
                                    <p className="text-gray-700 font-medium">{page.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;