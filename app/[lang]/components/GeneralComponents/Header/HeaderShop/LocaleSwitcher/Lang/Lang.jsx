import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../../../../../../../../hooks/useLang";
import styles from "../Lang/Lang.module.scss";

const Lang = ({ switchLanguage }) => {
    const activeLocale = useLang();
    const pathName = usePathname();
    const isActive = activeLocale === switchLanguage.locale;
    const redirectedPathName = locale => {
        if (!pathName) return "/";
        const segments = pathName.split("/");

        segments[1] = locale;
        return segments.join("/");
    };

    const isAuthPage = pathName.startsWith("/auth", 3);
    return (
        <li>
            <Link
                href={redirectedPathName(switchLanguage.locale)}
                replace
                className={`${styles.item__lang}
                                    ${
                                        isActive
                                            ? isAuthPage
                                                ? styles.whiteActiveLang
                                                : styles.activeLang
                                            : styles.inactiveLang
                                    }
                                   
                                `}
            >
                {switchLanguage.name}
            </Link>
        </li>
    );
};

export default Lang;
