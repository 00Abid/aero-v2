'use client';
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  // Filter out empty strings and split path into segments
  const pathnames = pathname.split('/').filter((x) => x);

  // TOP 0.1% SEO: Mapping technical slugs to readable, keyword-rich names
  const breadcrumbNameMap = {
    'products': 'Industrial Inventory',
    'about': 'Our Legacy',
    'testimonials': 'Client Reviews',
    'contact': 'Contact Sales',
    'hr-sheet-supplier-mumbai': 'HR Sheet Supplier',
    'cr-sheet-supplier-mumbai': 'CR Sheet Supplier',
    'gi-sheet-supplier-mumbai': 'GI Sheet Supplier',
    'ms-chequered-plate-supplier-mumbai': 'MS Chequered Plate',
    'stainless-steel-coil-supplier-mumbai': 'SS Coil Specialist'
  };

  const generateBreadcrumbSchema = () => {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aeroenterprises.shop/"
        }
      ]
    };

    pathnames.forEach((name, index) => {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": breadcrumbNameMap[name] || name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
        "item": `https://www.aeroenterprises.shop/${pathnames.slice(0, index + 1).join('/')}`
      });
    });

    return breadcrumbList;
  };

  // Don't render breadcrumbs on the home page
  if (pathnames.length === 0) return null;

  return (
    <>
      {/* 1. SCHEMA INJECTION: Tells Google the site hierarchy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />

      {/* 2. VISUAL NAVIGATION */}
      <nav className="bg-gray-50 border-b border-gray-100 py-4 px-6" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-black transition-colors flex items-center gap-1"
                aria-label="Go to homepage"
              >
                <Home className="w-3 h-3" />
                <span>Home</span>
              </Link>
            </li>

            {pathnames.map((segment, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              // Handle name display: Check map, else clean up the slug
              const displayName = breadcrumbNameMap[segment] || segment.replace(/-/g, ' ');

              return (
                <li key={segment} className="flex items-center space-x-3">
                  <ChevronRight className="w-3 h-3 text-gray-300" />
                  {isLast ? (
                    <span className="text-blue-600 font-black truncate max-w-[200px] md:max-w-none" aria-current="page">
                      {displayName}
                    </span>
                  ) : (
                    <Link
                      href={routeTo}
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;