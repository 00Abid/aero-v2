// src/data/locations.js

export const LOCATIONS = [
    {
        city: "Vasai",
        slug: "vasai",
        region: "Palghar",
        description: "A major industrial hub in the Palghar district, home to numerous manufacturing and fabrication units.",
        usp: "Fast local delivery to Vasai-Virar industrial belts."
    },
    {
        city: "Thane",
        slug: "thane",
        region: "Thane District",
        description: "One of the most industrially developed districts in Maharashtra with a high demand for structural steel.",
        usp: "Centralized distribution for Thane and Bhiwandi regions."
    },
    {
        city: "Bhiwandi",
        slug: "bhiwandi",
        region: "Thane District",
        description: "The logistics capital of India, requiring heavy-duty steel for warehouse construction and transport machinery.",
        usp: "Specialized supply for logistics and warehousing infrastructure."
    },
    {
        city: "Navi Mumbai",
        slug: "navi-mumbai",
        region: "Konkan Division",
        description: "A planned business and industrial city with massive infrastructure projects and chemical processing plants.",
        usp: "Strategic supply chain access to JNPT and Taloja MIDC."
    },
    {
        city: "Pune",
        slug: "pune",
        region: "Western Maharashtra",
        description: "The automobile and engineering heart of India, requiring high-precision CR and HR coils.",
        usp: "Automotive-grade material supply for Chakan and Pimpri-Chinchwad belts."
    }
];

// Helper function to get a single location by slug
export const getLocationBySlug = (slug) => {
    return LOCATIONS.find((loc) => loc.slug === slug);
};