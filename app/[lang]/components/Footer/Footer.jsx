"use client";
import Link from "next/link";
import SocialMedia from "../GeneralComponents/SocialMediaLinks/SocialMediaLinks";
import FooterContacts from "./FooterContacts/FooterContactsList";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNavMenu from "../Footer/FooterNavMenu/FooterNavMenu";
import styles from "./Footer.module.scss";
import { useLang } from "@/hooks/useLang";

const Footer = ({ dictionary: { footer } }) => {
    const currentYear = new Date().getFullYear();
    const lang = useLang();

    return (
        <footer className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.sections__wrapper}>
                        <div className={styles.logo}>
                            <FooterLogo />
                        </div>
                        <FooterNavMenu />
                        <FooterContacts />
                        <div>
                            <p className={styles.title}>{footer.followUs}</p>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <div className={styles.copyright__text}>
                            <div className={styles.team__text}>
                                <p>
                                    {footer.team}
                                    <span className={styles.space}>&nbsp;</span>
                                </p>
                                <Link href={`/${lang}/dreamteam`}>
                                    {footer.teamLink}
                                    <span className={styles.space}>&nbsp;</span>
                                </Link>
                            </div>
                            <p className={styles.copyright__links}>
                                <a
                                    className={styles.copyright__link}
                                    href={footer.junfolioLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {footer.junfolioName}
                                </a>
                                <span>{footer.and}</span>
                                <a
                                    className={styles.copyright__link}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {footer.webjungleName}
                                </a>
                            </p>
                        </div>
                        <div>&copy; {currentYear}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
