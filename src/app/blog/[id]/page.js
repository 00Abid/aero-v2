import React from 'react';

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
        content: `
      <p>Precision machining is the backbone of the aerospace industry. In a sector where a single micron can mean the difference between success and failure, the demand for exacting standards is non-negotiable.</p>
      <h3>Why Precision Matters</h3>
      <p>Aerospace components must withstand extreme conditions—high speeds, rapid temperature changes, and immense pressure. Precision machining ensures that every part, from turbine blades to landing gear components, meets these rigorous requirements.</p>
    `
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
        content: `
      <p>The manufacturing landscape has shifted dramatically with the advent of Computer Numerical Control (CNC) machining. But how does it stack up against traditional manual methods?</p>
    `
    }
];

export default function PostPage({ params }) {
    const { id } = params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return (
            <main className="max-w-3xl mx-auto py-12 px-4">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <p className="mt-4">We couldn't find the post you were looking for.</p>
            </main>
        );
    }

    return (
        <article className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-6">{post.date} · {post.readTime} · {post.author}</p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}
