import { getProductBySlug, getAllProducts } from '../../../data/product';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import WhatsappButton from '../../components/WhatsappButton';
import CTA from '../../components/CTA';

export async function generateMetadata({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);
    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.material_name} | Best Prices in India | Aero Enterprises`,
        description: product.description,
        keywords: product.material_keywords,
    };
}

export async function generateStaticParams() {
    const products = getAllProducts();
    return products.map((product) => ({
        productSlug: product.material_slug,
    }));
}

export default async function ProductPage({ params }) {
    const { productSlug } = await params;
    const product = getProductBySlug(productSlug);

    if (!product) notFound();

    return (
        <div className="bg-white">
            {/* HERO BANNER: Matches About Page Structure */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center'>
                <div className='px-4'>
                    <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">
                        {product.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl text-white font-extrabold tracking-tight">
                        {product.material_name}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* SECTION 1: Main Product Specs */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    
                    {/* Left: Product Image */}
                    <div className="lg:sticky lg:top-28">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm transition-all hover:shadow-xl">
                            <Image
                                src={product.img}
                                alt={`${product.material_name} - Industrial Grade`}
                                className="w-full h-auto rounded-xl object-contain mx-auto"
                                width={600}
                                height={600}
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Essential Data */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Profile</h2>
                            <p className="text-gray-600 text-xl leading-relaxed italic">
                                "{product.usp_short}"
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                                <p className="text-xs text-blue-600 uppercase font-bold mb-1">Standard Grade</p>
                                <p className="font-bold text-slate-900 text-lg">{product.technical_specs.standard}</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Thickness Range</p>
                                <p className="font-bold text-slate-900 text-lg">
                                    {product.min_thickness_mm} - {product.max_thickness_mm} MM
                                </p>
                            </div>
                        </div>

                        {/* Pricing Card */}
                        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-blue-400 text-xs mb-1 uppercase tracking-widest font-bold">Estimated Market Rate</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-extrabold">
                                        ₹{product.price_avg_inr.toLocaleString('en-IN')}
                                    </span>
                                    <span className="text-slate-400 font-medium">/ Metric Ton</span>
                                </div>
                                <p className="mt-6 text-xs text-slate-500 border-t border-slate-800 pt-4 leading-relaxed">
                                    *Prices vary based on GST, logistics to your specific industrial zone, and current global steel indices.
                                </p>
                            </div>
                        </div>

                        <WhatsappButton productType={product.material_name} />
                    </div>
                </div>

                {/* SECTION 2: SEO Knowledge Hub (Applications & Why Used) */}
                <div className="grid md:grid-cols-2 gap-12 py-20 border-y border-gray-100 mb-20 bg-slate-50/50 rounded-[3rem] px-8 lg:px-16">
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                            Industrial Applications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {product.applications.map((app, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-gray-700 text-sm font-medium">
                                    {app}
                                </div>
                            ))}
                        </div>
                    </div>

                    

                    <div data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                            Critical Advantages
                        </h3>
                        <ul className="space-y-4">
                            {product.why_used.map((reason, i) => (
                                <li key={i} className="flex gap-4 items-start text-gray-700 leading-relaxed">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* SECTION 3: The Process (Deep Technical Content) */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 underline decoration-blue-600 underline-offset-8">
                        The Manufacturing Journey
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed bg-white p-10 rounded-3xl border border-gray-100 shadow-sm italic">
                        {product.manufacturing_process}
                    </p>
                </div>

                {/* SECTION 4: Final Call to Action */}
                <CTA 
                    title={`Source Certified ${product.material_name} Now`}
                    description={`We supply premium ${product.material_name} to major manufacturing hubs across India with ISO-certified testing protocols.`}
                    primaryButtonText="Get Real-Time Quote"
                    primaryButtonLink="/contact"
                    secondaryButtonText="View Other Coils"
                    secondaryButtonLink="/products"
                />
            </div>
        </div>
    );
}