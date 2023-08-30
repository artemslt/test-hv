"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import "../../../globals.scss";
import styles from "./NotFound.module.scss";
const NotFoundComponent = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const session = useSession();

    return (
        <section>
            <div className={styles.backGroundImg}></div>
            <div className={`container ${styles.section_wrapper}`}>
                <div className={styles.error__wrapper}>
                    <h2 className={styles.error__title}>
                        {dictionary?.NotFound.error}
                    </h2>

                    <p className={styles.status}>
                        {dictionary?.NotFound.errorStatus}
                    </p>

                    <div className={styles.text__wrapper}>
                        <p className={styles.text__errorInfo}>
                            {dictionary?.NotFound.errorInfo}
                        </p>
                        <p>{dictionary?.NotFound.errorSuggestion}</p>
                    </div>
                </div>

                <div className={styles.button__wrapper}>
                    <Link
                        className={`button ${styles.button}`}
                        href={
                            session.status !== "authenticated"
                                ? `/${lang}`
                                : `/${lang}/dashboard`
                        }
                    >
                        {session.status !== "authenticated"
                            ? dictionary?.NotFound.backToMain
                            : dictionary?.NotFound.backToDashboard}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundComponent;
