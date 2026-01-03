# Aero Enterprises - Industrial Hub Website

> **Enterprise-Grade Next.js Application for a Steel Manufacturing & Supply Hub**

Aero Enterprises is a high-performance web application designed for a Tier-1 Steel Supplier and Fabrication partner in Mumbai. It bridges the gap between digital procurement and heavy industry, offering Mill-Direct sourcing transparency and precision fabrication services.

---

## 🚀 Key Features

### 1. **Core Architecture**
-   **Next.js 15+ App Router**: Utilizing the latest React Server Components (RSC) for lightning-fast initial page loads and superior SEO.
-   **Dual-Facility Routing**: Specialized routing logic to distinguish between **Unit I (Manufacturing)** and **Unit II (Logistics)**.
-   **Dynamic Metadata**: Smart metadata generation for thousands of potential product/grade combinations (HR/CR/GI Sheets).

### 2. **Enterprise SEO (Score: 10/10)**
-   **Dynamic Sitemap**: Automatically generates XML sitemaps for all products and services as inventory updates.
-   **JSON-LD Schema**:
    -   `Organization` & `LocalBusiness` (Dual locations)
    -   `Product` & `Offer` (With price validity)
    -   `Service` (Fabrication capabilities)
    -   `FAQPage` & `BreadcrumbList`
-   **Canonical Strategy**: Strict canonical tag implementation to prevent duplicate content issues across material grades.

### 3. **Industrial UX/UI**
-   **"Iron & Oil" Design System**: A custom Tailwind CSS theme focusing on industrial aesthetics (Slate-900, Steel-Blue-600, Matte White).
-   **Micro-Interactions**: Subtle hover effects and framer-motion animations that feel mechanical and precise.
-   **Mill-Direct Transparency**: "Digital Weighbridge" integration mockup and Mill Test Certificate (MTC) verification badges.

### 4. **Performance**
-   **Image Optimization**: Next/Image with WebP conversion for heavy industrial assets.
-   **Zero-Layout Shift**: Strict aspect ratio enforcement on all hero videos and machinery imagery.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Language** | Modern JavaScript (ES6+) |
| **Styling** | Tailwind CSS v4 + Lucide React Icons |
| **SEO** | Next SEO + Custom JSON-LD Generators |
| **Data** | Static Data Services (`src/data/*.js`) |

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── layout.js         # Root layout with Organization Schema
│   ├── page.js           # Home Page (The "Industrial Index")
│   ├── products/         # Dynamic [slug] Product Pages
│   ├── services/         # Dynamic [slug] Service Pages
│   └── site-index/       # Visual Sitemap Page
│   └── sitemap.js        # Dynamic XML Sitemap Generator
│   └── robots.js         # Crawler Directives
├── components/           # Reusable UI Blocks
│   ├── schema/           # Modular JSON-LD Components
│   └── CTA.js, Footer.js # Core Structural Elements
├── data/                 # The "Database"
│   ├── product.js        # Inventory matrix (HR, CR, GI, SS)
│   ├── services.js       # Capability matrix (Bending, Laser, etc.)
│   └── schemaData.js     # Central SEO configuration
└── utils/                # Helper Functions
    └── schemaGenerator.js # The SEO Engine
```

---

## 🔮 Future Enhancements (Roadmap)

### 1. **Data Visualization**
-   **Interactive Gauge Charts**: Implement `recharts` or `d3.js` to visualize material thickness tolerance and standard deviations interactively on product pages.
-   **Price Trend Graph**: A historical price chart for HR/CR coils to help buyers time their procurement.

### 2. **Content Expansion**
-   **"Steel Knowledge Hub" (Blog)**: Expand the `/blog` section with technical articles on:
    -   *Difference between IS 2062 E250 vs E350*
    -   *Understanding Coating Thickness (GSM) in GI Sheets*
    -   *The Science of Pickling & Oiling*
-   **Case Studies**: A dedicated section showcasing completed projects (e.g., "Solar Plant Mounting Structures", "Automotive Chassis Proto").

### 3. **Functional Upgrades**
-   **Live Inventory Status**: Connect to a headless CMS (Sanity/Strapi) to show real-time stock availability (e.g., "In Stock: 45MT").
-   **RFQ Calculator**: A client-side weight calculator (Length x Width x Density) to help users estimate tonnage before quoting.

### 4. **Localization**
-   **Vernacular Support**: Add Hindi and Marathi translations for local industrial clients in the Vasai-Virar belt.

---


> **© 2026 Aero Enterprises**. Integrated Steel Processing Hub.
