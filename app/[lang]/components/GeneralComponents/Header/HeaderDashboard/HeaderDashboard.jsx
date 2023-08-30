"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { Roboto_Condensed } from "next/font/google";
import { MobileMenuAdmin } from "./MobileMenuAdmin/MobileMenuAdmin";
import LogoIcon from "../../Icons/LogoIcon";
import BurgerMenuIcon from "../../Icons/BurgerMenuIcon/BurgerMenuIcon";
import Exit from "../../../../../../public/images/header/Exit.svg";
import { useLang } from "../../../../../../hooks/useLang";
import { logout } from "../../../../../../services/api";
import { clearAuthHeader } from "../../../../../../services/api";
import styles from "./HeaderDashboard.module.scss";

const roboto = Roboto_Condensed({
    weight: ["400"],
    subsets: ["latin", "cyrillic"],
});

const HeaderDashboard = ({ dictionary }) => {
    const router = useRouter();
    const lang = useLang();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLogout = async () => {
        try {
            signOut();
            await logout();
            clearAuthHeader();
            router.push(`${lang}/auth/login`);
        } catch (error) {
            return error;
        }
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header__container}>
                        <MobileMenuAdmin
                            id="mobileMenuAdmin"
                            showMenu={showMobileMenu}
                            dictionary={dictionary}
                            setShowMobileMenu={setShowMobileMenu}
                            className={styles.modal}
                        />
                        <button
                            type="button"
                            className={styles.header__menu}
                            onClick={() => setShowMobileMenu(true)}
                        >
                            <BurgerMenuIcon />
                        </button>

                        <button
                            type="button"
                            className={styles.exit}
                            onClick={handleLogout}
                        >
                            <Image
                                src={Exit}
                                alt={dictionary.header.exit}
                                width={28}
                                height={28}
                            />
                            <p>{dictionary.header.exit}</p>
                        </button>
                    </div>
                    <Link href={`/${lang}/`} className={styles.header__logo}>
                        <LogoIcon />
                        <p
                            className={`${roboto.className} ${styles.header__text}`}
                        >
                            {dictionary.header.name}
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderDashboard;
