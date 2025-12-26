import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import WhatsappButton from '../components/WhatsappButton';
import { FileText } from 'lucide-react';

const productsData = [
    // --- INDUSTRIAL COILS ---
    {
        slug: "hr-coil",
        category: "Industrial Coil",
        type: "HOT ROLLED (HR) COIL",
        description: "High-volume HR Coils offering excellent strength and durability for large-scale structural uses and heavy machinery fabrication.",
        img: "/hr-coil.webp"
    },
    {
        slug: "cr-coil",
        category: "Industrial Coil",
        type: "COLD ROLLED (CR) COIL",
        description: "CR Coils with superior surface finish and tight dimensional control, ideal for precision parts and automotive manufacturing.",
        img: "/cr-coil.webp"
    },
    {
        slug: "gi-coil",
        category: "Industrial Coil",
        type: "GALVANIZED IRON (GI) COIL",
        description: "Zinc-coated GI Coils providing unmatched corrosion resistance, essential for HVAC ducting and roofing.",
        img: "/gi-coil.webp"
    },

    // --- PRIMARY SHEETS (Premium 8x4 FT) ---
    {
        slug: "crc-sheet-8x4",
        category: "Primary Sheet",
        type: "COLD ROLLED (CR) SHEET (8x4 FT)",
        description: "Premium 8x4 ft CRC sheets known for their smooth surface, primarily used in appliance bodies and precision engineering.",
        img: "/crc-sheet.webp"
    },
    {
        slug: "hr-sheet-8x4",
        category: "Primary Sheet",
        type: "HOT ROLLED (HR) SHEET (8x4 FT)",
        description: "Primary 8x4 ft HR sheets delivering robust strength for structural base plates and custom heavy-duty fabrication.",
        img: "/hr-sheet.webp"
    },
    {
        slug: "gi-sheet-8x4",
        category: "Primary Sheet",
        type: "GALVANIZED IRON (GI) SHEET (8x4 FT)",
        description: "Primary 8x4 ft GI sheets providing excellent rust protection for roofing, cladding, and general outdoor construction.",
        img: "/gi-sheet.webp"
    },
    {
        slug: "po-sheet-8x4",
        category: "Primary Sheet",
        type: "PICKLED & OILED (P&O) SHEET (8x4 FT)",
        description: "Scale-free P&O sheets with enhanced workability, perfect for automotive components and high-quality fabrications.",
        img: "/pickle-sheet.webp"
    },
    {
        slug: "ss-sheet-8x4",
        category: "Primary Sheet",
        type: "STAINLESS STEEL (SS) SHEET (8x4 FT)",
        description: "High-grade Stainless Steel sheets for specialized, corrosion-resistant applications in medical and architectural projects.",
        img: "/ss-sheet.webp"
    },

    // --- SECONDARY SHEETS (Cost-Effective / New Updates) ---
    {
        slug: "secondary-cr-sheet",
        category: "Secondary Sheet",
        type: "SECONDARY COLD ROLLED (CR) SHEET",
        description: "Cost-effective CR sheets suitable for general fabrication and non-critical uses where budget is the priority.",
        img: "/cr.webp"
    },
    {
        slug: "secondary-hr-sheet",
        category: "Secondary Sheet",
        type: "SECONDARY HOT ROLLED (HR) SHEET",
        description: "Affordable HR sheets for structural backing and shoring. Excellent tensile strength for structural support.",
        img: "/hr.webp"
    },
    {
        slug: "secondary-gi-sheet",
        category: "Secondary Sheet",
        type: "SECONDARY GALVANIZED IRON (GI) SHEET",
        description: "Weather-resistant GI sheets at a secondary price point. Best for temporary roofing and basic corrosion protection.",
        img: "/gi.webp"
    },
    {
        slug: "secondary-po-sheet",
        category: "Secondary Sheet",
        type: "SECONDARY PICKLE & OILED (P&O) SHEET",
        description: "Budget-friendly P&O sheets where a scale-free surface is needed without prime material costs.",
        img: "/pickle.webp"
    },
    {
        slug: "secondary-ss-sheet",
        category: "Secondary Sheet",
        type: "SECONDARY STAINLESS STEEL (SS) SHEET",
        description: "Cost-effective SS sheets for basic corrosion resistance in non-cosmetic structural frameworks.",
        img: "/ss.webp"
    }
];

export const metadata = {
    title: 'AERO ENTERPRISES | Industrial Steel Products - Coils & Sheets',
    description: 'Explore our full range of HR, CR, GI, and SS Coils and Sheets. Premium Primary 8x4 ft sheets and cost-effective Secondary options for Maharashtra industries.',
};

export default function ProductsPage() {
    // 1. DYNAMIC SCHEMA GENERATION
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Industrial Sheet Metal Collection | Aero Enterprises",
        "description": metadata.description,
        "mainEntity": productsData.map(p => ({
            "@type": "Product",
            "name": p.type,
            "description": p.description,
            "url": `https://www.aeroenterprises.shop/products/${p.slug}`,
            "image": `https://www.aeroenterprises.shop${p.img}`
        }))
    };

    return (
        <section className='bg-white font-sans'>
            {/* SCHEMA INJECTION FOR SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Hero Header */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-4'>
                <div>
                    <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4 drop-shadow-md">
                        Our Industrial Catalog
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg'>
                        From precision Primary Sheets to cost-effective Secondary solutions, we supply the backbone of Maharashtra's manufacturing.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16 pb-20 px-6">
                {productsData.map((product, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Image Container */}
                        <div className="relative h-52 bg-gray-50 p-4">
                            <Image
                                src={product.img}
                                alt={product.type}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 3}
                                className="p-2 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col grow">
                            <span className='text-[10px] font-bold text-blue-600 mb-2 uppercase tracking-[0.2em]'>
                                {product.category}
                            </span>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">
                                {product.type}
                            </h3>
                            <p className="text-sm text-slate-600 mb-6 grow leading-relaxed">
                                {product.description}
                            </p>

                            {/* Action Buttons */}
                            <div className='flex flex-col gap-2 mt-auto pt-3 border-t border-gray-100'>
                                <Link
                                    href={`/products/${product.slug}`}
                                    className='flex-1 flex items-center justify-center dark-metal-card text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#2a4351] transition-colors'
                                >
                                    <FileText className='w-4 h-4 mr-2' />
                                    View Specs
                                </Link>

                                <WhatsappButton productType={product.type} />

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <CTA
                title="Sourcing Materials for a New Project?"
                description="Join 500+ businesses in Maharashtra who trust Aero Enterprises for quality and affordability."
                primaryButtonText="Download Full Catalogue"
                primaryButtonLink="/AERO ENTERPRISES CATALOGUE.pdf"
                isPrimaryDownload={true}
                secondaryButtonText="Get Custom Quote"
                secondaryButtonLink="/contact"
            />
        </section>
    );
}