"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDictionary } from "../../../../hooks/useDictionary";
import AuthForm from "../../dashboardComponents/Login/AuthForm/AuthForm";
import AuthFailedModal from "../../dashboardComponents/Login/AuthFailedModal/AuthFailedModal";
import Loader from "../../components/GeneralComponents/Loader/Loader";

const LoginPage = ({ params: { lang } }) => {
    const dictionary = useDictionary(lang);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={`container section`}>
            {!dictionary ? (
                <Loader />
            ) : (
                <>
                    <h2 className={`title--secondary`}>
                        {dictionary?.authorization.title}
                    </h2>
                    <div className="authForm__wrapper">
                        <AuthForm
                            dictionary={dictionary}
                            setShowModal={setShowModal}
                        />
                        <button type="button" className="button__text">
                            <Link href={`/${lang}/auth/forgotpassword`}>
                                {dictionary?.authorization.forgotPassword}
                            </Link>
                        </button>
                    </div>
                    <AuthFailedModal
                        dictionary={dictionary}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </>
            )}
        </section>
    );
};

export default LoginPage;
