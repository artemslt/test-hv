"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/hooks/useLang";
import { useDictionary } from "@/hooks/useDictionary";
import styles from "./Cookies.module.scss";
import "../../../globals.scss";

const CookiesBanner = () => {
    const lang = useLang();
    const dictionary = useDictionary(lang);
    const [accepted, setAccepted] = useState(false);

    const cookieValue = document.cookie
        .split("; ")
        .find(row => row.startsWith("accept="))
        ?.split("=")[1];

    useEffect(() => {
        if (cookieValue) {
            setAccepted(true);
            return;
        }
        setAccepted(false);
    }, [cookieValue]);

    const submit = () => {
        document.cookie = "accept=true; SameSite=None; Secure";
        setAccepted(true);
    };

    return (
        <>
            {!accepted && (
                <div className={styles.banner}>
                    <div className={`container ${styles.wrapper}`}>
                        <p className={styles.text}>
                            {dictionary?.Cookies.text_first_part}{" "}
                            <a
                                href="https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BA%D0%B8."
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.text__accent}
                            >
                                cookie
                            </a>
                            {". "}
                            {dictionary?.Cookies.text_second_part}{" "}
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.text__accent}
                            >
                                {dictionary?.Cookies.text_accent}
                            </a>
                            .
                        </p>
                        <button
                            type="button"
                            onClick={submit}
                            className={styles.button}
                        >
                            {dictionary?.Cookies.button}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export default CookiesBanner;
