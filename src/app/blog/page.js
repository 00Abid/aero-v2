import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight, BookOpen, GraduationCap, Microscope } from 'lucide-react';
import CTA from '../components/CTA';

const blogPosts = [
    {
        id: "precision-machining-aerospace-industry",
        title: "The Role of Precision Machining in the Aerospace Industry",
        excerpt: "Discover how tight-tolerance machining and high-grade alloys are revolutionizing aerospace manufacturing standards in 2025.",
        image: "https://picsum.photos/id/506/800/400",
        category: "Aerospace",
        date: "Jan 02, 2025",
        author: "Aero Technical Team",
        readTime: "5 min read",
    },
    {
        id: "cnc-machining-vs-traditional-methods",
        title: "CNC Machining vs Traditional Methods: 2025 Comparison",
        excerpt: "An engineering-first look at why CNC technology is essential for reducing lead times and maintaining ISO standards.",
        image: "https://picsum.photos/id/504/800/400",
        category: "Technology",
        date: "Dec 28, 2024",
        author: "S. Johnson",
        readTime: "7 min read",
    },
    {
        id: "quality-control-manufacturing",
        title: "Effective Quality Control in Sheet Metal Fabrication",
        excerpt: "Implementing Mill Test Certificate (MTC) verification and digital weighbridge accuracy in your supply chain.",
        image: "https://picsum.photos/id/506/800/400",
        category: "Quality",
        date: "Dec 20, 2024",
        author: "Michael Chen",
        readTime: "6 min read",
    }
];

export const metadata = {
    title: "Industrial Insights Blog | Technical Metal Fabrication | Aero Enterprises",
    description: "Expert analysis on precision machining, metallurgy trends, and quality control in the Indian industrial sector. Stay informed with Aero Enterprises.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/blog',
    },
};

export default function BlogPage() {
    return (
        <main className="bg-white font-sans">
            {/* 1. HERO HEADER */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6'>
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Industrial Knowledge Hub
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium'>
                        Technical insights for the next generation of Indian manufacturing.
                    </p>
                </div>
            </div>

            {/* 2. BLOG GRID */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-700 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-10 flex flex-col grow">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>

                                    <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 grow font-medium">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black border-b-2 border-black w-fit pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
                                    >
                                        Full Analysis <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL EDUCATION PROMISE */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-black">
                        Beyond Just Supply
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                        The <strong>Aero Research Desk</strong> works with material scientists and logistics experts to provide free educational resources for the Indian manufacturing community. We believe in transparency, from mill sourcing to final fabrication.
                    </p>



                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['ISO Standards', 'MTC Accuracy', 'Metallurgy', 'Slitting Tech'].map((tag, i) => (
                            <div key={i} className="p-4 dark-metal-card rounded-2xl border border-gray-100 font-black uppercase text-[10px] tracking-widest text-gray-400">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title="Smarter Sourcing Starts Here"
                description="Download our 2025 Technical Grade Guide or request a custom material consultation for your upcoming project."
                primaryButtonText="Technical Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="All Products"
                secondaryButtonLink="/products"
            />
        </main>
    );
}