import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { i18n } from "./i18n-config";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

//checks protected routes
async function authMiddleware(req) {
    const pathname = req.nextUrl.pathname;
    const lang = pathname.slice(1, 3);
    const protectedPaths = ["/uk/dashboard", "/en/dashboard"];
    const isPathProtected = protectedPaths?.some(path =>
        pathname.includes(path)
    );
    const res = NextResponse.next();
    if (isPathProtected) {
        const token = await getToken({ req });
        if (!token) {
            const url = new URL(`/${lang}/auth/login`, req.url);
            url.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(url);
        }
    }
    return res;
}

function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    const locales = i18n.locales;

    const defaultLocale = i18n.defaultLocale;

    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        locale =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
    // checks authentication for protected routes
    if (pathname.includes(`/dashboard`)) {
        return authMiddleware(request);
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
