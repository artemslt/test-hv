"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";
import EmailSentIcon from "../../components/GeneralComponents/Icons/EmailSentIcon";
import Loader from "../../components/GeneralComponents/Loader/Loader";
import styles from "./sentemail.module.scss";

const SentEmailPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const params = useSearchParams();
    const email = params.get("email");
    const hiddenEmail = email?.replace(/(\w{2})[\w.-]+@([\w.]+\w)/, "$1***@$2");

    return (
        <section className={`container section`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <h2 className={`title--secondary`}>
                        {dictionary?.sentEmail.title}
                    </h2>
                    <p className={styles.text}>
                        {dictionary?.sentEmail.textFirst}
                        {hiddenEmail}
                        {dictionary?.sentEmail.textSecond}
                    </p>
                    <div className={styles.image}>
                        <EmailSentIcon />
                    </div>
                    <p className={styles.noEmail}>
                        {dictionary?.sentEmail.noEmail}
                    </p>
                    <button className={`button__text`}>
                        <Link href={`/${lang}/auth/forgotpassword`}>
                            {dictionary?.sentEmail.repeat}
                        </Link>
                    </button>
                </>
            )}
        </section>
    );
};

export default SentEmailPage;
