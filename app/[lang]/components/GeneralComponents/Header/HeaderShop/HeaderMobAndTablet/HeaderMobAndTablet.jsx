"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Roboto_Condensed } from "next/font/google";
import LogoIcon from "../../../Icons/LogoIcon";
import MobileMenu from "../MobileMenu/MobileMenu";
import FormCallBack from "../FormCallBack/FormCallBack";
import BurgerMenuIcon from "../../../Icons/BurgerMenuIcon/BurgerMenuIcon";
import SearchIcon from "../../../Icons/SearchIcon";
import ProductSearch from "../ProductSearch/ProductSearch";
import Cart from "../ProductsCart/Cart";
import { useLang } from "../../../../../../../hooks/useLang";

import styles from "./HeaderMobAndTablet.module.scss";

const roboto = Roboto_Condensed({
    weight: ["400"],
    subsets: ["latin", "cyrillic"],
});

const HeaderMobileAndTablet = ({ dictionary }) => {
    const lang = useLang();
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showFormCallBack, setShowFormCallBack] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header__container}>
                        <MobileMenu
                            id="mobileMenu"
                            showMenu={showMobileMenu}
                            dictionary={dictionary}
                            setShowMobileMenu={setShowMobileMenu}
                            setShowFormCallBack={setShowFormCallBack}
                        />
                        <FormCallBack
                            showForm={showFormCallBack}
                            dictionary={dictionary}
                            setShowFormCallBack={setShowFormCallBack}
                            setIsNotificationShown={setIsNotificationShown}
                            isNotificationShown={isNotificationShown}
                        />
                        {isNotificationShown && (
                            <div className="notification">
                                {dictionary?.notifications.requestSent}
                            </div>
                        )}
                        <button
                            type="button"
                            className={styles.header__menu}
                            onClick={() => setShowMobileMenu(true)}
                        >
                            <BurgerMenuIcon />
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowSearch(true)}
                            className={`${styles.header__menu} ${styles.header__search}`}
                        >
                            <SearchIcon
                                iconStyles={styles.header__searchIcon}
                            />
                        </button>

                        <ProductSearch
                            isShow={showSearch}
                            dictionary={dictionary}
                            setShowSearch={setShowSearch}
                            isOnEscClick
                        />

                        <Link href={`/${lang}/`} className={styles.logo}>
                            <div className={styles.logo__icon}>
                                <LogoIcon />
                            </div>
                            <p
                                className={`${roboto.className} ${styles.logo__text}`}
                            >
                                {dictionary.header.name}
                            </p>
                        </Link>
                    </div>
                    <Cart />
                </div>
            </div>
        </header>
    );
};

export default HeaderMobileAndTablet;
