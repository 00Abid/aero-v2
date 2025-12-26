import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        id: "precision-machining-aerospace-industry",
        title: "The Role of Precision Machining in the Aerospace Industry",
        excerpt: "Discover how precision machining is revolutionizing aerospace manufacturing with tighter tolerances and advanced materials.",
        image: "https://picsum.photos/id/506/800/400",
        category: "Aerospace",
        date: "January 2, 2025",
        author: "John Smith",
        readTime: "5 min read",
    },
    {
        id: "cnc-machining-vs-traditional-methods",
        title: "CNC Machining vs Traditional Methods: A Comprehensive Comparison",
        excerpt: "Learn the key differences between CNC machining and traditional manufacturing methods, and why CNC is the future.",
        image: "https://picsum.photos/id/504/800/400",
        category: "Technology",
        date: "December 28, 2024",
        author: "Sarah Johnson",
        readTime: "7 min read",
    },
    {
        id: "quality-control-manufacturing",
        title: "Implementing Effective Quality Control in Manufacturing",
        excerpt: "Best practices for maintaining consistent quality standards in precision manufacturing operations.",
        image: "https://picsum.photos/id/506/800/400",
        category: "Quality",
        date: "December 20, 2024",
        author: "Michael Chen",
        readTime: "6 min read",
    }
];

// --- 1. Next.js SEO Metadata Export (SSR) ---
export const metadata = {
    title: "Industrial Blog | Precision Manufacturing Insights | AERO ENTERPRISES",
    description: "Stay updated with the latest trends, technologies, and quality control methods in the precision machining and industrial sheet metal sectors.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/blog',
    },
};



// --- 3. Main Blog Page Server Component ---
export default function BlogPage() {
    return (
        <section className="bg-white">

            {/* Title Section (Matching AERO UI) */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h1 className="text-4xl text-white pb-4">
                        AERO ENTERPRISES Industrial Blog
                    </h1>
                    <p className=' text-white text-lg'>
                        Insights into Precision Machining, Quality Control, and Sheet Metal Trends.
                    </p>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="bg-[#F5F7FA] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 bg-gray-200">
                                    {/* For true SSR, you'd use a standard <img> tag or Next.js <Image> */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 grow flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs font-semibold text-[#36566d] uppercase tracking-wider">{post.category}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                                            <Link href={`/blog/${post.id}`} className="hover:text-[#36566d] transition-colors">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    </div>

                                    {/* Footer Meta */}
                                    <div className="border-t pt-4 text-sm text-gray-500 flex justify-between items-center">
                                        <span>{post.date} · {post.readTime}</span>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-gray-900 font-semibold hover:text-[#36566d] transition-colors"
                                        >
                                            Read article →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}