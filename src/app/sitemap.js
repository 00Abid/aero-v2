import { PRODUCTS } from '../data/product';
import { servicesData } from '../data/services';

export default function sitemap() {
    const baseUrl = 'https://www.aeroenterprises.shop';

    // Use a stable date for the build (Jan 1st, 2026)
    const lastModDate = new Date('2026-01-01').toISOString();

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/products',
        '/services',
        '/contact',
        '/machinery',
        '/testimonials',
        '/privacy',
        '/terms',
        '/cookiepolicy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModDate,
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Dynamic Product Routes (Higher priority for Industrial Leads)
    const productRoutes = PRODUCTS.map((product) => ({
        url: `${baseUrl}/products/${product.material_slug}`,
        lastModified: lastModDate,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // 3. Dynamic Service Routes
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: lastModDate,
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}