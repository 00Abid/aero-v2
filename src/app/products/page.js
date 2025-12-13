// src/app/products/page.js

// 1. Next.js Imports: No need for 'react-router-dom', 'useEffect', or 'useState'
import Link from 'next/link';
import Image from 'next/image'; // Import native Image component
import CTA from '../components/CTA'; // Assuming CTA is fixed
import WhatsappButton from '../components/WhatsappButton'; // Import the client component

// 2. Define Product Data (Can be Server-Side Data Fetching in a real scenario)
const productsData = [
    {
        category: "Industrial Coil",
        type: "HOT ROLLED (HR) COIL",
        description: "High-volume HR Coils offering excellent strength and durability for large-scale structural uses, pipelines, and heavy machinery fabrication throughout the Indian market.",
        img: "/hr-coil.webp"
    },
    {
        category: "Industrial Coil",
        type: "COLD ROLLED (CR) COIL",
        description: "CR Coils with superior surface finish and tight dimensional control, ideal for continuous production lines, precision parts, and automotive component manufacturing.",
        img: "/cr-coil.webp"
    },
    {
        category: "Industrial Coil",
        type: "GALVANIZED IRON (GI) COIL",
        description: "Zinc-coated GI Coils providing unmatched corrosion resistance, essential for HVAC ducting, roofing, and environments where long-term weather durability is critical.",
        img: "/gi-coil.webp"
    },

    // --- PRIMARY SHEETS (Premium 8x4 FT Sheets) ---
    {
        category: "Primary Sheet",
        type: "COLD ROLLED (CR) SHEET (8x4 FT)",
        description: "Premium 8x4 ft CRC sheets known for their smooth surface and superior formability, primarily used in appliance bodies, precision engineering, and panel manufacturing.",
        img: "/crc-sheet.webp"
    },
    {
        category: "Primary Sheet",
        type: "HOT ROLLED (HR) SHEET (8x4 FT)",
        description: "Primary 8x4 ft HR sheets delivering robust strength for structural base plates, frames, and custom heavy-duty fabrication in the Vasai industrial zone.",
        img: "/hr-sheet.webp"
    },
    {
        category: "Primary Sheet",
        type: "GALVANIZED IRON (GI) SHEET (8x4 FT)",
        description: "Primary 8x4 ft GI sheets providing excellent rust protection for roofing, cladding, and general outdoor construction applications.",
        img: "/gi-sheet.webp"
    },
    {
        category: "Primary Sheet",
        type: "PICKLED & OILED (P&O) SHEET (8x4 FT)",
        description: "Scale-free P&O sheets with enhanced workability, perfect for automotive components, tubing, and high-quality structural fabrications requiring clean surfaces.",
        img: "/pickle-sheet.webp"
    },
    {
        category: "Primary Sheet",
        type: "STAINLESS STEEL (SS) SHEET (8x4 FT)",
        description: "High-grade 8x4 ft Stainless Steel sheets (SS) for specialized, corrosion-resistant applications in medical, chemical, and architectural projects.",
        img: "/ss-sheet.webp"
    },

    // --- SECONDARY SHEETS (Cost-Effective Material - NEW BREAKDOWN) ---
    {
        category: "Secondary Sheet",
        type: "SECONDARY COLD ROLLED (CR) SHEET",
        description: "Cost-effective CR sheets suitable for general fabrication and non-critical uses where surface finish is secondary to budget. Ideal for the wider Mumbai region.",
        img: "/cr.webp" // New placeholder image needed
    },
    {
        category: "Secondary Sheet",
        type: "SECONDARY HOT ROLLED (HR) SHEET",
        description: "Affordable HR sheets/plates for structural backing, shoring, and heavy-duty, budget-conscious fabrication. Excellent tensile strength for structural support.",
        img: "/hr.webp" // New placeholder image needed
    },
    {
        category: "Secondary Sheet",
        type: "SECONDARY GALVANIZED IRON (GI) SHEET",
        description: "Weather-resistant GI sheets at a secondary price point. Best for temporary roofing, fencing, and light construction requiring basic corrosion protection.",
        img: "/gi.webp" // New placeholder image needed
    },
    {
        category: "Secondary Sheet",
        type: "SECONDARY PICKLE & OILED (P&O) SHEET",
        description: "Budget-friendly P&O sheets used where a scale-free surface is desired but a prime material price is not feasible. Great for light manufacturing and engineering.",
        img: "/pickle.webp" // New placeholder image needed
    },
    {
        category: "Secondary Sheet",
        type: "SECONDARY STAINLESS STEEL (SS) SHEET",
        description: "Cost-effective SS sheets for applications requiring basic corrosion and heat resistance where cosmetic quality or prime certification is not strictly necessary. Ideal for non-food-grade engineering and structural frameworks.",
        img: "/ss.webp" // New placeholder image needed
    },

];

// 3. NEXT.JS METADATA EXPORT (Replaces SEOHead)
export const metadata = {
    title: 'AERO ENTERPRISES | Sheet Metal Products - CRC, HR, GI, SS & Pickle Sheets',
    description: 'Premium sheet metal products including CRC sheets, HR sheets, GI sheets, SS sheets, and Pickle sheets. High-quality materials for automotive, construction, and industrial applications in Maharashtra.',
    // You can add canonical links in layout.js or explicitly here if needed.
};

// 4. SCHEMA MARKUP for the Product Collection (Server Component)
const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sheet Metal Products Collection",
    "description": metadata.description,
    "mainEntity": productsData.map(p => ({
        "@type": "Product",
        "name": p.type,
        "description": p.description,
        "url": "https://www.aeroenterprises.shop/products" // Link to the collection page
    }))
};


// 5. THE MAIN PAGE COMPONENT (Server Side Rendered)
export default function ProductsPage() {
    return (
        <section className='bg-white'>

            {/* SCHEMA INJECTION: Correct Server Component Method */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Title Section */}
            <div className='blue-metal w-full h-[30vh] flex justify-center items-center'>
                <div className='ml-4'>
                    <h1 className="text-3xl text-white pb-4">
                        Our Products
                    </h1>
                    <p className=' text-white'>
                        Premium sheet metal products for various industrial applications.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-20">
                {productsData.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col mx-4 md:mx-10"
                        data-aos="zoom-in-up"
                    >
                        {/* Image: FIX for CWV using Next.js Image component */}
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={product.img}
                                alt={`${product.type} - High-quality sheet metal products by AERO ENTERPRISES for industrial applications`}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 2}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col grow">
                            <h3 className="text-lg font-medium mb-2 text-[#36566d]">
                                {product.type}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                            <div className="mt-auto">
                                {/* Button: Uses the separate Client Component */}
                                <WhatsappButton productType={product.type} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <CTA
                title="Ready to Source Quality Sheet Metal?"
                description="Contact AERO ENTERPRISES today for premium sheet metal products and expert solutions tailored to your needs."
                primaryButtonText="Download Catalogue"
                primaryButtonLink="/AERO ENTERPRISES Catalogue.pdf"
                isPrimaryDownload={true}
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />

        </section>
    );
}