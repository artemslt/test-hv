"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Roboto_Condensed } from "next/font/google";
import LogoIcon from "../../../Icons/LogoIcon";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import LinkPage from "../LinkPage/LinkPage";
import ProductsList from "../ProductSearch/ProductsList/ProductsList";
import HomeIcon from "../../../Icons/HomeIcon";
import CatalogIcon from "../../../Icons/CatalogIcon";
import HeartIcon from "../../../Icons/HeartIcon";
import Call from "../CallUs/Call";
import ButtoCallBack from "../ButtonCallBack/ButtonCallBack";
import Cart from "../ProductsCart/Cart";
import FormCallBack from "../FormCallBack/FormCallBack";
import Backdrop from "../../../Backdrop/Backdrop";
import InputSearch from "../ProductSearch/InputSearch/InputSearch";
import SocialMedia from "../../../SocialMediaLinks/SocialMediaLinks";
import { useLang } from "../../../../../../../hooks/useLang";

import styles from "./HeaderDesktop.module.scss";

const roboto = Roboto_Condensed({
    weight: ["400"],
    subsets: ["latin", "cyrillic"],
});

const HeaderDesktop = ({ dictionary }) => {
    const lang = useLang();
    const [isNotificationShown, setIsNotificationShown] = useState(false);
    const [showFormCallBack, setShowFormCallBack] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [filter, setFilter] = useState("");

    const clearInput = () => {
        setFilter("");
    };
    const closeModal = () => {
        setShowFormCallBack(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={`${styles.wrapper} container`}>
                    <Call />
                    <ButtoCallBack
                        dictionary={dictionary}
                        setShowFormCallBack={setShowFormCallBack}
                    />
                    <Backdrop
                        showModal={showFormCallBack}
                        closeModal={closeModal}
                        isOnEscClick
                        isBackdropClick
                    >
                        <FormCallBack
                            showForm={showFormCallBack}
                            dictionary={dictionary}
                            setIsNotificationShown={setIsNotificationShown}
                            setShowFormCallBack={() =>
                                setShowFormCallBack(false)
                            }
                        />
                        {isNotificationShown && (
                            <div className="notification">
                                {dictionary?.notifications.requestSent}
                            </div>
                        )}
                    </Backdrop>

                    <div className={styles.pageLinks}>
                        <LinkPage
                            page="catalog"
                            icon={<CatalogIcon fill="currentColor" />}
                            dictionary={dictionary}
                        />
                        <LinkPage
                            icon={<HomeIcon fill="currentColor" />}
                            dictionary={dictionary}
                        />
                        <LinkPage
                            page="charity"
                            icon={<HeartIcon fill="currentColor" />}
                            dictionary={dictionary}
                        />
                    </div>
                    <SocialMedia />
                    <LocaleSwitcher />
                </div>
            </div>
            <nav className={styles.navigation}>
                <div className={`${styles.wrapper} container`}>
                    <Link href={`/${lang}/`} className={styles.logo}>
                        <div className={styles.logo__icon}>
                            <LogoIcon />
                        </div>
                        <p className={`${roboto.className} ${styles.name}`}>
                            {dictionary?.header.name}
                        </p>
                    </Link>
                    <NavigationMenu />
                    <div className={styles.search}>
                        <InputSearch
                            dictionary={dictionary}
                            setFilter={setFilter}
                            setShowSearch={setShowSearch}
                            showSearch={showSearch}
                            filter={filter}
                            clearInput={clearInput}
                        />

                        <ProductsList
                            search={filter}
                            dictionary={dictionary}
                            lang={lang}
                            showWindowSearch={showSearch}
                            setShowSearch={setShowSearch}
                            clearInput={clearInput}
                        />
                    </div>

                    <Cart />
                </div>
            </nav>
        </header>
    );
};

export default HeaderDesktop;
