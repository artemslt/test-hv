export default function robots() {
    return {
        rules: {
            userAgent: "*",
            disallow: "/dashboard/",
        },
        sitemap: "/sitemap.js",
    };
}
