"use client";
import Link from "next/link";
import LocaleSwitcher from "../HeaderShop/LocaleSwitcher/LocaleSwitcher";
import LogoIcon from "../../Icons/LogoIcon";
import { useLang } from "../../../../../../hooks/useLang";
import styles from "./HeaderAuth.module.scss";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
    weight: ["400"],
    subsets: ["latin", "cyrillic"],
});

const HeaderAuth = ({ dictionary }) => {
    const lang = useLang();

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Link href={`/${lang}/`} className={styles.header__logo}>
                        <LogoIcon />
                        <p
                            className={`${roboto.className} ${styles.header__text}`}
                        >
                            {dictionary.header.name}
                        </p>
                    </Link>
                    <LocaleSwitcher />
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;
