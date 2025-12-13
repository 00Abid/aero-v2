'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // 🛑 FIX 1: Use lowercase paths in the array. This is the path the router expects.
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" }, // Fixed to lowercase
        { path: "/about", label: "About" },       // Fixed to lowercase
        { path: "/why", label: "Why Choose Us" },       // Fixed to lowercase
        { path: "/contact", label: "Contact" },   // Fixed to lowercase
    ];

    const activeLinkClass = "text-[#36566d] font-semibold";
    const inactiveLinkClass = "text-gray-700 hover:text-[#36566d]";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 scroll-smooth">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/AE-logo.webp"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item, i) => {
                            // 🛑 FIX 2: Only check the current pathname against the item path.
                            // The pathnames should now match case-sensitively if the file structure is correct.
                            // Use pathname.includes() for dynamic routes (e.g., /products/sheet-metal)
                            const isActive = pathname === item.path || pathname.includes(item.path + '/');
                            const linkClassName = isActive ? `${activeLinkClass} relative pb-1` : `${inactiveLinkClass} relative pb-1`;

                            return (
                                // 🛑 FIX 3: Ensure your app folder structure uses lowercase names (e.g., app/products/page.js)
                                <Link key={i} href={item.path} className={linkClassName}>
                                    <span className="block">
                                        {item.label}
                                    </span>
                                    <span
                                        aria-hidden
                                        className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#36566d] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"}`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none text-2xl transition-transform duration-300"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                style={{ transformOrigin: "top" }}
            >
                <div className="px-4 pb-3 space-y-2">
                    {navItems.map((item, i) => {
                        const isActive = pathname === item.path || pathname.includes(item.path + '/');

                        return (
                            <Link
                                key={i}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 rounded-md transform transition-all duration-300 ease-in-out ${isActive
                                    ? "bg-gray-100 text-[#36566d] font-semibold"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#36566d]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}