"use client";
import { usePathname } from "next/navigation";
import { useLang } from "../../../../../hooks/useLang";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import HeaderShop from "./HeaderShop/HeaderShop";

const Header = ({ dictionary }) => {
    const lang = useLang();
    const pathName = usePathname();
    const authPath = pathName.startsWith(`/${lang}/auth`);
    const dashboardPath = pathName.startsWith(`/${lang}/dashboard`);
    return (
        <>
            {!authPath && !dashboardPath && (
                <HeaderShop dictionary={dictionary} />
            )}
            {authPath && <HeaderAuth dictionary={dictionary} />}
            {dashboardPath && <HeaderDashboard dictionary={dictionary} />}
        </>
    );
};

export default Header;
