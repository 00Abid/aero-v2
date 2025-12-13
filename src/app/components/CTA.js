import Link from 'next/link'
import React from 'react'

const CTA = (props) => {
    const {
        title,
        description,
        primaryButtonText,
        secondaryButtonText,
        primaryButtonLink,   // Path/URL for the primary button (now always an <a> tag)
        secondaryButtonLink, // Path/URL for the secondary button (remains a <Link>)
        isPrimaryDownload    // NEW: Boolean flag to activate download attribute
    } = props;

    // Define fixed classes
    const primaryButtonClass = "dark-metal-card px-6 py-3 rounded-lg font-semibold";
    const secondaryButtonClass = "bg-white text-[#36566d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition";

    return (
        <div className="text-center py-16 px-4">
            <div className="inline-block blue-metal-card p-8 rounded-xl" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold text-white mb-4">
                    {title}
                </h3>
                <p className="text-white mb-6 max-w-2xl">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">

                    {/* ----------------------------------------------------- */}
                    {/* 1. PRIMARY ACTION: ALWAYS A SIMPLE <a> TAG */}
                    {/* ----------------------------------------------------- */}
                    <a
                        href={primaryButtonLink}
                        {...(isPrimaryDownload ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                        <button className={primaryButtonClass}>
                            {primaryButtonText}
                        </button>
                    </a>

                    {/* ----------------------------------------------------- */}
                    {/* 2. SECONDARY ACTION: Standard Next.js Link */}
                    {/* ----------------------------------------------------- */}
                    <Link href={secondaryButtonLink} passHref>
                        <button className={secondaryButtonClass}>
                            {secondaryButtonText}
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CTA