import React from 'react';
import Link from 'next/link';

const blogPosts = [
    {
        id: "precision-machining-aerospace-industry",
        title: "The Role of Precision Machining in the Aerospace Industry",
        excerpt: "Discover how precision machining is revolutionizing aerospace manufacturing with tighter tolerances and advanced materials.",
        image: "/blog/aerospace-machining.jpg",
        category: "Aerospace",
        date: "January 2, 2025",
        author: "John Smith",
        readTime: "5 min read",
    },
    {
        id: "cnc-machining-vs-traditional-methods",
        title: "CNC Machining vs Traditional Methods: A Comprehensive Comparison",
        excerpt: "Learn the key differences between CNC machining and traditional manufacturing methods, and why CNC is the future.",
        image: "/blog/cnc-comparison.jpg",
        category: "Technology",
        date: "December 28, 2024",
        author: "Sarah Johnson",
        readTime: "7 min read",
    },
    {
        id: "quality-control-manufacturing",
        title: "Implementing Effective Quality Control in Manufacturing",
        excerpt: "Best practices for maintaining consistent quality standards in precision manufacturing operations.",
        image: "/blog/quality-control.jpg",
        category: "Quality",
        date: "December 20, 2024",
        author: "Michael Chen",
        readTime: "6 min read",
    }
];

export default function BlogPage() {
    return (
        <main className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="grid gap-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="p-6 border rounded-lg">
                        <h2 className="text-xl font-semibold">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">{post.date} · {post.readTime} · {post.author}</p>
                        <p className="mt-3 text-gray-800">{post.excerpt}</p>
                        <div className="mt-4">
                            <Link href={`/blog/${post.id}`} className="text-indigo-600">Read more →</Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
