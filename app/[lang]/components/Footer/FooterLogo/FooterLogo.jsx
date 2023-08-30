import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import LogoIcon from "../../GeneralComponents/Icons/LogoIcon.jsx";
import styles from "./FooterLogo.module.scss";

const FooterLogo = () => {
    const lang = useLang();

    return (
        <Link href={`/${lang}`} className={styles.logo}>
            <LogoIcon />
        </Link>
    );
};

export default FooterLogo;
