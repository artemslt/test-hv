import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import styles from "./ErrorPage.module.scss";

const ErrorPage = ({ dictionary, buttonName, errorMessage, link }) => {
    const lang = useLang();

    return (
        <div className="container section">
            <h2 className="title--secondary">
                {dictionary?.ProductPage.error}
            </h2>
            <p className={styles.text}>{errorMessage}</p>
            <div className={styles.wrapper}>
                <Link href={`/${lang}/${link}`}>
                    <button className="button">{buttonName}</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
