import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../../../../../../../hooks/useLang";
import { useScreenSize } from "@/hooks/useScreenSize";
import Constants from "../../../../../constants/index";
import styles from "./LinkPage.module.scss";

const LinkPage = ({
    page = "",
    icon,
    setShowMobileMenu = null,
    dictionary,
}) => {
    const lang = useLang();
    const currentPathname = usePathname();
    const { desktopName } = Constants.screenSizeName;
    const screenSizes = useScreenSize();

    const onLinkClick = () => {
        if (screenSizes === desktopName) {
            return;
        } else {
            setShowMobileMenu(false);
        }
    };
    return (
        <>
            {page ? (
                <Link
                    href={`/${lang}/${page}`}
                    className={` ${styles.linkPage} ${
                        currentPathname === `/${lang}/${page}`
                            ? styles.activeLink
                            : styles.inactiveLink
                    }`}
                    onClick={() => onLinkClick()}
                >
                    <div className={styles.icon}>{icon}</div>
                    <p className={styles.menu__text}>
                        {dictionary?.mobileMenu[page]}
                    </p>
                </Link>
            ) : (
                <Link
                    href={`/${lang}`}
                    className={` ${styles.linkPage} ${
                        currentPathname === `/${lang}`
                            ? styles.activeLink
                            : styles.inactiveLink
                    }`}
                    onClick={() => onLinkClick()}
                >
                    <div className={styles.icon}>{icon}</div>
                    <p className={styles.menu__text}>
                        {dictionary?.mobileMenu.home}
                    </p>
                </Link>
            )}
        </>
    );
};

export default LinkPage;
