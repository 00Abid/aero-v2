import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    default: "AERO ENTERPRISES | Sheet Metal & Industrial Suppliers in Mumbai, Vasai",
    template: "%s | AERO ENTERPRISES",
  },
  description: "Leading sheet metal suppliers and industrial fabricators based in Vasai, Maharashtra, serving the Mumbai, Thane, and Palghar regions. Get quotes on CRC, HR, GI, and SS sheets.",

  metadataBase: new URL('https://www.aeroenterprises.shop'),

  keywords: ["AERO ENTERPRISES", "sheet metal supplier Mumbai", "CRC sheet Vasai", "industrial fabrication Maharashtra", "GI sheets supplier"],

  openGraph: {
    title: "AERO ENTERPRISES | Precision Sheet Metal & Industrial Solutions",
    description: "Leading sheet metal suppliers serving the Mumbai region.",
    url: 'https://www.aeroenterprises.shop',
    siteName: 'AERO ENTERPRISES',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'AERO ENTERPRISES Industrial Sheet Metal Stock',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AERO ENTERPRISES | Industrial Sheet Metal Experts',
    description: 'Leading sheet metal suppliers serving the Mumbai region.',
    creator: '@YourCompanyName',
    images: ['/og-image.webp'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">

        <Navbar />

        <main id="content">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}