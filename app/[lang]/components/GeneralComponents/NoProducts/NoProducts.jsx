import React from "react";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import styles from "./NoProducts.module.scss";

const NoProducts = ({ children, position = "", showButton = true }) => {
    const lang = useLang();
    const dictionary = useDictionary(lang);

    return (
        <>
            <p className={`${styles.text} ${position}`}>{children}</p>
            {showButton ? (
                <Link
                    href={`/${lang}/catalog`}
                    className={styles.button__wrapper}
                >
                    <button className="button">
                        {dictionary?.buttons.goToCatalog}
                    </button>
                </Link>
            ) : (
                ""
            )}
        </>
    );
};

export default NoProducts;
