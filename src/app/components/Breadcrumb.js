import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '': 'Home',
    'products': 'Products',
    'about': 'About Us',
    'why': 'Why Choose Us',
    'contact': 'Contact Us',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service'
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

    pathnames.forEach((pathname, index) => {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": breadcrumbNameMap[pathname] || pathname,
        "item": `https://www.aeroenterprises.shop/${pathnames.slice(0, index + 1).join('/')}`
      });
    });

    return breadcrumbList;
  };

  if (pathnames.length === 0) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />
      <nav className="bg-white py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-700 flex items-center"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4" />
                <span className="ml-1">Home</span>
              </Link>
            </li>
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const name = breadcrumbNameMap[pathname] || pathname;

              return (
                <li key={pathname} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {name}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {name}
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