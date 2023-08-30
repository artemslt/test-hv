import Link from "next/link";
import HomeIcon from "../../GeneralComponents/Icons/HomeIcon";
import CatalogIcon from "../../GeneralComponents/Icons/CatalogIcon";
import HeartIcon from "../../GeneralComponents/Icons/HeartIcon";
import { useLang } from "../../../../../hooks/useLang";
import { useDictionary } from "../../../../../hooks/useDictionary";

import styles from "./FooterNavMenu.module.scss";

const FooterNavMenu = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);

    return (
        <ul className={styles.wrapper}>
            <li>
                <Link href={`/${lang}/catalog`} className={styles.navLink}>
                    <div className={styles.icon}>
                        <CatalogIcon fill={"currentColor"} />
                    </div>

                    <p>{dictionary?.mobileMenu.catalog}</p>
                </Link>
            </li>
            <li>
                <Link href={`/${lang}`} className={styles.navLink}>
                    <div className={styles.icon}>
                        <HomeIcon fill="currentColor" />
                    </div>
                    <p>{dictionary?.mobileMenu.home}</p>
                </Link>
            </li>
            <li>
                <Link href={`/${lang}/charity`} className={styles.navLink}>
                    <div className={styles.icon}>
                        <HeartIcon fill={"currentColor"} />
                    </div>

                    <p>{dictionary?.mobileMenu.charity}</p>
                </Link>
            </li>
        </ul>
    );
};

export default FooterNavMenu;
