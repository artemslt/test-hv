import { i18n } from "../../i18n-config";
import { Inter } from "next/font/google";
import { getDictionary } from "../../get-dictionary";
import Header from "./components/GeneralComponents/Header/Header";
import Footer from "./components/Footer/Footer";
import ReduxProvider from "../../redux/provider";
import AuthProvider from "./dashboardComponents/AuthProvider/AuthProvider";
import "../globals.scss";
import CookiesBanner from "./components/Cookies/Cookies";

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin", "cyrillic"],
});

export const metadata = {
    title: "Kitchen Hive",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: 0,
    },
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => {
        const lang = locale;
        return lang;
    });
}
export default async function RootLayout({ children, params }) {
    const dictionary = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <AuthProvider>
                    <ReduxProvider>
                        <Header dictionary={dictionary} />
                        <main style={{ flex: 1 }}>{children}</main>
                        <Footer dictionary={dictionary} />
                        <CookiesBanner />
                    </ReduxProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
