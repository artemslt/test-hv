import React from "react";
import Link from "next/link";
import { useLang } from "../../../../../../../../hooks/useLang";
import styles from "./NavigationCategory.module.scss";

const NavigationCategory = ({ id, children, onClick }) => {
    const lang = useLang();
    return (
        <Link href={`/${lang}/catalog#${id}`} onClick={onClick}>
            {<p className={styles.link}>{children}</p>}
        </Link>
    );
};

export default NavigationCategory;
