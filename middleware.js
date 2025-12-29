import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // 1. SKIP STATIC FILES: Don't run this on images, fonts, or internal Next.js files
    if (
        pathname.includes('.') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api')
    ) {
        return NextResponse.next();
    }

    // 2. FORCE LOWERCASE: Prevents "Products/HR-Sheet" from becoming a 404
    if (pathname !== pathname.toLowerCase()) {
        url.pathname = pathname.toLowerCase();
        return NextResponse.redirect(url, 301); // Permanent Redirect
    }

    // 3. REMOVE TRAILING SLASH: Prevents "/hr-sheet/" from being a duplicate of "/hr-sheet"
    if (pathname !== '/' && pathname.endsWith('/')) {
        url.pathname = pathname.slice(0, -1);
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// MATCH ALL PATHS: Tells Next.js to run this on every single page request
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};